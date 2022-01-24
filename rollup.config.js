import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';
import { babel } from '@rollup/plugin-babel';

const packageJson = require('./package.json');

export default {
    input: 'src/react-datepicker/index.js',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            name: 'react-datepicker'
        },
        {
            file: packageJson.module,
            format: 'es',
            sourcemap: true
        }
    ],
    globals: {
        "react": "react"
    },
    plugins: [
        external(),
        resolve({
          extensions: [".js", ".jsx"],
        }),
        babel({ 
            exclude: 'node_modules/**',
            presets: ['@babel/env', '@babel/preset-react'],
            babelHelpers: 'bundled'
        }),
        commonjs(),
        scss(),
        postcss(),
        terser(),
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["transform-class-properties"],
        ["@babel/plugin-transform-destructuring"],
        ["@babel/plugin-proposal-object-rest-spread", { "useBuiltIns": true }]
    ],
    external: ["react"]
}
