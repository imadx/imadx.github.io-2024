import { format, parse } from "date-fns";

const DATE_FORMAT_SHEET = "yyyy/MM/dd";
const DATE_FORMAT_WEB = "MMM yyyy";

export const getDisplayDate = (date: string): string => {
  if (!date) return "";
  try {
    return format(parse(date, DATE_FORMAT_SHEET, new Date()), DATE_FORMAT_WEB);
  } catch (exception) {
    console.error(exception);

    return date;
  }
};
