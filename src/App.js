import React from "react";
import SortingVisulizer from "./SortingVisualizer";
import { ArgumentProvider } from "./Info";

function App() {
	return (
		<ArgumentProvider>
			<SortingVisulizer />
		</ArgumentProvider>
	);
}

export default App;
