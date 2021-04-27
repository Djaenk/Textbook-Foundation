import React, { useEffect, useStates } from 'react';
import { Navigation } from '../app/Navigation';
import { Books } from '../api/books'
import { Redirect } from 'react-router-dom';

export const Wishlist = props => {

	const bookRepository = new Books();
	const [isbn, setIsbn] = React.useState(0);
	const [book, setBook] = React.useState(0);
	const [user, setUser] = React.useState(0);
	var invalid = false;

	useEffect(() => {
		if (sessionStorage.getItem("isAuthenticated") === "false") {
			return <Redirect to="/" />;
		}
		else {
			setUser(sessionStorage.getItem('userId'));
		}
	});

	function submitForm() {
		bookRepository.getBookIsbn(isbn).then( bookValues => {
			setBook(bookValues.data[0]);
			console.log(book);
		})
		bookRepository.addWishlist(isbn, user);
		invalid = true;
	}

	if(invalid){
		return <Redirect to={ '/profile/' + sessionStorage.userId } />;
	}
	else{
	return <>
		<Navigation/>
		  <div>

		  <form id="register-form" className="col-sm-13 col-md-11 col-lg-5 mt-5 mx-auto border-0" onSubmit={() => submitForm()}>
		      <h2 id="pageTitle">Wishlist</h2>
					<p className="text-secondary mb-4">Please enter your desired book's ISBN.</p>
		      <div className="form-group">
		        <label htmlFor="isbn">ISBN-13</label>
		        <input type="number" className="form-control" id="isbn" placeholder="ISBN (numbers only)" onChange={event => setIsbn(event.target.value)} required/>
		      </div>
		      <button type="submit" className="btn btn-info mt-4" >Add to Wishlist</button>
		  </form>
		  </div>

		</>;
	}
}
