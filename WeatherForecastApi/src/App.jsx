import './App.css';
import SearchBar from './components/searchbar';

function App() {


	const handleOnSearchChange = (searchData) => {

		console.log(searchData);

	}

	return(
		<div className="container">
			<SearchBar onSearchChange={handleOnSearchChange}/>
		</div>
	)
}

export default App
