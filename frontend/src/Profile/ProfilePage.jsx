import React from 'react';
import { Navigation } from '../app/Navigation';
import { BorrowedBooks } from './BorrowedBooks';
import { CheckedOutBooks } from './CheckedOutBooks';
import { DonatedBooks } from './DonatedBooks'


export const ProfilePage = props =>
<>
	<Navigation/>

	<div className="container-fluid mt-3">
        <div className="row" style={{maxWidth: "1440px", margin: "0 auto"}}>
			<div className="col">
				<BorrowedBooks heading="Table" books={[{title: "title", isbn: "0123456789101", status: "borrowed"}]}/>
			</div>
		</div>
        <div className="row">
			<div className="line"></div>
		</div>
		<div className="row">
			<div className="col">
				<CheckedOutBooks heading="Table" books={[{title: "title", isbn: "0123456789101", status: "borrowed", favorite: true}]}/>
			</div>
			<div className="col">
				<DonatedBooks heading="Table" books={[{title: "title", isbn: "0123456789101", status: ""}]}/>
			</div>
		</div>
	</div>
</>
