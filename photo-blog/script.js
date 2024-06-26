const generateBtn = document.querySelector("#generateBtn");
const gridContainer = document.querySelector('#gridContainer');

generateBtn.addEventListener('click', () => {
    // 이미지가 30개 이상일 경우, 이미지 삭제하기
    if (gridContainer.children.length >= 30){
        const confirmed = confirm("모든 사진을 지우시겠습니끼?");
        if (confirmed){
            gridContainer.innerHTML = "";
        }
    } else {
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        const imgUrl = `https://picsum.photos/500?random=${randomNumber}`;
        const img = document.createElement('img');
        img.src = imgUrl;
        gridContainer.appendChild(img);
    }
});
