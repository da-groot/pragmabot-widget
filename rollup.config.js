import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.esm.js",
      format: "esm",
      sourcemap: true,
    },
    // {
    //   file: "dist/bundle.umd.js",
    //   format: "umd",
    //   name: "PragmaBot",
    //   sourcemap: true,
    // },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    babel({ babelHelpers: "bundled" }),
    terser(),
  ],
};
