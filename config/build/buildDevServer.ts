import { Configuration as DevServerConfig } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer({ port }: BuildOptions): DevServerConfig {
  return {
    port,
    historyApiFallback: true,
    open: true,
    hot: true,
  };
}
