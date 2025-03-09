import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ArticlePage } from "./pages/ArticlePage";
import { ArticlesListPage } from "./pages/ArticlesListPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Navbar } from "./Navbar";
function App() {
	return (
		<BrowserRouter>
			<main>
				<Navbar />
				<div className="text-center">
					<Routes>
						<Route
							path="/"
							element={<HomePage />}
						/>
						<Route
							path="/about"
							element={<AboutPage />}
						/>
						<Route
							path="/articles/:articleId"
							element={<ArticlePage />}
						/>
						<Route
							path="/articles"
							element={<ArticlesListPage />}
						/>
						<Route
							path="*"
							element={<NotFoundPage />}
						/>
					</Routes>
				</div>
			</main>
		</BrowserRouter>
	);
}

export default App;
