import logo from "../assets/img/logo-teal.svg";

const Header = ({ data }) => {
  return (
    <header>
      <div className="header-bar">
        <div>
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="restaurants-infos">
        <div className="restaurants-description">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>

        <img src={data.restaurant.picture} alt="photo-restaurant" />
      </div>
    </header>
  );
};

export default Header;
