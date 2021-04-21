import React from 'react';
import { SearchIcon } from '../app/Icons';
import {StarFill, ArrowDownUp} from 'react-bootstrap-icons';

export const AllBooksTable = props => {
	let books = props.books;
	const [field, setField] = React.useState(null);
	const [asc, setAsc] = React.useState(true);
	const [favorites, setFavorites] = React.useState(false);

	books.sort((a, b) => {
		if (eval('a.' + field) < eval('b.' + field)){
			return asc ? -1 : 1;
		}
		if (eval('a.' + field) > eval('b.' + field)){
			return asc ? 1 : -1;
		}
		return 0;
	})

	return <>
		<h3 className="text-left mx-3">All Books</h3>
		<form className="form-inline">
			<input name="search-input" className="form-control m-3" type="search" placeholder="Filter Books" aria-label="Search"/>
			<input name="favorites-toggle" className="form-check-input" type="checkbox" aria-label="Favorites only" checked={favorites} onChange={setFavorites.bind(this, favorites => !favorites)}/>
			<label htmlFor="favorites-toggle" className="form-check-label">Favorites only</label>
		</form>
		<table className="table table-sm text-left">
			<thead className="thead-dark">
				<tr>
					<th>Book Title<button type="button" className="btn btn-dark pt-0 px-2 my-0 mx-2" onClick={() => (field === 'title' ? setAsc(asc => !asc) : setAsc(true), setField('title'))}><ArrowDownUp/></button></th>
					<th>ISBN-13<button type="button" className="btn btn-dark pt-0 px-2 my-0 mx-2" onClick={() => (field === 'isbn' ? setAsc(asc => !asc) : setAsc(true), setField('isbn'))}><ArrowDownUp/></button></th>
					<th>Status<button type="button" className="btn btn-dark pt-0 px-2 my-0 mx-2" onClick={() => (field === 'status' ? setAsc(asc => !asc) : setAsc(true), setField('status'))}><ArrowDownUp/></button></th>
					<th>Rating<button type="button" className="btn btn-dark pt-0 px-2 my-0 mx-2" onClick={() => (field === 'rating' ? setAsc(asc => !asc) : setAsc(true), setField('rating'))}><ArrowDownUp/></button></th>
				</tr>
			</thead>
			<tbody>
				{books.map(book =>
					<tr key={book.id} className={(!book.favorite && favorites) ? "d-none" : ""}>
						<td className={book.favorite ? "star" : ""}>{book.title}</td>
						<td>{book.isbn}</td>
						<td>{book.status}</td>
						<td>{[...Array(book.rating).keys()].map(x =>
								<StarFill key={x}/>
							)}
						</td>
					</tr>
				)}
			</tbody>
		</table>
	</>
}
