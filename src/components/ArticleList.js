import Article from "./Article";

export default function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((element) => (
        <>
          <Article
            title={element.title}
            date={element.date}
            preview={element.preview}
          />
        </>
      ))}
    </main>
  );
}
