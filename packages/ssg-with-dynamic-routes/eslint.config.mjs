// 하위 프로젝트의 eslint.config.mjs
import eslintConfig from '../../eslint.config.mjs';

const config = {
  ...eslintConfig, // 상위 프로젝트의 설정을 상속
  rules: {
    // 여기에 하위 프로젝트에 맞는 커스텀 규칙 추가
  },
};

export default config;