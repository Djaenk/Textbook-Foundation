import React from 'react';
import { Navigation } from '../app/Navigation';

export const Wishlist = props =>
<>
	<Navigation/>
  <div>

  <form id="register-form" className="col-sm-13 col-md-11 col-lg-5 mt-5 mx-auto border-0">
      <h2>Wishlist</h2>
      <div className="form-group mt-5">
        <label htmlFor="exampleInputPassword1">Title</label>
        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Title"/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">ISBN-13</label>
        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="ISBN-13 (numbers only)"/>
      </div>
      <button type="submit" className="btn btn-info mt-4">Add to Wishlist</button>
  </form>
  </div>

</>
