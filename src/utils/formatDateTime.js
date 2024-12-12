
export function formatDateTime(dateString) {
    const date = new Date(dateString);
    // Format the date to d/m/y
    const day = date.getDate(); // Day of the month (1-31)
    const month = date.getMonth() + 1; // Month (0-11)
    const year = date.getFullYear(); // Full year (yyyy)
  
    const formattedDate = `${day}/${month}/${year}`;
  
    // Format the time to hour:min a.m/p.m
    let hours = date.getHours(); // Hours (0-23)
    let minutes = date.getMinutes(); // Minutes (0-59)
    const ampm = hours >= 12 ? "pm" : "am";
  
    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero if minutes < 10
  
    const formattedTime = `${hours}:${minutes} ${ampm}`;
  
    return `${formattedDate}, ${formattedTime}`;
  }

  export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate(); // Day of the month (1-31)
    const month = date.getMonth() + 1; // Month (0-11, so add 1)
    const year = date.getFullYear(); // Full year (yyyy)
  
    // Ensure day and month are always two digits
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
  
    return `${formattedDay}/${formattedMonth}/${year}`;
  }
  