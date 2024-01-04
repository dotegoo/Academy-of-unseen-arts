import "./App.css";
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href='#main'>main</a>
          </li>
        </ul>
      </nav>
      <header>
        <h1>The Academy of unseen arts</h1>
      </header>

      <article>
        <p>This website is about arts, the unseen ones.</p>
        <p>
          If you want to master magic arts, the witchcraft art look below for
          more information.
        </p>
        <p>
          We have the best teachers in the world and they will teach you the art
          of witchcraft in this course
        </p>
        <p>
          Don't miss this chance! This is YOUR ONLY chance of being succesful in
          this path
        </p>
      </article>
      <main id='main'>
        <a href='https://google.com' target='_blanc'>
          <div id='patreon'>
            <h1>Patreon</h1>
          </div>
        </a>
        <p>Join Now my PATREON program for learning the unseen arts</p>
      </main>
      <footer>
        <p>
          By all means the things thought in this course are not evil and should
          be used in ethical ways
        </p>
        <p className='dev-promo'>
          Powered and developed by:
          <a href='https://instagram.com/doteegoo'>ig: doteegoo </a>{" "}
          <a href='https://github.com/dotegoo'> github: dotegoo </a>
        </p>
      </footer>
    </>
  );
}

export default App;
