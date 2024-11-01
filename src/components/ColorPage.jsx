import React from "react";
import {
	useParams,
	Navigate,
	Link,
} from "react-router-dom";

function ColorPage({ colors }) {
	const { color } = useParams();
	const foundColor = colors.find((c) => c.name === color);

	if (!foundColor) return <Navigate to='/colors' />;

	return (
		<div
			style={{
				backgroundColor: foundColor.hex,
				height: "100vh",
				color: "white",
			}}
		>
			<h1>{foundColor.name}</h1>
			<p>This is {foundColor.name}</p>
			<Link to='/colors'>Go Back</Link>
		</div>
	);
}

export default ColorPage;
