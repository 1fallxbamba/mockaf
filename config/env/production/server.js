module.exports = ({ env }) => ({
    url: env('MY_HEROKU_URL'),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS", ["ktJ8QqsXSnlCfWT4SPkgPA==", "8mDaF7C9FZwQlrR0JkFh7w=="]),
    },
  });
  