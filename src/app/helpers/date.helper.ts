import dayjs from "dayjs";

export function isValidExpirationDate(month: string, year: string): boolean {
  const expirationMonth = dayjs(month, "MM").month() + 1;
  const expirationYear = dayjs(year, "YY").year();

  const currentMonth = dayjs().month() + 1;
  const currentYear = dayjs().year();
  console.log(expirationMonth, expirationYear);
  if (
    expirationYear > currentYear ||
    (expirationYear === currentYear && expirationMonth >= currentMonth)
  ) {
    return true;
  } else {
    return false;
  }
}
