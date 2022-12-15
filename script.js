'use strict'

const books = document.querySelectorAll('.book')
const adv = document.querySelector('.adv')
const listBook2 = books[0].querySelectorAll('li')
const listBook5 = books[5].querySelectorAll('li')
const listBook6 = books[2].querySelectorAll('li')

books[0].before(books[1])
books[3].before(books[4])
books[5].after(books[2])

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'

books[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов'

adv.remove()

listBook2[3].after(listBook2[6])
listBook2[4].before(listBook2[8])
listBook2[10].before(listBook2[2])
listBook5[4].after(listBook5[2])
listBook5[3].before(listBook5[9])
listBook5[7].after(listBook5[5])

const newChapter = listBook6[0].cloneNode()
newChapter.textContent = 'Глава 8: За пределами ES6'
listBook6[8].after(newChapter)

