document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Click animation for social links and tool items
    document.querySelectorAll('.social-box, .tool-item').forEach(item => {
        item.addEventListener('click', function () {
            this.classList.add('heart-pop');
            setTimeout(() => {
                this.classList.remove('heart-pop');
            }, 500);
        });
    });

    // Sakura effect
    const sakuraContainer = document.querySelector('.sakura-container'); // Đảm bảo có phần tử này trong HTML
    if (!sakuraContainer) {
        console.warn('Sakura container (.sakura-container) not found. Skipping sakura effect.');
        // Bạn có thể tùy chọn tạo container nếu nó không tồn tại:
        // const body = document.body;
        // sakuraContainer = document.createElement('div');
        // sakuraContainer.classList.add('sakura-container');
        // body.appendChild(sakuraContainer);
        return; // Thoát nếu container không có
    }

    function createSakura() {
        const sakura = document.createElement('span');
        sakura.classList.add('sakura');

        // Vị trí ngang ngẫu nhiên (0vw đến 100vw)
        sakura.style.left = Math.random() * 100 + 'vw';
        // Bắt đầu hơi phía trên viewport để đảm bảo lối vào mượt mà
        sakura.style.top = `${-Math.random() * 50 - 20}px`; // -20px đến -70px

        // Kích thước ngẫu nhiên (10px đến 25px)
        const size = Math.random() * 15 + 10;
        sakura.style.width = size + 'px';
        sakura.style.height = size + 'px';

        // Thời gian animation ngẫu nhiên (dài hơn để rơi chân thật hơn: 10s đến 25s)
        const animationDuration = Math.random() * 15 + 10;
        sakura.style.animationDuration = animationDuration + 's';

        // Độ mờ ban đầu ngẫu nhiên (0.2 đến 0.6)
        const initialOpacity = Math.random() * 0.4 + 0.2;
        sakura.style.opacity = initialOpacity;

        // Xoay ban đầu ngẫu nhiên (0 đến 360 độ)
        const initialRotation = Math.random() * 360;
        sakura.style.transform = `rotate(${initialRotation}deg)`;

        // Đặt biến CSS cho tùy chỉnh animation trên từng cánh hoa
        // Biên độ lắc lư (mức độ di chuyển ngang)
        const swayAmplitude = Math.random() * 80 + 30; // 30px đến 110px
        sakura.style.setProperty('--sway-amplitude', `${swayAmplitude}px`);

        // Tốc độ xoay (tốc độ xoay trong quá trình rơi, 1 đến 4 vòng đầy đủ)
        const rotationSpeed = Math.random() * 3 + 1;
        sakura.style.setProperty('--rotation-speed', `${rotationSpeed}`);

        // Độ trễ animation để tạo sự xuất hiện ngẫu nhiên và liên tục
        // Độ trễ âm làm cho animation bắt đầu như thể nó đã diễn ra được một thời gian
        sakura.style.animationDelay = `-${Math.random() * animationDuration}s`;

        sakuraContainer.appendChild(sakura);

        // Xóa cánh hoa sau khi animation kết thúc cộng thêm một khoảng đệm nhỏ
        // Điều này ngăn chặn sự tích tụ vô hạn các phần tử trong DOM
        setTimeout(() => {
            sakura.remove();
        }, animationDuration * 1000 + 1000); // Đệm 1 giây
    }

    // Điều chỉnh khoảng thời gian tạo cánh hoa (ví dụ: mỗi 100-250ms)
    // Khoảng thời gian thấp hơn tạo ra nhiều cánh hoa hơn, cao hơn tạo ra ít hơn.
    setInterval(createSakura, 180); // Tạo một cánh hoa mới mỗi 180ms
});