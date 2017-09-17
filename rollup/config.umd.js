import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import eslint from 'rollup-plugin-eslint';

export default {
	moduleName: 'typecase',
	entry: './src/typecase.js',
	plugins: [
		eslint(),
		babel({
			babelrc: false,
			presets: ["es2015-rollup"]
		}),
		nodeResolve({
			jsnext: true,
			main: true
		}),
		commonjs()
	],
	format: 'umd',
	dest: './dist/typecase.umd.js'
};