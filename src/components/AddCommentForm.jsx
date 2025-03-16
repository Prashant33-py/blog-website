import axios from "axios";
import { useState } from "react";
export function AddCommentForm({ articleId, onArticleUpdated }) {
	const DEFAULT_URL = "http://localhost:8000";
	const [name, setName] = useState("");
	const [commentText, setCommentText] = useState("");

	const addComment = async () => {
		const response = await axios.post(
			`${DEFAULT_URL}/api/articles/${articleId}/comments`,
			{
				postedBy: name,
				comment: commentText,
			}
		);
		const updatedArticle = response.data;
		onArticleUpdated(updatedArticle);
		setName("");
		setCommentText("");
	};

	return (
		<div className="text-left">
			<h3 className="text-xl font-bold">Add a comment</h3>
			<label
				className="block"
				htmlFor="">
				Name: <br />
				<input
					className="border-2 rounded-sm w-sm"
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
				/>
			</label>
			<label
				htmlFor=""
				className="block">
				Comment: <br />
				<textarea
					className="border-2 rounded-sm w-sm"
					rows="4"
					type="text"
					value={commentText}
					onChange={(e) => setCommentText(e.target.value)}
				/>
			</label>
			<button
				className="rounded-xl border-2 py-2 px-3 bg-black text-white"
				onClick={addComment}>
				Add Comment
			</button>
		</div>
	);
}
