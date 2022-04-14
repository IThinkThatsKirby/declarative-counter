// import React from "react";
import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function App() {
	let [counter, changeCounter] = useState(0);
	window.changeCounter = changeCounter;
	return (
		<div>
			<h1>{counter}</h1>
			<h4>{counter}</h4>
			<Stack direction="row" spacing={2}>
				<Button
					variant="outlined"
					onClick={() => {
						changeCounter(counter+1);
					}}
				>
					increase the numbers
				</Button>
			</Stack>
		</div>
	);
}

export default App;
