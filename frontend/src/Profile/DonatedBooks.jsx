import React, { useEffect } from 'react';
import Account from '../api/books';
import './BookTable.css';
import {ArrowDownUp, Search} from 'react-bootstrap-icons';

export const DonatedBooks = props => {
	const [books, setBooks] = React.useState([]);
	const [field, setField] = React.useState(null);
	const [asc, setAsc] = React.useState(true);
	const [page, setPage] = React.useState(0);
	const [perPage, setPerPage] = React.useState(25);
	const [search, setSearch] = React.useState('')

	useEffect(() => {
		const accountsRepository = new Account();
		props.booksPromise.then(value => {
			for (let book of value.books){
				accountsRepository.getProfile(book.borrowerID).then(profile => {
					console.log(profile);
					book.borrower = profile.username;
				});
				book.status = book.borrowerID ? 'Checked-Out' : 'Not-Claimed';
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
		<h3 className="text-left mx-3">Donated Books</h3>
		<div className="row">
			<form className="form-inline col">
				<div className="input-group m-3">
					<input name="search-input" className="form-control" type="search" placeholder="Filter Books" aria-label="Search" onChange={event => setSearch(event.target.value)}/>
					<div className="input-group-append">
						<button type="button" className="btn btn-info pt-1" onClick={handleSearch}><Search size="19"/></button>
					</div>
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
					<th>Condition<button type="button" className="btn btn-dark pt-0 px-2 my-0 mx-2" onClick={() => {field === 'condition' ? setAsc(asc => !asc) : setAsc(true); setField('condition')}}><ArrowDownUp/></button></th>
					<th>Borrower<button type="button" className="btn btn-dark pt-0 px-2 my-0 mx-2" onClick={() => {field === 'borrower' ? setAsc(asc => !asc) : setAsc(true); setField('borrower')}}><ArrowDownUp/></button></th>
				</tr>
			</thead>
			<tbody>
				{books.slice(page * perPage, (page + 1) * perPage).map(book =>
					<tr key={book.bookID}>
						<td className={book.favorite ? "star" : ""}>{book.Title}</td>
						<td>{book.ISBN}</td>
						<td>{book.status}</td>
						<td>{book.bookCondition}</td>
						<td>{book.borrower}</td>
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