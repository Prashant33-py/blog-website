import { useParams } from "react-router-dom";
import { articles } from "./article-content";
import { NotFoundPage } from "./NotFoundPage";

export function ArticlePage() {
	const { articleId } = useParams();
	const article = articles.find((article) => article.name == articleId);
	if (!article) {
		return <NotFoundPage />;
	}

	return (
		<div className="mx-auto p-4 w-1/3">
			<h1 className="text-2xl font-bold">{article.title}</h1>
			{article.content.map((paragraph, index) => (
				<p
					key={index}
					className="text-left p-3">
					{paragraph}
				</p>
			))}
		</div>
	);
}
