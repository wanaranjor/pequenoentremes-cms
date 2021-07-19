module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL_API'),
  admin: {
    url: env('URL_API_ADMIN'),
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'cf1bcdd7e2a68cd9adf2ae5f2807a5fd'),
    },
  },
});
