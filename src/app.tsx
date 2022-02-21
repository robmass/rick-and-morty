import { CharactersGrid } from '@/components/characters-grid';
import { Error } from '@/components/error';
import { Loading } from '@/components/loading';
import { Pagination } from '@/components/pagination';
import { useCharacters } from '@/hooks/character';
import './app.css';

function App() {
  const { characters, getCharacters, pageCount, actualPage, isLoading, error } = useCharacters();

  return (
    <div className="app">
      <header className="app-header">Rick & Morty Characters</header>
      <div className="app-container">
        {error && <Error error={error} />}
        {isLoading && !error && <Loading />}
        {!isLoading && !error && (
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
