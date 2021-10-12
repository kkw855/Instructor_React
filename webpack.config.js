const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 모듈 번들러(Module bundler) Webpack

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    // 소스 파일에서 모듈 import 를 할 때 탐색할 디렉터리 목록
    modules: ["node_modules"],
    // 소스 파일에서 모듈 import 를 할 때 찾을 파일 확장자 목록
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  mode: "development",
  devServer: {
    port: 8081,
    // URL 에 주소 입력하면 발생하는 Cannot GET 에러 방지
    // 해당 URL 로 서버에게 GET 요청을 보내기 때문에 에러 발생
    historyApiFallback: true
  },
  module: {
    rules: [
      // 타입스크립트
      {
        // 바벨 로더를 적용할 파일들
        test: /\.([jt])s(x)?$/,
        // 바벨 트랜스파일에서 제외시킨다.
        exclude: /node_modules/,
        use: {
          // 바벨을 실행해서 타입 체킹(Typescript)과 트랜스파일링을 한다.
          loader: "babel-loader",
          options: {
            // 바벨 트랜스파일에 캐시를 사용해서 속도를 향상 시킨다.
            cacheDirectory: true,
            babelrc: true,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Webpack 빌드 시에 아래 HTML 파일에 번들링된 js 파일을 추가해서 HTML 파일 생성.
      // <script src="bundle.js"></script>
      template: "public/index.html",
    }),
  ],
};
