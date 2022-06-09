import styled from "styled-components";

export const ModalScreen = styled.div`
  width: 100%;
  top: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 200px;
  background-color: var(--white);
  color: var(--black);
  position: relative;
  z-index: 10;
  border-radius: 10px;
  padding: 10px;
`;

export const ModalHeader = styled.header`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--white);

  svg {
    width: 25px;
    height: 25px;
    background-color: #df1545;
    border-radius: 5px;
  }
`;

export const ModalBody = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-size: 19px;
  }
`;

export const ModalFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 50px;

  button {
    width: 300px;
    border-radius: 8px;
    background-color: #df1545;
    color: var(--white);
    font-size: 20px;
  }
`;