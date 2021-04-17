import React from 'react';
import { Navigation } from '../app/Navigation';
import { BookTable } from './BookTable';
import { AllBooksTable } from './AllBooksTable';

export const Home = props =>
<>
	<Navigation/>

	<div class="container-fluid mt-3">	
		<div class="row">
			<div class="col">
				<BookTable heading="Table" books={[{title: "title", isbn: "0123456789101", status: "borrowed", favorite: true}]}/>
			</div>
			<div class="col">
				<BookTable heading="Table" books={[{title: "title", isbn: "0123456789101", status: "borrowed"}]}/>
			</div>
		</div>
		<div class="row">
			<div class="line"></div>
		</div>
		<div class="row" style={{maxWidth: "1440px", margin: "0 auto"}}>
			<div class="col">
				<AllBooksTable heading="Table" books={[{title: "title", isbn: "0123456789101", status: "borrowed"}]}/>
			</div>
		</div>
	</div>
</>