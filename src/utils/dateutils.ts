import { format } from "date-fns";

const formateDate = (date: any, formate?: string) => {
  const dateObj = new Date(date);
  const dateFormat = formate ? formate : "MM/dd/yyyy";
  const formattedDate = format(dateObj, dateFormat);
  return formattedDate;
};
export { formateDate };
