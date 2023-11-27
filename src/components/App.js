import React, { useState } from "react";
import Nav from "./Nav";
import NavHogs from "./NavHogs";



import hogs from "../porkers_data";

function App() {
	const [hogsArray, setHogsArray] = useState(hogs)

	return (
		<div className="App">
			<Nav />
			<NavHogs hogsArray={hogsArray} hogs={hogs} setHogsArray={setHogsArray}/>
		</div>
	);
}

export default App;
