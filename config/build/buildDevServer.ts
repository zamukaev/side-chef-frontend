import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfig } from "webpack-dev-server";
export function buildDevServer({ port }: BuildOptions): DevServerConfig {
    return {
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true
    }
}