import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import html from '@open-wc/rollup-plugin-html';
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import strip from '@rollup/plugin-strip';
import dotenv from 'dotenv';

dotenv.config();

const cesiumBuildPath = 'node_modules/cesium/Build/Cesium';

const isProduction = process.env.NODE_ENV !== 'development';

export default {
  input: 'index.html',
  output: {
    dir: 'build',
    format: 'es',
  },
  plugins: [
    resolve({
      extensions: ['.mjs', '.node', '.js', 'jsx', '.ts', '.tsx', '.svg'],
      browser: true,
    }),
    commonjs({
      include: ['node_modules/**'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'production'
      ),
      'process.env.GOOGLE_CLIENT_ID': JSON.stringify(
        process.env.GOOGLE_CLIENT_ID
      ),
      'process.env.GOOGLE_CLIENT_SECRET': JSON.stringify(
        process.env.GOOGLE_CLIENT_SECRET
      ),
      'process.env.FACEBOOK_APP_ID': JSON.stringify(
        process.env.FACEBOOK_APP_ID
      ),
      'process.env.APPLE_APP_ID': JSON.stringify(process.env.APPLE_APP_ID),
    }),
    babel({
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    typescript({
      tsconfig: 'tsconfig.dev.json',
    }),
    html(),
    image(),
    json(),
    postcss({
      extensions: ['.css'],
    }),
    isProduction && terser(),
    isProduction &&
      strip({
        functions: ['console.log'],
      }),
    copy({
      targets: [
        { src: 'assets/**/*', dest: 'build/assets/' },
        { src: 'styles/global.css', dest: 'build/styles/' },
        { src: 'manifest.json', dest: 'build/' },

        // Cesium stuff
        {
          src: path.join(cesiumBuildPath, 'Assets'),
          dest: 'build/assets/cesium/',
        },
        {
          src: path.join(cesiumBuildPath, 'ThirdParty'),
          dest: 'build/assets/cesium/',
        },
        {
          src: path.join(cesiumBuildPath, 'Widgets'),
          dest: 'build/assets/cesium/',
        },
        {
          src: path.join(cesiumBuildPath, 'Workers'),
          dest: 'build/assets/cesium/',
        },
      ],
    }),
  ],
};
