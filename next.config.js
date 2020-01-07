/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  target: process.env.BUILD_TARGET || 'server',
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: fileName => (fileName.includes('node_modules') ? 'global' : 'scoped')
          }
        }
      ]
    })

    return config
  }
}
