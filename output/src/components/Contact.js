"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const react_1 = __importStar(require("react"));
const browser_1 = __importDefault(require("@emailjs/browser"));
const fa_1 = require("react-icons/fa");
const Contact = () => {
    const form = (0, react_1.useRef)(null);
    const sendEmail = (e) => {
        e.preventDefault();
        const loading = document.querySelector('.modal__overlay--loading');
        const success = document.querySelector('.modal__overlay--success');
        loading.classList += ' modal__overlay--visible';
        browser_1.default
            .sendForm('service_mu3qwmi', 'template_rb794vc', e.target, 'K0T6cV4xLRt23lv2M')
            .then(() => {
            loading.classList.remove('modal__overlay--visible');
            success.classList += ' modal__overlay--visible';
        })
            .catch(() => {
            loading.classList.remove('modal__overlay--visible');
            alert('Something went wrong. Please try again.');
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { id: "contact__form", onSubmit: sendEmail, ref: form },
            react_1.default.createElement("div", { className: "form__item" },
                react_1.default.createElement("label", { className: "form__item--label" }, "Name"),
                react_1.default.createElement("input", { type: "text", className: "input", name: "user_name" })),
            react_1.default.createElement("div", { className: "form__item" },
                react_1.default.createElement("label", { className: "form__item--label" }, "Email"),
                react_1.default.createElement("input", { type: "email", className: "input", name: "user_email" })),
            react_1.default.createElement("div", { className: "form__item" },
                react_1.default.createElement("label", { className: "form__item--label" }, "Message"),
                react_1.default.createElement("textarea", { className: "input", name: "user_message" })),
            react_1.default.createElement("button", { id: "contact_submit", className: "form__submit" }, "Send it my way")),
        react_1.default.createElement("div", { className: "modal__overlay modal__overlay--loading" },
            react_1.default.createElement(fa_1.FaSpinner, { className: "fa-spinner" }))));
};
exports.Contact = Contact;
