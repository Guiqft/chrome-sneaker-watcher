import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { CircularProgress } from "@material-ui/core";

import { searchSneaker } from "../../Utils";
import Grid from "../Grid";

import { useStyles } from "../../Styles";

import "./styles.css";

function Products({ keywordStore }) {
	const classes = useStyles();

	const [loading, setLoading] = useState(true);
	const [apiData, setApiData] = useState({});
	const [numberOfResults, setNumberOfResults] = useState(0);
	const [sneakersData, setSneakersData] = useState([]);

	const getApiData = async (name, size) => {
		console.log(
			"Searching for name: '" + name + "' with sizeCode: '" + size + "'"
		);

		try {
			const response = await searchSneaker(name, size);
			setApiData(response.data);
		} catch (err) {
			console.error(err);
		} finally {
			console.log("Success fetching API.");
		}
	};

	//useEffect to call API when form inputs changes
	useEffect(() => {
		keywordStore.keywords.nameKeyword &&
			getApiData(
				keywordStore.keywords.nameKeyword,
				keywordStore.keywords.sizeKeyword
			);
	}, [keywordStore.keywords.nameKeyword, keywordStore.keywords.sizeKeyword]);

	//useEffect to set our desired params when API response changes
	useEffect(() => {
		try {
			setNumberOfResults(apiData.searchInfo.number_of_results);
			setSneakersData(apiData.productsInfo.products);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	}, [apiData]);

	if (loading)
		return (
			<div className="productsInfo loading">
				<CircularProgress className={classes.circularLoading} />
			</div>
		);

	return (
		<div className="productsInfo">
			<p> Results ({numberOfResults || 0}):</p>

			<div className="scroll">
				<Grid data={sneakersData} />
			</div>
		</div>
	);
}

export default observer(Products);
