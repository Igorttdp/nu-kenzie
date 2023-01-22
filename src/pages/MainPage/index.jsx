import NuKenzie from "./assets/NuKenzie.svg";
import Releases from "../../components/Releases";
import illustration from "./assets/illustration.svg";
import NuKenzie_lightmode from "./assets/NuKenzie_lightmode.svg";
import { useState } from "react";
import AddFinancesPanel from "../../components/AddFinancesPanel";
import SumaryFilterBtns from "../../components/SumaryFilterBtns";
import { useEffect } from "react";
import LoginContainer from "./LoginContainer";
import HomeContainer from "./HomeContainer";
import HomeSumary from "./HomeSumary";
import "react-toastify/dist/ReactToastify.css";
import StyledToastContainer from "../../styles/StyledToastContainer";
import SwitchButton from "../../components/Switch";

const MainPage = ({ isLoggedIn, login, logout }) => {
  const deleteTransaction = (e) => {
    const id =
      e.target.parentElement.parentElement.getAttribute("aria-labelledby");

    setListTransactions(listTransactions.filter((el) => el.id !== id));
  };

  const [listTransactions, setListTransactions] = useState([]);
  const [filter, setFilter] = useState("all");
  const [darkmode, setDarkmode] = useState(false);

  if (listTransactions.length !== 0) {
    localStorage.setItem(
      "@Nu_Kenzie_transactions",
      JSON.stringify(listTransactions)
    );
  }

  useEffect(() => {
    if (localStorage.getItem("@Nu_Kenzie_transactions")) {
      const transactions = JSON.parse(
        localStorage.getItem("@Nu_Kenzie_transactions")
      );

      setListTransactions(transactions);
    }

    if (localStorage.getItem("@Nu_Kenzie_darkmode")) {
      const keepDarkmode = JSON.parse(
        localStorage.getItem("@Nu_Kenzie_darkmode")
      );

      setDarkmode(keepDarkmode);
    }
  }, [darkmode]);

  if (!isLoggedIn) {
    return (
      <LoginContainer className="nuKenzie__login">
        <div className="login__content">
          <img src={NuKenzie} alt="NuKenzie Logo" />
          <h2>
            Centralize o <br /> controle de suas <br /> finanças
          </h2>
          <p>de forma rápida e segura</p>
          <button type="button" onClick={login}>
            Iniciar
          </button>
        </div>
        <div className="c-login__illustration">
          <img
            className="login__illustration"
            src={illustration}
            alt="Ilustração"
          />
        </div>
      </LoginContainer>
    );
  }

  return (
    <HomeContainer theme={darkmode} className="nuKenzie__home">
      <header>
        <nav>
          {darkmode === false ? (
            <img src={NuKenzie_lightmode} alt="NuKenzie Logo" />
          ) : (
            <img src={NuKenzie} alt="NuKenzie Logo" />
          )}

          <div>
            <SwitchButton setTheme={setDarkmode} theme={darkmode} />
            <button onClick={logout}>Início</button>
          </div>
        </nav>
      </header>

      <div className="home__finances">
        <AddFinancesPanel
          theme={darkmode}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
        <HomeSumary>
          <div className="sumary__header">
            <h3>Resumo financeiro</h3>
            <SumaryFilterBtns setFilter={setFilter} />
          </div>
          <Releases
            listTransactions={listTransactions}
            deleteTransaction={deleteTransaction}
            filter={filter}
            theme={darkmode}
          />
        </HomeSumary>
      </div>
      <StyledToastContainer />
    </HomeContainer>
  );
};

export default MainPage;
