import CoreConcepts from './Components/Core Concepts/CoreConcepts.jsx';
import Examples from './Components/Examples/Examples.jsx';
import Header from './Components/Header/Header.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
