// eslint.config.mjs
export default {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'], // 루트에서 tsconfig.json 파일을 참조
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    rules: {
        // 여기에 프로젝트에 맞는 커스텀 규칙 추가
    },
};
