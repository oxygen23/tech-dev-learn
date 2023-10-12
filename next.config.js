/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["facts.net", "img.redbull.com"], // Замените на ваши реальные домены изображений
	}
};

module.exports = nextConfig
