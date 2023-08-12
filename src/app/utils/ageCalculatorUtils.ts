interface DateObject {
  days: number;
  months: number;
  years: number;
}

interface Age {
  days: number | undefined;
  months: number | undefined;
  years: number | undefined;
}
  
export default function calculateAgeFromObject(birthdate: DateObject): Age {
  const currentDate = new Date();
  const birthYear = birthdate.years;
  const birthMonth = birthdate.months - 1; // Months in JavaScript are 0-indexed
  const birthDay = birthdate.days;

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  let years = currentYear - birthYear;
  let months = currentMonth - birthMonth;
  let days = currentDay - birthDay;

  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    months--;
    const daysInLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    days += daysInLastMonth;
  }

  return {
    days: days,
    months: months,
    years: years,
  };
}