import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    allowedDevOrigins: [
        "localhost:3000", 
        "192.168.0.*",     // 匹配 192.168.0.X 的所有局域网设备
        "192.168.0.243"    // 明确写死当前 IP 也可以
    ],
};

export default nextConfig;
