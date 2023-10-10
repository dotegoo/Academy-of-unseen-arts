import "./App.css";

function App() {
  return (
    <>
      <div id='app'>
        <header>
          <nav>
            <ul>
              <li>
                <a href='#main'>main</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
            </ul>
          </nav>
          <h1>The Academy of unseen arts</h1>
        </header>
        <main id='main'>
          <div id='baza'>
            <h1>Base</h1>
          </div>
          <div id='intermediar'>
            <h1>Intermedate</h1>
          </div>
          <div id='avansat'>
            <h1>Advanced</h1>
          </div>
        </main>
        <div id='contact'></div>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
