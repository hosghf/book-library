let myLibrary = []

const formDom = {
  title: document.getElementById('title'),
  author: document.getElementById('author'),
  pages: document.getElementById('pages'),
  read: document.getElementById('read')
}

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.toggleRead = function() {
  this.read = !this.read
}

function addBookToLibrary() {
  if(validate(
    {
      title: formDom.title.value,
      author: formDom.author.value,
      pages: formDom.pages.value,
      read: formDom.read.checked
    }) === false ) return

  myLibrary.push(new Book(
                 formDom.title.value,
                 formDom.author.value,
                 formDom.pages.value,
                 formDom.read.checked))
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
    const readCheckbox = document.createElement('input')
    const removeBtn = document.createElement('button')

    titleResualt.innerHTML = element.title
    authorResualt.innerHTML = element.author
    pagesResualt.innerHTML = element.pages

    readCheckbox.setAttribute('type', 'checkbox')
    readCheckbox.checked = element.read
    readCheckbox.addEventListener('click', () => element.toggleRead())

    removeBtn.innerText = 'remove'
    removeBtn.setAttribute('id', index)
    removeBtn.addEventListener('click', () => removeBookFromLibrary(index))

    resualt.appendChild(context)
    context.appendChild(titleResualt)
    context.appendChild(authorResualt)
    context.appendChild(pagesResualt)
    context.appendChild(readCheckbox)
    context.appendChild(removeBtn)
  });
}

function removeBookFromLibrary(elementIndex) {
  myLibrary.splice(elementIndex,1)
  showResualt()
}

function validate({title, author, pages}) {
  clearError()

  if(title.length < 5) {
    formDom.title.classList.add('error')
    formDom.title.nextElementSibling.classList.add('d-block')
    return false
  }

  if(author.length === 0) {
    formDom.author.classList.add('error')
    formDom.author.nextElementSibling.classList.add('d-block')
    return false
  }

  if(pages.length === 0) {
    formDom.pages.classList.add('error')
    formDom.pages.nextElementSibling.classList.add('d-block')
    return false
  }
}

function showError() {
}

function clearError() {
  for(filed in formDom) {
    formDom[filed].classList.remove('error')

    if(formDom[filed].nextElementSibling) {
      formDom[filed].nextElementSibling.classList.remove('d-block')
    }
  }
}

const addBook = document.getElementById('addBook')
addBook.addEventListener('click', addBookToLibrary)