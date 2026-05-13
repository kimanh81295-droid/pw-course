//Bài tập 1
function tinhTong(n) {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    return sum;
}
console.log(tinhTong());

//Bai tập 2
function bangCuuChuong(n) {
    for (let i = 1; i <= 9; i++) {
        console.log(`bang cuu chuong ${n} :${n} x ${i} = ${n * i}`);
    }
    return `Bang cuu chuong ${n} đã được in ra.`;
}
console.log(bangCuuChuong(2));
console.log(bangCuuChuong(3));
console.log(bangCuuChuong(4));
console.log(bangCuuChuong(5));
console.log(bangCuuChuong(6));
console.log(bangCuuChuong(7));
console.log(bangCuuChuong(8));
console.log(bangCuuChuong(9));

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
    month1 = 1000,
    month2 = 1500,
    month3 = 2000,
    month4 = 2500,
    month5 = 3000,
    month6 = 3500,
    month7 = 4000,
    month8 = 4500,
    month9 = 5000,
    month10 = 5500,
    month11 = 6000,
    month12 = 6500,
];
let tongDoanhThu = 0;
for (let i = 0; i < doanhThu.length; i++) {
    tongDoanhThu += doanhThu[i];
}
console.log(`Tổng doanh thu là: ${tongDoanhThu}`);