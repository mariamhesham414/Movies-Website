import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const handleValidation = (evt) => {
    if (evt.target.name == "email") {
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
    } else if (evt.target.name == "password") {
      setUser({ ...user, password: evt.target.value });
      setErrors({
        ...errors,
        passwordError:
          evt.target.value.length == 0
            ? "Password is required"
            : evt.target.value.length <= 7
            ? "Password must be at least 8 characters"
            : "",
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

          <Form.Group className="mb-3 flex" controlId="formBasicPassword">
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

          <Button variant="primary w-100" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}
