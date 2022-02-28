# nuxt-session-undefined-frontend

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).
## ERROR FIXED NOW!
- Thanks to some of the kind folks from https://www.reddit.com/r/node/comments/t2glov/how_exactly_does_session_work_when_your_frontend/

## How to see the error?
- Checkout the main branch
- Login using test@example.com and 123456789
- Do a hard refresh on any page and observe the console
- You will that a connect.sid value is present but req.session or req.user is undefined
