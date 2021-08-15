// function fun(){
//     console.log(this.name);
// }

// //fun();
// obj = {
//     name:"张三",
//     sayName:fun
// };

// var name = "李四";
// fun();
// obj.sayName();

// function People(name ,age, gander){
//     obj = new Object();
//     obj.name = name;
//     obj.age = age;
//     obj.gander = gander;
//     obj.Sayname = function(){
//         alert(obj.name)
//     }
//     return obj;
// }

// var obj1 = People("张三",18,"男");
// var obj2 = People("李四",52,"男");
// console.log(obj1);
// console.log(obj2);

// function Person(name,age){
//    this.name = name;
//    this.age = age;
// }


// var per = new Person('张三',18);

// var son = new Person('李四',23);

// console.log(per);
// console.log(son);
// console.log(per instanceof Person)

// function Person() {
//      //向Person的原型中添加一个属性a
//     Person.prototype.a = 123;
//     //向Person的原型中添加一个方法
//     Person.prototype.sayHello = function(){
//         alert("hello world!")
//     }
// }
// Person.prototype.Myname = "我是原型中的name";
// var per = new Person();

// console.log(Person.prototype);
// console.log(per.__proto__.a);
// per.__proto__.sayHello();
// console.log(per.Myname);
// console.log("Myname" in per); 



// var arr = new Array(10,);
// console.log(arr);
// console.log(arr.length)

// var arr = [1,2,3,4,5,6];
// new_length = arr.push(7,8);
// console.log(arr);
// console.log(arr.length);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// var per1 = new Person("张三", 18);
// var per2 = new Person("李四", 28);
// var per3 = new Person("王五", 20);
// var per4 = new Person("赵六", 13);
// var per5 = new Person("陈七", 68);


// var arr = [per1, per2, per3, per4, per5];

// arr.forEach(function (value, index, obj) {
//     Newarr = [];
//     if (arr[index].age >= 18) {
//         Newarr.push(arr[index])
//     }
//     return Newarr
// })


// console.log(arr)


// var arr = [11,5,6,21,4,8,9,51,23];
// for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             arr.splice(j, 1);
//             j--;  
//         }
//     }
// }
// console.log(arr);
// console.log(arr.join("*"));
// console.log(typeof arr.join())
// arr.reverse()
// arr.sort(function(a,b){
//     return a-b;
// })
// console.log(arr)

// function fun(){
//     console.log(arguments.length);
//     console.log(arguments[0]);
//     console.log(arguments.callee == fun);
// }

// fun(1,2)
// var d = new Date();
// console.log(d)

// var n = new Number(3);
// console.log(n);
// var n1 = 3;
// console.log(n == n1);

// var reg = new RegExp("a");

// var str = "a";

// var result = reg.test(str);
// console.log(result);

// var reg = /[ab]/i;

// var str = "abc";

// console.log(reg.test(str));
// var phonestr="18578549658";

// var phoneReg = /^1[3-9][0-9]{9}$/;

// console.log(phoneReg.test(phonestr));

var btn = document.getElementById("btn1");

btn.innerHTML = "登录一下";

btn.onclick = function(){
    alert("登录成功！")
}
