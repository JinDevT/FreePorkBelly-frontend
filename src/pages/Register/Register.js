import React, { Component, Fragment } from 'react';
import InfoRegister from '../Register/InfoRegister/InfoRegister';
import AgreeTerms from '../Register/AgreeTerms/AgreeTerms';
import './Register.scss';

class Register extends Component {

state = {
    agreeBtn: false,
    stage: 1,
};

handleChange = () => {
    this.setState({
        agreeBtn: true
    }, () => alert('change')
    );
}


    render() {
        
        return (
            <Fragment>
            <AgreeTerms/>
        
            <div>
                {this.state.stage === 1 ? "a" : "b"}
            </div>
            </Fragment>
            
        );
    }
    
}

export default Register;