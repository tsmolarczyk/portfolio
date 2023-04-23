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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
          provident quidem laboriosam eum culpa sint hic a, minima quis dolore.
        </p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="email" />
          <a href="mailto:tomek.smolarczyk@gmail.com">
            tomek.smolarczyk@gmail.com
          </a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+48792433475">(+48) 792 433 475</a>
        </div>
      </div>
      <Form />
    </Container>
  );
};

export default Contact;
