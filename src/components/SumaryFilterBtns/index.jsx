// React Hooks
import { useState } from "react";

const SumaryFilterBtns = ({ setFilter }) => {
  const activeBtn = (e) => {
    setAllBtn("");
    setEnterBtn("");
    setOutBtn("");

    if (e.target.id === "allBtn") setAllBtn("activeBtn");
    else if (e.target.id === "enterBtn") setEnterBtn("activeBtn");
    else setOutBtn("activeBtn");
  };

  const [allBtn, setAllBtn] = useState("activeBtn");
  const [enterBtn, setEnterBtn] = useState("");
  const [outBtn, setOutBtn] = useState("");

  return (
    <div className="sumary__header-btns">
      <button
        id="allBtn"
        className={allBtn}
        onClick={(e) => {
          activeBtn(e);
          setFilter("all");
        }}
      >
        Todos
      </button>
      <button
        id="enterBtn"
        className={enterBtn}
        onClick={(e) => {
          activeBtn(e);
          setFilter("entradas");
        }}
      >
        Entradas
      </button>
      <button
        id="outBtn"
        className={outBtn}
        onClick={(e) => {
          activeBtn(e);
          setFilter("despesas");
        }}
      >
        Despesas
      </button>
    </div>
  );
};

export default SumaryFilterBtns;
