import { ArticlesList } from "../components/ArticlesList";
import { articles } from "./article-content";

export function ArticlesListPage() {
	return (
		<ArticlesList
			articles={articles}
			articleListType="Articles"
		/>
	);
}
