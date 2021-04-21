import React, { useEffect, useState } from 'react';
import { Navigation } from '../app/Navigation';
import {Books, Accounts} from '../api';

export const Book = props => {

	const {id} = props.match.params;
	const bookApi = new Books();
	const acctApi = new Accounts();
	const [book, setBook] = useState(0);
	const [donor, setDonor] = useState(0);

	useEffect(() => {

		if (!book) {
			bookApi.getBook(id)
			.then(x => {
				setBook(x.data);
			})
		}
	});
	
	return (<>
		<Navigation />
		{!book && (
			<div className="text-center m-5"><h1>Loading...</h1></div>
		)}
		{book && (
		<div className="w-100 p-3">
			<div className="bg-light border p-4">			
				<h1>{book[0].Title}</h1>
				{book[0].Author}<br/>
				{book[0].ISBN}<br/>
				{book[0].Publisher}<br/>
				{book[0].publicationDate}<br/>
				{book[0].donationDate}<br/>
			</div>
		</div>
		)}
	</>);
}

//{"bookID":3,"donorID":3,"ISBN":10101,"Title":"Placeholder","Author":"Placeholder","Publisher":"Placeholder","publicationDate":"2000-10-27T00:00:00.000Z","bookCondition":1,"borrowerID":2,"donationDate":"2021-04-01T18:13:48.000Z"}
