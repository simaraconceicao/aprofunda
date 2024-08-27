// Factory de texto de blog
// new Post() -> instanciar uma classe

// tarefa nova: Criar o tipo de post news/noticia
// Problema que resolve: criar regras e instancias, baseadas em condiçõeses

//Primeira etapa classe mãe
class Post {
  constructor(title, content, type) {
    this.title = title
    this.content = content
    this.type = type
  }

  getDetails(){
    return `${this.type}: ${this.title} - ${this.content}`
  }
}

//classe filha
class Article {
  constructor(title, content) {
    return new Post(title, content, 'artigo')
  }
}

//classe filha
class Tutorial {
  constructor(title, content) {
    return new Post(title, content, 'tutorial')
  }
}

//classe filha
class News {
 constructor(title, content) {
  return new Post(title, content, 'noticia')
 }
}

//Factory
class PostFactory {
  static createPost(type, title, content) {
    switch(type) {
      case 'artigo':
        return new Article(title, content)
      case 'tutorial':
        return new Tutorial(title, content)
      case 'noticia':
        return new News(title, content)
      default:
        throw new Error('Tipo de post inválido')
    }
  }
}

module.exports = PostFactory