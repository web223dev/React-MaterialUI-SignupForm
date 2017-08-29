import React from 'react' 
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import validate from '../../components/validate'

// Signup form Screen 1
const SignupFormStep1 = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
    <div className="section--form">
      <div >
        <Field
          name="email"
          component={TextField}
          floatingLabelText="Email"
          floatingLabelFixed={true}
          fullWidth />
      </div>
      <div>
        <Field
          name="password"
          component={TextField}
          type="password"
          floatingLabelText="Password"
          floatingLabelFixed={true}
          fullWidth
        />
      </div>
      <div>
        <Field
          name="passwordConfirm"
          component={TextField}
          type="password"
          floatingLabelText="Confirm Password"
          floatingLabelFixed={true}
          fullWidth
        />
      </div>
    </div>
    <div className="section--form form-footer initial">
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

SignupFormStep1.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'signUp',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SignupFormStep1)
