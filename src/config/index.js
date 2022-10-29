import dotenv from 'dotenv';
import minimist from 'minimist';
dotenv.config();

const args = minimist(process.argv.slice(2), {
  alias: { m: 'MODE', p: 'PORT', d: 'DEBUG' },
  default: { m: 'dev', p: process.env.PORT_DEFAULT, d: false },
});
const { PORT } = args;
export const config = {
  server: {
    PORT: PORT,
  },
  Args: args,
};
