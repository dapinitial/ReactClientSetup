import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../actions";

const renderInput = field => {
  const { input, type } = field;
  return (
    <div>
      <input {...field.input} type={field.type} />
      {field.meta.touched &&
        field.meta.error && <span className="error">{field.meta.error}</span>}
    </div>
  );
};

class Signup extends Component {
  handleFormSubmit({ email, password, passwordConfirm }) {
    console.log(email, password, passwordConfirm);
    // need something to log user in
    this.props.signupUser({ email, password, passwordConfirm });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      console.log("signup!");
      return (
        <div className="danger alert-danger">
          <strong>Ooops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props; //

    return (
      <form
        className="input-group"
        onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
      >
        <div className="form-group">
          <label>Email:</label>
          <Field
            name="email" // Specify field name
            component={renderInput} // Specify render component above
            type="email" // Specify "type" prop passed to renderInput
          />
          {/* */}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <Field
            name="password" // Specify field name
            component={renderInput} // Specify render component above
            type="password" // Specify "type" prop passed to renderInput
          />
          {/* */}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <Field
            name="passwordConfirm" // Specify field name
            component={renderInput} // Specify render component above
            type="password" // Specify "type" prop passed to renderInput
          />
          {/* */}
        </div>
        {this.renderAlert()}
        <button action="submit" className="button">
          Sign in
        </button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (values.password !== values.passwordConfirm) {
    errors.password = "Passwords much match";
  }

  if (!values.email) {
    errors.email = "Email is required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Please confirm password";
  }

  console.log(values);

  return errors;
};

const mapStateToProps = state => {
  return {
    form: state.form
  };
};

Signup = connect(mapStateToProps, actions)(Signup);

export default (Signup = reduxForm({
  form: "signup",
  validate
})(Signup));
