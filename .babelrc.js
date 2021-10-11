// 트랜스파일러(Transpiler) Babel
// ES6+, ES NEXT 등 최신 사양으로 작성된 코드를 ES5 이하 버전의 코드로 변환 한다.

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    // 타입스크립트 파일에서 타입을 체킹하고 트랜스 파일링도 실행 한다.
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-transform-async-to-generator",
    "babel-plugin-styled-components",
  ],
};
