const today = new Date();
const day = today.getDate();
const year = today.getFullYear();
const month = today.getMonth();
const currentDate = `${year}-${month + 1}-${day}`;

export default currentDate;
