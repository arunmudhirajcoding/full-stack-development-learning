import { useState } from "react";
import ProductList from "./ProductList";
import productsData from "./products";

// parent component
export default function App() {
	// "use no memo"; use this to disable memoization in particular component
	const [search, setSearch] = useState("");
	const [cartCount, setCartCount] = useState(0);

	console.log("Rendering App");

	// 🚨 EXPENSIVE FILTER
	const filteredProducts = productsData.filter((product) =>
		product.name.toLowerCase().includes(search.toLowerCase()),
	);

	// using useCallback use same memory ref
	const handleAddToCart = (id) => {
		setCartCount((prev) => prev + 1);
	};

	return (
		<div style={{ padding: "20px" }}>
			<h1>Products</h1>

			<h2>Cart: {cartCount}</h2>

			<input
				type="text"
				placeholder="Search products..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			{/* child component */}
			<ProductList
				products={filteredProducts}
				onAddToCart={handleAddToCart}
			/>
		</div>
	);
}
