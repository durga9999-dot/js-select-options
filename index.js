const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'too hot';
  } else if (choice === 'rainly') {
    para.textContent = 'heavy rain';
  } else if (choice === 'snowing') {
    para.textContent = 'hot cold';
  } else if (choice === 'overcast') {
    para.textContent = 'sky gloomy';
  } else {
    para.textContent = '';
  }
}
