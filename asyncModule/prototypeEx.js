//example of prototype
function student(rollNo, name, age) {
    this.rollNo = rollNo;
    this.name = name;
    this.age = age;

}
// student.prototype.show = () => {
//     console.log('hi');
// }
student.prototype.show = "hii";
const s1 = new student(101, 'shre', 21);
const s2 = new student(100, 'sush', 22);

for (let x in s1) {
    console.log(s1[x]);
}
/*let arr = [1, 2, 3];
for (let y of arr) {
    console.log(y);
}*/