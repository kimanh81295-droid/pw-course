//chiều cao tính bằng cm 
const weight = 152;  
const weightMessage = "Với chiều cao " + weight + "cm, ";

// Cân nặng lý tưởng
const idealWeight = (weight - 100) * 9 / 10;
const idealWeightMessage = " Cân nặng lý tưởng của bạn là " + idealWeight + "kg,";

// Cân nặng tối đa
const maxweight = (weight - 100);
const maxWeightMessage = " cân nặng tối đa là " + maxweight + "kg";

// Cân nặng tối thiểu
const minweight = (weight - 100) * 8 / 10;
const minWeightMessage = " và cân nặng tối thiểu là " + minweight + "kg.";

//In ra kết quả
console.log(weightMessage + idealWeightMessage + maxWeightMessage + minWeightMessage);