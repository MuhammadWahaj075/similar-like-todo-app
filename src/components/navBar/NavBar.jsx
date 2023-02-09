import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import todoLogo from "../../assets/todoImage.jpeg";

export default function NavBar({ profile }) {
  let navigate = useNavigate();

  const handleClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        alert({ html: error.message, classes: "red" });
      });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div
            className="collaps e navbar-collapse"
            id="navbarSupportedContent"
          >
            <a className="navbar-brand mt-2 mt-lg-0" href="/welcome">
              <img
                src={todoLogo}
                alt="logo-image"
                loading="lazy"
                height={60}
                width={80}
              />
            </a>
          </div>

          <div className="d-flex align-items-center">
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={profile}
                  className="rounded-circle"
                  alt="profile"
                  loading="lazy"
                  height={60}
                  width={60}
                  style={{
                    border: "4px solid #cddc39",
                    padding: "2px",
                    borderRadius: "50%",
                    borderTopColor: "#ff5722",
                    borderLeftColor: "#ff5722",
                    filter: "drop-shadow(0 0 5px #ff5722)",
                  }}
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="/profile">
                    My profile
                  </a>
                </li>

                <li>
                  <a onClick={handleClick} className="dropdown-item" href="">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
