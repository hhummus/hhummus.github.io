import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useForm } from "react-hook-form";
function ContactForm() {
    var _a, _b, _c, _d;
    // when sending form, set disabled until succesfully sent
    //so user does not accidentally send several emails
    const [isDisabled, setIsDisabled] = useState(false);
    //btn
    const [isSent, setIsSent] = useState("Send epost");
    // letting user know if epost is sent
    const [isSuccess, setIsSuccess] = useState("");
    // gather all inputValues from form
    const form = useForm({
        defaultValues: {
            name: "",
            subject: "",
            message: "",
            email: "",
        },
    });
    const { register, handleSubmit, reset, formState: { errors }, } = form;
    // checking that formData is valid
    function sendEmail(formData) {
        // logging what is to be sent
        console.log(formData);
        // diable button until request is done
        setIsDisabled(true);
        setIsSent("sender epost...");
        // connecting to emailjs and sending the formData (input values)
        emailjs
            .send("service_da8dq9b", "template_jcw0eca", formData, "ZRcK89DVwt93bESi5")
            // then updating UI depedning on success or error
            .then((result) => {
            console.log(result.text);
            setIsDisabled(false);
            setIsSent("Send ny epost");
            setIsSuccess("Epost er nå sendt. Beregn 3-4 arbeidsdager før du får svar.");
        }, (error) => {
            console.log(error.text);
            setIsSent("Send epost");
            setIsSuccess("Vi opplever for tiden nettverksproblemer. Vent noen sekunder før du prøver igjen.");
            setIsDisabled(false);
        });
        reset();
    }
    return (React.createElement("form", { onSubmit: handleSubmit(sendEmail), className: "contact-form" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("label", { htmlFor: "name", className: "label-field" }, "Navn"),
                React.createElement("input", Object.assign({ type: "text", id: "name" }, register("name", {
                    required: "Kan ikke stå tomt.",
                }), { className: "input-field" })),
                React.createElement("small", { className: "form-error" }, (_a = errors.name) === null || _a === void 0 ? void 0 : _a.message)),
            React.createElement("div", { className: "row" },
                React.createElement("label", { htmlFor: "subject", className: "label-field" },
                    "Subject",
                    " "),
                React.createElement("input", Object.assign({ type: "text", id: "subject", placeholder: "produktfoto, brullyp, event ol.." }, register("subject", {
                    required: "Må fylles ut.",
                }), { className: "input-field" })),
                React.createElement("small", { className: "form-error" }, (_b = errors.subject) === null || _b === void 0 ? void 0 : _b.message)),
            React.createElement("div", { className: "row" },
                React.createElement("label", { htmlFor: "message", className: "label-field" }, "Melding"),
                React.createElement("textarea", Object.assign({ id: "message", placeholder: "Skriv litt om hva du lurer p\u00E5, tidspunkt (om du vet det), budsjett osv.", rows: 3 }, register("message", {
                    required: "For at vi skal kunne gi deg et utfyllende svar trenger vi litt informasjon fra deg.",
                }), { className: "input-field" })),
                React.createElement("small", { className: "form-error" }, (_c = errors.message) === null || _c === void 0 ? void 0 : _c.message)),
            React.createElement("div", { className: "row" },
                React.createElement("label", { htmlFor: "email", className: "label-field" }, "Din epost"),
                React.createElement("input", Object.assign({ type: "email", id: "email" }, register("email", {
                    required: "Vi behøver din e-post for å ta kontakt med deg.",
                }), { className: "input-field" })),
                React.createElement("small", { className: "form-error" }, (_d = errors.email) === null || _d === void 0 ? void 0 : _d.message)),
            React.createElement("div", { className: "row" },
                React.createElement("button", { type: "submit", disabled: isDisabled, className: "form-submit-btn" }, isSent)),
            React.createElement("div", { className: "row" },
                React.createElement("p", { className: "form-success-error" }, isSuccess)))));
}
export default ContactForm;
