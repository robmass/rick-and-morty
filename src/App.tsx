import { CharactersGrid } from "@/components/characters-grid";
import { useCharacters } from "@/hooks/character";
import "./App.css";

function App() {
  const { characters } = useCharacters();

  return (
    <div className="app">
      <header className="app-header">Rick & Morty Characters</header>
      <div className="app-container">
        <CharactersGrid characters={characters} />
      </div>
    </div>
  );
}

export default App;
