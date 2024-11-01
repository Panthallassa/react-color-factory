import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ColorList from "./components/ColorList";
import ColorPage from "./components/ColorPage";
import ColorForm from "./components/ColorForm";
import "./App.css";

function App() {
	const [colors, setColors] = useState([
		{ name: "red", hex: "#FF0000" },
	]);

	const addColor = (newColor) => {
		setColors([...colors, newColor]);
	};

	return (
		<Routes>
			<Route
				path='/colors'
				element={<ColorList colors={colors} />}
			/>
			<Route
				path='/colors/new'
				element={<ColorForm addColor={addColor} />}
			/>
			<Route
				path='/colors/:color'
				element={<ColorPage colors={colors} />}
			/>
			<Route path='*' element={<Navigate to='/colors' />} />
		</Routes>
	);
}

export default App;
