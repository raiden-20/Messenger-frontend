import React, {Component} from "react";
import {
    PropsProfileNameSurname,
    StateProfileNameSurname
} from "../../../redux/interfaces/profile/profileAddNameSurname";
import reg_set_name_surname from "./RegistrationSetNameSurname.module.css";
import options_reg from "../css_options/Options.module.css";
import {NavLink} from "react-router-dom";
import {ADD_NAME_SURNAME} from "../../paths/authPath";
import {PROFILE} from "../../paths/profilePath";

class RegistrationAddNameSurname extends Component<PropsProfileNameSurname, StateProfileNameSurname>{

    path = ADD_NAME_SURNAME

    setInputName = (event : React.ChangeEvent<HTMLInputElement>) => {
        this.props.setInputName(event.target.value)
    }
    setInputSurname = (event : React.ChangeEvent<HTMLInputElement>) => {
        this.props.setInputSurname(event.target.value)
    }
    setData = () => {
        if (this.props.input_name != null && this.props.input_surname != null) {
            //put
            let code = 200
            switch (code) {
                case 200 : {
                    this.props.setName(this.props.input_name)
                    this.props.setSurname(this.props.input_surname)

                    this.path = PROFILE
                    break
                }
                case 401 : {
                    this.path = ADD_NAME_SURNAME
                    break
                }
                default:
            }
        }
    }
    render() {
        return  (
            <form className={reg_set_name_surname.form}>
                <section className={reg_set_name_surname.leg_inputs}>
                    <legend>Добавьте информацию о себе</legend>
                    <section className={reg_set_name_surname.inputs}>
                        <input className={options_reg.input} onChange={this.setInputName}
                               value={this.props.input_name} placeholder={'Имя'}/>
                        <input className={options_reg.input} onChange={this.setInputSurname}
                               value={this.props.input_surname} placeholder={'Фамилия'}/>
                    </section>
                </section>
                <NavLink to={this.path} className={options_reg.main_page_button + ' ' + reg_set_name_surname.navlink} onClick={this.setData} >
                    Продолжить
                </NavLink>
            </form>
        );
    }
}

export default RegistrationAddNameSurname