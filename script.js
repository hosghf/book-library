let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  const title = document.getElementById('title')
  const author = document.getElementById('author')
  const pages = document.getElementById('pages')
  const read = document.getElementById('read')

  myLibrary.push(new Book(title.value, author.value, pages.value, read.checked))
  showResualt()
}

function showResualt() {
  const resualt = document.getElementById('resualt')
  resualt.innerHTML = ''
  
  myLibrary.forEach((element, index) => {
    const context = document.createElement('div')
    context.classList.add('row')

    const titleResualt = document.createElement('div')
    const authorResualt = document.createElement('div')
    const pagesResualt = document.createElement('div')
    const readResualt = document.createElement('input')
    const removeBtn = document.createElement('button')

    titleResualt.innerHTML = element.title
    authorResualt.innerHTML = element.author
    pagesResualt.innerHTML = element.pages

    readResualt.setAttribute('type', 'checkbox')
    readResualt.checked = element.read
    readResualt.addEventListener('click', () => toggleRead(index))

    removeBtn.innerText = 'remove'
    removeBtn.setAttribute('id', index)
    removeBtn.addEventListener('click', () => removeBookFromLibrary(index))

    resualt.appendChild(context)
    context.appendChild(titleResualt)
    context.appendChild(authorResualt)
    context.appendChild(pagesResualt)
    context.appendChild(readResualt)
    context.appendChild(removeBtn)
  });
}

function removeBookFromLibrary(elementIndex) {
  myLibrary.splice(elementIndex,1)
  showResualt()
}
  
function toggleRead(elementIndex) {
  myLibrary[elementIndex].read = !myLibrary[elementIndex].read 
}

const addBook = document.getElementById('submit')
addBook.addEventListener('click', addBookToLibrary)