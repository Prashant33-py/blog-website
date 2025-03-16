export function CommentsList({ comments }) {
	return (
		<>
			<h3 className="text-left px-3 text-2xl font-bold">
				{comments.length == 0 ? "No comments added" : "Comments"}
			</h3>
			{comments.map((comment, idx) => (
				<div
					className="text-left m-3"
					key={idx}>
					<h4 className="font-bold">{comment.postedBy}</h4>
					<p>{comment.comment}</p>
					<hr className="my-3" />
				</div>
			))}
		</>
	);
}
