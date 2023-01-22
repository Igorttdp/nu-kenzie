import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) =>
    props.theme === true ? "#121212" : "#ffffff"};
  color: ${(props) => (props.theme === true ? "#fff" : "#000")};
  transition: all 0.3s;

  header {
    background-color: ${(props) =>
      props.theme === true ? "#212529" : "#f8f9fa"};
    box-shadow: ${(props) =>
      props.theme === true ? "#404040 0px 4px 20px" : "#bbb 0px 4px 20px"};
    transition: all 0.3s;

    nav {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3.2rem 0;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 1200px) {
        max-width: 85%;
      }

      div {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;
      }

      button:last-child {
        cursor: pointer;
        background-color: #e9ecef;
        color: #000;
        padding: 1.05rem 1.5rem;
        border: none;
        border-radius: 8px;
      }
    }
  }

  .home__finances {
    max-width: 1200px;
    margin: 4rem auto 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    @media (max-width: 1000px) {
      flex-direction: column;
    }

    @media (max-width: 1200px) {
      max-width: 85%;
      gap: 5rem;
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

      :hover {
        background-color: #dd3774;
        transition: all 0.3s;
      }
    }
  }
`;

export default HomeContainer;
