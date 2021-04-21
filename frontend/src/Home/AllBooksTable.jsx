import React from 'react';
import {StarFill, ArrowDownUp, Search} from 'react-bootstrap-icons';

export const AllBooksTable = props => {
	const [books, setBooks] = React.useState(props.books);
	const [field, setField] = React.useState(null);
	const [asc, setAsc] = React.useState(true);
	const [favorites, setFavorites] = React.useState(false);
	const [page, setPage] = React.useState(0);
	const [perPage, setPerPage] = React.useState(25);
	const [search, setSearch] = React.useState('')

	function handleSearch(){
		let books = [];
		for (const book of props.books){
			if(book.title.toLowerCase().includes(search.toLowerCase())){
				books.push(book)
			}
			else if(book.isbn.includes(search)){
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
						<button type="button" class="btn btn-info pt-1" onClick={handleSearch}><Search size="19"/></button>
					</div>
				</div>
				<div class="form-check m-3">
					<input name="favorites-toggle" className="form-check-input" type="checkbox" aria-label="Favorites only" checked={favorites} onChange={setFavorites.bind(this, favorites => !favorites)}/>
					<label htmlFor="favorites-toggle" className="form-check-label">Favorites only</label>
				</div>
			</form>
			<nav className="px-3" aria-label="table pages">
				<ul className="pagination m-3">
					<li className="page-item disabled"><button type="button" className="page-link">Books per page</button></li>
					{[...Array(4).keys()].map(i =>
						<li className="page-item"><button type="button" className="page-link" onClick={() => setPerPage(25*(i+1))}>{25*(i+1)}</button></li>
					)}
				</ul>
			</nav>
		</div>
		<table className="table table-sm text-left">
			<thead className="thead-dark">
				<tr>
					<th>Book Title<button type="button" className="btn btn-dark pt-0 px-2 my-0 mx-2" onClick={() => {field === 'title' ? setAsc(asc => !asc) : setAsc(true); setField('title')}}><ArrowDownUp/></button></th>
					<th>ISBN-13<button type="button" className="btn btn-dark pt-0 px-2 my-0 mx-2" onClick={() => {field === 'isbn' ? setAsc(asc => !asc) : setAsc(true); setField('isbn')}}><ArrowDownUp/></button></th>
					<th>Status<button type="button" className="btn btn-dark pt-0 px-2 my-0 mx-2" onClick={() => {field === 'status' ? setAsc(asc => !asc) : setAsc(true); setField('status')}}><ArrowDownUp/></button></th>
					<th>Rating<button type="button" className="btn btn-dark pt-0 px-2 my-0 mx-2" onClick={() => {field === 'rating' ? setAsc(asc => !asc) : setAsc(true); setField('rating')}}><ArrowDownUp/></button></th>
				</tr>
			</thead>
			<tbody>
				{books.slice(page * perPage, (page + 1) * perPage).map(book =>
					<tr key={book.id} className={(!book.favorite && favorites) ? "d-none" : ""}>
						<td className={book.favorite ? "star" : ""}>{book.title}</td>
						<td>{book.isbn}</td>
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
					<li className="page-item"><button type="button" className="page-link" onClick={() => setPage(i)}>{i+1}</button></li>
				)}
			</ul>
		</nav>
	</>
}
