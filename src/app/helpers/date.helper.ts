import dayjs from "dayjs";

export function isValidExpirationDate(expirationDate: string): boolean {
  const expirationMonth = dayjs(expirationDate, "MM/YY").month() + 1;
  const expirationYear = dayjs(expirationDate, "MM/YY").year();

  const currentMonth = dayjs().month() + 1;
  const currentYear = dayjs().year();

  if (
    expirationYear > currentYear ||
    (expirationYear === currentYear && expirationMonth >= currentMonth)
  ) {
    return true;
  } else {
    return false;
  }
}
