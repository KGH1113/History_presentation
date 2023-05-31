let i = 0;
document.querySelector(`.div${i}`).style.display = 'block';

const next = () => {
    try {
        document.querySelector(`.div${i}`).style.display = 'none';
        i ++;
        document.querySelector(`.div${i}`).style.display = 'block';
    } catch(err) {
        alert('끝 페이지에 도달하셨습니다.');
        i--;
    }
}

const before = () => {
    try {
        document.querySelector(`.div${i}`).style.display = 'none';
        i --;
        document.querySelector(`.div${i}`).style.display = 'block';
    } catch(err) {
        alert('처음 페이지에 도달하셨습니다.');
        i++;
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowRight') {
        next();
    } else if (event.key == 'ArrowLeft') {
        before();
    }
});