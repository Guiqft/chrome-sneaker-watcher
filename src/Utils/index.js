import axios from "axios";

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const API_URL = "https://busca.nike.com.br/";

export const searchSneaker = (name, size) =>
	axios.get(
		`${PROXY_URL}${API_URL}busca?q=${name}&origin=autocomplete&common_filter%5B372%5D=${size}&ajaxSearch=1&sort=5`,
		{
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
			},
		}
	);

export const Sizes = [
	{
		value: "3267",
		label: "37",
	},
	{
		value: "3275",
		label: "37,5",
	},
	{
		value: "3261",
		label: "38",
	},
	{
		value: "3254",
		label: "39",
	},
	{
		value: "3259",
		label: "40",
	},
	{
		value: "3257",
		label: "41",
	},
	{
		value: "3300",
		label: "41,5",
	},
	{
		value: "3256",
		label: "42",
	},
	{
		value: "3258",
		label: "43",
	},
	{
		value: "3277",
		label: "43,5",
	},
	{
		value: "3260",
		label: "44",
	},
	{
		value: "3255",
		label: "45",
	},
	{
		value: "3330",
		label: "45,5",
	},
];

export const convertToSize = (code) => {
	switch (code) {
		case "3267":
			return "37";
		case "3275":
			return "37,5";
		case "3261":
			return "38";
		case "3254":
			return "39";
		case "3259":
			return "40";
		case "3257":
			return "41";
		case "3300":
			return "41,5";
		case "3256":
			return "42";
		case "3258":
			return "43";
		case "3277":
			return "43,5";
		case "3255":
			return "45";
		case "3330":
			return "45,5";
		default:
			return;
	}
};
