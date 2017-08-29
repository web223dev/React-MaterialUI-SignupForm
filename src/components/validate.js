import moment from 'moment'; 

const validate = values => {
  const errors = {};

  // Email Validation
  if (!values.email) {
    errors.email = 'Email Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email Address'
  }

  // Password Validation
  if (!values.password) {
    errors.password = 'Password Required'
  } else if (values.password.length < 6) {
    errors.password = 'Password should be a min 6 characters'
  }
  if (values.password !== values.passwordConfirm ) {
    errors.passwordConfirm = 'Passwords Do not match'
  }

  // DOB Validation
  const dateVal = moment(values.day, 'DD').format('DD');
  const monthVal = moment(values.month, 'MM').format('MM');
  const yearVal = moment(values.year, 'YYYY').format('YYYY');
  if (!values.day) {
    errors.day = 'Required'
  } else if (dateVal === 'Invalid date' || values.day.length < 2 || !parseInt(values.day)) {
    errors.day = 'Please enter valid date'
  }
  if (!values.month) {
    errors.month = 'Required'
  } else if (monthVal === 'Invalid date' || values.month.length < 2 || !parseInt(values.month)) {
    errors.month = 'Please enter valid month'
  }
  if (!values.year) {
    errors.year = 'Required'
  } else if (yearVal === 'Invalid date' || values.year.length !== 4 || !parseInt(values.year)) {
    errors.year = 'Please enter valid year'
  }

  // Gender Validation
  if (!values.gender) {
    errors.gender = 'Gender required'
  }

  return errors
};

export default validate
