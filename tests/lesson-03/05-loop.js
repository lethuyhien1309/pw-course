//1. Tính tổng từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    console.log(i); //in ra giá trị của i
    sum += i; //cộng giá trị của i vào sum
}
console.log(sum)

//2. In bảng cửu chương
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + "x" + j + "=" + (i * j));

    }
}

//3. Tạo 1 mảng chứa số lẻ từ 1 -> 99
let arr = [];
for(let i = 1; i <=99; i++) {
    if(i % 2 ===1) {
        arr.push(i)
    }
     
}
console.log ('Mảng từ số lẻ là = ',arr)

//4. In ra 10 email dựa trên tên người dùng và số thứ tự

console.log('Danh sách các email theo user dựa trên người dùng và số thứ tự');
for ( let i = 1; i<=10; i++)
    {
        
        console.log('user' + i + "@example.com")

    }

//5. Tính tổng doanh thu 12 tháng trong năm

const doanhThu = [
    { month : 1,total : 100},
    { month : 2,total : 200},
    { month : 3,total : 300},
    { month : 4,total : 400},
    { month : 5,total : 500},
    { month : 6,total : 600},
    { month : 7,total : 700},
    { month : 8,total : 800},
    { month : 9,total : 900},
    { month : 10,total : 1000},
    { month : 11,total : 1100},
    { month : 12,total : 1200},
]
let tongDoanhThu =0;
for (let i = 0; i < doanhThu.length; i++)
{
    tongDoanhThu += doanhThu[i].total;
}
console.log('Tong doanh thu 12 thang=', tongDoanhThu);
