// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/eslint",
		"nuxt-svgo-loader",
	],
	devtools: { enabled: true },
	css: ["~/assets/css/tailwind.css"],
	compatibilityDate: "2025-07-15",
	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
});
