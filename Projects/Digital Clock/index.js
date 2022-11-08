const date = document.getElementById('date');
const time = document.getElementById('hour');

let watch = () => {
    const DATE = new Date();
    time.innerHTML = DATE.toLocaleTimeString();

    let days = ['SUN','TUE','WED','THU','FRI','SAT'];

};
const INTERVAL_ID = setInterval(watch,  1000);