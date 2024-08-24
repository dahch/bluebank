import dotenv from 'dotenv';

dotenv.config();

console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_HOST:', process.env.DB_HOST);

const env = process.env;

export const DB = {
    name: (env.DB_NAME ?? 'bluesoft_bank') as string,
    user: (env.DB_USER ?? 'postgres') as string,
    password: (env.DB_PASSWORD ?? 'password') as string,
    host: (env.DB_HOST ?? 'localhost') as string,
}

export const JWT_SECRET = env.JWT_SECRET ?? 'default-secret';