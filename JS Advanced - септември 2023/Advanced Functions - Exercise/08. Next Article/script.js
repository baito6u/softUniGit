function getArticleGenerator(articles) {
    let counter = 0;
    //let articlesArr = articles;
  const container = document.getElementById("content");

  return () => {
    if (articles[counter]) {
      const article = document.createElement("article");
      article.textContent = articles[counter];
      container.appendChild(article);
    }
    counter++;
  }
}
