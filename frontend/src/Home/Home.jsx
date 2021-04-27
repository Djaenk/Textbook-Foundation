import React from 'react';
import { Navigation } from '../app/Navigation';
import { BookTable } from './BookTable';
import { AllBooksTable } from './AllBooksTable';
import Books from '../api/books';
import { Link } from 'react-router-dom';

export const Home = props => {
	const booksRespository = new Books();

	return <>
		<Navigation/>
		<div className="container-fluid mt-3">
			<div className="row">
				<div className="col mb-3">
					<BookTable heading="Donated Books" booksPromise={booksRespository.getDonations(sessionStorage.userId)}/>
				</div>
				<div className="col mb-3">
					<BookTable heading="Borrowed Books" booksPromise={booksRespository.getBorrows(sessionStorage.userId)}/>
				</div>
			</div>
			<hr/>
			<div className="row" style={{maxWidth: "1440px", margin: "0 auto"}}>
				<div className="col">
					<AllBooksTable heading="All Books" booksPromise={booksRespository.getBooks()}/>
				</div>
			</div>
		</div>
	</>
}
