module.exports = {
  apps: [
    {
      name: 'server1',
      script: 'src/app.js',
      whatch: true,
      env: {
        PORT: 8080,
      },
      exec_mode: 'fork',
      args: '-p 8080',
      node_args: '--expose-gc',
    },
    {
      name: 'server2',
      script: 'src/app.js',
      whatch: true,
      env: {
        PORT: 8081,
      },
      exec_mode: 'fork',
      args: '-p 8081',
      node_args: '--expose-gc',
    },
    {
      name: 'server3',
      script: 'src/app.js',
      whatch: true,
      env: {
        PORT: 8082,
      },
      exec_mode: 'cluster',
      instances: 4,
      args: '-p 8082',
      node_args: '--harmony --expose-gc',
    },
  ],
};
