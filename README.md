# Dockerized React Application (btkoanh1612-stack/docker-react)

Đây là một dự án ứng dụng React được đóng gói trong Docker, thiết lập cho môi trường Continuous Integration (CI) với Travis CI.

## Mục tiêu

Mục tiêu của dự án này là học cách:
1. Đóng gói ứng dụng React bằng Docker.
2. Thiết lập môi trường phát triển (Development Environment) và môi trường sản xuất (Production Environment) bằng Docker.
3. Tích hợp liên tục (Continuous Integration) bằng Travis CI để tự động chạy kiểm thử và build Docker Image khi có code mới.

## Hướng dẫn khởi chạy

### 1. Môi trường Development (Sử dụng Docker Compose)

```bash
docker-compose up --build

### 2. Chạy kiểm thử (Testing)

# Chú ý: Bạn cần chạy lệnh build ở trên trước để tạo Image 'btkoanh1612/docker-react-test'

docker run btkoanh/docker-react-test npm run test