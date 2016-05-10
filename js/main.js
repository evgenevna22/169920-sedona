var link = document.querySelector(".search");
var popup = document.querySelector(".hidden-form");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=check]");
var password = popup.querySelector("[name=checkout]");
var password = popup.querySelector("[name=adult]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("show-form");
  popup.classList.remove("show-form-error");
});
form.addEventListener("submit", function(event) {
  if (!check.value || !checkout.value || !adult.value) {
    event.preventDefault();
    alert ("Необходимо ввести дату Вашего заезда и выезда, а также количество гостей");
    popup.classList.add("show-form-error")
}
});
