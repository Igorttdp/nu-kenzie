import styled from "styled-components";

const EmptyTransactionsContainer = styled.div`
  margin: 3.7rem 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 3rem;

  h2 {
    font-size: clamp(1.8rem, 6vw, 2.2rem);
  }

  img {
    width: 100%;

    box-shadow: ${(props) =>
      props.theme === true ? "0px 0px 8px 5px #723350;" : ""};

    :nth-child(2) {
      animation: emptyCards 3s 1s infinite;
    }

    :nth-child(3) {
      animation: emptyCards 3s 2s infinite;
    }

    :last-child {
      animation: emptyCards 3s 3s infinite;
    }
  }

  @keyframes emptyCards {
    50% {
      filter: contrast(0.85);
    }

    100% {
      filter: contrast(1);
    }
  }
`;

export default EmptyTransactionsContainer;
