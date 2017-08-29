import React from 'react'
import PropTypes from 'prop-types'; 
import { Field, reduxForm } from 'redux-form'
import { TextField, SelectField } from 'redux-form-material-ui'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import validate from '../../components/validate'

// Error Check for gender
const renderError = ({ meta: { touched, error } }) => touched && error ?
  <div className="error">{error}</div> : false;

// Signup form Screen 1
const SignupFormStep2 = (props) => {
  const { handleSubmit, previousPage, userAge } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="section--form">
        <label>Date Of Birth</label>
        <div className="section--dob">
          <Field name="day" type="text" component={TextField} hintText="DD" maxLength="2" />
          <Field name="month" type="text" component={TextField} hintText="MM" maxLength="2" />
          <Field name="year" type="text" component={TextField} hintText="YYYY" maxLength="4" />
        </div>
        {userAge < 18 &&
          <div className="error">
            Age must be 18+
          </div>
        }
      </div>
      <div className="section--form">
        <label>Gender</label>
        <div className="section--gender">
          <label><Field name="gender" component="input" type="radio" value="male"/><span> Male</span></label>
          <label><Field name="gender" component="input" type="radio" value="female"/> <span>Female</span></label>
          <label><Field name="gender" component="input" type="radio" value="unspecified"/> <span>Unspecified</span></label>
        </div>
        <Field name="gender" component={renderError} />
      </div>
      <div className="section--form">
        <label>Where did you hear about us?</label>
        <Field name="how_hear_about_us" component={SelectField} fullWidth >
          <MenuItem value="source1" primaryText="From Friend"/>
          <MenuItem value="source2" primaryText="On the Website"/>
          <MenuItem value="source3" primaryText="On the News"/>
        </Field>
      </div>
      <div className="section--form form-footer">
        <FlatButton
          label="Back"
          className='back'
          onClick={previousPage}
        />
        <FlatButton
          label="Next"
          labelPosition="before"
          className='next'
          onClick={handleSubmit}
          icon={<FontIcon className="material-icons">arrow_forward</FontIcon>}
        />
      </div>
    </form>
  )
};

SignupFormStep2.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func,
  userAge: PropTypes.number
};


export default reduxForm({
  form: 'signUp',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SignupFormStep2)
