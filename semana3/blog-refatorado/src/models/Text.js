class Text {
  constructor({ id, title, content, slug, created_at, status, author }) {
    this.id = id
    this.title = title
    this.content = content
    this.slug = slug
    this.created_at = created_at
    this.status = status
    this.author = author
  }
}

module.exports = Text