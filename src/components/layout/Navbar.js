import Styles from './Navbar.module.css'

function Navbar() {
    return (
      <>
        <nav className={Styles.nav}>
          <h1>App</h1>
          <ul>
            <li>Home</li>
            <li>Contacto</li>
            <li>Sobre</li>
          </ul>
        </nav>
      </>
    );
  }
  
  export default Navbar;
  