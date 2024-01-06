/** @type {import('next').NextConfig} */
const nextConfig = {
	rewrites: async () => {
		return [
			{
				source: '/flask/api/:path*',
				destination:
					process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/flask/api/:path*' : '/api/',
			},
		];
	},
};

module.exports = nextConfig;
