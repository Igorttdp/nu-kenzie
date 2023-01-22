// Components
import { TotalMoneyContainer } from "./TotalMoneyContainer";

const TotalMoney = ({ listTransactions, theme }) => {
  const showTotal = (listTransactions) => {
    return listTransactions
      .reduce((pv, cv) => {
        return pv + cv.value;
      }, 0)
      .toFixed(2);
  };

  if (listTransactions.length !== 0) {
    return (
      <TotalMoneyContainer theme={theme}>
        <div className="totalMoney__textContent">
          <h3>Valor total:</h3>
          <p>O valor total se refere ao saldo</p>
        </div>

        <span>$ {showTotal(listTransactions)}</span>
      </TotalMoneyContainer>
    );
  }
};

export default TotalMoney;
