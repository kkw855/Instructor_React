"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var App_1 = __importDefault(require("./App"));
react_dom_1["default"].render(<react_1["default"].StrictMode>
      <App_1.default />
    </react_1["default"].StrictMode>, document.getElementById("root"));
