import { FC, useState } from "react";

interface ToggleMode {
  onChange: (value: boolean) => void;
}

export const ToggleModeContent: FC<ToggleMode> = ({ onChange }) => {
  const [isOn, setIsOn] = useState(false);

  const handleOnClick = () => {
    setIsOn((previous): boolean => {
      onChange(!previous);

      return !previous;
    });
  };

  return (
    <div className="float-end font-mono">
      View in{" "}
      <button
        className="bg-shark-900 px-4 py-1 rounded-full"
        onClick={handleOnClick}
      >
        {isOn ? "Lo" : "Hi"}
      </button>{" "}
      res
    </div>
  );
};
