import React from "react";
import { BsEye } from "react-icons/bs";

import "./styles.css";

export default function Header() {
	return (
		<header>
			<div id="headerIcon">
				<BsEye style={{ height: 40, width: 40 }} />
			</div>
			<p>Nike Sneaker Watcher</p>
		</header>
	);
}
