import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import pluginChecker from "vite-plugin-checker"
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), pluginChecker({ typescript: true })],
    resolve: {
        alias: [{ find: "@app", replacement: path.resolve(__dirname, "src") }],
    },
})
