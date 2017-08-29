import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'; 
import { Line } from 'rc-progress';
import moment from 'moment';
import SignupFormStepOne from './SignupFormStepOne';
import SignupFormStepTwo from './SignupFormStepTwo';
import GoToDashboard from '../GoToDashboard/GoToDashBoard';

// Signup form styles
import './SignupForm.scss';

//`onTouchTap` on <button> tag error removal
injectTapEventPlugin();

class SignupForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      progress: 33.33,
      userAge: 18
    }
  }
  nextPage = (data) => {
    const { page, progress } = this.state;

    //Validate User age
    if (page === 2) {
     const dob = `${data.day}-${data.month}-${data.year}`;
     const years =  moment().diff(dob, 'years', true);

     this.setState({ userAge: years });

     if (years >= 18) {
       this.setState({
         page: page + 1,
         progress: progress + 33.33
       });
     }
    } else {
      this.setState({
        page: page + 1,
        progress: progress + 33.33
      });
    }
  };

  previousPage = () => {
    this.setState({ page: this.state.page - 1 })
  };

  render() {
    const { page, progress, userAge } = this.state;
    let title = 'Signup';

    if (page === 3) {
      title = 'Thankyou!';
    }
    return (
      <div className="signup-form-container">
        <div className="title">{title}</div>
        <div className="section--process">
          <Line percent={progress} strokeWidth="2" trailWidth="2" strokeColor="#4a90e2" trailColor="#eee" strokeLinecap="square" />
        </div>
        <div className="section--signup">
          {page === 1 && <SignupFormStepOne onSubmit={this.nextPage}/>}
          {page === 2 && <SignupFormStepTwo userAge={userAge} previousPage={this.previousPage} onSubmit={this.nextPage}/>}
          {page === 3 && <GoToDashboard />}
        </div>
      </div>
    )
  }
}

export default SignupForm;
