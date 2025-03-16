import { Link } from "react-router-dom";
export function ArticlesList({ articles, articleListType }) {
	return (
		<div className="mx-auto w-1/3 p-4">
			<h1 className="text-center text-2xl font-bold">
				{articleListType}
			</h1>
			{articles.map((article) => (
				<Link
					key={article.name}
					to={article.name}>
					<p className="text-xl text-left">{article.title}</p>
					<p className="text-left">
						{article.content[0].substring(0, 150)}...
					</p>
					<hr className="my-5" />
				</Link>
			))}
		</div>
	);
}
