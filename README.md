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

## How to see the error?
- Login using test@example.com and 123456789
- Do a hard refresh on any page and observe the console
- You will that a connect.sid value is present but req.session or req.user is undefined