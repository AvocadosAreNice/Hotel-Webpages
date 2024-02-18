// disable past dates and timings

var currentDate = new Date();

var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();


var maxMonth = month + 1;
var maxYear = year;


// convert 1 to 01 or any month before october

if (day < 10) {
    day = String(day);
    day = '0' + day;
}
if (month < 10) {
    month = String(month);
    month = '0' + month;
}
if (maxMonth < 10) {
    maxMonth = String(maxMonth)
    maxMonth = '0' + maxMonth;
}
if (maxMonth == 13) {
    maxMonth = 1;
    maxYear = year + 1;
}

// convert everything to string

String(year);
String(month);
String(day);
String(maxYear);
String(maxMonth);


var minDate = year + '-' + month + '-' + day;
var maxDate = maxYear + '-' + maxMonth + '-' + day;


// set calendar value

var dateInput = document.getElementById('date');
function verifyDate() {
    dateInput.min = minDate;
    dateInput.max = maxDate;
}

window.onload = verifyDate();



// disable past timings

var hour = currentDate.getHours();
var timeSelect = document.getElementById('time');
var timeOptions = timeSelect.getElementsByTagName('option');
var newHour = hour + 2;
var adjust = false;


dateInput.addEventListener('change', function() {  // change timing option depending on date chosen
    for (let i = timeOptions.length; i --;) {
        timeSelect.removeChild(timeOptions[i]);
    }
    var chosenDate = this.value;
    if (chosenDate == minDate) {
        if (hour < 12) {
            for (let x = 12;x < 22; x++) {
                var later2 = String(x) + ':' + '00';
                var select2 = document.createElement('option');
                var text2 = document.createTextNode(later2);
                select2.appendChild(text2);
                timeSelect.appendChild(select2);
            }
        }
        else {
            for (let x = newHour;x < 22; x++) {
                var later = String(x) + ':' + '00';
                var select = document.createElement('option');
                var text = document.createTextNode(later);
                select.appendChild(text);
                timeSelect.appendChild(select);
        }
    }
    }
    else {
        for (let x = 12;x < 22; x++) {
            var later2 = String(x) + ':' + '00';
            var select2 = document.createElement('option');
            var text2 = document.createTextNode(later2);
            select2.appendChild(text2);
            timeSelect.appendChild(select2);
        }
    }
})



  // grab submission data

var form = document.getElementById('resForm');
var summaryWindow = document.getElementById('summary');


function summary() {
    // res information
    var chosen = document.getElementById('restaurant');
    var chosenRes = chosen.options[chosen.selectedIndex].text;
    document.getElementById('chosenRes').innerText = 'Restaurant: ' + chosenRes;
    
    // date and time
    var chosenDate = dateInput.value;
    document.getElementById('chosenDate').innerText = 'Date: ' + chosenDate;
    var chosen2 = document.getElementById('time');
    var chosenTime = chosen2.options[chosen2.selectedIndex].text;
    document.getElementById('chosenTiming').innerText = 'Timing: ' + chosenTime;


    // adults and children
    var adultsInput = document.getElementById('adults');
    var childrenInput = document.getElementById('children');
    var chosenAdults = adultsInput.value;
    var chosenChildren = childrenInput.value;
    document.getElementById('chosenAdults').innerText = 'Adults: ' + chosenAdults;
    document.getElementById('chosenChildren').innerText = 'Children: ' + chosenChildren;
    

    // contact information
    var chosenName = document.getElementById('name_input').value;
    document.getElementById('chosenName').innerText = 'Name: ' + chosenName;
    var chosenPhone = document.getElementById('phoneNum').value;
    document.getElementById('chosenPhone').innerText = 'Phone Number: ' + chosenPhone;
    var chosenEmail = document.getElementById('finalEmail').value;
    document.getElementById('chosenEmail').innerText = 'Email: ' + chosenEmail;

    // comments 
    var userComments = document.getElementById('textarea').value;
    if (userComments == '') {
        document.getElementById('userComments').innerText = 'No comments were entered.';
    }
    else {
        document.getElementById('userComments').innerText = userComments;
    }


    summaryWindow.style.display = 'block';
    document.body.style.overflow = 'hidden';

}


  // disable placeholder options when submitting


function validateSubmit() {
var chosen = document.getElementById('restaurant');
var chosenRes = chosen.options[chosen.selectedIndex].text;
var chosen2 = document.getElementById('time');
var chosenTime = chosen2.options[chosen2.selectedIndex].text;
if (chosenRes == '- Select a restaurant -') {
    alert('Select a restaurant.');
    return false;
}
else if (chosenTime == '- Select a timing -') {
    alert('Select a timing.');
    return false;
}
else {
    return true;
}
}
