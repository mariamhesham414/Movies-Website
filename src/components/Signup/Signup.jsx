import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

export default function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    userNameError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleValidation = (evt) => {
    if (evt.target.name == "name") {
      setUser({ ...user, name: evt.target.value });
      setErrors({
        ...errors,
        nameError: evt.target.value.length == 0 ? "Name is required" : "",
      });
    } else if (evt.target.name == "email") {
      setUser({ ...user, email: evt.target.value });
      setErrors({
        ...errors,
        emailError:
          evt.target.value.length == 0
            ? "Email is required"
            : evt.target.value.includes("@")
            ? ""
            : "Email must include @",
      });
    } else if (evt.target.name == "userName") {
      setUser({ ...user, userName: evt.target.value });
      setErrors({
        ...errors,
        userNameError:
          evt.target.value.length == 0
            ? "User Name is required"
            : evt.target.value.match(/(?=[\s+])/)
            ? "User Name contains no spaces"
            : "",
      });
    } else if (evt.target.name == "password") {
      setUser({ ...user, password: evt.target.value });
      setErrors({
        ...errors,
        passwordError:
          evt.target.value.length == 0
            ? "Password is required"
            : evt.target.value.length <= 7
            ? "Password must be at least 8 characters"
            : !evt.target.value.match(/(?=.*[-+_!@#$%^&*., ?])/)
            ? "Password must have special characters"
            : !evt.target.value.match(/(?=.*[a-z])/)
            ? "Password must have at least one lowercase letter"
            : !evt.target.value.match(/(?=.*[A-Z])/)
            ? "Password must have at least one uppercase letter"
            : "",
      });
    } else if (evt.target.name == "confirmPassword") {
      setUser({ ...user, confirmPassword: evt.target.value });
      setErrors({
        ...errors,
        confirmPasswordError:
          evt.target.value.length == 0
            ? "Confirm Password is required"
            : evt.target.value == user.password
            ? ""
            : "password doen't match",
      });
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <>
      <div className="mx-5 my-5 border p-3 rounded">
        <Form
          autoComplete="off"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicname">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              className={`${errors.nameError && "border-danger shadow-none"}`}
              value={user.name}
              onChange={(e) => {
                handleValidation(e);
              }}
            />
            <Form.Text className=" text-danger">{errors.nameError}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              className={`${errors.emailError && "border-danger shadow-none"}`}
              value={user.email}
              onChange={(e) => {
                handleValidation(e);
              }}
            />
            <Form.Text className=" text-danger">{errors.emailError}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter User Name"
              name="userName"
              className={`${
                errors.userNameError && "border-danger shadow-none"
              }`}
              value={user.userName}
              onChange={(e) => {
                handleValidation(e);
              }}
            />
            <Form.Text className=" text-danger">
              {errors.userNameError}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div className="d-flex">
              <Form.Control
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                name="password"
                className={`${
                  errors.passwordError && "border-danger shadow-none"
                }`}
                value={user.password}
                onChange={(e) => {
                  handleValidation(e);
                }}
              />
              <button
                className="btn btn-outline-black"
                onClick={togglePassword}
              >
                {passwordShown ? <VscEye /> : <VscEyeClosed />}
              </button>
            </div>
            <Form.Text className="text-danger">
              {errors.passwordError}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasiccofirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <div className="d-flex">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                className={`${
                  errors.confirmPasswordError && "border-danger shadow-none"
                }`}
                value={user.confirmPassword}
                onChange={(e) => {
                  handleValidation(e);
                }}
              />
              {/* <button
                className="btn btn-outline-black"
                onClick={togglePassword}
              >
                {passwordShown ? <VscEye /> : <VscEyeClosed />}
              </button> */}
            </div>
            <Form.Text className="text-danger">
              {errors.confirmPasswordError}
            </Form.Text>
          </Form.Group>

          <Button variant="success w-100" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </>
  );
}
