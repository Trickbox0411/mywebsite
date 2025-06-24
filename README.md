# Trang web cá nhân của Ròm Lầy VN

Đây là kho mã nguồn cho trang web cá nhân của Ròm Lầy VN, được xây dựng để trở thành một trung tâm tài nguyên uy tín cho cộng đồng jailbreak iOS tại Việt Nam. Trang web cung cấp thông tin tổng hợp và các liên kết tải về cho những công cụ jailbreak, trình quản lý gói, và công cụ ký IPA phổ biến nhất.

**Xem trang web trực tiếp tại:** [https://romlayvn.github.io/](https://romlayvn.github.io/)

## ✨ Tính năng nổi bật

*   **Nội dung chuyên sâu**: Cung cấp danh sách các công cụ được tuyển chọn kỹ lưỡng, kèm theo mô tả chi tiết về tính năng, yêu cầu và ưu điểm của từng loại.
    *   Công cụ Jailbreak (unc0ver, checkra1n, Taurine, Dopamine, Palera1n, v.v.)
    *   Trình quản lý gói (Sileo, Zebra)
    *   Công cụ ký và cài đặt IPA (TrollStore, AltStore, SideStore, Sideloadly, v.v.)
*   **Giao diện Hiện đại & Responsive**:
    *   Thiết kế hai cột độc đáo trên màn hình lớn, với thanh điều hướng cố định bên trái giúp truy cập thông tin cá nhân và liên kết mạng xã hội một cách nhanh chóng.
    *   Tự động chuyển sang bố cục một cột trên thiết bị di động, đảm bảo trải nghiệm người dùng mượt mà và dễ đọc trên mọi kích thước màn hình.
*   **Chế độ Sáng/Tối (Light/Dark Mode)**:
    *   Tích hợp nút chuyển đổi giao diện, cho phép người dùng lựa chọn giữa chế độ sáng và tối để phù hợp với sở thích và điều kiện ánh sáng.
    *   Tự động nhận diện và áp dụng giao diện mặc định của hệ thống trong lần truy cập đầu tiên.
    *   Lựa chọn của người dùng được lưu lại trên trình duyệt (`localStorage`) cho các lần truy cập sau.
*   **Tối giản & Tập trung**: Giao diện được thiết kế lại để loại bỏ các hiệu ứng không cần thiết, giúp người dùng tập trung hoàn toàn vào nội dung và tăng tốc độ tải trang.

## 🚀 Công nghệ sử dụng

Trang web được xây dựng với các công nghệ web front-end cơ bản, tập trung vào hiệu suất và sự đơn giản:

*   **HTML5**: Cấu trúc nội dung ngữ nghĩa.
*   **CSS3**:
    *   **Flexbox & Grid**: Dùng để xây dựng bố cục responsive linh hoạt.
    *   **CSS Variables**: Dùng để quản lý theme (sáng/tối) một cách hiệu quả.
    *   **Transitions**: Tạo các hiệu ứng chuyển động mượt mà khi tương tác.
*   **Vanilla JavaScript**: Xử lý logic cho các tính năng tương tác như chuyển đổi theme và lưu trữ cài đặt của người dùng.
*   **Font Awesome**: Cung cấp bộ icon phong phú cho các liên kết và tiêu đề.
*   **Google Fonts**: Sử dụng font 'Poppins' để có một giao diện văn bản hiện đại và dễ đọc.

## 📂 Cấu trúc thư mục

```
├── icons/              # Chứa các icon của công cụ
├── index.html          # Trang chủ, liệt kê tất cả công cụ
├── ipa.html            # Trang riêng cho các công cụ liên quan đến IPA
├── script.js           # Chứa mã JavaScript cho các tính năng
├── style.css           # Định dạng giao diện cho toàn bộ trang web
└── README.md           # Tệp giới thiệu này
```