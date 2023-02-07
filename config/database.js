module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfbadv4gqg4aqet76r50-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'tesis'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'vMluZ8DxMxjWXKLgDKAr4Lk4dhxO1d56'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
