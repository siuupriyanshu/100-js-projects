const btn = document.getElementById("btn");
const birthday = document.getElementById("birthday");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
    const birthdayValue = birthday.value;
    
    if (birthdayValue === "") {
        alert("Please enter your birthday");
        return;
    }

    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    let month = currentDate.getMonth() - birthdayDate.getMonth();
    let day = currentDate.getDate() - birthdayDate.getDate();

    // Adjust if the birthday hasn't occurred yet this year
    if (month < 0 || (month === 0 && day < 0)) {
        age--;
        month += 12;
    }

    // Adjust the days if the birthday day hasn't occurred this month
    if (day < 0) {
        const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        day += previousMonth.getDate();
        month--;
    }

    result.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"} ${month} ${month > 1 ? "months" : "month"} ${day} ${day > 1 ? "days" : "day"} old`;
});
