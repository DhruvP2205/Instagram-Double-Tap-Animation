const clickArea = document.querySelector('.inner-div');
const clickCount = document.querySelector('.clickCount');


let cnt = 0;

const showHeart = (event) =>
{
	const heart = document.createElement('i');
	heart.classList.add('fas');
	heart.classList.add('fa-heart');
	clickArea.append(heart);

	setTimeout(() => {
		heart.remove();
	},800);
}

clickArea.addEventListener('dblclick', () => {
	clickCount.innerHTML = ++cnt;
	showHeart(event);
});

