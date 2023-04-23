import { Container } from "./styles";

const Form = () => {
  return (
    <Container>
      <h2>Contact with me</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          required
        />
      </form>
      <textarea
        required
        name="message"
        id="message"
        placeholder="Write a message"
      />
      <button type="submit">Send</button>
    </Container>
  );
};

export default Form;