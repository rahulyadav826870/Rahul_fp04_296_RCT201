import React from "react";
import PropTypes from "prop-types";

// links: string[];
// logo: stirng;
// color?: stirng;
// bgColor?: stirng;
// userImage?: string;

const Navbar = ({
  links,
  logo,
  color = "white",
  bgColor = "black",
  userImage = "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",
}) => {
  return (
    <nav
      style={{
        color,
        backgroundColor: bgColor,
        paddingTop: "5px",
        paddingBottom: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div>
          <img
            src={logo}
            alt="logo"
            style={{ width: "50px", borderRadius: "50%" }}
          />
        </div>
        {links.map((link) => (
          <div key={link}> {link}</div>
        ))}

        <div>
          <img
            src={userImage}
            alt="user-image"
            style={{ width: "50px", borderRadius: "50%" }}
          />
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
  logo: PropTypes.string,
  color: PropTypes.stirng,
  bgColor: PropTypes.stirng,
  userImage: PropTypes.string,
};

Navbar.defaultProps = {
  color: "black",
  bgColor: "#4D79FF",
  userImage:
    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",
};

export default Navbar;
