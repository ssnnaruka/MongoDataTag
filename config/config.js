var env = process.env.NODE_ENV || 'development'   // 1
 
process.env.DB_PORT = 27017;
process.env.DB_NAME = "general";

if (env === 'development') {  // 2
  process.env.DB_PORT = 27017;
  process.env.DB_NAME = "dev";
  process.env.MONGODB_URI = 'mongodb://localhost';
} else if (env === 'test') {  // 3
  process.env.DB_PORT = 27017;
  process.env.DB_NAME = "test";
  process.env.MONGODB_URI = 'mongodb://localhost:';
}