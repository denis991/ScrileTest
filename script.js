document.addEventListener('DOMContentLoaded', function () {
	var initialAmount = 14;

	var modal = document.querySelector('.modal');
	var targetElement = document.querySelector('.target');
	var valueElement = document.querySelector('.value');
	var messageElement = document.querySelector('.message');

	function animateIndicator() {
		var currentValue = initialAmount;
		var targetValue = 15;
		var increment = 0.2;

		var intervalId = setInterval(function () {
			if (currentValue >= targetValue) {
				clearInterval(intervalId);
				targetElement.style.backgroundColor = '#00A910';
				// modal.classList.add('container-alert');
				return;
			}

			currentValue += increment;
			valueElement.textContent = '$' + currentValue.toFixed(2);
		}, 2000);
	}

	// modal.style.display = 'block';
	animateIndicator();
});

/**
 *
maximumProgress - максимальное значение прогресса (100 в данном случае)
minimumProgress - минимальное значение прогресса (0 в данном случае)
presentStatus - текущий прогресс загрузки
increasedBy - значение, на которое нужно увеличить прогресс загрузки
 */

// Пример использования
const maximumProgress = 100;
const minimumProgress = 0;
const  presentStatus = 50;
const increasedBy = 10;
function loadingLine(maximumProgress, minimumProgress, presentStatus, increasedBy) {
  // Получение элемента прогресс-бара
  const progressBar = document.querySelector('.nendoveb-kubscupon .kacekagen-protsem');

  // Рассчет текущего прогресса загрузки
  const currentProgress = presentStatus + increasedBy;

  // Ограничение прогресса в заданных пределах
  currentProgress = Math.min(Math.max(currentProgress, minimumProgress), maximumProgress);

  // Рассчет ширины прогресс-бара в процентах
  const progressWidth = (currentProgress - minimumProgress) / (maximumProgress - minimumProgress) * 100;

  // Применение новой ширины прогресс-бара
  progressBar.style.width = progressWidth + '%';
}



// Обработчик клика на кнопку
document.getElementById('myButton').addEventListener('click', function() {
  loadingLine(maximumProgress, minimumProgress, presentStatus, increasedBy);
});
