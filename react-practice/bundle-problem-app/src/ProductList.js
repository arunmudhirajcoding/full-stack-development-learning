import ProductCard from "./ProductCard";

export default function ProductList({ products, onAddToCart }) {
	console.log("Rendering ProductList");

	return (
		<div>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					onAddToCart={onAddToCart}
				/>
			))}
		</div>
	);
}
