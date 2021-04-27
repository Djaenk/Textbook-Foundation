import React, { useEffect, useState } from 'react';
import { Navigation } from '../app/Navigation';
import { Books } from '../api/books'
import { Redirect } from 'react-router-dom';

export const Donate = props => {

	const bookApi = new Books();
	const [search, setSearch] = React.useState('');
	const [book, setBook] = useState(0);
	const [isbn, setIsbn] = React.useState(0);
	const [title, setTitle] = React.useState('');
	const [author, setAuthor] = React.useState('');
	const [publisher, setPublisher] = React.useState('');
	const [publicationDate, setDate] = React.useState('');
	const [condition, setCondition] = React.useState('');
	const [donor, setDonor] = React.useState('');
	var invalidISBN = false;

	useEffect(() => {
		setDonor(sessionStorage.getItem('userId'));

		if (!book) {
			bookApi.getBookIsbn(search).then( bookValues => {
				setBook(bookValues.data[0]);
			})
		}
	});

	function searchHandle() {
			bookApi.getBookIsbn(search).then( bookValues => {
				setBook(bookValues.data[0]);
			})
			if(book !== undefined){
				setIsbn(search);
				const title = document.querySelector('#bookTitle');
				title.value = book.Title;
				setTitle(title.value);
				const isbn = document.querySelector('#isbn');
				isbn.value = book.ISBN;
				setIsbn(isbn.value);
				const author = document.querySelector('#author');
				author.value = book.Author;
				setAuthor(author.value);
				const publisher = document.querySelector('#publisher');
				publisher.value = book.Publisher;
				setPublisher(publisher.value);
			}
			else {
				invalidISBN = false;
			}
	}

	function submitDonate () {
		const donateState = {
			author: author,
			publisher: publisher,
			publicationDate: publicationDate,
			condition: condition,
			donorID: donor,
			borrowerID: null,
			title: title
		};
		bookApi.postBook(isbn, donateState);
	}
	if (sessionStorage.getItem("isAuthenticated") === "false") {
 		return <Redirect to="/" />;
 	}
		return<>
				<Navigation/>
			  <div>

			    <form id="register-form" className="col-sm-13 col-md-11 col-lg-5 mt-5 mx-auto border-0" onSubmit={() => submitDonate()}>
			        <h2>Donate</h2>
							<div className="text-muted">Search or input book information.</div>
			        <div className="form-group mt-5">
								{ invalidISBN &&
										<p className="alert alert-danger">Invalid</p> }
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
			    <form id="register-form" className="col-sm-13 col-md-11 col-lg-5 mt-5 mb-5 mx-auto border-0"  onSubmit={() => submitDonate()}>
			        <div className="form-group">
			          <label htmlFor="bookTitle">Title *</label>
			          <input type="text" className="form-control" id="bookTitle" placeholder="Title"
								onChange={event => setTitle(event.target.value)} required/>
			        </div>
			        <div className="form-group">
			          <label htmlFor="isbn">ISBN-13 *</label>
			          <input type="number" className="form-control" id="isbn" placeholder="ISBN-13 (numbers only)"
								onChange={event => setIsbn(event.target.value)} required/>
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
			          <label htmlFor="publicationDate">Publication Date *</label>
			          <input type="date" className="form-control" id="publicationDate" placeholder="Date (numbers only)"
								onChange={event => setDate(event.target.value)} required/>
			        </div>
			        <div className="form-group">
			          <label htmlFor="condition">Select your book condition:</label>
			          <select className="form-control" id="condition" onChange={event => setCondition(event.target.value)}>
									<option hidden></option>
			            <option value="5">New</option>
			            <option value="4">Excellent</option>
			            <option value="3">Good</option>
			            <option value="2">Fair</option>
			            <option value="1">Poor</option>
			          </select>
			        </div>
			        <button type="submit" className="btn btn-info mt-4">Donate</button>
			    </form>

			  </div>

			</>;
}
