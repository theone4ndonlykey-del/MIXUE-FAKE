
console.log("Popup Mixue berhasil dimuat!");

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("fanmade-popup");
  const closeButton = document.getElementById("close-popup");


  if (!popup || !closeButton) {
    console.error("Popup atau tombol tidak ditemukan!");
    return;
  }


  popup.classList.add("show");

  
  closeButton.addEventListener("click", function () {
    popup.classList.remove("show");
  });
});







