import { Container } from "./styles";
import Form from "../Form/Form";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";

const Contact = () => {
  return (
    <Container id="contact">
      <header>
        <h2>Contact with me</h2>
        <p>
          If you want to collaborate or ask about something don't hesitate to
          contact with me.
        </p>
      </header>
      <div className="contacts">
        {/* <div>
          <img src={emailIcon} alt="email" />
          <a href="mailto:tomek.smolarczyk@gmail.com">
            tomek.smolarczyk@gmail.com
          </a>
        </div> */}
        <a href="mailto:tomek.smolarczyk@gmail.com">
          <div className="contact-btn">
            <img src={emailIcon} alt="email" />
            <span>tomek.smolarczyk@gmail.com</span>
          </div>
        </a>
        <a href="tel:+48792433475">
          <div className="contact-btn">
            <img src={phoneIcon} alt="Email" />
            <span>(+48) 792 433 475</span>
          </div>
        </a>
      </div>
      {/* <Form /> */}
    </Container>
  );
};

export default Contact;
