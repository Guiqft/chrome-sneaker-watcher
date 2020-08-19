import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { searchSneaker } from "../../Utils";

function Products({ keywordStore }) {
	const [apiData, setApiData] = useState({});
	const [numberOfResults, setNumberOfResults] = useState(0);

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
		} catch (err) {
			console.log(err);
		}
	}, [apiData]);

	return (
		<div>
			<p> Number Of Results: {numberOfResults || 0}</p>
			<p>{keywordStore.keywords.sizeKeyword}</p>
		</div>
	);
}

export default observer(Products);
