import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBknSsg3RXGmAp3zMwN8Yu7bMVev6bVYJU'

YTSearch({key: API_KEY, term: 'Logic'}, function(data){
	console.log(data);
});

// create new component
// component should produce some html
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));
// 

// take components generated html and
// put it on the page (in the DOM)

