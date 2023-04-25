import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Container } from "./styles";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const [isHuman, setIsHuman] = useState(false);
  const [state, handleSubmit] = useForm("");
  const [message, setMessage] = useState("");

  return (
    <Container>
      <h2>Get in touch using the form below.</h2>
      <form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/tomek.smolarczyk@gmail.com"
        method="POST"
      >
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          required
        />
        <textarea
          required
          name="message"
          id="message"
          placeholder="Write a message"
        />
        <button type="submit">Send</button>
      </form>
    </Container>
  );
};

export default Form;
// site key: 6Lfs87clAAAAAFCrfBxqSPomgUNCfEICkSb7V--W

// secretkey: 6Lfs87clAAAAADMDKA106x7bQZE7eIiW30EsWR0-
