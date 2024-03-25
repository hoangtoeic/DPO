module.exports = {
  apps: [
    {
      name: 'ambulibnestjsnginx', // application name
      script: 'dist/main.js', // script path to pm2 start
      // args: '', // string containing all arguments passed via CLI to script
      instances: 1, // number process of application
      autorestart: true, // auto restart if app crashes
      watch: false,
      max_memory_restart: '4G', // restart if it exceeds the amount of memory specified
      env: {
        NODE_ENV: 'production',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
