import "./index.css";

const Header = () => {
  const link = [
    "https://www.facebook.com/",
    "https://www.youtube.com/?gl=IT&hl=it",
    "https://www.instagram.com/",
  ];

  return (
    <div className="Header">
      <h1>LOGO</h1>
      <ul>
        <a href={link[0]}>
          <li>Facebook</li>
        </a>
        <a href={link[1]}>
          <li>Youtube</li>
        </a>
        <a href={link[2]}>
          <li>Instagram</li>
        </a>
      </ul>
      <h2>Menu</h2>
    </div>
  );
};

export default Header;
