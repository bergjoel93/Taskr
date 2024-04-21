// Function to format the date
function formatDueDate(dueDate) {
    if (!(dueDate instanceof Date) || isNaN(dueDate.getTime())) {
        console.error("Invalid date provided to formatDueDate:", dueDate);
        return "Invalid date";  // Or any fallback string you prefer
    }
    const options = {
        weekday: 'long', // full day of the week (e.g., Thursday)
        month: 'long', // full month name (e.g., April)
        day: 'numeric', // day of the month (e.g., 4)
        hour: 'numeric', // hour (e.g., 8)
        minute: 'numeric', // minute (e.g., 0)
        hour12: true // 12-hour clock format (AM/PM)
    };
    return new Intl.DateTimeFormat('en-US', options).format(dueDate);
}

export { formatDueDate };
