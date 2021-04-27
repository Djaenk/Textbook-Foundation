import React, { useEffect, useState } from 'react';
import { Navigation } from '../app/Navigation';
import { Books } from '../api/books'

export const Donate = props => {

	const [book, setBook] = useState([]);
	const [search, setSearch] = React.useState('');
	const [isbn, setIsbn] = React.useState(0);
	const [title, setTitle] = React.useState('');
	const [author, setAuthor] = React.useState('');
	const [publisher, setPublisher] = React.useState('');
	const [publicationDate, setDate] = React.useState('');
	const [condition, setCondition] = React.useState('');
	const bookApi = new Books();

	useEffect(() => {
			// bookApi.getBookIsbn(search)
			// .then(x => setBook(x.data));
			// console.log(book.data);
	});

	function searchHandle() {
		bookApi.getBookIsbn(search).then(bookValues => {
				setBook(bookValues.data);
				console.log(book.Title);
				const title = document.querySelector('#bookTitle');
				title.value = book.Title;
				// const isbn = document.querySelector('#isbn');
				// isbn.value = book.ISBN;
				// const author = document.querySelector('#author');
				// title.value = book.Title;
				// const publisher = document.querySelector('#publisher');
				// title.value = book.Title;
				// const publicationDate = document.querySelector('#publicationDate');
				// title.value = book.Title;
				// const condition = document.querySelector('#condition');
				// title.value = book.Title;
			});
	}

		return<>
				<Navigation/>
			  <div>

			    <form id="register-form" className="col-sm-13 col-md-11 col-lg-5 mt-5 mx-auto border-0">
			        <h2>Donate</h2>
							<div className="text-muted">Search or input book information.</div>
			        <div className="form-group mt-5">
			          <label htmlFor="bookSearch">Book Search:</label>
			          <div className="input-group mb-3" id="bookSearch">
			            <input type="number" className="form-control" placeholder="ISBN-13" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={event => setSearch(event.target.value)}/>
			            <div className="input-group-append">
			              <button className="btn btn-outline-secondary" type="button" onClick={() => searchHandle()}>Search</button>
			            </div>
			          </div>
			        </div>
			    </form>
			    <br/><hr className="col-sm-15 col-md-13 col-lg-7"/>
			    <form id="register-form" className="col-sm-13 col-md-11 col-lg-5 mt-5 mb-5 mx-auto border-0">
			        <div className="form-group">
			          <label htmlFor="bookTitle">Title</label>
			          <input type="text" className="form-control" id="bookTitle" placeholder="Title"
								onChange={event => setTitle(event.target.value)}/>
			        </div>
			        <div className="form-group">
			          <label htmlFor="isbn">ISBN-13</label>
			          <input type="number" className="form-control" id="isbn" placeholder="ISBN-13 (numbers only)"
								onChange={event => setIsbn(event.target.value)}/>
			        </div>
							<div className="form-group">
			          <label htmlFor="author">Author</label>
			          <input type="text" className="form-control" id="author" placeholder="Author Name"
								onChange={event => setAuthor(event.target.value)}/>
			        </div>
							<div className="form-group">
			          <label htmlFor="publisher">Publisher</label>
			          <input type="text" className="form-control" id="publisher" placeholder="Publisher Name"
								onChange={event => setPublisher(event.target.value)}/>
			        </div>
							<div className="form-group">
			          <label htmlFor="publicationDate">Publication Date</label>
			          <input type="text" className="form-control" id="publicationDate" placeholder="Date (numbers only)"
								onChange={event => setDate(event.target.value)}/>
			        </div>
			        <div className="form-group">
			          <label htmlFor="condition">Condition</label>
			          <select className="form-control" id="condition" onChange={event => setCondition(event.target.value)}>
									<option hidden></option>
			            <option>Excellent</option>
			            <option>Good</option>
			            <option>Fair</option>
			            <option>Poor</option>
			          </select>
			        </div>
			        <button type="submit" className="btn btn-info mt-4">Donate</button>
			    </form>

			  </div>

			</>;
}
