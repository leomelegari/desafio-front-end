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
  align-items: flex-end;

  @media (min-width: 500px) {
    align-items: center;
  }
`;

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 530px;
  background-color: var(--white);
  color: var(--black);
  position: relative;
  z-index: 10;
  border-radius: 10px 10px 0 0;
  padding: 10px;

  @media (min-width: 500px) {
    border-radius: 10px;
  }
`;

export const ModalHeader = styled.header`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    width: 22px;
    height: 22px;
    background-color: var(--red);
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
    color: white;
    z-index: 10;
    :hover {
      background-color: var(--darker-red);
    }
  }
`;

export const ModalBody = styled.form`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 5px;

  input:disabled {
    background-color: var(--gray-2);
    color: var(--gray-3);
  }

  label {
    color: var(--green-1);
    font-weight: 600;
    font-size: 22px;
  }

  input {
    height: 50px;
    padding: 8px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    background-color: var(--gray-1);

    ::placeholder {
      color: var(--black);
      font-weight: 600;
    }
  }

  .update {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;

    button {
      background-color: var(--green-1);
      width: 100%;
      height: 50px;
      border-radius: 24px;
      font-size: 25px;
      font-weight: 600;
      transition: 0.2s;

      :hover {
        background-color: var(--green-2);
      }
    }
  }
`;
