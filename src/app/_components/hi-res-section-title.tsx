import { FC, ReactNode } from "react";

interface HiResSectionTitle {
  children: ReactNode;
}

export const HiResSectionTitle: FC<HiResSectionTitle> = ({ children }) => {
  return <h4 className="pt-8 pb-4 uppercase">{children}</h4>;
};
