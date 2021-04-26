import React from 'react';
import { Navigation } from '../app/Navigation';
import Books from '../api/books';
import Accounts from '../api/accounts';
// import { BorrowedBooks } from './BorrowedBooks';
// import { DonatedBooks } from './DonatedBooks';
import { ProfileInfo } from './ProfileInfo';
import { Link } from 'react-router-dom';
import { BookTable } from '../Home/BookTable';


export const ProfilePage = props =>{
	const {id} = props.match.params;
	const booksRespository = new Books();
	const accountsRepository = new Accounts();

	return <>
		<Navigation/>
		<div className="container mt-3">

			<div className="row">
				<div className="col-md-4">
					<ProfileInfo heading="Profile Information" profilePromise={accountsRepository.getProfile(id)}/>
					{id === sessionStorage.userId && <Link to='/profile/edit' >Edit your account... </Link>}
				</div>
				<div className="col-md-8">
					{/* <DonatedBooks heading="Donated Books" booksPromise={booksRespository.getDonations(sessionStorage.userId)}/> */}
					<BookTable heading="Donated Books" booksPromise={booksRespository.getDonations(id)}/>				
					<div className="line"></div>
					{/* <BorrowedBooks heading="Borrowed Books" booksPromise={booksRespository.getBorrows(sessionStorage.userId)}/> */}
					<BookTable heading="Borrowed Books" booksPromise={booksRespository.getBorrows(id)}/>
					<div className="line"></div>
					<BookTable heading="Favorited Books" booksPromise={booksRespository.getFavorites(id)}/>
				</div>
			</div>
		</div>
	</>
}