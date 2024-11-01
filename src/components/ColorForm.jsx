import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ColorForm({ addColor }) {
	const [name, setName] = useState("");
	const [hex, setHex] = useState("#000000");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		addColor({ name, hex });
		navigate("/colors");
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Color Name:
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</label>
			<label>
				Color Value:
				<input
					type='color'
					value={hex}
					onChange={(e) => setHex(e.target.value)}
				/>
			</label>
			<button type='submit'>Add Color</button>
		</form>
	);
}

export default ColorForm;
