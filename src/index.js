import React, { useState } from "react";
import { render } from "react-dom";

function App() {
	const [showMsg, setShowMsg] = useState(false);

	return (
		<>
			<button onClick={() => setShowMsg(true)}>Click to see a message!</button>
			{showMsg && <div>Items will be displayed here...</div>}
		</>
	);
}

render(<App />, document.getElementById("root"));
