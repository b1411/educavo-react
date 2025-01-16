import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import ViteWebp from "vite-plugin-webp-generator";

export default defineConfig(() => {
    return {
        base: "/",
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
