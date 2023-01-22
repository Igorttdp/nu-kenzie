import styled from "styled-components";
import ButtonTrash from "./assets/ButtonTrash.svg";

const TransactionsContainer = styled.ul`
  margin: 3.7rem 0;
  width: 100%;
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  gap: 3.2rem;

  .transaction {
    position: relative;
    background-color: ${(props) =>
      props.theme === true ? "#212529" : "#f8f9fa"};
    border-radius: 4px;
    height: 8.7rem;
    padding: 2rem 1.3rem 2rem 1.5rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;
    justify-content: space-between;
    transition: all 0.3s;

    @media (max-width: 400px) {
      gap: 1rem;
    }

    h3 {
      font-size: 1.6rem;

      @media (max-width: 400px) {
        font-size: 1.4rem;
      }
    }

    span {
      font-size: 1.3rem;

      @media (max-width: 400px) {
        font-size: 1.1rem;
      }
    }

    button {
      cursor: pointer;
      background-image: url(${ButtonTrash});
      background-size: cover;
      background-repeat: no-repeat;
      max-width: 22px;
      max-height: 22px;
      min-width: 22px;
      min-height: 22px;
      border: none;
      outline: 0;
      padding: 0 !important;
    }

    .transaction__description {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
    }

    .transaction__control {
      height: fit-content;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 4rem;

      @media (max-width: 400px) {
        gap: 0.5rem;
      }
    }

    .transitionColor {
      width: 4px;
      height: 100%;
      border-radius: 4px 0 0 4px;
      position: absolute;
      top: 0;
      left: 0;
    }

    .transitionColor.Entrada {
      background-color: #03b898;
    }

    .transitionColor.Despesa {
      background-color: #c32929;
    }
  }

  .Entrada {
    border: solid 1px #03b898;
  }

  .Despesa {
    border: solid 1px #c32929;
  }
`;

export default TransactionsContainer;
