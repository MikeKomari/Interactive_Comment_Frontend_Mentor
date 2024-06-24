export function timePassed(time_string) {
  const today = new Date();
  const date = new Date(time_string);

  //Convert the time into minutes, days, months, and years
  //1000 ms is 1 second (I think)
  const minute_passed = Math.trunc(Math.abs(today - date) / (60 * 1000));

  const hours_passed = Math.trunc(minute_passed / 60);

  const days_passed = Math.trunc(hours_passed / 24);

  // Average days / month is 30.437
  const months_passed = Math.trunc(days_passed / 30.437);

  const years_passed = Math.trunc(months_passed / 12);

  const no_s = (time) => (time === 1 ? "" : "s");

  if (minute_passed < 10) return `A few moments ago`;
  if (minute_passed < 60)
    return `${minute_passed} Minute${no_s(minute_passed)} Ago`;
  if (hours_passed < 24) return `${hours_passed} Hour${no_s(hours_passed)} Ago`;
  if (days_passed < 31) return `${days_passed} Day${no_s(days_passed)} Ago`;
  if (months_passed <= 12)
    return `${months_passed} Month${no_s(months_passed)} Ago`;
  return `${years_passed} Year${no_s(years_passed)} Ago`;
}
