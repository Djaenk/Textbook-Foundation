import React from 'react';
import { Navigation } from '../app/Navigation';

export const Donate = props =>
<>
	<Navigation/>
  <div>

    <form id="register-form" className="col-sm-13 col-md-11 col-lg-5 mt-5 mx-auto border-0">
        <h2>Donate</h2>
        <div className="form-group mt-5">
          <label htmlFor="exampleInputEmail1">Book Search:</label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Title or ISBN-13" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">Search</button>
            </div>
          </div>
        </div>
    </form>
    <br/><hr className="col-sm-15 col-md-13 col-lg-7"/>
    <form id="register-form" className="col-sm-13 col-md-11 col-lg-5 mt-5 mb-5 mx-auto border-0">
        <div className="form-group">
          <label htmlFor="bookTitle">Title</label>
          <input type="text" className="form-control" id="bookTitle" placeholder="Title"/>
        </div>
        <div className="form-group">
          <label htmlFor="isbn">ISBN-13</label>
          <input type="text" className="form-control" id="isbn" placeholder="ISBN-13 (numbers only)"/>
        </div>
				<div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" className="form-control" id="author" placeholder="Author Name"/>
        </div>
				<div className="form-group">
          <label htmlFor="publisher">Publisher</label>
          <input type="text" className="form-control" id="publisher" placeholder="Publisher Name"/>
        </div>
				<div className="form-group">
          <label htmlFor="publicationDate">Publication Date</label>
          <input type="text" className="form-control" id="publicationDate" placeholder="Date (numbers only)"/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Condition</label>
          <select className="form-control" id="exampleFormControlSelect1">
						<option hidden>-</option>
            <option>Excellent</option>
            <option>Good</option>
            <option>Fair</option>
            <option>Poor</option>
          </select>
        </div>
        <button type="submit" className="btn btn-info mt-4">Donate</button>
    </form>

  </div>

</>
