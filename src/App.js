import React from "react";
import Header from "./Components/Header";
import HomePage from "./Components/Homepage";
import { KeywordStore } from "./Store";

import "./global.css";

const keywordStore = new KeywordStore();

function App() {
	return (
		<div>
			<Header />
			<HomePage className="App-content" keywordStore={keywordStore} />
		</div>
	);
}

export default App;
