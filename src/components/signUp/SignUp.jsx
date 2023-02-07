import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import {
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import "./style.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello email", email, password);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        fName
      )
        .then(() => {
          const user = auth.currentUser;
          updateProfile({
            displayName: fName,
          });
        })
        .catch((e) => {
          console.log(e.code, e.message);
        });
      if (result) {
        navigate("/signin");
      }
      window.M.toast({ html: `welcome${result.user.email}`, classes: "green" });
    } catch (err) {
      window.M.toast({ html: err.message, classes: "red" });
    }
  };

  
  return (
    // <Stack
    // mt={{md:15, xl: 30}}
    //   sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    // >
    //   <div
    //     className="center container card"
    //     style={{ maxWidth: "700px", height: "20rem" }}
    //   >
    //     <Typography
    //       mt={2}
    //       variant="h3"
    //       sx={{
    //         fontWeight: 700,
    //         fontFamily: "Fantasy",
    //         textTransform: "uppercase",
    //         letterSpacing: 3,
    //       }}
    //     >
    //       Sign up
    //     </Typography>
    //     <form onSubmit={(e) => handleSubmit(e)}>
    //       <div className="input-field">
    //         <input
    //           style={{ width: "60%" }}
    //           type="email"
    //           placeholder="Email"
    //           onChange={(e) => setEmail(e.target.value)}
    //           required
    //         />
    //         <input
    //           style={{ width: "60%" }}
    //           type="password"
    //           placeholder="Password"
    //           onChange={(e) => setPassword(e.target.value)}
    //           required
    //         />
    //       </div>
    //       <button type="submit" className="signUp-Button ">
    //         SignUp
    //       </button>
    //
    //     </form>
    //   </div>
    // </Stack>

    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: "185px" }}
                alt="logo"
              />
              <h4 className="mt-1 mb-5 pb-1">Sign up now</h4>
            </div>

            <p className="center">Please SignUp to your account</p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First name"
                    onChange={(e) => setFName(e.target.value)}
                    id="form1"
                    type="text"
                    required
                  />
                </MDBCol>

                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last name"
                    onChange={(e) => setFName(e.target.value)}
                    id="form2"
                    type="text"
                    required
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />

              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn className="mb-4 w-100 gradient-custom-2">
                  Sign Up
                </MDBBtn>
              </div>
            </form>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Already have an account</p>
              <Link
                style={{
                  marginLeft: 10,
                  border: "2px solid red",
                  width: "20%",
                  textAlign: "center",
                  color: "red",
                  borderRadius: "5px",
                }}
                to="/signin"
              >
                Login
              </Link>
            </div>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
