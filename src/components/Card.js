import React from 'react';

let Card = ({name , email, id}) => {
	return (
		<div className=' tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?300x300`}/>
			<h2>{name}</h2>
			<h3>{email}</h3>
		</div>
		)
}

export default Card;