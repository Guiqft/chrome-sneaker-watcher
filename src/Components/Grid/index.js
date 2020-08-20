import React from "react";
import Button from "@material-ui/core/Button";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { useStyles } from "../../Styles";

import "./styles.css";

export default function Grid({ data }) {
	const classes = useStyles();

	return (
		<div className="grid">
			{data.map((item) => (
				<div key={item.originalId} className="card">
					<img
						alt={item.description}
						src={item.imageUrl}
						className="cardImage"
					/>

					<div className="cardInfo">
						<p alt={item.name} className="cardInfoTitle">
							{item.name
								.replace("Tênis", "")
								.replace("Masculino", "")
								.replace("Feminino", "")}
						</p>
						<p className="cardInfoDescription">
							{item.categoryName}
						</p>

						<div className="cardInfoBottomRow">
							<p className="cardInfoPrice">R$ {item.price}</p>

							<Button
								variant="contained"
								color="primary"
								className={classes.itemButton}
								target="_blank"
								href={item.productUrl}
							>
								<ChevronRightIcon />
							</Button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
