const initialProducts = [
	{
		id: 0,
		name: "Baklava",
		count: 1,
	},
	{
		id: 1,
		name: "Cheese",
		count: 5,
	},
	{
		id: 2,
		name: "Spaghetti",
		count: 2,
	},
];

const updatedProducts = initialProducts.map((product) => {
	if (product.id == 0) {
		return {
			...product,
			count: product.count + 1,
		};
	}
	return product;
});
console.log(updatedProducts);

console.log(updatedProducts[0].name);
console.log(updatedProducts[0].count);
