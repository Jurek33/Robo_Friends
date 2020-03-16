import React from 'react';

let SearchBox = ({SearchChange}) => {
	return (
		<input
		  onChange={SearchChange}
		  className='pa2 ba b--yellow bg-light-yellow' 
		  type='search' 
		  placeholder='Find a Robot' />
 )
}

export default SearchBox;