//Bài tập 1
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);

//Bai tập 2
// function bangCuuChuong(n) {
//     for (let i = 1; i <= 9; i++) {
//         console.log(`bang cuu chuong ${n} :${n} x ${i} = ${n * i}`);
//     }
//     return `Bang cuu chuong ${n} đã được in ra.`;
// }
// for (let n = 2; n <= 9; n++) {
//     bangCuuChuong(n);
// }

for (let i = 2; i <= 10; i++) {
console.log(`Bảng cửu chương ${i}`);
for (let j = 1; j <= 10; j++) {
console.log(`${i} x ${j} = ${i * j}`);
}
}

// console.log(bangCuuChuong(2));
// console.log(bangCuuChuong(3));
// console.log(bangCuuChuong(4));
// console.log(bangCuuChuong(5));
// console.log(bangCuuChuong(6));
// console.log(bangCuuChuong(7));
// console.log(bangCuuChuong(8));
// console.log(bangCuuChuong(9));

//Bài tập 3
const arr = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        arr.push(i);
    }
}
console.log(arr);

//Bài tập 4
let gmail = "@example.com";
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}${gmail}`);
}

//Bài tập 5
const doanhThu = [
{ "month": 1, "total": 1000 },
{ "month": 2, "total": 1500 },
{ "month": 3, "total": 2000 },
{ "month": 4, "total": 2500 },
{ "month": 5, "total": 3000 },
{ "month": 6, "total": 3500 },
{ "month": 7, "total": 4000 },
{ "month": 8, "total": 4500 },
{ "month": 9, "total": 5000 },
{ "month": 10, "total": 5500 },
{ "month": 11, "total": 6000 },
{ "month": 12, "total": 6500 }
];
let tongDoanhThu = 0;
for (let i = 0; i < doanhThu.length; i++) {
    tongDoanhThu += doanhThu[i].total;
}
console.log(`Tổng doanh thu là: ${tongDoanhThu}`);