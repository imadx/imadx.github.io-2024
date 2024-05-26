import { userRoles } from "@/constants/user-roles";
import {
  DataType,
  useGoogleSheetData,
} from "@/hooks/use-google-sheet-data-output";
import { getDisplayDate } from "@/utils/format";
import clsx from "clsx";
import { useEffect, useState } from "react";

const quoteIcon = (
  <svg viewBox="0 0 123 199" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M108.167 199H22.6667C15.1667 199 8.33333 189.5 4.6667 177C1.00008 164.5 -1.49999 115 4.6667 81C10.8334 47 35 0 52.1667 0H75.1667C61.5 13 47 41 43.5 60C40 79 45.5 102 45.5 102H108.167C121.667 102 122.667 113.5 122.667 120.5V180.5C122.667 195.5 116.167 199 108.167 199Z"
      fill="currentColor"
    />
  </svg>
);

const RolesLength = userRoles.length;

export const HiResBrand = () => {
  const metadata = useGoogleSheetData(DataType.metadata);
  const lastUpdatedOn = metadata.data?.[0]?.lastUpdated || ":)";
  const [currentRoleIndexCounter, setCurrentRoleIndexCounter] =
    useState(RolesLength);

  const incrementCounter = () => {
    setCurrentRoleIndexCounter((prevIndex) => {
      return ((prevIndex + RolesLength) % RolesLength) + RolesLength + 1;
    });
  };

  useEffect(() => {
    let interval = setInterval(incrementCounter, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleOnClickBrand = () => {
    incrementCounter();
  };

  const currentRoleIndex =
    (currentRoleIndexCounter + RolesLength) % RolesLength;
  const nextRoleIndex =
    currentRoleIndexCounter + 1 === RolesLength
      ? 0
      : (currentRoleIndexCounter + 1) % RolesLength;
  const previousRoleIndex =
    currentRoleIndexCounter - 1 === -1
      ? RolesLength - 1
      : (currentRoleIndexCounter - 1) % RolesLength;

  return (
    <>
      <div
        className="flex place-items-baseline tracking-wide relative w-max select-none cursor-pointer"
        onClick={handleOnClickBrand}
      >
        <h1 className="font-black text-9xl mr-2 w-max">Ishan.</h1>
        <div className="absolute left-[100%] top-[calc(100%_-_3rem)]">
          {userRoles.map((role, index) => (
            <h3
              key={role}
              className={clsx(
                "font-black text-4xl text-lime-400 min-w-max transition-all absolute",
                "transform opacity-0 will-change-[transform,opacity]",
                index === previousRoleIndex ? "-translate-y-3 opacity-0" : "",
                index === currentRoleIndex ? "translate-y-0 opacity-100" : "",
                index === nextRoleIndex ? "translate-y-3 opacity-0" : "",
              )}
            >
              {role}
            </h3>
          ))}
        </div>
      </div>
      <div>
        <span className="text-shark-500 select-none">
          Last updated on {getDisplayDate(lastUpdatedOn)}
        </span>
      </div>
      <div className="text-lime-400 w-20 mt-12 flex gap-1">
        {quoteIcon}
        {quoteIcon}
      </div>
      <p className="max-w-80 text-wrap mt-6">
        <b>Complex challenges? I thrive on them!</b> As a full-stack developer,
        I wield a diverse skillset to build high-performance, scalable
        applications. Your project&apos;s needs are unique, and I&apos;m ready
        to adapt and deliver solutions that grow effortlessly.
      </p>
    </>
  );
};
