import React from "react";
import ReactDOM from "react-dom";
import { Main } from "./Main";
import "./index.css";

const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

ReactDOM.render(<Main />, root);
