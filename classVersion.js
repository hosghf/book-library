// i make this library with javascript class and not constructor in
// this file.

let myLibrary = []

class Book {
  constructor(title, author, page, read) {
    this.title = title
    this.author = author
    this.page = page
    this.read = read
  }

  toggleRead() {
    this.read = !this.read
  }
}

myLibrary.push(new Book('harry', 'ahmad', 23, true))
myLibrary.push(new Book('jj', 'karim', 80, true))

console.log(myLibrary)
myLibrary[0].toggleRead()
myLibrary[1].toggleRead()
console.log(myLibrary)