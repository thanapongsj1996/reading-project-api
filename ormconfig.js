require("dotenv").config()

module.exports = {
	type: "postgres",
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT, 10) || 5432,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: false,
	cli: {
    migrationsDir: "src/migration"
  }
}

// {
//   "type": "postgres",
//   "database": "reading-project",
//   "host": "localhost",
//   "port": 5432,
//   "username": "postgres",
//   "password": "boyboy",
//   "entities": ["dist/**/*.entity{.ts,.js}"],
//   "synchronize": false,
//   "migrations": ["dist/migration/*{.ts,.js}"],
//   "cli": {
//     "migrationsDir": "src/migration"
//   }
// }