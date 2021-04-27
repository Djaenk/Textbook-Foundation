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
	const [ratings, setRatings] = useState([]);
	const [isFav, setIsFav] = useState(0);

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

		if (book) {
			bookApi.getRatings(book[0].ISBN)
		.then(x => setRatings(x.data));
		}

		if (book) {
			bookApi.getFavorite(sessionStorage.getItem('userId'), book[0].ISBN).then(favoritesValue => {
				setIsFav(favoritesValue.data.length);
			});
		}

	});

	const deleteThis = () => {
		if (window.confirm('Are you sure you want to DELETE this book?\nThis action can not be undone.')){
			bookApi.deleteBook(book[0].bookID)
		.then(x => {
			alert("Listing deleted successfully");
			props.history.push('/home');
		});
		}
		
	};

	const checkout = () => {
		if (window.confirm('Are you sure you want to checkout this book?')){
			bookApi.checkoutBook(sessionStorage.getItem('userId'), book[0].bookID);
		}	
	};

	const favorite = () => {
		bookApi.favoriteBook(book[0].ISBN, sessionStorage.getItem('userId'));
	};
		
	
	return (<>
		<Navigation />
		
		<div className="container">
		
		{!book && (
			<div className="text-center m-5"><h1>Loading...</h1></div>
		)}
		{book && book[0] && (
		<div className="w-100 p-3">
			<div className="bg-light border p-4 clearfix">

				{!borrower && book[0].donorID == sessionStorage.getItem('userId') && 
					<><div className="border m-3 p-2 rounded clearfix">
						<div className="alert alert-info"><span className="">You are the donor for this listing.</span></div>
					</div>
				</>
				}

				{book && borrower[0] && 
					<div className="border m-3 p-2 rounded clearfix">
						<div className="alert alert-info"><span className="">This book was donated to <Link to={'/profile/' + borrower[0].userID}>{borrower && borrower[0].username}</Link> on {book[0].donationDate.substring(0,10)}.</span></div>
					</div>
				}
				
				<div className="row">
					<div className="col-lg-4">
						{donor && 
				<div className="border bg-secondary text-white text-center rounded p-5">
					{donor[0] && <>
						<h3>{donor[0].firstName + ' ' + donor[0].lastName}</h3>
						<p><Link to={ '/profile/' + donor[0].userID } className="text-white">{donor[0].username} -{'>'}</Link></p>
						{donor[0].email}<br/>
						{donor[0].phoneNumber}<br/>
					</>}
					{!donor[0] && <>
						<span>Error retrieving donor information</span>
					</>}
					
				</div>}
						</div>	
						
						<div className="col-lg-8">
							<div className="btn-group float-md-right"><span className="">
								{!borrower && book[0].donorID == sessionStorage.getItem('userId') && 
								<button type="button" className="btn btn-primary btn-danger d-block mt-2" onClick={deleteThis}>Cancel Listing</button>
								}
								{book[0].donorID == window.sessionStorage.getItem('userId') || (
								book[0].borrowerID != null ||
							(<button type="button" className="btn btn-primary d-block mt-2" onClick={() => checkout()}>Checkout</button>)
					)}	

					{true && (<button type="button" className={`btn btn-info ${isFav ? "disabled" : "active"} d-block mt-2`} onClick={() => favorite()}  >Favorite </button>)}
					</span>
					</div>


							<h1>{book[0].Title}</h1>
					<b>Author:</b> {book[0].Author}<br/>
					<b>ISBN:</b> {book[0].ISBN}<br/>
					<b>Publisher:</b> {book[0].Publisher}<br/>
					<b>Year:</b> {book[0].publicationDate.substring(0,4)}<br/>
					<br/>
					<b>Condition:</b> <Rating value={book[0].bookCondition}/><br/><br/>
				
					<div>
						<table className="table table-sm text-left">
						<thead className="thead-dark">
							<tr>
								<th>Rating</th>
								<th>User</th>
							</tr>
						</thead>
						<tbody>
							{ratings.map((rating, index) =>
								<tr key={index}>
									<td className=""><Rating value={rating.rating} /> ({rating.rating})</td>
									<td><Link to={ '/profile/' + rating.borrowerID } >{rating.borrowerID}</Link></td>
								</tr>
							)}
						</tbody>
					</table>
					</div>
					</div>

				</div>
			</div><br/>
			<Link to='/home' className="m-4"><button type="button" className="btn btn-primary">Return to Home</button></Link>
			
		</div>
		)}</div>
	</>);
}

//{"bookID":3,"donorID":3,"ISBN":10101,"Title":"Placeholder","Author":"Placeholder","Publisher":"Placeholder","publicationDate":"2000-10-27T00:00:00.000Z","bookCondition":1,"borrowerID":2,"donationDate":"2021-04-01T18:13:48.000Z"}
