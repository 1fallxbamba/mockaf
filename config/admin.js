module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '78f3b0ae02d3d9d6c927e687f51443b8'),
  },
});
