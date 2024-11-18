import dotevn from 'dotenv';
import path from 'path';

// configure dot env
dotevn.config({ path: path.join(process.cwd() + '.env') });

const config = {
  port: process.env.PORT,
};
export default config;
