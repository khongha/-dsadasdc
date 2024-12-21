function showPopups() {
    const mainBox = document.getElementById("main-box");
    mainBox.style.display = "none"; // Ẩn bảng chính

    const numPopups = 100; // Số bảng hiện ra là 100
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    for (let i = 0; i < numPopups; i++) {
        const popup = document.createElement("div");
        popup.className = "popup";
        popup.innerText = "Anh nhớ em"; // Chữ trong khung

        // Vị trí ngẫu nhiên trên toàn màn hình
        const x = Math.random() * (screenWidth - 200); // Trừ chiều rộng của khung
        const y = Math.random() * (screenHeight - 100); // Vị trí ngẫu nhiên trên toàn màn hình
        popup.style.left = x + "px";
        popup.style.top = y + "px";

        // Thời gian ngẫu nhiên cho hiệu ứng rơi
        const fallTime = Math.random() * 5 + 3; // Thời gian từ 3s đến 8s

        // Thêm animation với thời gian ngẫu nhiên
        popup.style.animationDuration = `${fallTime}s`;

        // Thêm khung vào body
        document.body.appendChild(popup);
    }
}
