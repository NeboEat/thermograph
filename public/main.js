
window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("contact-form-status");

  function success() {
    form.reset();
    status.innerHTML = "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.";
    status.style.display = "block";
    status.style.color = "green";
  }

  function error() {
    status.innerHTML = "Hoppla! Da ist etwas schiefgegangen. Bitte versuchen Sie es später erneut.";
    status.style.display = "block";
    status.style.color = "red";
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

function ajax(method, url, data, success, error) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
