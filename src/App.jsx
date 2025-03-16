import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ArticlePage } from "./pages/ArticlePage";
import { ArticlesListPage } from "./pages/ArticlesListPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";
import { CreateAccountPage } from "./pages/CreateAccountPage";
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
							path="/login"
							element={<LoginPage />}
						/>
						<Route
							path="/create-account"
							element={<CreateAccountPage />}
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
