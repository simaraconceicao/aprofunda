const PostFactory = require('./factory2')

const article = PostFactory.createPost(
  'artigo', 
  'Introdução ao Node.js', 
  'Node.js é um ambiente...'
)
console.log(article.getDetails())

const news = PostFactory.createPost(
  'noticia',
  'lançamento do bun',
  'Bun é um ambiente...'
)
console.log(news.getDetails())