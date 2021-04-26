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
		<div className="container-fluid mt-3">

			<div className="row">
				<div className="col">
					<ProfileInfo heading="Profile Information" profilePromise={accountsRepository.getProfile(id)}/>
				</div>
				{id === sessionStorage.userId && <Link to='/profile/edit' >Edit your account... </Link>}
			</div>

			<div className="row">
				<div className="line"></div>
			</div>	

			<div className="row">
				<div className="col">
					{/* <DonatedBooks heading="Donated Books" booksPromise={booksRespository.getDonations(sessionStorage.userId)}/> */}
					<BookTable heading="Donated Books" booksPromise={booksRespository.getDonations(id)}/>
				</div>
			</div>

			<div className="row">
				<div className="line"></div>
			</div>

			<div className="row">
				<div className="col">
					{/* <BorrowedBooks heading="Borrowed Books" booksPromise={booksRespository.getBorrows(sessionStorage.userId)}/> */}
					<BookTable heading="Borrowed Books" booksPromise={booksRespository.getBorrows(id)}/>
				</div>
			</div>
		</div>
	</>
}