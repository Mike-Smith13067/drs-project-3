// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const {status} = this.state;
        return (
            <form action="https://formspree.io/mjvoaqoq" method="POST" enctype="multipart/form-data">
                {/* <!-- add your custom form HTML here --> */}
                <h1 className="contact-h1">General Inquries</h1>
                <container/>
                <row/>
                <col-sm-12/>
                <hr/>
                <label className="label">Your Email:</label>
                <input class="input-box-email" type="email" name="email"/>
                <hr/>
                <label className="label">Your Name:</label>
                <input class="input-box-name"type="text" name=""></input>
                <hr/>
                <label className="label">Message & Contact Info:</label>
                <input class="input-box-msg" textarea="break-word" type="text" name="message" />
                <hr/> {
                status === "SUCCESS" ? <p>Thanks!</p> : <input className="btn btn-primary" type="submit" value="Submit" />
            }
                {
                status === "ERROR" && <p>Ooops! There was an error.</p>
            } </form>
        );

    }


    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) 
                return;
            

            if (xhr.status === 200) {
                form.reset();
                this.setState({status: "SUCCESS"});
            } else {
                this.setState({status: "ERROR"});
            }
        };
        xhr.send(data);
    }
}
