import React from "react";



// wrap the component in memo to prevent unneccery re- renders but this memo works shallow comparison. 
const ProductCard = React.memo(function ProductCard({product,onAddToCart}){
	console.log("Rendering ProductCard:", product.id);

	return (
		<div
			style={{
				border: "1px solid gray",
				margin: "10px",
				padding: "10px",
			}}
		>
			<h3>{product.name}</h3>
			<p>${product.price}</p>

			<button onClick={() => onAddToCart(product.id)}>Add To Cart</button>
		</div>
	);
}//func end in memo

)// memo

export default ProductCard
