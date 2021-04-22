import React from 'react';
import { SearchIcon } from '../app/Icons';
import { Books } from '../api/books';
import { Link } from 'react-router-dom';

export class AllBooksTable extends React.Component{
	state = {
		books: [],
		favoritesOnly: false,
	};

	booksRepository = new Books();

	render() {
		return <>
			<h3 className="text-left mx-3">All Books</h3>
			<form className="form-inline">
				<input name="search-input" className="form-control m-3" type="search" placeholder="Filter Books" aria-label="Search"/>
				<input name="favorites-toggle" className="form-check-input" type="checkbox" aria-label="Favorites only"/>
				<label htmlFor="favorites-toggle" className="form-check-label">Favorites only</label>
			</form>
			<table className="table table-sm text-left">
				<thead className="thead-dark">
					<tr>
						<th>Book Title</th>
						<th>ISBN-13</th>
						<th>Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{this.state.books.map((book, index) =>
						<tr key={ index }>
							<td className={book.favorite ? "" : "star"}><Link to= { '/books/' +  book.bookID  }>{book.Title}</Link></td>
							<td>{book.ISBN}</td>
							<td>{book.status}</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	}
	componentDidMount() {
		this.booksRepository.getBooks()
            .then(books => this.setState(books));
	}
	
}
