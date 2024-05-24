import {
  DataType,
  useGoogleSheetData,
} from "@/hooks/use-google-sheet-data-output";
import { HiResSectionTitle } from "./hi-res-section-title";
import Image from "next/image";

export const HiResWorkplaces = () => {
  const worplaces = useGoogleSheetData(DataType.workplaces);

  const workplacesContent = worplaces.data.map((workplace) => {
    return (
      <li
        key={workplace.title}
        className="flex place-items-center flex-col gap-1 w-40 text-center"
      >
        <Image
          className="size-40 flex place-items-center justify-center bg-shark-900/50 rounded-full"
          src={workplace.organizationLogoUrl}
          alt={`Logo of ${workplace.organization}`}
        />
        <h5 className="text-xl">{workplace.organization}</h5>
        <h6 className="text-shark-300">{workplace.title}</h6>
      </li>
    );
  });

  return (
    <>
      <HiResSectionTitle>Workplaces</HiResSectionTitle>
      <ul className="flex gap-8 flex-wrap w-full">{workplacesContent}</ul>
    </>
  );
};
