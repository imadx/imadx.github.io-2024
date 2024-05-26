import { ContentMode, contentModeAtom } from "@/atoms/contentMode";
import { useAtom } from "jotai";
import { FC } from "react";

interface ToggleMode {}

export const ToggleModeContent: FC<ToggleMode> = ({}) => {
  const [contentMode, setContentMode] = useAtom(contentModeAtom);

  const handleOnClick = () => {
    setContentMode((previous): ContentMode => {
      return ContentMode.HiResMode === previous
        ? ContentMode.ShellMode
        : ContentMode.HiResMode;
    });
  };

  return (
    <div className="float-end font-mono">
      View in{" "}
      <button
        className="bg-shark-900 px-4 py-1 rounded-full"
        onClick={handleOnClick}
      >
        {contentMode ? "Lo" : "Hi"}
      </button>{" "}
      res
    </div>
  );
};
