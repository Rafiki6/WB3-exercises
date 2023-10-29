const dateInput = document.getElementById("travelDate");
const elapsed = document.getElementById("elapsed");


function changeDate() {
    const dateValue = dateInput.value;
    const dateString = new Date(dateValue).toString();
    elapsed.innerText =dateString;
    

}

const go = document.getElementById("go")
go.onclick = changeDate;




