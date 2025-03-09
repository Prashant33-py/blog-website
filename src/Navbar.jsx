import { Link } from "react-router-dom";

export function Navbar() {
	return (
		<nav className="place-items-center border-b-4">
			<ul className="flex w-xl">
				<li className="mx-auto my-5 font-bold">
					<Link to="/">Home</Link>
				</li>
				<li className="mx-auto my-5 font-bold">
					<Link to="/about">About</Link>
				</li>
				<li className="mx-auto my-5 font-bold">
					<Link to="/articles">Articles</Link>
				</li>
			</ul>
		</nav>
	);
}
