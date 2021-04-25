import React, { useEffect } from 'react';
import Books from '../api/books';
import {StarFill, ArrowDownUp, Search} from 'react-bootstrap-icons';

export const AllBooksTable = props => {
	const [books, setBooks] = React.useState([]);
	const [field, setField] = React.useState(null);
	const [asc, setAsc] = React.useState(true);
	const [favoritesOnly, setFavoritesOnly] = React.useState(false);
	const [page, setPage] = React.useState(0);
	const [perPage, setPerPage] = React.useState(25);
	const [search, setSearch] = React.useState('')

	useEffect(() => {
		const booksRepository = new Books();
		props.booksPromise.then(value => {
			for (let book of value.books){
				booksRepository.getRatings(book.ISBN).then(ratings => {
					console.log(ratings);
					let average = Math.round(ratings.reduce((a, b) => a + b) / ratings.length);
					book.rating = average;
				});
				book.status = book.borrowerID ? 'Borrowed' : 'Donated';
			}
			setBooks(value.books);
		});
	})

	function handleSearch(){
		let books = [];
		for (const book of props.books){
			if(book.Title.toLowerCase().includes(search.toLowerCase())){
				books.push(book)
			}
			else if(book.ISBN.includes(search)){
				books.push(book)
			}
			else if(book.status.includes(search.toLowerCase())){
				books.push(book)
			}
		}
		setBooks(books);
		setPage(0);
	}

	books.sort((a, b) => {
		if (a[field] < b[field]){
			return asc ? -1 : 1;
		}
		if (a[field] > b[field]){
			return asc ? 1 : -1;
		}
		return 0;
	})

	return <>
		<h3 className="text-left mx-3">All Books</h3>
		<div className="row">
			<form className="form-inline col">
				<div className="input-group m-3">
					<input name="search-input" className="form-control" type="search" placeholder="Filter Books" aria-label="Search" onChange={event => setSearch(event.target.value)}/>
					<div className="input-group-append">
						<button type="button" className="btn btn-info pt-1" onClick={handleSearch}><Search size="19"/></button>
					</div>
				</div>
				<div className="form-check m-3">
					<input name="favorites-toggle" className="form-check-input" type="checkbox" aria-label="Favorites only" checked={favoritesOnly} onChange={setFavoritesOnly.bind(this, favoritesOnly => !favoritesOnly)}/>
					<label htmlFor="favorites-toggle" className="form-check-label">Favorites only</label>
				</div>
			</form>
			<nav className="px-3" aria-label="table pages">
				<ul className="pagination m-3">
					<li className="page-item disabled"><button type="button" className="page-link">Books per page</button></li>
					{[...Array(4).keys()].map(i =>
						<li key={i} className="page-item"><button type="button" className="page-link" onClick={() => setPerPage(25*(i+1))}>{25*(i+1)}</button></li>
					)}
				</ul>
			</nav>
		</div>
		<table className="table table-sm text-left">
			<thead className="thead-dark">
				<tr>
					<th>Book Title<button type="button" className="btn btn-dark pt-0 px-2 my-0 mx-2" onClick={() => {field === 'Title' ? setAsc(asc => !asc) : setAsc(true); setField('Title')}}><ArrowDownUp/></button></th>
					<th>ISBN-13<button type="button" className="btn btn-dark pt-0 px-2 my-0 mx-2" onClick={() => {field === 'ISBN' ? setAsc(asc => !asc) : setAsc(true); setField('ISBN')}}><ArrowDownUp/></button></th>
					<th>Status<button type="button" className="btn btn-dark pt-0 px-2 my-0 mx-2" onClick={() => {field === 'status' ? setAsc(asc => !asc) : setAsc(true); setField('status')}}><ArrowDownUp/></button></th>
					<th>Rating<button type="button" className="btn btn-dark pt-0 px-2 my-0 mx-2" onClick={() => {field === 'rating' ? setAsc(asc => !asc) : setAsc(true); setField('rating')}}><ArrowDownUp/></button></th>
				</tr>
			</thead>
			<tbody>
				{books.slice(page * perPage, (page + 1) * perPage).map(book =>
					<tr key={book.bookID} className={(!book.favorite && favoritesOnly) ? "d-none" : ""}>
						<td className={book.favorite ? "star" : ""}>{book.Title}</td>
						<td>{book.ISBN}</td>
						<td>{book.status}</td>
						<td>{[...Array(book.rating).keys()].map(i =>
								<StarFill key={i}/>
							)}
						</td>
					</tr>
				)}
			</tbody>
		</table>
		<nav className="d-flex justify-content-center" aria-label="table pages">
			<ul className="pagination m-3">
				<li className="page-item disabled"><button type="button" className="page-link">Page</button></li>
				{[...Array(Math.ceil(books.length/perPage)).keys()].map(i =>
					<li key={i} className="page-item"><button type="button" className="page-link" onClick={() => setPage(i)}>{i+1}</button></li>
				)}
			</ul>
		</nav>
	</>
}
