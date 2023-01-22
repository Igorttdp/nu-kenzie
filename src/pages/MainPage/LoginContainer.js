import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #212529;
  color: #fff;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  .login__content {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    gap: 3rem;

    @media (max-width: 1000px) {
      z-index: 2;
    }

    h2 {
      font-size: clamp(3rem, 6vw, 3.8rem);
    }

    p {
      font-size: 1.6rem;
    }

    button {
      cursor: pointer;
      color: #fff;
      border: 3px solid transparent;
      background-color: #fd377e;
      min-width: 24rem;
      padding: 1.45rem 0;
      border-radius: 8px;
      transition: all 0.3s;

      :not(:hover) {
        border-color: #fd377e;
        background-color: transparent;
        color: #fd377e;
        transition: all 0.3s;
      }
    }
  }

  .login__illustration {
    animation: ilustration 4s infinite;
  }

  @media (max-width: 1000px) {
    .c-login__illustration {
      position: absolute;
      right: 0;
      z-index: 1;

      .login__illustration {
        animation: unset;
        filter: brightness(0.4);
      }
    }
  }

  @keyframes ilustration {
    50% {
      filter: brightness(0.5);
    }

    100% {
      filter: brightness(100%);
    }
  }
`;

export default LoginContainer;
