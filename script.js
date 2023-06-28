document.addEventListener("DOMContentLoaded", function() {
  // Fetch initial value from URL using AJAX
  var initialAmount = 14;

  // Animation
  var targetElement = document.querySelector(".target");
  var valueElement = document.querySelector(".value");
  var messageElement = document.querySelector(".message");

  function animateIndicator() {
    var currentValue = initialAmount;
    var targetValue = 15;
    var increment = 0.2;

    var intervalId = setInterval(function() {
      if (currentValue >= targetValue) {
        clearInterval(intervalId);
        targetElement.style.backgroundColor = "#00A910";
        messageElement.style.display = "none";
        return;
      }

      currentValue += increment;
      valueElement.textContent = "$" + currentValue.toFixed(2);
    }, 2000);
  }

  animateIndicator();
});
