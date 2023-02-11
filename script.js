const toggleBtn = document.queryselector(".toggle-button .toggle, .toggle-button .ball"),
         Button = document.queryselector(".toggle-button .ball"),
         buttonText = document.queryselector(".toggle-button .text");

toggleBtn.addEventListener("click", () => {
  buttonBall.toggle.class("active")

  if (buttonBall.classlist.contains("active")){
    return buttonText.innerHTML = "ON";
  }
  buttonText.innerHTML = "OFF";
});
buttonText.innerHTML = "OFF";