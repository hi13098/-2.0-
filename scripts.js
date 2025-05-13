// Переменная текущего кадра
let currentFrame = 1;
const totalFrames = 3; // Всего кадров в комике

// Функция показа следующего кадра
function showNextFrame() {
    if(currentFrame >= totalFrames){
        alert("Конец истории!");
        return;
    }
    const frames = document.querySelectorAll('.comic-frame');
    for(let i=0;i<frames.length;i++){
        frames[i].style.display = 'none';
    }
    currentFrame++;
    document.getElementById(`frame${currentFrame}`).style.display = 'block';
}
