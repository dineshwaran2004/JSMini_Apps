setInterval(() => {
  let now = new Date();
  let hour  = now.getHours();
  let min   = now.getMinutes();
  let sec   = now.getSeconds();
  let date  = now.getDate();
  let month = now.getMonth() + 1;
  let year  = now.getFullYear();
  document.getElementById("clock").innerHTML =
    hour + ":" + min + ":" + sec + "<br>" +
    date + "/" + month + "/" + year;
}, 1000);
