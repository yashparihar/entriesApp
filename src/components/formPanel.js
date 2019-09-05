import React from "react";
import {
    Button,
    Checkbox,
    TextBox,
    Form,
    Fieldset
} from 'react-form-elements'

import './formPanel.css'
import { stat } from "fs";

// import { FriendBoxComponent } from './chatboxComponent/friendboxComponent.js'
// import { ChatBoxComponent } from './chatboxComponent/boxComp.js'

export class FormPanel extends React.Component {

    constructor() {
        super();

        this.state = {
        }

    }


    addEntryPreCheck = (data) => {

        // email validation
        if (!this.validateEmail(data.email)) {
            //raise alert 
            alert("Wrong EmailId Format"); return false;
        }
        if (!this.validatePhno(data.phno)) {
            //raise alert
            alert("Wrong Phno Format"); return false;
        }
        if (!this.validateName(data.name)) {
            //raise alert
            alert("Wrong Name Format"); return false;
        }

        let hobbies = []

        if (!data.Cricket && !data.Dance && !data.Football) {
      
        }
        if (data.Cricket) {
            hobbies.push(data.Cricket)
        }
        if (data.Dance) {
            hobbies.push(data.Dance)
        }
        if (data.Football) {
            hobbies.push(data.Football)
        }


        this.props.addEntry({
            email: data.email,
            name: data.name,
            phno: data.phno,
            hobbies
        })

    }

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validatePhno = (phno) => {
        var re = /^\d{10}$/;
        return re.test(String(phno).toLowerCase());
    }

    validateName = (name) => {
        var re = /^[a-zA-Z ]*$/;
        return re.test(String(name).toLowerCase());
    }

    render() {

        return (
            <div className="col">


                <Form

                    name="entryform"
                    onSubmit={data => this.addEntryPreCheck(data)}
                >

                    <Fieldset legend="Entry Form">

                        <TextBox label="Email" name="email"
                            required
                            placeholder="enter emailid" />
                        <TextBox
                            label="Name"
                            name="name"
                            required
                            placeholder="enter name"
                        />
                        <TextBox
                            label="Phone No"
                            name="phno"
                            required
                            placeholder="enter phno"
                        />
                        <Checkbox
                            label="Cricket"
                            isChecked={false}
                            name="Cricket"
                            value="Cricket"
                        />
                        <Checkbox
                            label="Football"
                            isChecked={false}
                            name="Football"
                            value="Football"
                        />
                        <Checkbox
                            label="Dance"
                            isChecked={false}
                            name="Dance"
                            value="Dance"
                        />

                        {/* <button onClick={() => this.props.addEntry("111")} > btn</button> */}
                        <Button>Submit</Button>
                    </Fieldset>

                </Form>



            </div>
        )
    }


}
