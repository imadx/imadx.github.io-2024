import { keywords } from "@/constants/keywords";
import { HiResSectionTitle } from "./hi-res-section-title";

export const HiResKeywords = () => {
  const keywordContent = keywords.map((keyword) => {
    return (
      <li
        key={keyword}
        className="bg-lime-500 text-black py-1 px-4 rounded-full bg-gradient-to-b from-lime-400 to-lime-500"
      >
        {keyword}
      </li>
    );
  });

  return (
    <>
      <HiResSectionTitle>Keywords</HiResSectionTitle>
      <ul className="flex gap-1 gap-y-2 flex-wrap w-full">{keywordContent}</ul>
    </>
  );
};
