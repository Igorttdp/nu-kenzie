import styled from "styled-components";

const AddFinancesPanelContainer = styled.div`
  max-width: 36rem;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  gap: 1.6rem;

  @media (max-width: 1000px) {
    max-width: 100%;
    align-items: center;
    gap: 2.5rem;
  }

  .home__releases {
    max-width: 36rem;
    width: 100%;
    height: 35rem;
    padding: 3.8rem 2.5rem;
    background-color: ${(props) =>
      props.theme === true ? "#212529" : "#ffffff"};
    border: ${(props) =>
      props.theme === true ? "1px solid #404040" : "1px solid #e9ecef"};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    transition: all 0.3s;

    @media (max-width: 1000px) {
      max-width: 100%;
      align-items: center;
      gap: 2.5rem;
    }

    label {
      cursor: pointer;
      font-size: 1.2rem;
    }

    input,
    select {
      width: 100%;
      background-color: #f8f9fa;
      border-radius: 8px;
      border: 2px solid #f8f9fa;
      font-size: 1.6rem;
      padding: 1.3rem 1.6rem;
    }

    select {
      cursor: pointer;
      font-size: 1.2rem;
    }

    input::placeholder {
      color: #868e96;
    }

    button {
      cursor: pointer;
      width: 100%;
      background-color: #fd377e;
      color: #fff;
      padding: 1.4rem 0;
      border: 0;
      border-radius: 8px;
      transition: all 0.3s;

      @media (max-width: 1000px) {
        max-width: 75%;
      }

      :hover {
        background-color: #dd3774;
        transition: all 0.3s;
      }
    }

    .home__r-desc,
    .home__r-values {
      width: 100%;
    }

    #releases-desc {
      margin-top: 1.2rem;
      margin-bottom: 0.44rem;
    }

    .home__r-values {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;

      @media (max-width: 1000px) {
        justify-content: space-around;
        gap: 1.5rem;

        div {
          :nth-child(1),
          :nth-child(2) {
            max-width: 20rem;
          }
        }
      }

      div {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-start;

        :nth-child(1) {
          max-width: 13rem;
          width: 100%;
        }

        :nth-child(2) {
          max-width: 15rem;
          width: 100%;
        }
      }
    }
  }
`;

export default AddFinancesPanelContainer;
