import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Books from '../api/books';
import './BookTable.css';

export const BookTable = props => {
	const [books, setBooks] = React.useState([]);

	useEffect(() => {
		const booksRepository = new Books();
		booksRepository.getFavorites(sessionStorage.getItem('userId')).then(favoritesValue => {
			props.booksPromise.then(booksValue => {
				for (let book of booksValue.data){
					book.status = book.borrowerID ? 'Borrowed' : 'Donated';
					book.favorite = favoritesValue.data.some(f => f.Title === book.Title);
				}
				setBooks(booksValue.data);
			})
		});
	});

	return <>
		<h2 className="text-left mt-3 mb-3">{props.heading} ({books.length})</h2>
		<table className="table table-sm text-left cellSpacing">
			<thead className="thead-dark">
					<th>Book Title</th>
					<th>ISBN-13</th>
					<th>Status</th>
			</thead>
			<tbody>
				{books.map((book, index) =>
					<tr key={index}>
						<td className={book.favorite ? "star" : ""}><Link to={ '/books/' + book.bookID } >{book.Title}</Link></td>
						<td>{book.ISBN}</td>
						<td>{book.status}</td>
					</tr>
				)}
			</tbody>
		</table>
	</>
}
