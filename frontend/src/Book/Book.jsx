import React, { useEffect, useState } from 'react';
import { Navigation } from '../app/Navigation';
import {Books, Accounts} from '../api';
import {Link} from 'react-router-dom';
import {Rating} from '.'

export const Book = props => {

	const {id} = props.match.params;
	const bookApi = new Books();
	const acctApi = new Accounts();
	const [book, setBook] = useState(0);
	const [donor, setDonor] = useState(0);
	const [borrower, setBorrower] = useState(0);

	useEffect(() => {

		if (!book) {
			bookApi.getBook(id)
			.then(x => setBook(x.data))
		}

		if (book && !donor) {
			acctApi.getProfile(book[0].donorID)
			.then(x => setDonor(x.data));
		}
		if (book && !borrower && book[0].borrowerID) {
			acctApi.getProfile(book[0].borrowerID)
			.then(x => setBorrower(x.data));
		}
	});

	const deleteThis = () => {
		bookApi.deleteBook(book[0].bookID)
		.then(x => {
			alert("Listing deleted successfully");
			props.history.push('/home');
		});
	};
	
	return (<>
		<Navigation />
		<Link to='/home' className="m-4"><button type="button" class="btn btn-primary">Return to Home</button></Link>
		{!book && (
			<div className="text-center m-5"><h1>Loading...</h1></div>
		)}
		{book && book[0] && (
		<div className="w-100 p-3">
			<div className="bg-light border p-4 clearfix">

				{!borrower && book[0].donorID == window.sessionStorage.getItem('userID') && 
					<div className="border m-3 p-2 rounded clearfix">
						<button type="button" class="btn btn-primary float-right" onClick={deleteThis}>Cancel Listing</button>
						<span className="">You are the donor for this listing.</span>
					</div>
				}

				{book && borrower[0] && 
					<div className="border m-3 p-2 rounded clearfix">
						<span className="">This book was donated to {borrower && borrower[0].username} on {book[0].donationDate.substring(0,10)}.</span>
					</div>
				}

				{donor && 
					<div className="border bg-secondary text-white text-center rounded float-right p-5">
						<h3><u>{donor[0].username}</u></h3>
						{donor[0].email}<br/>
						{donor[0].phoneNumber}<br/>
					</div>
				}
				<div className="">		
					<h1>{book[0].Title}</h1>
					<b>Author:</b> {book[0].Author}<br/>
					<b>ISBN:</b> {book[0].ISBN}<br/>
					<b>Publisher:</b> {book[0].Publisher}<br/>
					<b>Year:</b> {book[0].publicationDate.substring(0,4)}<br/>
					<br/>
					<b>Condition:</b> <Rating value={book[0].bookCondition}/><br/>

					{book[0].donorID != window.sessionStorage.getItem('userID') && (
						<button type="button" class="btn btn-primary d-block mt-2" onClick={() => alert("Not implemented")}>Check out</button>
					)}
					{console.log(book[0].donorID, window.sessionStorage.getItem('userID'))}
					{console.log(book[0].donorID == window.sessionStorage.getItem('userID'))}
					{console.log(book[0].donorID != window.sessionStorage.getItem('userID'))}
					{console.log(book[0].borrowerID, borrower)}

				</div>
			</div>
			
			
		</div>
		)}
	</>);
}

//{"bookID":3,"donorID":3,"ISBN":10101,"Title":"Placeholder","Author":"Placeholder","Publisher":"Placeholder","publicationDate":"2000-10-27T00:00:00.000Z","bookCondition":1,"borrowerID":2,"donationDate":"2021-04-01T18:13:48.000Z"}
