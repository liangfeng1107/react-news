function buildConfig(env) {
  switch (env) {
    case 'dev':
      return require('./dev.js')('development');
    case 'prod':
      return require('./prod.js')('production');
    default: throw new Error(`there is no such file: ${env}.js`)
  }
}

module.exports = buildConfig;