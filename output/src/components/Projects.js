"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
const real_estate_webapp_png_1 = __importDefault(require("../assets/real-estate-webapp.png"));
const project_management_webapp_png_1 = __importDefault(require("../assets/project-management-webapp.png"));
const Projects = () => {
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("div", { className: "row" },
            react_1.default.createElement("h1", { className: "section__title" },
                "Here are some of my ",
                react_1.default.createElement("span", { className: "text--secondary" }, "projects")),
            react_1.default.createElement("ul", { className: "project__list" },
                react_1.default.createElement("li", { className: "project" },
                    react_1.default.createElement("div", { className: "project__wrapper" },
                        react_1.default.createElement("img", { className: "project__img", src: real_estate_webapp_png_1.default, alt: "" }),
                        react_1.default.createElement("div", { className: "project__wrapper--bg" }),
                        react_1.default.createElement("div", { className: "project__description" },
                            react_1.default.createElement("h3", { className: "project__description--title" }, "Cloud9 Realtor"),
                            react_1.default.createElement("h4", { className: "project__description--sub-title" }, "React, NextJS, Chakra UI"),
                            react_1.default.createElement("p", { className: "project__description--para" }, "A real estate web application built with React, NextJS and Chakra UI. I built this project as an exercise to improve my React skills and to learn how to use the NextJS framework, as well as learning how to leverage a modular component library, in Chakra UI."),
                            react_1.default.createElement("div", { className: "project__description--links" },
                                react_1.default.createElement("a", { href: "https://github.com/BIGWALDOR/real-estate-webapp", className: "project__description--link", target: "_blank" },
                                    react_1.default.createElement(fa_1.FaGithub, null)),
                                react_1.default.createElement("a", { href: "https://real-estate-webapp-three.vercel.app/", className: "project__description--link", target: "_blank" },
                                    react_1.default.createElement(fa_1.FaLink, null)))))),
                react_1.default.createElement("li", { className: "project" },
                    react_1.default.createElement("div", { className: "project__wrapper" },
                        react_1.default.createElement("img", { className: "project__img", src: project_management_webapp_png_1.default, alt: "" }),
                        react_1.default.createElement("div", { className: "project__wrapper--bg" }),
                        react_1.default.createElement("div", { className: "project__description" },
                            react_1.default.createElement("h3", { className: "project__description--title" }, "Project Management"),
                            react_1.default.createElement("h4", { className: "project__description--sub-title" }, "React, ApolloClient, GraphQL, Express and MongoDB"),
                            react_1.default.createElement("p", { className: "project__description--para" }, "A simple project management, fullstack web application built with React, ApolloClient, GraphQL, Express and MongoDB. I built this project as an exercise to learn how to use the ApolloClient framework, the GraphQL language and using a NoSQL database in MongoDB through the use of an ORM in Mongoose."),
                            react_1.default.createElement("div", { className: "project__description--links" },
                                react_1.default.createElement("a", { href: "https://github.com/BIGWALDOR/project-management-webapp", className: "project__description--link", target: "_blank" },
                                    react_1.default.createElement(fa_1.FaGithub, null)),
                                react_1.default.createElement("a", { href: "https://project-management-fullstack.herokuapp.com/", className: "project__description--link", target: "_blank" },
                                    react_1.default.createElement(fa_1.FaLink, null))))))))));
};
exports.Projects = Projects;
