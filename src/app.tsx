import { CharactersGrid } from '@/components/characters-grid';
import { Loading } from '@/components/loading';
import { Pagination } from '@/components/pagination';
import { useCharacters } from '@/hooks/character';
import './app.css';

function App() {
  const { characters, getCharacters, pageCount, actualPage, isLoading } = useCharacters();

  return (
    <div className="app">
      <header className="app-header">Rick & Morty Characters</header>
      <div className="app-container">
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <CharactersGrid characters={characters} />
            {pageCount > 1 && <Pagination handlePageChange={getCharacters} pageCount={pageCount} actualPage={actualPage} />}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
