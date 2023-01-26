/* eslint-disable no-console */
/** @type {import('next').NextConfig} */

/** @module next.config
 *  @since 2023.01.26, 18:09
 *  @changed 2023.01.26, 19:23
 */

const path = require('path');

const prjPath = path.resolve(__dirname);

const packageConfig = require(path.resolve(prjPath, 'package.json'));

const { version, timetag, timestamp } = packageConfig;

const nodeEnv = process.env.NODE_ENV;
const isTest = nodeEnv === 'test';
const nextPublicDev = process.env.NEXT_PUBLIC_DEV;
const isDev = !!nextPublicDev;
const isDemo = isDev && nextPublicDev === 'DEMO';
const isDevServer = isDev && nextPublicDev === 'DEVSERVER';
const isProd = !isDev;

const buildType = isDevServer ? 'server' : 'build';
const buildMode = isProd ? 'prod' : 'dev';

const buildTag = [
  // Construct general-purpose build tag
  'v.' + version,
  timetag,
  buildType,
  buildMode,
].join('-');

const envParams = {
  version,
  timetag,
  timestamp,
  buildTag,
  buildType,
  buildMode,
  nodeEnv,
  isTest,
  isDev,
  isDevServer,
  isDemo,
  isProd,
};

console.log('Environment parameters:', envParams);

// TODO: To prepare cross-project `cssParams.{json,scss}` from `path.resolve(srcPath, 'global/cssParams')`?

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    disableStaticImages: true,
  },
  productionBrowserSourceMaps: true,
  env: envParams,
};

module.exports = nextConfig;
