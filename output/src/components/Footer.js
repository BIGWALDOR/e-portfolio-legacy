"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const react_1 = __importDefault(require("react"));
const Footer = () => {
    return (react_1.default.createElement("footer", null,
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("div", { className: "row footer__row" },
                react_1.default.createElement("figure", null,
                    react_1.default.createElement("a", { href: "#" },
                        react_1.default.createElement("img", { src: "./assets/WB_Logo-removebg.png", className: "footer__logo--img", alt: "" }))),
                react_1.default.createElement("div", { className: "footer__social--list" },
                    react_1.default.createElement("a", { href: "https://github.com/BIGWALDOR", className: "footer__social--link link__hover-effect link__hover-effect--white", target: "_blank" }, "GitHub"),
                    react_1.default.createElement("a", { href: "https://www.linkedin.com/in/walid-bouladam-91ba38168/", className: "footer__social--link link__hover-effect link__hover-effect--white", target: "_blank" }, "LinkedIn"),
                    react_1.default.createElement("a", { href: "./assets/WB-Resume.pdf", className: "footer__social--link link__hover-effect link__hover-effect--white", target: "_blank" }, "R\u00E9sum\u00E9")),
                react_1.default.createElement("div", { className: "footer__copyright" }, "Copyright \u00A9 2022")))));
};
exports.Footer = Footer;
