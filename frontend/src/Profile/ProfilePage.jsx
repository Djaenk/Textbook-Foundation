import React from 'react';
import { Navigation } from '../app/Navigation';
import Books from '../api/books';
import { BorrowedBooks } from './BorrowedBooks';
import { DonatedBooks } from './DonatedBooks';


export const ProfilePage = props =>{
	const booksRespository = new Books();

	return <>
		<Navigation/>
		<div className="container-fluid mt-3">	
			<div className="row">
				<div className="col">
					<DonatedBooks heading="Donated Books" booksPromise={booksRespository.getDonations(sessionStorage.userId)}/>
				</div>
			</div>
			<div className="row">
				<div className="line"></div>
			</div>
			<div className="row">
				<div className="col">
					<BorrowedBooks heading="Borrowed Books" booksPromise={booksRespository.getBorrows(sessionStorage.userId)}/>
				</div>
			</div>
		</div>
	</>
}