//1.    Viết một hàm có tên là "multiply" nhận vào hai tham số a và b, trả về tích của chúng.  

function multiply(a, b) {

    return a * b;

}
let c = multiply(5, 6);
console.log('Tich a*b=', c);


// //2. Viết hàm findMin
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }

    return min;
}
let min = findMin(7, 4, 8);
console.log('Min la:', min);




//3. Viết hàm getTopStudents


let students = [

    { name: "Hien", score: 100 },

    { name: "Van", score: 70 },

    { name: "Hoa", score: 90 },

    { name: "Huyen", score: 110 },
]


function getTopStudents() {
    const threshold = 90;
    let arr = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            arr.push(students[i].name);
        }

    }
    return arr;
};

console.log(getTopStudents());


//4. Viết hàm calculateInterest



function calculateInterest(principal, rate, year) {
    let total;
    return principal + principal * rate * year / 100;

}
let total = calculateInterest(10,12,16);
console.log("Tong la= ", total);

//return tong;