import React, {Component} from "react";
import {PropsAuthRegReg, StateAuthRegReg} from "../../../redux/interfaces/auth/authRegistration";
import RegistrationComponent from "./RegistrationComponent";

class RegistrationClass extends Component<PropsAuthRegReg, StateAuthRegReg> {
    authentication = () => {
        this.props.Registration(this.props.input_email, this.props.input_nickname, this.props.input_password, this.props.input_confirmPassword,
            this.props.input_name, this.props.input_birthDate)

        this.clearInputData()
        return localStorage.getItem('id') !== null;
    }

    clearInputData = () => {
        this.props.setInputClearData()
        this.props.setInputClearDataProfile()
    }

    render() {
        return <RegistrationComponent input_email={this.props.input_email}
                                      input_nickname={this.props.input_nickname}
                                      input_password={this.props.input_password}
                                      input_confirmPassword={this.props.input_confirmPassword}
                                      message={this.props.message}
                                      setInputEmail={this.props.setInputEmail}
                                      setInputPassword={this.props.setInputPassword}
                                      setInputNickname={this.props.setInputNickname}
                                      setInputConfirmPassword={this.props.setInputConfirmPassword}
                                      setMessage={this.props.setMessage}
                                      authentication={this.authentication}
                                      buttonShowMessage={this.props.buttonShowMessage}
                                      setShowMessage={this.props.setShowMessage}
                                      input_name={this.props.input_name}
                                      setInputName={this.props.setInputName}
                                      input_birthDate={this.props.input_birthDate}
                                      setInputBirthDate={this.props.setInputBirthDate}/>
    }


}

export default RegistrationClass