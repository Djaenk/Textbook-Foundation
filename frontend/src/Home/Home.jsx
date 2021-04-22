import React from 'react';
import { Navigation } from '../app/Navigation';
import { BookTable } from './BookTable';
import { AllBooksTable } from './AllBooksTable';

export const Home = props =>
<>
	<Navigation/>

	<div className="container-fluid mt-3">
		<div className="row">
			<div className="col">
				<BookTable heading="Table" books={[{title: "title", isbn: "0123456789101", status: "borrowed", favorite: true}]}/>
			</div>
			<div className="col">
				<BookTable heading="Table" books={[{title: "title", isbn: "0123456789101", status: "borrowed"}]}/>
			</div>
		</div>
		<div className="row">
			<div className="line"></div>
		</div>
		<div className="row" style={{maxWidth: "1440px", margin: "0 auto"}}>
			<div className="col">
				<AllBooksTable heading="Table" books={[{title: "title", isbn: "0123456789101", status: "borrowed"}]}/>
			</div>
		</div>
	</div>
</>
