"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailIcon = void 0;
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
const toggleModal_1 = require("../../helper/toggleModal");
const MailIcon = () => {
    return (react_1.default.createElement("a", { href: "#" },
        react_1.default.createElement("button", { className: "mail__btn click", onClick: toggleModal_1.toggleModal },
            react_1.default.createElement(fa_1.FaEnvelope, null))));
};
exports.MailIcon = MailIcon;
