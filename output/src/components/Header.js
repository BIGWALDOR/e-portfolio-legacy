"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
const toggleModal_1 = require("../../helper/toggleModal");
const Header = () => {
    return (react_1.default.createElement("header", { className: "header" },
        react_1.default.createElement("div", { className: "header__content" },
            react_1.default.createElement("h1", { className: "title" }, "Kia Ora"),
            react_1.default.createElement("h1", { className: "title--secondary" }, "I'm Walid!"),
            react_1.default.createElement("p", { className: "header__para" },
                "I'm a",
                react_1.default.createElement("span", { className: "text--secondary" }, " Fullstack Software Engineer "),
                "with a strong passion for building web applications with great user experiences.",
                react_1.default.createElement("br", null),
                "Here's a bit a more\u00A0",
                react_1.default.createElement("span", { className: "text--secondary click", onClick: toggleModal_1.toggleModal }, "about me"),
                ".")),
        react_1.default.createElement("div", { className: "social__list" },
            react_1.default.createElement("a", { href: "https://www.linkedin.com/in/walid-bouladam-91ba38168/", className: "social__link click", target: "_blank" },
                react_1.default.createElement(fa_1.FaLinkedinIn, null)),
            react_1.default.createElement("a", { href: "https://github.com/BIGWALDOR", className: "social__link click", target: "_blank" },
                react_1.default.createElement(fa_1.FaGithub, null)),
            react_1.default.createElement("a", { href: "./assets/WB-Resume.pdf", className: "social__link click", target: "_blank" },
                react_1.default.createElement(fa_1.FaRegFilePdf, null)))));
};
exports.Header = Header;
