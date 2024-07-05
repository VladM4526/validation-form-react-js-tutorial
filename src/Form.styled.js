import styled from "styled-components";
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaCaretRight } from "react-icons/fa6";

export const Container = styled.div`
  width: 371px;
  margin: 0 auto;
  margin-top: 10%;
`;

export const FormContainer = styled.form`
  width: 371px;
  background: #fff;
  border-radius: 20px;
  padding: 24px 40px;
`;

export const FormTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 30px;
`;

export const ContainerInput = styled.div`
  position: relative;
`;

export const ListItem = styled.li`
  margin-top: 20px;

  &:first-child {
    margin-top: 0px;
  }
`;

export const Inputs = styled.input`
  width: 323px;
  border: none;
  outline: none;
  background: #ebebeb;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 16px 24px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.25;
  color: #000;
  margin-top: 5px;
`;

export const InputTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.25;
`;

export const IconName = styled(FaUser)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 24px;
  bottom: 16px;
`;

export const IconEmail = styled(MdEmail)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 24px;
  bottom: 16px;
`;

export const IconPassword = styled(FaLock)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 24px;
  bottom: 16px;
`;

export const ContainerButtonSubmit = styled.div`
  position: relative;
  margin-top: 30px;
`;

export const ButtonSubmitIcon = styled(FaCaretRight)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 15px;
  bottom: 15px;
  color: #fff;
`;

export const ButtonSubmit = styled.input`
  border: none;
  outline: none;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  padding: 11px 148px;
  background: #1e599f;
  color: #fff;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
  }
`;
