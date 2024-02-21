import Logo from "./logo.png";

function Header() {
  return (
    <header>
      <nav>
        <img className="logo1" src={Logo} alt="" />
        <ul>
          <li>Cardápio</li>
          <li>Contatos</li>
          <li>Encomendas</li>
          <li>Unidades</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
