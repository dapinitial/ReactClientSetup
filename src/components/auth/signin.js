import React, { Component }from 'react';
import { reduxForm, Field } from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component{
  handleFormSubmit({email, password}){
    console.log(email,password);
  }
  render(){
    const renderField = field => (
      <fieldset className="form-group">
       <label>{field.label}</label>
       <input name={field.name} type={field.type} className="form-control"/>
       {field.touched && field.error && <div className="error">{field.error}</div>}
      </fieldset>
      );
    const {handleSubmit} = this.props;
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field {...field.input} name="password" type="password" component={renderField} label="password" />
      <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
      );
  }
}
Signin = reduxForm({
 form:'signin'
})(Signin);

export default connect(null, actions)(Signin);
