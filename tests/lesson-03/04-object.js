//1
let car = {
    make :  'Toyota',
    model: 'Corolla',
    year : 2021
};
console.log(car.year);
//2
let person = {
    name1:   'Hien',
    address:{
        street: 'Pham Van Dong',
        city: 'Ha Noi',
        country: 'Viet Nam'
    }
}
console.log(person.address.street);

//3
let student = {
    name2  : 'Hien',
    grades : {
        math : 10,
        english : 8
    }
}
console.log(student.grades['math']);

//4
let settings = {
    volume : 50,
    brightness : 70
}
settings.volume = 60;
console.log(settings);

//5
let bike = {
    make : 'Honda',
    model: 'CBR',
    
}
bike.color ='red';
console.log(bike);
//6
let employee = {
    name3 : 'Hien',
    age: 27,

}
delete employee.age;
console.log("Xoá thuộc tính age", employee);

//7
const school = {
    classA: ['An', 'Bình', 'Châu'],
    classB: ['Đào', 'Hương', 'Giang']
};

