import { useEffect, useState } from "react";

const Header = () => {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrs, setFormErrs] = useState({
    name: false,
    lastName: false,
    emailErr: false,
    passwordErr: false,
    confrmPsswrdErr: false,
  });

  useEffect(() => {
    if (inputValues.firstName !== "") {
      setFormErrs({
        ...formErrs,
        name: false,
      });
    }
    if (inputValues.lastName !== "") {
      setFormErrs({
        ...formErrs,
        lastName: false,
      });
    }
    if (inputValues.email !== "") {
      setFormErrs({
        ...formErrs,
        emailErr: false,
      });
    }
    if (inputValues.password !== "") {
      setFormErrs({
        ...formErrs,
        passwordErr: false,
      });
    }
    if (inputValues.confirmPassword !== "") {
      setFormErrs({
        ...formErrs,
        confrmPsswrdErr: false,
      });
    }
  }, [inputValues]);

  const submitBtn = (e) => {
    e.preventDefault();
    let errors = { ...formErrs };


    if (inputValues.firstName === "") {
      errors.name = true;
    }
    if (inputValues.lastName === "") {
      errors.lastName = true;
    }
    if (inputValues.email === "") {
      errors.emailErr = true;
    }
    if (inputValues.password === "") {
      errors.passwordErr = true;
    }
    if (inputValues.confirmPassword === "") {
      errors.confrmPsswrdErr = true;
    }

   
    setFormErrs(errors);

  
    console.log(inputValues);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <form
        className="p-4 bg-light shadow rounded"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4">Sign Up</h2>

        <div className="mb-3">
          <input
            style={{ border: formErrs.name && "2px solid red" }}
            onChange={(e) =>
              setInputValues({ ...inputValues, firstName: e.target.value })
            }
            type="text"
            value={inputValues.firstName}
            className="form-control"
            placeholder="First Name"
          />
          {formErrs.name && (
            <span className="text-danger ms-1 fw-bold">
              Enter Your First Name
            </span>
          )}
        </div>

        <div className="mb-3">
          <input
            style={{ border: formErrs.lastName && "2px solid red" }}
            onChange={(e) =>
              setInputValues({ ...inputValues, lastName: e.target.value })
            }
            value={inputValues.lastName}
            type="text"
            className="form-control"
            placeholder="Last Name"
          />
          {formErrs.lastName && (
            <span className="text-danger ms-1 fw-bold">
              Enter Your Last Name
            </span>
          )}
        </div>

        <div className="mb-3">
          <input
            style={{ border: formErrs.emailErr && "2px solid red" }}
            onChange={(e) =>
              setInputValues({ ...inputValues, email: e.target.value })
            }
            value={inputValues.email}
            type="email"
            className="form-control"
            placeholder="Email"
          />
          {formErrs.emailErr && (
            <span className="text-danger ms-1 fw-bold">
              Please Enter Your Email
            </span>
          )}
        </div>

        <div className="mb-3">
          <input
            onChange={(e) =>
              setInputValues({ ...inputValues, password: e.target.value })
            }
            style={{ border: formErrs.passwordErr && "2px solid red" }}
            type="password"
            value={inputValues.password}
            className="form-control"
            placeholder="Password"
          />
          {formErrs.passwordErr && (
            <span className="text-danger ms-1 fw-bold">
              Please Enter Your Password
            </span>
          )}
        </div>

        <div className="mb-3">
          <input
            onChange={(e) =>
              setInputValues({
                ...inputValues,
                confirmPassword: e.target.value,
              })
            }
            style={{
              border: formErrs.confrmPsswrdErr && "2px solid red",
            }}
            type="password"
            value={inputValues.confirmPassword}
            className="form-control"
            placeholder="Confirm Password"
          />
          {formErrs.confrmPsswrdErr && (
            <span className="text-danger ms-1 fw-bold">
              Please Enter Your Confirm Password
            </span>
          )}
        </div>

        <div className="d-grid">
          <button onClick={submitBtn} className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;
