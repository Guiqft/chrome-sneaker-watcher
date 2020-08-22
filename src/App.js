import React from "react";
import Header from "./Components/Header";
import HomePage from "./Components/Homepage";

import "./global.css";

function App() {
	return (
		<div className="flex-column">
			<Header />
			<HomePage className="App-content" />
		</div>
	);
}

export default App;
