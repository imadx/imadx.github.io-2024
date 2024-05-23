import { FC, useState } from "react";

interface ToggleMode {
  onChange: (value: boolean) => void;
  label: string;
}

export const ToggleMode: FC<ToggleMode> = ({ onChange, label }) => {
  const [isOn, setIsOn] = useState(false);

  const handleOnClick = () => {
    setIsOn((previous): boolean => {
      onChange(!previous);

      return !previous;
    });
  };

  return (
    <div className="float-end bg-red-500">
      <button onClick={handleOnClick}>{label}</button>
    </div>
  );
};
