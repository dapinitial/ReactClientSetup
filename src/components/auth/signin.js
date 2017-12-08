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

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
    // need something to log user in
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
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
          {/* <input {...email} placeholder="john.doe@example.com" type="email" /> */}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <Field
            name="password" // Specify field name
            component={renderInput} // Specify render component above
            type="password" // Specify "type" prop passed to renderInput
          />
          {/* <input {...password} placeholder="password" type="password" /> */}
        </div>
        {this.renderAlert()}
        <button action="submit" className="button">
          Sign in
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  //console.log("state", state);
  return {
    form: state.form,
    errorMessage: state.authReducer.error
  };
};

Signin = connect(mapStateToProps, actions)(Signin);

export default (Signin = reduxForm({
  form: "signin" // no fields array given
})(Signin));
