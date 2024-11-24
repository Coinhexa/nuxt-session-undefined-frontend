# Working CSRF tokens frontend

## Notes

- I have managed to make this frontend work with CSRF tokens on all 3 browsers (Chrome, Firefox, Safari on Apple Silicon based Mac Mini M1 running 15.1.1 (24B91))
- Chrome: Version 131.0.6778.86 (Official Build) (arm64)
- Firefox: 132.0.2 (aarch64)
- Safari: Version 18.1.1 (20619.2.8.11.12)
- In order to test the version that doesn't work, jump to this commit ID _**7e9a36003ddfcab33c0eed8d35d4139dd43af5fe**_ with commit message _**fix: show fetched csrf tokens on the page**_

## Things to keep in mind

- The biggest problem in this repo prior to this commit is that connect.sid cookie was not getting stored on any of the browsers above
  - _**nuxtServerInit**_ tries to GET /csrf/token
  - Express server responds to this request with a CSRF token and a _**set-cookie**_ header
  - But because the **Express server is not the same as the Nuxt server** as discussed [here](https://www.techcharter.io/blog/handling-the-set-cookie-header-in-nuxt/) the _**connect.sid**_ cookie is not set
  - This is fixed by the axios _**onResponse**_ handler that reads the cookie sent by Express server and sets it on the browser using _**cookie-universal-nuxt**_ and _**set-cookie-parser**_
- Because they weren't stored, server side was not able to retrieve _**req.session.csrfToken**_
- _**express-session**_ cookie settings such as _**saveUninitialized**_, _**resave**_, _**sameSite**_, _**secure**_ seem to have no effect on whether
- Keep in mind that the session is created before login with the CSRF token set on _**req.session**_ and by default passport will override this session inside _**req.logIn**_
- Similarly, _**req.logout**_ will destroy the session removing the CSRF token unless _**keepSessionInfo**_ is set to true on the backend login and logout handlers
- 3 different session keys will exist on redis at different times
  - The first one is created as soon as the CSRF token is set
  - The second one will be created and the first one will be deleted as soon as the user performs login. This key contains both the original CSRF token from the previous step and the logged in user ID
  - The third one will be created after logout and the second one will be deleted. It will contain only the CSRF token without a user ID
  - This keeps repeating as the user repeatedly logs in and logs out

## How to run?

### Step 1

- Clone the [frontend](https://github.com/Coinhexa/nuxt-session-undefined-frontend)

        git clone https://github.com/Coinhexa/nuxt-session-undefined-frontend.git

### Step 2

- Navigate into the directory

        cd nuxt-session-undefined-frontend && npm i && npm run start-dev

### Step 3

- Run the backend as per the instructions mentioned [there](https://github.com/Coinhexa/nuxt-session-undefined-backend)

### Step 4

- Open the browser at [localhost:3000](http://localhost:3000)
- Now click on the **Fetch Session Token** button
- A CSRF token should be generated and a _**connect.sid**_ cookie should be set
- Observe the value of the session inside _**redis-cli**_. It should contain only the CSRF token
- Do a login
- Fetch the token again by clicking the button
- Observe the value of the session inside _**redis-cli**_. It should contain both the CSRF token and a user ID
- Do a logout
- Fetch the token again by clicking the button
- Observe the value of the session inside _**redis-cli**_. It should contain only the CSRF token
- Repeat the login and logout steps as many times as needed
- It should work
