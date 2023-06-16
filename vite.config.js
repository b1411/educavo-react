import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePrerender from "vite-plugin-prerender";
import path from "path";
import eslint from "vite-plugin-eslint";
import ViteWebp from "vite-plugin-webp-generator";

export default defineConfig(() => {
    return {
        base: "./",
        build: {
            outDir: "build",
        },
        development: {
            open: true,
            port: 3000,
        },
        assetsInclude: [
            "**/*.png",
            "**/*.jpg",
            "**/*.svg",
            "**/*.gif, **/*.jpeg,",
            "**/*.PNG",
            "**/*.JPG",
            "**/*.SVG",
            "**/*.GIF, **/*.JPEG,",
            "**/*.woff",
            "**/*.woff2",
            "**/*.eot",
            "**/*.ttf",
            "**/*.otf",
            "**/*.WOFF",
            "**/*.WOFF2",
            "**/*.EOT",
            "**/*.TTF",
            "**/*.OTF",
        ],
        plugins: [
            react(),
            vitePrerender({
                staticDir: path.resolve(__dirname, "build"),
                routes: [
                    "/",
                    "/about",
                    "/contact",
                    "/course-3",
                    "/course-single/1",
                    "/course-single/2",
                    "/course-single/3",
                    "/course-single/4",
                    "/course-single/5",
                    "/course-single/6",
                    "/blog",
                    "/single-post-right-sidebar",
                ],
            }),
            eslint({
                include: ["./src/**/*.jsx", "./src/**/*.js"],
                exclude: ["node_modules/**", "build/**"],
                cache: false,
            }),
            ViteWebp({
              extensions: ["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"],
          }),
        ],
    };
});
