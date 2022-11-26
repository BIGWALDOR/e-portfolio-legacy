"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollIcon = void 0;
const react_1 = __importDefault(require("react"));
const ScrollIcon = () => {
    return (react_1.default.createElement("a", { href: "#projects", className: "scroll" },
        react_1.default.createElement("div", { className: "scroll__icon click" })));
};
exports.ScrollIcon = ScrollIcon;
