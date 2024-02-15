export function getCurrentDate() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const today = new Date();

    const currentDateInfo = {
        day: daysOfWeek[today.getDay()],
        month: months[today.getMonth()],
        date: today.getDate(),
        year: today.getFullYear(),
    };

    return `${currentDateInfo.day}, ${currentDateInfo.month} ${currentDateInfo.date}, ${currentDateInfo.year}`;
}