module.exports = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
  
      return config
    },
    env: {
        consumer_key: 'BomMvbqMbclnZASwxv4cxqeQE',
        consumer_secret: 'N1qnnBAf8nBv30rikHVmQXnjE6yceUprdxuNspT0Dg7TKkNJCj',
        access_token_key: '1254094051927875587-47AmRyg2QosRWrxV57ctngTXFhRfUa',
        access_token_secret: 'SAOruUYHz8p6GzWJ2GvlQwKYWJXqfwiiFfKMdhG0KhlnM'
      },
  }