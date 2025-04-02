import type { NextConfig } from 'next';

// 공통 Next.js 설정 정의
const config: NextConfig = {
    reactStrictMode: true, // React의 Strict Mode를 활성화하여 잠재적인 문제를 감지
    eslint: {
        ignoreDuringBuilds: true, // 빌드 시 ESLint 오류가 발생해도 빌드를 중단하지 않도록 설정
    },
};

export default config;
