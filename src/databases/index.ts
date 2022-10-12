import { DB_USER, DB_PORT, DB_DATABASE, DB_PASSWORD } from '@config';

export const dbConnection = {
  url: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.aeflq.mongodb.net/${DB_DATABASE}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
};
