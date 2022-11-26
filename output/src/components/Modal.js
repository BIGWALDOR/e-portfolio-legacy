"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
const Contact_1 = require("./Contact");
const toggleModal_1 = require("../../helper/toggleModal");
const aws_png_1 = __importDefault(require("../assets/aws.png"));
const azure_png_1 = __importDefault(require("../assets/azure.png"));
const nodejs_png_1 = __importDefault(require("../assets/nodejs.png"));
const Modal = () => {
    return (react_1.default.createElement("div", { className: "modal" },
        react_1.default.createElement("div", { className: "modal__half modal__about" },
            react_1.default.createElement("h3", { className: "modal__title modal__title--about" }, "Here's a bit about me."),
            react_1.default.createElement("h4", { className: "modal__sub-title modal__sub-title--about" }, "Fullstack Engineer."),
            react_1.default.createElement("p", { className: "modal__para" },
                "Previously hailing from the Hospitality industry, I took the plunge towards the end of 2021 and enrolled myself in a\u00A0",
                react_1.default.createElement("span", { className: "text--secondary" }, "Web Development Bootcamp"),
                ' ',
                "at\u00A0",
                react_1.default.createElement("a", { href: "https://devacademy.co.nz/", className: "text--secondary" }, "Enspiral Dev Academy\u00A0"),
                "and haven't looked back since. I'm currently honing my craft as a\u00A0",
                react_1.default.createElement("span", { className: "text--secondary" }, "Fullstack Engineer"),
                " at\u00A0",
                react_1.default.createElement("a", { href: "https://www.ezyvet.com/", className: "text--secondary" }, "ezyVet"),
                "."),
            react_1.default.createElement("div", { className: "modal__languages" },
                react_1.default.createElement("figure", { className: "modal__language" },
                    react_1.default.createElement("img", { className: "modal__language--img", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png", alt: "HTML5 Logo" }),
                    react_1.default.createElement("span", { className: "language__name" }, "HTML")),
                react_1.default.createElement("figure", { className: "modal__language" },
                    react_1.default.createElement("img", { className: "modal__language--img", src: "https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png", alt: "CSS3 Logo" }),
                    react_1.default.createElement("span", { className: "language__name" }, "CSS")),
                react_1.default.createElement("figure", { className: "modal__language" },
                    react_1.default.createElement("img", { className: "modal__language--img", src: "https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png", alt: "JavaScript Logo" }),
                    react_1.default.createElement("span", { className: "language__name" }, "JavaScript")),
                react_1.default.createElement("figure", { className: "modal__language" },
                    react_1.default.createElement("img", { className: "modal__language--img", src: "https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png", alt: "React Logo" }),
                    react_1.default.createElement("span", { className: "language__name" }, "React")),
                react_1.default.createElement("figure", { className: "modal__language" },
                    react_1.default.createElement("img", { className: "modal__language--img", src: nodejs_png_1.default, alt: "Node.js Logo" }),
                    react_1.default.createElement("span", { className: "language__name" }, "Node.js")),
                react_1.default.createElement("figure", { className: "modal__language" },
                    react_1.default.createElement("img", { className: "modal__language--img", src: aws_png_1.default, alt: "AWS Logo" }),
                    react_1.default.createElement("span", { className: "language__name" }, "AWS")),
                react_1.default.createElement("figure", { className: "modal__language" },
                    react_1.default.createElement("img", { className: "modal__language--img", src: azure_png_1.default, alt: "Azure Logo" }),
                    react_1.default.createElement("span", { className: "language__name" }, "Azure")))),
        react_1.default.createElement("div", { className: "modal__half modal__contact" },
            react_1.default.createElement(fa_1.FaTimes, { className: "modal__exit click", onClick: toggleModal_1.toggleModal }),
            react_1.default.createElement("h3", { className: "modal__title modal__title--contact" }, "Let's have a chat!"),
            react_1.default.createElement("h4", { className: "modal__sub-title modal__sub-title--contact" }, "I'm currently open to new opportunities."),
            react_1.default.createElement(Contact_1.Contact, null),
            react_1.default.createElement("div", { className: "modal__overlay modal__overlay--success" }, "Thanks for the message! Looking forward to speaking with you soon."))));
};
exports.Modal = Modal;
