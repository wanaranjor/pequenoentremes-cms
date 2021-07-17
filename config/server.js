module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'cf1bcdd7e2a68cd9adf2ae5f2807a5fd'),
    },
  },
});
