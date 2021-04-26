import React from 'react';
import { SearchIcon } from '../app/Icons';

export class AllBooksTable extends React.Component{
	state = {
		books: [],
		favoritesOnly: false,
	};

	

	render() {
		return <>
			<h3 className="text-left mx-3">All Books</h3>
			<form className="form-inline">
				<input name="search-input" className="form-control m-3" type="search" placeholder="Filter Books" aria-label="Search"/>
				<input name="favorites-toggle" className="form-check-input" type="checkbox" aria-label="Favorites only"/>
				<label for="favorites-toggle" className="form-check-label">Favorites only</label>
			</form>
			<table className="table table-sm text-left">
				<thead className="thead-dark">
					<th>Book Title</th>
					<th>ISBN-13</th>
					<th>Status</th>
					<th></th>
				</thead>
				<tbody>
					{this.state.books.map(book =>
						<tr>
							<td className={book.favorite ? "" : "star"}>{book.title}</td>
							<td>{book.isbn}</td>
							<td>{book.status}</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	}
}
