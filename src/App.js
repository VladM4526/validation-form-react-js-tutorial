import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ButtonSubmit,
  ButtonSubmitIcon,
  Container,
  ContainerButtonSubmit,
  ContainerInput,
  FormContainer,
  FormTitle,
  IconEmail,
  IconName,
  IconPassword,
  Inputs,
  InputTitle,
  ListItem,
} from "./Form.styled";

export const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const buttonSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      toast.warning("Name is required");
    } else if (!email) {
      toast.warning("Email is required");
    } else if (!password) {
      toast.warning("Password is required");
    } else {
      toast.success("Form sumbimmed");
    }
  };

  return (
    <Container>
      <FormContainer>
        <FormTitle>Create account</FormTitle>
        <ul>
          <ListItem>
            <ContainerInput>
              <InputTitle>Name</InputTitle>
              <Inputs
                type="name"
                placeholder="Your name"
                onChange={(e) => setName(e.target.value.trim())}
              />
              <IconName />
            </ContainerInput>
          </ListItem>
          <ListItem>
            <ContainerInput>
              <InputTitle>Email</InputTitle>
              <Inputs
                type="email"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value.trim())}
              />
              <IconEmail />
            </ContainerInput>
          </ListItem>
          <ListItem>
            <ContainerInput>
              <InputTitle>Password</InputTitle>
              <Inputs
                type="password"
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value.trim())}
              />
              <IconPassword />
            </ContainerInput>
          </ListItem>
        </ul>
        <ContainerButtonSubmit>
          <ButtonSubmit type="submit" value="Create" onClick={buttonSubmit} />
          <ButtonSubmitIcon />
        </ContainerButtonSubmit>
      </FormContainer>
      <ToastContainer position="top-center" />
    </Container>
  );
};
