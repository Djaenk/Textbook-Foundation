import React from 'react';
import './BookTable.css';

export const BookTable = props =>
<>
	<h3 class="text-left m-3">{props.heading}</h3>
	<table class="table table-sm text-left">
		<thead class="thead-dark">
			<th>Book Title</th>
			<th>ISBN-13</th>
			<th>Status</th>
		</thead>
		<tbody>
			{props.books.map(book =>
				<tr>
					<td className={book.favorite ? "" : "star"}>{book.title}</td>
					<td>{book.isbn}</td>
					<td>{book.status}</td>
				</tr>
			)}
		</tbody>
	</table>
</>