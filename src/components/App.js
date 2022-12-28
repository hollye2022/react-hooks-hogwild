import React from "react";
import Nav from "./Nav";
import Body from "./Body";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Body hogs={hogs}/>
		</div>
	);
}

export default App;
