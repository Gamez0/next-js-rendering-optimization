// eslint.config.mjs
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,tsx}'], // 적용할 파일 확장자 지정
        ignores: ['node_modules/', 'dist/'], // 무시할 폴더
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: tsParser,
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: ['./tsconfig.json'],
            },
        },
        settings: {
            react: {
                version: 'detect', // React 버전 자동 감지
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            // 추가적인 커스텀 규칙
            'react/react-in-jsx-scope': 'off', // In Next.js 13 above, this rule is not needed because Next.js 13 above automatically imports React in JSX scope.
        },
    },
];
