import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import './GoToDashBoard.scss';

class GoToDashBoard extends Component {

  getFormData = () => {
     const { email, password, day, month, year, gender, how_hear_about_us  } = this.props.formData;
     const dob = moment(`${day}-${month},${year}`, 'DD-MM-YYY').unix();
     const user_data = {
       email,
       password,
       date_of_birth: dob,
       gender,
       how_hear_about_us: how_hear_about_us ? how_hear_about_us : null
     };

     console.log(JSON.stringify({user_data}));
  };

  render() {

    return (
      <div className="dashboard-redirect-container">
        <div className="form-success">
          <FontIcon className="material-icons">check</FontIcon>
        </div>
        <FlatButton
          label="Go To DashBoard"
          labelPosition="before"
          className="dashboard"
          onClick={this.getFormData}
          icon={<FontIcon className="material-icons">arrow_forward</FontIcon>}
        />
      </div>
    );
  }
}

GoToDashBoard.propTypes = {
  formData: PropTypes.object
};

const mapStateToProps = state => ({
  formData: state.form.signUp.values
});

export default connect(mapStateToProps)(GoToDashBoard);
