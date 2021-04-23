import "./rating.css"
import React from "react";

export const Rating = props => (
	<span className="stars">
		{
			[1,2,3,4,5].map(x=>(<i key={x} className={(x > props.value ? 'empty-star' : 'full-star')}></i>))
		}
	</span>
); 
