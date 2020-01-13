import React from 'react';
import CardList from '../components/CardList';
import { Robots } from '../components/Robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends React.Component{
	constructor() {
		super();
		this.state= {
			Robots: [],
			Searchfield: ''
		}
		console.log('Constructor');
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=> this.setState({Robots: users}));
		// this.setState({Robots : Robots });
		console.log('componentDidMount');
	}


	onSearchChange = (event) => {
		this.setState({Searchfield: event.target.value})
		// console.log(event.target.value);
		// const filteredRobots = this.state.Robots.filter(Robots =>{
		// 	return Robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
		// });
		// console.log(filteredRobots);
	}
	render() {
		const { Robots , Searchfield } = this.state;
		console.log('render');
		const filteredRobots = Robots.filter(Robots =>{
			return Robots.name.toLowerCase().includes(Searchfield.toLowerCase());
		});
		return !Robots.length ? 
			<h1>Loading</h1> :
			(<fragment className='tc'>
		<h1 className = 'f1'>RoboFriends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<CardList robots = { filteredRobots } />
		</Scroll>
		</fragment>
		);

		// if(!Robots.length){
		// 	return <h1> Loading</h1>
		// }
		// else {
		// return (
		// <fragment className='tc'>
		// <h1 className = 'f1'>RoboFriends</h1>
		// <SearchBox searchChange={this.onSearchChange}/>
		// <Scroll>
		// <CardList robots = { filteredRobots } />
		// </Scroll>
		// </fragment>
		// );
		// }
	}
}



// const App = ()=>{
// 	return (

// 		<fragment className='tc'>
// 		<h1>RoboFriends</h1>
// 		<SearchBox />
// 		<CardList robots = { Robots } />
// 		</fragment>
// 		);
// }

export default App;