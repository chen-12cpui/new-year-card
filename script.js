// 可以通过修改这里的配置来更改祝福对象的信息
const config = {
    name: "张三",
    photoUrl: "placeholder.jpg"  // 替换为实际的照片URL
};

// 更新页面上的名字和照片
document.addEventListener('DOMContentLoaded', function() {
    // 更新名字
    const nameElement = document.querySelector('.highlight');
    if (nameElement) {
        nameElement.textContent = config.name;
    }

    // 更新照片
    const photoElement = document.getElementById('personPhoto');
    if (photoElement) {
        photoElement.src = config.photoUrl;
    }

    // 添加鼠标悬停效果
    const photo = document.querySelector('.rotating-photo');
    if (photo) {
        photo.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        photo.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
}); 