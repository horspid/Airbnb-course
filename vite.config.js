import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@app": path.resolve(__dirname, "src/app"),
			"@shared": path.resolve(__dirname, "src/shared"),
			"@widgets": path.resolve(__dirname, "src/widgets"),
			"@entities": path.resolve(__dirname, "src/entities"),
			"@features": path.resolve(__dirname, "src/features"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@data": path.resolve(__dirname, "src/data"),
			"@assets": path.resolve(__dirname, "src/assets"),
		},
	},
});
