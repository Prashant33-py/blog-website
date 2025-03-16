import { useParams } from "react-router-dom";
import { articles } from "./article-content";
import { NotFoundPage } from "./NotFoundPage";
import { useState, useEffect } from "react";
import axios from "axios";
import { CommentsList } from "../components/CommentsList";
import { AddCommentForm } from "../components/AddCommentForm";

const DEFAULT_URL = "http://localhost:8000";

export function ArticlePage() {
	const [articleInfo, setArticleInfo] = useState({
		upvotes: 0,
		comments: [],
	});
	const { articleId } = useParams();

	useEffect(() => {
		const loadArticleInfo = async () => {
			const getURL = `${DEFAULT_URL}/api/articles/${articleId}`;
			const response = await axios.get(getURL);
			const newArticleInfo = response.data;
			setArticleInfo(newArticleInfo);
		};

		loadArticleInfo();
	}, [articleId]);

	const article = articles.find((article) => article.name == articleId);

	const addUpvote = async () => {
		const response = await axios.put(
			`${DEFAULT_URL}/api/articles/${articleId}/upvote`
		);
		const updatedArticle = response.data;
		setArticleInfo(updatedArticle);
	};

	if (!article) {
		return <NotFoundPage />;
	}

	return (
		<div className="mx-auto p-4 w-1/3">
			<h1 className="text-2xl font-bold">{article.title}</h1>
			<p className="text-left px-3">Upvotes: {articleInfo.upvotes}</p>
			{article.content.map((paragraph, index) => (
				<p
					key={index}
					className="text-left p-3">
					{paragraph}
				</p>
			))}
			<button
				onClick={addUpvote}
				className="mx-0 rounded-xl border-2 py-2 px-3 bg-black text-white">
				Upvote
			</button>
			<AddCommentForm
				articleId={articleId}
				onArticleUpdated={(updatedArticle) =>
					setArticleInfo(updatedArticle)
				}
			/>
			<CommentsList comments={articleInfo.comments} />
		</div>
	);
}
