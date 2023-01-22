import styled from "styled-components";

export const TotalMoneyContainer = styled.div`
  width: 100%;
  min-height: 9.6rem;
  border: ${(props) =>
    props.theme === true ? "1px solid #404040" : "1px solid #e9ecef"};
  border-radius: 4px;
  padding: 2rem 2.4rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: space-between;
  background-color: ${(props) =>
    props.theme === true ? "#212529" : "#ffffff"};
  transition: all 0.2s;

  @media (max-width: 499px) {
    padding: 2rem 1.4rem;
  }

  h3,
  span {
    font-size: 1.6rem;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
  }

  span {
    color: #fd377e;
  }

  .totalMoney__textContent {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
