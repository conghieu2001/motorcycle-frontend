const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3001, // CHANGE YOUR PORT HERE!
  },
})
