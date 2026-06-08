import React, { useState } from "react";

// doest need state
const ProductRow = ({ product }) => {
	const name = product.stocked ? (
		product.name
	) : (
		<span style={{ color: "red" }}>{product.name}</span>
	);
	return (
		<tr className="ProductRow">
			<td>{name}</td>
			<td>{product.price}</td>
		</tr>
	);
};

// doesnt need state
const ProductCategoryRow = ({ category }) => {
	return (
		<tr>
			<th colSpan="2">{category}</th>
		</tr>
	);
};

const ProductTable = ({ products,filterText, inStockOnly }) => {
	const rows = [];
	let lastCategory = null;
	products.forEach((product) => {
		if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
			return;
		}

		if (inStockOnly && !product.stocked) {
			return;
		}
		// not null
		if (product.category !== lastCategory) {
			rows.push(
				<ProductCategoryRow
					category={product.category}
					key={product.category}
				/>,
			);
		}
		rows.push(<ProductRow product={product} key={product.name} />);
		lastCategory = product.category;
	});
	return (
		<table className="ProductTable">
			<thead
				className="details"
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					width: "20%",
				}}
			>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

const FilterableProductTable = ({ products }) => {
	const [filterText, setFilterText] = useState("");
	const [inStockOnly, setInStockOnly] = useState(false);
	return (
		<div>
			<div className="filterableProductTable">
				<input type="text" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
				<label htmlFor="show-stock">Show only products in stock</label>
				<input type="checkbox" id="show-stock" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} />
			</div>
			<ProductTable products={products} 
			filterText={filterText}
			inStockOnly={inStockOnly}
			/>
		</div>
	);
};

const App = () => {
	return (
		<div>
			<FilterableProductTable products={PRODUCTS} />
		</div>
	);
};

const PRODUCTS = [
	{ category: "Fruits", price: "$1", stocked: true, name: "Apple" },
	{ category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
	{ category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
	{ category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
	{ category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
	{ category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default App;
