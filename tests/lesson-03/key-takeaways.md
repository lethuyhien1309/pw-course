# Git
## Các câu lệnh về git
1. git status: Kiểm tra trạng thái
2. git restore: 
- Ý nghĩa:  Đưa file từ vùng staging về working
- Cấu trúc:
    + git restore --staged <file_name>: Đưa 1 file cụ thể
    + git restore --staged . : Đưa tất cả các file

3. git reset
- Ý nghĩa: Đưa commit từ repo về vùng working
- Cấu trúc: git reset HEAD ~<so commit>
4. git branching
- git pull: 
    + lấy code từ server về
    + cấu trúc: git pull origin main
- git branch
    + ý nghĩa: xem danh sách nhánh
    + cấu trúc: git branch
    + lưu ý: cần có ít nhất 1 commit mới hiện danh sách nhánh
- Tạo nhánh mới
    + Ý nghĩa: Khi tạo 1 nhánh mới sẽ copy y hệt giống nhánh hiện tại
    + cấu trúc: git branch <tên_branch>
***Lưu ý***: Luôn pull code về trước khi tạo nhánh mới
- Chuyển nhánh
    + Ý nghĩa:
    + Cấu trúc: git checkout <tên_branch>
- Vừa tạo vừa chuyển sang nhánh mới: git checkout -b <tên>
- Xoá branch: git branch -D <tên_nhánh>
***Lưu ý***: Đứng ở nhánh khác trước khi xoá

4. git ignore
- Là gì: là file cấu hình quan trọng, giúp chỉ định được những file và thư mục nào sẽ không được theo dõi bởi Git
- Ý nghĩa: 
+ Tránh đưa file tạm + file chứa thông tin nhạy cảm lên git
+ Giữ repo gọn hơn
- Cú pháp
    + Comment
    # ignore file cụ thể: file.txt
    # ignore tất cả file có extension .log: *.log
    # ignore thư mục: node_modules/build/
    # ignore file trong thư mục con: **/*.tmp
    # ignore tất cả các file .txt trong thư mục doc: doc/**/*/txt
# Javascript
1. Covention
- Là gì: Quy tắc, giúp cho code theo format chung, dễ nhìn, ng khác dễ đọc code
- Có nhiều loại
+ Snake_case: le_thuy_hien
    khi nào dùng: Tạm thời k dùng
+ Kebab_case: le-thuy-hien
   khi nào dùng: Đặt tên file +folder
+ Camel_case: chữ đầu viết thường, chữ sau viết hoa:leThuyHien
    khi nào dùng: Đặt tên biến, hàm
+ PascalCase: LeThuyHien
    khi nào dùng: Đặt tên class
+ UpPer_case:LE_THUY_HIEN
2. Console.log
- Là gì: Là công cụ quan trọng giúp debug và theo dõi code
- Cách sử dụng:
    + Sử dụng kèm với variable: Ví dụ console.log (`Toi la ${Hien}`);
    + Sử dụng cộng chuỗi: Ví dụ: console.log("Toi la" + name + "")
3. Object
- Là kiểu dữ liêuk, giúp lưu trữ dữ liệu dạng key-value
- Truy xuất giá trị
    + Khi nào dùng gì
        Dùng dấu chấm: nếu key không chứa dấu cách, ký tự đặc biệt
        Dùng dấu ngoặc vuông: nếu key chưá dấu cách hoặc ký tự đặc biệt

4. Arr_Mảng
- Là gì: là kiểu dữ liệu dùng để lưu nhiều giá trị trong cùng 1 biến
- Cách khai báo: let arr = [1,2,3]
- Truy cập phần tử trong mảng: console.log(a[1]);
- Lấy độ dài của mảng: console.log(a.length);
- Thêm phần tử mảng: push
- 
5. Function
- Là gì: 1 đoạn code dùng đi dùng lại, tiện, đỡ phải code lại
- Cấu trúc: 
+ hàm có tham số
function tenHam (thamSo1, thamSo2)
+ hàm không có tham số



