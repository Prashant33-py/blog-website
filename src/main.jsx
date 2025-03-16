import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
	apiKey: "AIzaSyCYISho9b4zqhs_M0UHmcpPmgJrJ5K2-98",
	authDomain: "my-react-blog-9f9d9.firebaseapp.com",
	projectId: "my-react-blog-9f9d9",
	storageBucket: "my-react-blog-9f9d9.firebasestorage.app",
	messagingSenderId: "688211414772",
	appId: "1:688211414772:web:bdccf63be28f43f1f258a1",
};
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
