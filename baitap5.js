/*Giả sử:
a = 86 | 8 + 6


Đầu vào:
- Tạo biến a gán giá trị 86

Xử lý:
- Tạo biến hangDV = a % 10
- Tạo biến hangChuc = a / 10
- Tạo biến tổng: sum = hangDV + hangChuc

Đàu ra:
Thông báo ra kết quả console

*/

var a = 86;
var hangDV = a % 10;
console.log("Units:" + hangDV);

var hangChuc = Math.floor(a / 10);
console.log("Tens:" + hangChuc);

var sum = hangDV + hangChuc;

console.log("Sum:" + sum);