import { resolve } from 'path';

export const devServer = {
  port: '3000',
};
export const webpack = {
  alias: {
    '@': resolve(__dirname, 'src'),
    '@assets': resolve(__dirname, 'src/assets'),
    '@components': resolve(__dirname, 'src/components'),
    '@constants': resolve(__dirname, 'src/constants'),
    '@containers': resolve(__dirname, 'src/containers'),
    '@hooks': resolve(__dirname, 'src/hooks'),
    '@mocks': resolve(__dirname, 'src/mocks'),
    '@routes': resolve(__dirname, 'src/routes'),
    '@services': resolve(__dirname, 'src/services'),
    '@styles': resolve(__dirname, 'src/styles'),
    '@types': resolve(__dirname, 'src/types'),
    '@utils': resolve(__dirname, 'src/utils'),
    '@contexts': resolve(__dirname, 'src/contexts'),
  },
  configure(webpackConfig) {
    // 配置扩展扩展名
    webpackConfig.resolve.extensions = [...webpackConfig.resolve.extensions, ...['.scss', '.css']];
    return webpackConfig;
  },
};
