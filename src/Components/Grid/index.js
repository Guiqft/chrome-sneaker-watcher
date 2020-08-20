import React from "react";

import "./styles.css";

export default function Grid({ data }) {
	return (
		<div className="grid">
			{data.map((item) => (
				<div key={item.originalId} className="card">
					{item.name}
				</div>
			))}
		</div>
	);
}
