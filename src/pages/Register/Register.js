import React, { Component, Fragment } from 'react';
import InfoRegister from '../Register/InfoRegister/InfoRegister';
import AgreeTerms from '../Register/AgreeTerms/AgreeTerms';
import './Register.scss';

class Register extends Component {

state = {
    stage: true,
};

handleChange1 = () => {
    this.setState({
        stage: false
    });
}

handleChange2 = () => {
    this.setState({
        stage: true
    });
}

    render() {
        const { stage } = this.state;
            return (
            <>
                <div className="signin">회원가입</div>
                    <div>
                        {stage ? <AgreeTerms stageChange={this.handleChange1}/> : <InfoRegister stageChange={this.handleChange2}/>  }
                    </div>
            </>
        );
    }   
}

export default Register;