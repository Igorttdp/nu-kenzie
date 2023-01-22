import * as Switch from "@radix-ui/react-switch";
import { useEffect, useState } from "react";
import "./style.css";

const SwitchButton = ({ setTheme, theme }) => {
  const invertTheme = () => {
    setTheme(!theme);
    localStorage.setItem("@Nu_Kenzie_darkmode", JSON.stringify(!theme));
  };

  const isCheckedFn = () => {
    const theme = JSON.parse(localStorage.getItem("@Nu_Kenzie_darkmode"));

    if (theme !== null && theme) {
      setIsChecked(!isChecked);
    } else {
      setIsChecked(!isChecked);
    }

    return;
  };

  const handleClick = () => {
    isCheckedFn();
    invertTheme();
  };

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("@Nu_Kenzie_darkmode"));

    if (theme !== null && theme) {
      setIsChecked(true);
    }
  }, []);

  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch.Root
      className="SwitchRoot"
      checked={isChecked}
      onClick={handleClick}
    >
      <Switch.Thumb className="SwitchThumb" />
    </Switch.Root>
  );
};

export default SwitchButton;
