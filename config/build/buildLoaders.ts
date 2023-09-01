import webpack from "webpack";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const babelLoader = {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
            },
        },
    };

    const typescriptLoader = {
        test: /\.tsx?$/,

        exclude: /node_modules/,
        use: {
            loader: require.resolve("ts-loader"),
            options: {
                getCustomTransformers: () => ({
                    before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                }),
                transpileOnly: isDev,
            },
        },
    };

    const scssLoader = {
        test: /\.(css|s[ac]ss)$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: isDev ? "[path][name]__[local]--[hash:base64:8]"
                            : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const urlLoader = {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: ["url-loader?limit=100000"],
    };

    const jsonLoader = {
        test: /\.json$/,
        loader: "json-loader",
    };

    return [
        babelLoader,
        typescriptLoader,
        scssLoader,
        svgLoader,
        fileLoader,
        urlLoader,
        jsonLoader,
    ];
}
