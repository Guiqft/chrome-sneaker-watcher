import React from "react";
import { BsEye } from "react-icons/bs";

import "./styles.css";

export default function Header() {
	return (
		<header>
			<div class="flex-1">
				<BsEye id="headerIcon" style={{ height: 40, width: 40 }} />
			</div>
			<p class="flex-1">Nike Sneaker Watcher</p>
			<div class="flex-1"></div>
		</header>
	);
}
