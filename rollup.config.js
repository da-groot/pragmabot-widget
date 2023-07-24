import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.iife.js",
      format: "iife",
      name: "PragmaBot",
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    babel({ babelHelpers: "bundled" }),
    terser(),
  ],
};
