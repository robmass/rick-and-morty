import { CharactersGrid } from '@/components/characters-grid';
import { Pagination } from '@/components/pagination';
import { useCharacters } from '@/hooks/character';
import './app.css';

function App() {
  const { characters, getCharacters, pageCount, actualPage } = useCharacters();

  return (
    <div className="app">
      <header className="app-header">Rick & Morty Characters</header>
      <div className="app-container">
        <CharactersGrid characters={characters} />
        <Pagination handlePageChange={getCharacters} pageCount={pageCount} actualPage={actualPage} />
      </div>
    </div>
  );
}

export default App;
