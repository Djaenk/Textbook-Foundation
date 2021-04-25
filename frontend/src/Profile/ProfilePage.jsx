import React from 'react';
import { Navigation } from '../app/Navigation';
import Books from '../api/books';
import Accounts from '../api/accounts';
import { BorrowedBooks } from './BorrowedBooks';
import { DonatedBooks } from './DonatedBooks';
import { ProfileInfo } from './ProfileInfo';
import { Link } from 'react-router-dom';


export const ProfilePage = props =>{
	const booksRespository = new Books();
	const accountsRepository = new Accounts();

	return <>
		<Navigation/>
		<div className="container-fluid mt-3">

			<div className="row">
				<div className="col">
					<ProfileInfo heading="Profile Information" accountsPromise={accountsRepository.getProfile(sessionStorage.userId)}/>
				</div>
				<Link to={ '/edit/' + sessionStorage.userId }>Edit your information... </Link>
			</div>

			<div className="row">
				<div className="line"></div>
			</div>	

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