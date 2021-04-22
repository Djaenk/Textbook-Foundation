import React from 'react';
import './BookTable.css';

export const BookTable = props =>
<>
	<h3 className="text-left m-3">{props.heading}</h3>
	<table className="table table-sm text-left">
		<thead className="thead-dark">
			<tr>
				<th>Book Title</th>
				<th>ISBN-13</th>
				<th>Status</th>
			</tr>
			
		</thead>
		<tbody>
			{props.books.map((book, index) =>
				<tr key={ index }>
					<td className={book.favorite ? "" : "star"}>{book.title}</td>
					<td>{book.isbn}</td>
					<td>{book.status}</td>
				</tr>
			)}
		</tbody>
	</table>
</>