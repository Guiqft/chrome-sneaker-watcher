import React from "react";
import Navbar from "react-bootstrap/Navbar";
import HomePage from "./Components/Homepage";
import { KeywordStore } from "./Store";

import "./App.css";

const keywordStore = new KeywordStore();

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar bg="primary" expand="lg" variant="dark">
					<Navbar.Brand href="#home">Sneaker Watcher</Navbar.Brand>
				</Navbar>
			</header>
			<HomePage keywordStore={keywordStore} />
		</div>
	);
}

export default App;
