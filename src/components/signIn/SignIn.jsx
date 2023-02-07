import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

import "./style.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello email", email, password);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (result) {
        navigate("/");
      } else {
        alert("hello error");
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
    //     className="center container card "
    //     style={{ maxWidth: "700px", height: "20rem" }}
    //   >
    //     <Typography
    //       variant="h3"
    //       mt={2}
    //       sx={{
    //         fontWeight: 700,
    //         fontFamily: "Fantasy",
    //         textTransform: "uppercase",
    //         letterSpacing: 3,
    //       }}
    //     >
    //       Log In
    //     </Typography>
    //     <Typography
    //       variant="h6"
    //       sx={{ fontWeight: 700, opacity: 0.2, fontFamily: "monospace" }}
    //     >
    //       Login to your account
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
    //       <button type="submit" className="login-button">
    //         Log In
    //       </button>
    //       <Link style={{ marginLeft: 10 }} to="/signup">
    //         Don't have an account!, <strong>"Create New"</strong>
    //       </Link>
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
              <h4 className="mt-1 mb-5 pb-1">We are The Todo Team</h4>
            </div>

            <p className="center">Please login to your account</p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                onChange={(e) => setEmail(e.target.value)}
                id="form1"
                type="email"
                required
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                id="form2"
                type="password"
                required
              />

              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn className="mb-4 w-100 gradient-custom-2">log in</MDBBtn>
              </div>
            </form>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <Link
                style={{
                  marginLeft: 10,
                  border: "2px solid red",
                  width: "20%",
                  textAlign: "center",
                  color: "red",
                  borderRadius: "5px",
                }}
                to="/signup"
              >
                Create New
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
