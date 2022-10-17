const now = new Date;
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
document.querySelector(".date").innerHTML = fulldate;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

const date = document.lastModified;
document.getElementById("lastMod").innerHTML = date;