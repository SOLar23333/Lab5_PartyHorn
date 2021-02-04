// main.js

//Created by Jared Zhang A15889667

let hornAudio = document.getElementById("horn-sound");
let playButton = document.getElementById("honk-btn");
let slider = document.getElementById("volume-slider");
let inputBox = document.getElementById("volume-number");
let hornImage = document.getElementById("sound-image");
let volumeImage = document.getElementById("volume-image");
let hornSelection = document.getElementById("audio-selection");

let airOption = document.getElementById("radio-air-horn");
let carOption = document.getElementById("radio-car-horn");
let partyOption = document.getElementById("radio-party-horn");

playButton.type = "button";
playButton.onclick = function()
{
	hornAudio.play();
}

slider.addEventListener("change", adjustSlide);

function adjustSlide() 
{
	hornAudio.volume = slider.value / 100;
	inputBox.value = slider.value;
	changeImage();
	checkButton();
}

inputBox.addEventListener("input", adjustInputBox);

function adjustInputBox() 
{
	hornAudio.volume = inputBox.value / 100;
	slider.value = inputBox.value;
	changeImage();
	checkButton();
	console.log("change");
}

hornSelection.addEventListener("input", changeHorn);

function changeHorn()
{
	if (airOption.checked)
	{
		hornImage.src = "./assets/media/images/air-horn.svg";
		hornAudio.src = "./assets/media/audio/air-horn.mp3";
	}
	else if (carOption.checked)
	{
		hornImage.src = "./assets/media/images/car.svg";
		hornAudio.src = "./assets/media/audio/car-horn.mp3";
	}
	else if (partyOption.checked)
	{
		hornImage.src = "./assets/media/images/party-horn.svg";
		hornAudio.src = "./assets/media/audio/party-horn.mp3";
	}
}


function changeImage()
{
	if (slider.value >= 67 && slider.value <= 100)
	{
		volumeImage.src = "./assets/media/icons/volume-level-3.svg";
	}
	else if (slider.value >= 34 && slider.value <= 66)
	{
		volumeImage.src = "./assets/media/icons/volume-level-2.svg";
	}
	else if (slider.value >= 1 && slider.value <= 33)
	{
		volumeImage.src = "./assets/media/icons/volume-level-1.svg";
	}
	else 
	{
		volumeImage.src = "./assets/media/icons/volume-level-0.svg";
	}
}

function checkButton()
{
	playButton.disabled = (slider.value >= 1) ? false : true;
}

