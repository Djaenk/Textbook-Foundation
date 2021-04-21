import React, { useEffect, useState } from 'react';
import { Navigation } from '../app/Navigation';
import {Books, Accounts} from '../api';
import {Link} from 'react-router-dom';

export const Book = props => {

	const {id} = props.match.params;
	const bookApi = new Books();
	const acctApi = new Accounts();
	const [book, setBook] = useState(0);
	const [donor, setDonor] = useState(0);

	useEffect(() => {

		if (!book) {
			bookApi.getBook(id)
			.then(x => setBook(x.data))
		}

		if (book && !donor) {
			acctApi.getProfile(book[0].donorID)
			.then(x => setDonor(x.data));
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
		{book && (
		<div className="w-100 p-3">
			<div className="bg-light border p-4 clearfix">

				{book && book[0] === sessionStorage.getItem('userID') && (
				<div className="border m-3 p-2 rounded clearfix">
					<button type="button" class="btn btn-primary float-right" onClick={deleteThis}>Cancel Listing</button>
					<span className="">You are the donor for this listing.</span>
				</div>
				)}

				{donor && (<div className="border bg-secondary text-white text-center rounded float-right p-5">
					<h3><u>{donor[0].username}</u></h3>
					{donor[0].email}<br/>
					{donor[0].phoneNumber}<br/>
				</div>)}
				<div className="">		
					<h1>{book[0].Title}</h1>
					<b>Author:</b> {book[0].Author}<br/>
					<b>ISBN:</b> {book[0].ISBN}<br/>
					<b>Publisher:</b> {book[0].Publisher}<br/>
					<b>Year:</b> {book[0].publicationDate.substring(0,4)}<br/>
					<br/>
					<b>Condition:</b> {book[0].bookCondition}<br/>
				</div>
			</div>
			
			
		</div>
		)}
	</>);
}

//{"bookID":3,"donorID":3,"ISBN":10101,"Title":"Placeholder","Author":"Placeholder","Publisher":"Placeholder","publicationDate":"2000-10-27T00:00:00.000Z","bookCondition":1,"borrowerID":2,"donationDate":"2021-04-01T18:13:48.000Z"}
