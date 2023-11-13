import "./header.scss";

const Header = ({ onSwitchPage }) => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="left_container">
          <div className="logo">
            <img src="icon.png"></img>
          </div>
        </div>

        <div className="right_container">
          <button onClick={onSwitchPage}>Movies</button>
          <button>TV Shows</button>
          <button className="btn_suggest">
            Suggest me
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.62 3.95331L13.6667 7.99997L9.62 12.0466"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.33337 8H13.5534"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
