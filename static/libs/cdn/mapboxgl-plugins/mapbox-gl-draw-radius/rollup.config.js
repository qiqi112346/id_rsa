import { terser } from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const config = (file, plugins) => ({
  input: "src/radius-mode.js",
  output: {
    name: "dist/radius-mode.min.js",
    format: "cjs",
    indent: false,
    file,
  },
  plugins,
});

export default [
  config("dist/radius-mode.js", [commonjs(), resolve()]),
  config("dist/radius-mode.min.js", [terser(), commonjs(), resolve()]),
];
