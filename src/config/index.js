import minimist from 'minimist';

const args = minimist(process.argv.slice(2), {
  alias: { m: 'MODE', p: 'PORT', d: 'DEBUG' },
  default: { m: 'dev', p: process.env.PORT_DEFAULT, d: false },
});

const PORT = process.env.PORT || 8080;

export const config = {
  server: {
    PORT: PORT,
  },
  Args: args,
};
