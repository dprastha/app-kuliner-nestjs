export const config = () => ({
  database: {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    logging: true,
    entities: ['build/entities/*.entity.js'],
    migrations: ['build/migrations/*.js'],
    cli: {
      entitiesDir: 'src/entities',
      migrationsDir: 'src/migrations',
    },
  },
});
