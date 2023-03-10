import React, { Component } from "react";

type LoginFormProps = {};

type LoginFormState = {
  email: string;
  password: string;
};

export class LoginForm extends Component<LoginFormProps, LoginFormState> {
  state = { email: "", password: "" };
  changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };
  submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email === "lixian" && password === "123") {
      sessionStorage.setItem("isAuthenticated", "true");
      this.setState({ email: "", password: "" });
    }
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="col-4">
            <h3>Login to access content</h3>
            <form onSubmit={this.submitHandler}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.changeHandler}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.changeHandler}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default LoginForm;
