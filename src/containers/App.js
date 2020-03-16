import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import'./app.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import { setSearchField, requestRobots } from '../actions.js'

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps =(dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const {searchField, onSearchChange, robots, isPending} = this.props;
		const filteredRobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase())});
		return isPending ?
			<h1> Loading </h1>:
		(
	 	 <div className ='tc'>
	 	 	<h1 className = 'f2'> RoboFriends </h1>
	 	 	<SearchBox SearchChange={onSearchChange}/>
	 	 	<Scroll>
	 	 		<ErrorBoundary>
	 	 			<CardList robots ={filteredRobots} />
	 	 		</ErrorBoundary>
	 	 	</Scroll>
	 	 </div>
 );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);