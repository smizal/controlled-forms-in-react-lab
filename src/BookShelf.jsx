import { useState } from 'react'

const BookShelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' }
  ])

  const [newBook, setNewBook] = useState({ title: '', author: '' })

  const handleInputChange = (event) => {
    newBook = setNewBook({
      ...newBook,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setBooks([...books, newBook])
    setNewBook({ title: '', author: '' })
  }

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Book title: </label>
              <input
                id="title"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="author">Book Author: </label>
              <input
                id="author"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Add Book</button>
          </form>
        </div>
        <div className="bookCardsDiv">
          {books.map((book) => (
            <div className="bookCard">
              <h3>{book.title}</h3>
              <h5>{book.author}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default BookShelf
