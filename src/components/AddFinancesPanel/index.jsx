// React Hooks
import { useState } from "react";

// Components
import TotalMoney from "../TotalMoney";
import AddFinancesPanelContainer from "./AddFinancesPanelContainer";
import { toast } from "react-toastify";

// Libs
import { v4 as uuidv4 } from "uuid";

const AddFinancesPanel = ({ listTransactions, setListTransactions, theme }) => {
  const sendRelease = (listTransactions) => {
    if (releaseType === "Entrada" && releaseValue < 0) {
      const id = 1;

      toast.error("Valor de entrada não pode ser nagativo", {
        toastId: id,
      });
    } else {
      if (releaseType === "Despesa") {
        const newRelease = {
          description: releaseDescription,
          type: releaseType,
          value: releaseValue < 0 ? releaseValue : -releaseValue,
          id: uuidv4(),
        };
        setListTransactions([...listTransactions, newRelease]);
      } else {
        const newRelease = {
          description: releaseDescription,
          type: releaseType,
          value: releaseValue,
          id: uuidv4(),
        };
        setListTransactions([...listTransactions, newRelease]);
      }

      setReleaseDescription("");
      setReleaseValue("");
      setReleaseType("Entrada");
    }
  };

  const [releaseDescription, setReleaseDescription] = useState("");
  const [releaseValue, setReleaseValue] = useState("");
  const [releaseType, setReleaseType] = useState("Entrada");

  return (
    <AddFinancesPanelContainer theme={theme} className="c-home__releases">
      <form
        className="home__releases"
        onSubmit={(e) => {
          e.preventDefault();
          sendRelease(listTransactions);
        }}
      >
        <div className="home__r-desc">
          <label htmlFor="releases-desc">Descrição</label>
          <br />
          <input
            type="text"
            name="desc"
            id="releases-desc"
            placeholder="Digite aqui sua descrição"
            value={releaseDescription}
            onChange={(e) => setReleaseDescription(e.target.value)}
            required
          />
          <br />
          <span>Ex: Compra de roupas</span>
        </div>

        <div className="home__r-values">
          <div>
            <label htmlFor="release-value">Valor</label>
            <br />
            <input
              type="number"
              name="release-value"
              id="release-value"
              placeholder="1"
              value={releaseValue}
              onChange={(e) => setReleaseValue(Number(e.target.value))}
              required
            />
          </div>
          <div>
            <label htmlFor="release-typeValue">Tipo de valor</label>
            <br />
            <select
              required
              className="selectpicker"
              name="release-typeValue"
              id="release-typeValue"
              value={releaseType}
              onChange={(e) => setReleaseType(e.target.value)}
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Saída</option>
            </select>
          </div>
        </div>
        <button>Inserir Valor</button>
      </form>
      <TotalMoney listTransactions={listTransactions} theme={theme} />
    </AddFinancesPanelContainer>
  );
};

export default AddFinancesPanel;
