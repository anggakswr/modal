const divMuncul = document.querySelector(".notif");
divMuncul.classList.add("muncul");

setInterval(() => {
  divMuncul.classList.remove("muncul");
}, 5000);
