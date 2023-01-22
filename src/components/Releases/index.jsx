import emptyCard from "./assets/emptyCard.svg";
import EmptyTransactionsContainer from "./EmptyTransactionsContainer";
import TransactionsContainer from "./TransactionsContainer";

const Releases = ({ listTransactions, deleteTransaction, filter, theme }) => {
  if (listTransactions.length === 0) {
    return (
      <EmptyTransactionsContainer theme={theme}>
        <h2>Você ainda não possui nenhum lançamento</h2>

        <img src={emptyCard} alt="" />
        <img src={emptyCard} alt="" />
        <img src={emptyCard} alt="" />
      </EmptyTransactionsContainer>
    );
  } else if (listTransactions.length !== 0 && filter === "entradas") {
    const enter = listTransactions.filter((el) => el.type === "Entrada");

    if (enter.length === 0) {
      return (
        <EmptyTransactionsContainer theme={theme}>
          <h2>Você não possui nenhuma entrada</h2>

          <img src={emptyCard} alt="" />
          <img src={emptyCard} alt="" />
          <img src={emptyCard} alt="" />
        </EmptyTransactionsContainer>
      );
    }

    return (
      <TransactionsContainer theme={theme} className="transactions__list">
        {enter.map((el, i) => {
          return (
            <li aria-labelledby={el.id} className={`transaction ${el.type}`} key={i}>
              <div className={`transitionColor ${el.type}`}></div>
              <div className="transaction__description">
                <h3>{el.description}</h3>
                <span>{el.type}</span>
              </div>
              <div className="transaction__control">
                <span>R$ {el.value.toFixed(2)}</span>
                <button onClick={deleteTransaction}></button>
              </div>
            </li>
          );
        })}
      </TransactionsContainer>
    );
  } else if (listTransactions.length !== 0 && filter === "despesas") {
    const out = listTransactions.filter((el) => el.type === "Despesa");

    if (out.length === 0) {
      return (
        <EmptyTransactionsContainer theme={theme} className="emptyTransactions">
          <h2>Você não possui nenhuma despesa</h2>

          <img src={emptyCard} alt="" />
          <img src={emptyCard} alt="" />
          <img src={emptyCard} alt="" />
        </EmptyTransactionsContainer>
      );
    }

    return (
      <TransactionsContainer theme={theme} className="transactions__list">
        {out.map((el, i) => {
          return (
            <li aria-labelledby={el.id} className={`transaction ${el.type}`} key={i}>
              <div className={`transitionColor ${el.type}`}></div>
              <div className="transaction__description">
                <h3>{el.description}</h3>
                <span>{el.type}</span>
              </div>
              <div className="transaction__control">
                <span>R$ {el.value}.00</span>
                <button onClick={deleteTransaction}></button>
              </div>
            </li>
          );
        })}
      </TransactionsContainer>
    );
  }

  return (
    <TransactionsContainer theme={theme} className="transactions__list">
      {listTransactions.map((el, i) => {
        return (
          <li aria-labelledby={el.id} className={`transaction ${el.type}`} key={i}>
            <div className={`transitionColor ${el.type}`}></div>
            <div className="transaction__description">
              <h3>{el.description}</h3>
              <span>{el.type}</span>
            </div>
            <div className="transaction__control">
              <span>R$ {el.value}.00</span>
              <button onClick={deleteTransaction}></button>
            </div>
          </li>
        );
      })}
    </TransactionsContainer>
  );
};

export default Releases;
