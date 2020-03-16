import React from 'react'

let Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '1px', height: '650px'}}>
			{props.children}
		</div>
 );
}

export default Scroll;