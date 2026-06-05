import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    allowedDevOrigins: [
        "localhost:3000", 
        "192.168.0.*",     // 匹配 192.168.0.X 的所有局域网设备
        "192.168.0.243"    // 明确写死当前 IP 也可以
    ],

    output: 'export', // 启用静态导出
    images: {
        unoptimized: true, // GitHub Pages 不支持 Next.js 默认的图片优化，必须关闭
    },
    trailingSlash: true, // 可选：如果遇到路由刷新 404，可以开启此项
};

export default nextConfig;
