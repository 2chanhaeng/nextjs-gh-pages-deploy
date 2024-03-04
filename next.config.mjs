const isProd = process.env.NODE_ENV === "production";
const repository = "nextjs-gh-pages-deploy";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? `/${repository}/` : "", // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
};

export default nextConfig;
