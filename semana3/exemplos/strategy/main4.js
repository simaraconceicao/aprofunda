const { MarkdownFormatter, HTMLFormatter, ContentFormatter } = require('./strategy')

const formatter = new ContentFormatter()

formatter.setStrategy(new MarkdownFormatter())
console.log(formatter.format('Este é o conteúdo do post.'))

formatter.setStrategy(new HTMLFormatter())
console.log(formatter.format('Este é o conteúdo do post.'))