# Minimal reproducible example To demonstrate express-session not playing well with csrf on the frontend

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
- Now click on the **Get Session** button
- Try to login with the hardcoded email and password in the backend
- Check your redis database, the csrf token is being stored
- It is **not being retrieved inside req.session on the frontend** however for some reason
- Call the **GET /session/token** and check its output on the console (Yep no csrf token)
