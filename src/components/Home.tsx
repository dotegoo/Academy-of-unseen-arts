import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
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
          of witchcraft in three levels: Base, Intermedate and Advanced.
        </p>
        <p>
          Don't miss this chance! This is YOUR ONLY chance of being succesful in
          this path
        </p>
      </article>
      <main id='main'>
        <Link to='/academy-of-unseen-arts/Base'>
          <div id='baza'>
            <h1>Base</h1>
          </div>
        </Link>
        <Link to='/academy-of-unseen-arts/Intermediate'>
          <div id='intermediar'>
            <h1>Intermedate</h1>
          </div>
        </Link>
        <Link to='/academy-of-unseen-arts/Advanced'>
          <div id='avansat'>
            <h1>Advanced</h1>
          </div>
        </Link>
      </main>
      <div id='contactFooter'>
        <div id='contact'>
          <p>
            For more details don't be afraid to help yourself by contact us at
            example@example.com e-mail and you will have an response in 72
            hours.
            <p></p> We also provide with information for private lessons. For
            details send an email to example@example.com and we will answer in
            the about same time
          </p>
        </div>
        <footer>
          <p>
            Powered and developed by:{" "}
            <a href='https://instagram.com/doteegoo'>ig: doteegoo </a>{" "}
            <a href='https://github.com/dotegoo'> github: dotegoo </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
