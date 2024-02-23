import Articles from "./Components/articles";
import Users from "./Components/users";

function App() {
  return (
    <div className="App">
    <header>
      <h2>React Loading Skeleton</h2>
    </header>
    <div className="content">
      <Articles/>
      <Users/>
    </div>
    </div>
  );
}

export default App;
