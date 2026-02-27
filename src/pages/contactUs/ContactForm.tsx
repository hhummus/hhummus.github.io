import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

function ContactForm() {
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
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = form;
  const [searchParams] = useSearchParams();
  const subjectParam = searchParams.get("subject");
  const issueParam = searchParams.get("issue");
  const showMagazineHint = subjectParam === "KONTAKT" && !!issueParam;

  useEffect(() => {
    if (subjectParam) {
      setValue("subject", subjectParam);
    }
    if (issueParam && !getValues("message")) {
      const formattedIssue = issueParam.padStart(2, "0");
      setValue("message", `Ønsker å kjøpe KONTAKT ${formattedIssue}`);
    }
  }, [subjectParam, issueParam, setValue, getValues]);

  // checking that formData is valid
  function sendEmail(formData: Record<string, unknown> | undefined) {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setIsSuccess(
        "Kontaktskjema er midlertidig utilgjengelig. Vennligst kontakt oss senere."
      );
      return;
    }

    // diable button until request is done
    setIsDisabled(true);
    setIsSent("sender epost...");

    // connecting to emailjs and sending the formData (input values)
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      )
      // then updating UI depedning on success or error
      .then(
        (result) => {
          console.log(result.text);
          setIsDisabled(false);
          setIsSent("Send ny epost");
          setIsSuccess(
            "Epost er nå sendt. Beregn 3-4 arbeidsdager før du får svar."
          );
        },
        (error) => {
          console.log(error.text);
          setIsSent("Send epost");
          setIsSuccess(
            "Vi opplever for tiden nettverksproblemer. Vent noen sekunder før du prøver igjen."
          );
          setIsDisabled(false);
        }
      );
    reset();
  }

  return (
    <form onSubmit={handleSubmit(sendEmail)} className="contact-form">
      <div className="container">
        <div className="row">
          <label htmlFor="name" className="label-field">
            Navn
          </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Kan ikke stå tomt.",
            })}
            className="input-field"
          ></input>
          <small className="form-error">{errors.name?.message}</small>
        </div>

        <div className="row">
          <label htmlFor="subject" className="label-field">
            Emne 
          </label>
          <select id="subject" name="subject" 
          {...register("subject", {
            required: "Vennligst velg et emne.",
            })}
            className="input-field">
            <option value="firma">Firma</option>
            <option value="privatpersoner">Privat</option>
            <option value="wedding">Bryllupsfotografering</option>
            <option value="Boligfotografering">Boligfotografering</option>
            <option value="KONTAKT">Bestilling av tidsskriftet KONTAKT</option>
            <option value="other">Annet</option>
          </select>
          <small className="form-error">{errors.subject?.message}</small>
        </div>

        <div className="row">
          <label htmlFor="message" className="label-field">
            Melding
          </label>
          <textarea
            id="message"
            placeholder="Skriv litt om hva du lurer på."
            rows={3}
            {...register("message", {
              required:
                "For at vi skal kunne gi deg et utfyllende svar trenger vi litt informasjon fra deg.",
            })}
            className="input-field"
          ></textarea>
          {showMagazineHint && (
            <small className="form-hint">
              Husk å skrive din adresse og telefonnummer for at vi skal kunne sende med
              Helthjem. Du får Vipps-krav fra oss når pakken er sendt.
            </small>
          )}
          <small className="form-error">{errors.message?.message}</small>
        </div>

        <div className="row">
          <label htmlFor="email" className="label-field">
            Din epost
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Vi behøver din e-post for å ta kontakt med deg.",
            })}
            className="input-field"
          ></input>
          <small className="form-error">{errors.email?.message}</small>
        </div>
        <div className="row">
          <button
            type="submit"
            disabled={isDisabled}
            className="form-submit-btn"
          >
            {isSent}
          </button>
        </div>

        <div className="row">
          <p className="form-success-error">{isSuccess}</p>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;



 
