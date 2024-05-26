import {
  DataType,
  useGoogleSheetData,
} from "@/hooks/use-google-sheet-data-output";
import { HiResSectionTitle } from "./hi-res-section-title";
import Image from "next/image";
import clsx from "clsx";
import { getSanitizedUrl } from "@/utils/url";

const organizationLogoUrlMapping: Record<string, string> = {
  "workplace.organization": "/images/organizations/organization-logo.png",
  sph: "/logos/logo-sph.png",
  emq: "/logos/logo-emq.png",
  railsbank: "/logos/logo-railsr.png",
  syscolabs: "/logos/logo-syscolabs.png",
  toptal: "/logos/logo-toptal.png",
  kloudmart: "/logos/logo-kloudmart.png",
  "topcoder studio": "/logos/logo-topcoder.png",
  upwork: "/logos/logo-upwork.png",
};

export const HiResWorkplaces = () => {
  const worplaces = useGoogleSheetData(DataType.workplaces);

  const workplacesContent = worplaces.data.map((workplace) => {
    return (
      <li
        key={workplace.title}
        className="flex place-items-center flex-col gap-1 justify-between w-[160px] text-center"
      >
        <a href={getSanitizedUrl(workplace.organizationUrl)}>
          <Image
            className={clsx(
              "size-[160px] flex place-items-center justify-center rounded-xl p-2 grayscale brightness-150 contrast-160",
              "hover:bg-shark-600/5 hover:grayscale-0 hover:brightness-100 hover:contrast-100 hover:shadow-xl",
            )}
            src={
              workplace.organizationLogoUrl ||
              organizationLogoUrlMapping[workplace.organization.toLowerCase()]
            }
            alt={`Logo of ${workplace.organization}`}
            width={160}
            height={160}
          />
        </a>
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
