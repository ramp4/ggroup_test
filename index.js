function sliderHandler(i) {
  const activeButton = document.querySelector(".controls-radio--active");
  const activeSlider = document.querySelector(".slider-slide--active");

  if (!activeButton.classList.contains(`controls-radio_${i}`)) {
    const newActiveButton = document.querySelector(`.controls-radio_${i}`);
    const newActiveSlider = document.querySelector(`.slider-slide_${i}`);

    console.log(activeSlider);
    console.log(newActiveSlider);

    activeButton.classList.toggle("controls-radio--active");
    newActiveButton.classList.toggle("controls-radio--active");

    activeSlider.classList.toggle("slider-slide--active");
    newActiveSlider.classList.toggle("slider-slide--active");
  }
}

const formPhone = document.querySelector(".form-phone");
const alertBlockClassList = document.querySelector(".alert_block").classList;

function alertHandler() {
  if (formPhone.checkValidity()) {
    setTimeout(() => {
      formPhone.value = "";
    }, 0);

    alertBlockClassList.toggle("alert_block--visible");

    setTimeout(() => {
      alertBlockClassList.toggle("alert_block--visible");
    }, 5000);
  }
}

function windowHandler(i) {
  const selectedWindow = document.querySelector(".window-name--selected");
  const clickedWindow = document.querySelector(`.window-name_${i}`);
  const leftImage = document.querySelector(".left-image");
  const rightWindowName = document.querySelector(".right-window_name");

  if (!clickedWindow.classList.contains("window-name--selected")) {
    selectedWindow.classList.toggle("window-name--selected");
    clickedWindow.classList.toggle("window-name--selected");

    leftImage.classList = `left-image window-image_${i}`;

    if (i <= 3) {
      rightWindowName.innerHTML = `${clickedWindow.innerHTML} окно KBE`;
    } else {
      rightWindowName.innerHTML = `${clickedWindow.innerHTML} KBE`;
    }
  }
}
