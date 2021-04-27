import React from 'react';
import { Navigation } from '../app/Navigation';
import Books from '../api/books';
import Accounts from '../api/accounts';
// import { BorrowedBooks } from './BorrowedBooks';
// import { DonatedBooks } from './DonatedBooks';
import { ProfileInfo } from './ProfileInfo';
import { Link } from 'react-router-dom';
import { BookTable } from '../Home/BookTable';
import { Redirect } from 'react-router-dom';


export const ProfilePage = props =>{
	const {id} = props.match.params;
	const booksRepository = new Books();
	const accountsRepository = new Accounts();

	if (sessionStorage.getItem("isAuthenticated") === "false") {
		return <Redirect to="/" />;
	}

	return <>
		<Navigation/>
		<div className="container mt-3">
			<div className="row">
				<div className="col-lg-4">
					<ProfileInfo heading="Profile Information" profilePromise={accountsRepository.getProfile(id)}/><br/>
					{id === sessionStorage.userId && <Link to='/profile/edit' ><button type="button" className="btn btn-primary">Edit your Account</button></Link>}
				</div>
				<div className="col-lg-8">
					{/* <DonatedBooks heading="Donated Books" booksPromise={booksRespository.getDonations(sessionStorage.userId)}/> */}
					<BookTable heading="Donated Books" booksPromise={booksRepository.getDonations(id)}/>				
					<div className="line"></div>
					{/* <BorrowedBooks heading="Borrowed Books" booksPromise={booksRespository.getBorrows(sessionStorage.userId)}/> */}
					<BookTable heading="Borrowed Books" booksPromise={booksRepository.getBorrows(id)}/>
					<div className="line"></div>
					<BookTable heading="Favorited Books" booksPromise={booksRepository.getFavorites(id)}/>
					<div className="line"></div>
					<BookTable heading="Wishlist" booksPromise={accountsRepository.getWishlist(id)}/>
				</div>
			</div>
		</div>
	</>
}