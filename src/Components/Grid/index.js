import React from "react";
import Button from "@material-ui/core/Button";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { useStyles } from "../../Styles";

import "./styles.css";

export default function Grid({ data }) {
	const classes = useStyles();

	const requestRemoteImage = (imageUrl, productId) => {
		const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

		var xhr = new XMLHttpRequest();
		xhr.open("GET", PROXY_URL + imageUrl);
		xhr.responseType = "blob";

		var objURL;

		xhr.onload = function () {
			var el = document.getElementById(productId);
			objURL = URL.createObjectURL(xhr.response);

			el.setAttribute("src", objURL);
			//return objURL;
		};

		xhr.send(objURL);

		console.log(objURL);
		//return String(objURL);
	};

	return (
		<div className="grid">
			{data.map((item) => (
				<div key={item.originalId} className="card">
					<img
						id={item.originalId}
						alt={item.description}
						src={requestRemoteImage(item.imageUrl, item.originalId)}
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
