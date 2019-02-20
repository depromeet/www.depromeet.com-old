module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },

  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: 'depromeet',
      region: 'ap-northeast-2',
      bucket: 'depromeet.com',
      createBucket: false,
      staticHosting: false,
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: true,
      pwaFiles: 'service-worker.js',
      enableCloudfront: true,
      cloudfrontId: 'E1Y2KVUUVUA1ND',
      cloudfrontMatchers: '/*',
      uploadConcurrency: 5,
      pluginVersion: '3.0.0'
    }
  }
};
