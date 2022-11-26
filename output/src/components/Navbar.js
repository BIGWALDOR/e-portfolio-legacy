"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const vsc_1 = require("react-icons/vsc");
const toggleModal_1 = require("../../helper/toggleModal");
const WB_Logo_removebg_png_1 = __importDefault(require("../assets/WB_Logo-removebg.png"));
const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = (0, react_2.useState)(false);
    (0, react_2.useEffect)(() => {
        const isDarkMode = localStorage.getItem('isDarkMode');
        if (isDarkMode === 'true') {
            document.body.classList.add('dark-mode');
            setIsDarkMode(true);
        }
        if (isDarkMode === 'false') {
            document.body.classList.remove('dark-mode');
            setIsDarkMode(false);
        }
    }, []);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('isDarkMode', Boolean.prototype.toString.call(!isDarkMode));
    };
    return (react_1.default.createElement("nav", null,
        react_1.default.createElement("figure", null,
            react_1.default.createElement("a", { href: "#" },
                react_1.default.createElement("img", { id: "personal-logo", src: WB_Logo_removebg_png_1.default }))),
        react_1.default.createElement("ul", { className: "nav__link--list" },
            react_1.default.createElement("li", { className: "nav__link" },
                react_1.default.createElement("a", { href: "#", className: "nav__link--anchor link__hover-effect link__hover-effect--black", onClick: toggleModal_1.toggleModal }, "About")),
            react_1.default.createElement("li", { className: "nav__link" },
                react_1.default.createElement("a", { href: "#projects", className: "nav__link--anchor link__hover-effect link__hover-effect--black" }, "Projects")),
            react_1.default.createElement("li", { className: "nav__link", onClick: toggleModal_1.toggleModal },
                react_1.default.createElement("a", { href: "", className: "nav__link--anchor link__hover-effect link__hover-effect--black" }, "Contact")),
            react_1.default.createElement("li", { className: "nav__link click", onClick: toggleDarkMode },
                react_1.default.createElement("a", { href: "", className: "nav__link--anchor link__hover-effect link__hover-effect--black" },
                    react_1.default.createElement(vsc_1.VscColorMode, null))))));
};
exports.Navbar = Navbar;
