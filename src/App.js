import React from "react";
import SortingVisulizer from "./SortingVisualizer";
import { ArgumentProvider } from "./Variable";

function App() {
	return (
		<ArgumentProvider>
			<SortingVisulizer />
		</ArgumentProvider>
	);
}

export default App;
