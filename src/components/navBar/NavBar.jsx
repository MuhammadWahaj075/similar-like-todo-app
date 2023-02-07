import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
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
        window.M.toast({ html: error.message, classes: "red" });
      });
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src={todoLogo}
                alt="logo-image"
                loading="lazy"
                height={60}
                width={80}
              />
            </a>
          </div>

          <div class="d-flex align-items-center">
            <a class="text-reset me-3" href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>

            <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={profile}
                  class="rounded-circle"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                  height={60}
                  width={60}
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    My profile
                  </a>
                </li>

                <li>
                  <a onClick={handleClick} class="dropdown-item" href="#">
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
