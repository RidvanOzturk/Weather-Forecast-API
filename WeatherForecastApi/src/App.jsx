import './App.css';
import SearchBar from './components/search/searchbar';
import CurrentWeather from './components/current-weather/current-weather';

function App() {


	const handleOnSearchChange = (searchData) => {

		console.log(searchData);

	}

	return(
		<div className="container">
			<SearchBar onSearchChange={handleOnSearchChange}/>
			<CurrentWeather/>
		</div>
	)
}

export default App
