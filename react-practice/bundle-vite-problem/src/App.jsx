// // large bundle problem
// import React, { useState } from "react";
// import Home from "./Home";
// import Dashboard from "./Dashboard";

// function App() {
// 	const [route, setRoute] = useState("home");

// 	return (
// 		<div>
// 			<button onClick={() => setRoute("home")}>Home</button>
// 			<button onClick={() => setRoute("dashboard")}>Dashboard</button>
// 			<button onClick={() => setRoute("products")}>Products</button>

// 			{route === "home" && <Home />}
// 			{route === "dashboard" && <Dashboard />}
// 		</div>
// 	);
// }

// export default App;

// // code splittling
// import React, { useState, Suspense } from 'react';

// const Home = React.lazy(() => import('./Home'));
// const Dashboard = React.lazy(() => import('./Dashboard'));

// function App() {
//   const [route, setRoute] = useState('home');

//   let Component;

//   if (route === 'home') Component = Home;
//   if (route === 'dashboard') Component = Dashboard;

//   return (
//     <div>
//       <button onClick={() => setRoute('home')}>Home</button>
//       <button onClick={() => setRoute('dashboard')}>Dashboard</button>

//       <Suspense fallback={<div>Loading...</div>}>
//         <Component />
//       </Suspense>
//     </div>
//   );
// }

// export default App;

// // code splitting with prefetching
// import React, { useState, Suspense } from 'react';

// const Home = React.lazy(() => import('./Home'));
// const Dashboard = React.lazy(() => import('./Dashboard'));

// function App() {
//   const [route, setRoute] = useState('home');

//   const Component = route === 'home' ? Home : Dashboard;

//   return (
//     <div>
//       <button onClick={() => setRoute('home')}>Home</button>

//       <button
//         onMouseEnter={() => {
//           console.log("Prefetching Dashboard...");
//           import('./Dashboard'); // 🔥 prefetch
//         }}
//         onClick={() => setRoute('dashboard')}
//       >
//         Dashboard
//       </button>

//       <Suspense fallback={<div>Loading...</div>}>
//         <Component />
//       </Suspense>
//     </div>
//   );
// }

// export default App;

// prefetching using router library
// Note: dont import the components and
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		// lazy: () => import("./Home"),
// 		lazy: async () => {
// 			const module = await import("./Home"); //implicit use element: Component
// 			return { Component: module.default };
// 		},
// 	},
// 	{
// 		path: "/dashboard",
// 		// lazy: () => import("./Dashboard"),
// 		lazy: async () => {
// 			const module = await import("./Dashboard");
// 			return { Component: module.default };
// 		},
// 	},
// ]);

// export default function App() {
// 	return <RouterProvider router={router} />;
// }

import React from "react";
import { useState } from "react";
import ProductList from "./ProductList";
import productsData from "./products";
import { useCallback } from "react";
import { useMemo } from "react";
import { Link } from "react-router-dom";

// parent component
export default function App() {
	const [search, setSearch] = useState("");
	const [cartCount, setCartCount] = useState(0);

	console.log("Rendering App");

	// 🚨 EXPENSIVE FILTER
	const filteredProducts = useMemo(() => {
		console.log("Filtering products...");
		return productsData.filter((product) =>
			product.name.toLowerCase().includes(search.toLowerCase()),
		);
	}, [search]);

	// using useCallback use same memory ref
	const handleAddToCart = useCallback((id) => {
		setCartCount((prev) => prev + 1);
	}, []);

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

		</div>
	);
}
