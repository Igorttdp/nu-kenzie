import styled from "styled-components";

const HomeSumary = styled.div`
  max-width: 65%;
  width: 100%;

  @media (max-width: 1000px) {
    min-height: 50vh;
    max-width: 100%;
    align-items: center;
    gap: 2.5rem;
  }

  .sumary__header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 499px) {
      flex-direction: column;
      gap: 2rem;
    }

    h3 {
      font-size: 1.6rem;
    }

    .sumary__header-btns {
      display: flex;
      flex-flow: row nowrap;
      gap: 1.6rem;
    }

    button {
      cursor: pointer;
      padding: 1.05rem 1.5rem;
      border: 0;
      border-radius: 8px;

      .activeBtn {
        background-color: #fd377e;
        color: #fff;
      }
    }
  }
`;

export default HomeSumary;
