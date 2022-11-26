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
exports.App = void 0;
const React = __importStar(require("react"));
const Header_1 = require("./components/Header");
const Navbar_1 = require("./components/Navbar");
const ScrollIcon_1 = require("./components/ScrollIcon");
const MailIcon_1 = require("./components/MailIcon");
const Projects_1 = require("./components/Projects");
const Footer_1 = require("./components/Footer");
const Modal_1 = require("./components/Modal");
const moveBackground_1 = require("../helper/moveBackground");
const semi_circle_svg_1 = __importDefault(require("./assets/semi circle.svg"));
const circle_svg_1 = __importDefault(require("./assets/circle.svg"));
const squiggly_svg_1 = __importDefault(require("./assets/squiggly.svg"));
const triangle_svg_1 = __importDefault(require("./assets/triangle.svg"));
const App = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { id: "landing-page", onMouseMove: moveBackground_1.moveBackground },
            React.createElement(Navbar_1.Navbar, null),
            React.createElement(Header_1.Header, null),
            React.createElement(ScrollIcon_1.ScrollIcon, null),
            React.createElement(MailIcon_1.MailIcon, null),
            React.createElement(Modal_1.Modal, null),
            React.createElement("img", { src: semi_circle_svg_1.default, className: "shape shape--zero" }),
            React.createElement("img", { src: circle_svg_1.default, className: "shape shape--one" }),
            React.createElement("img", { src: squiggly_svg_1.default, className: "shape shape--two" }),
            React.createElement("img", { src: circle_svg_1.default, className: "shape shape--three" }),
            React.createElement("img", { src: triangle_svg_1.default, className: "shape shape--four" }),
            React.createElement("img", { src: circle_svg_1.default, className: "shape shape--five" }),
            React.createElement("img", { src: squiggly_svg_1.default, className: "shape shape--six" }),
            React.createElement("img", { src: circle_svg_1.default, className: "shape shape--seven" }),
            React.createElement("img", { src: semi_circle_svg_1.default, className: "shape shape--eight" })),
        React.createElement("section", { id: "projects" },
            React.createElement(Projects_1.Projects, null)),
        React.createElement(Footer_1.Footer, null)));
};
exports.App = App;
