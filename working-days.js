// Function to calculate number of working days
function calculateWorkingDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start)) throw new Error("Invalid start date");
  if (isNaN(end)) throw new Error("Invalid end date");
  if (start > end) throw new Error("Start date cannot be after end date");

  let workingDays = 0;
  const current = new Date(start);

  while (current <= end) {
    const day = current.getDay();
    if (day !== 0 && day !== 6) workingDays++; // skip Sat/Sun
    current.setDate(current.getDate() + 1);
  }

  return workingDays;
}

// Example usage
console.log("Example 1:", calculateWorkingDays("2024-03-18", "2024-03-22")); // 5
console.log("Example 2:", calculateWorkingDays("2024-03-15", "2024-03-15")); // 1