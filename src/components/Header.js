const Heading = () => {
    return(
      <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://cdn.dribbble.com/userupload/10790076/file/original-ff791b20101e6551b2ade568108f5dba.png?resize=400x300"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
      </div>
    );
};

export default Heading;