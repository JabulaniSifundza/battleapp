import logo from './logo.svg';
import './App.css';
import HeroSearch from './components/HeroSearch';
import {HeroesContextProvider} from './context/Heroescontext';

function App() {
  return (
    <div className="App">
		<HeroesContextProvider>
			<HeroSearch />
		</HeroesContextProvider>
    </div>
  );
}

export default App;
