//1.square root of number
// function squareroot(num,power)
// {
//     var res=1;
//     for(var index=0;index<power;index++)
//     {
//         res=res*num;
//     }
//     return res;
// }
// console.log(squareroot(5,2))
//2.area of circle
// function area(radius)
// {
//     var d=radius*radius*Math.PI;
//     return d;
// }
// console.log(area(7));
//3.swapping of variable
// function swap(num1,num2)
// {
//     num1=num1+num2;
//     num2=num1-num2;
//     num1=num1-num2;
//     console.log(num1,num2);
// }
// swap(3,2)
//4.sum of n number
// function findsum(till)
// {
//     var res=0;
//     for(var i=1;i<=till;i++)
//     {
//         res=res+i;
//     }
//     return res;
// }
// console.log(findsum(23));
//5.factorial
// function fact(num)
// {
//     var result=1;
//     for(var i=num;i>0;i--)
//     {
//         result=result*i;
//     }
//     return result;
// }
// console.log(fact(4))
// 6.table
// function table(num)
// {
//     for(var i=1;i<=10;i++)
//     {
//         var res=num*i;
//         console.log(`${num} * ${i} = ${res}`);
//     }
// }
// table(7)
//console.log(Math.min()>Math.max())
// const random=Math.floor(Math.random()*5);
// var number=prompt("Guess the number:");
// while(number!=random)
// {
//   var  number=prompt("Guess the number:");
// }
// if(number==random)
// {
//     console.log("guessed");
// }
// var array=[];
// array[0]=1;
// array[1]=1;
// array[2]=2;
// array[10]=10;
// console.log(array);
// console.log(array instanceof Object);
// console.log(array instanceof Array);
// console.log(Array instanceof Function);
//array.length="3";
//console.log(array);
// for(var i=0;i<array.length;i++)
// {
//     console.log(array[i]);
// }
// for(var i in array)
// {
//     console.log(array[i]);
// }
// var arr1=[1,36,57,8,43,3,51];
// var arr2=[2,4,6];
// console.log(arr1.concat(arr2));
// console.log(arr1.join(";"));
// arr1.push(7);
// console.log(arr1);
// arr1.unshift(9);
// console.log(arr1);
// arr1.pop();
// console.log(arr1)
// arr1.shift();
// console.log(arr1);
// console.log(arr1.slice(0,2));
// console.log(arr1.splice(2,2));
// console.log(arr1);
//console.log(arr1.sort());
//var arr1=["a","z","b","y"];
// function compare(a,b)
// {
//     return b-a;
// }
// console.log(arr1.sort(compare));
// //call back function
// console.log(arr1.sort((a,b)=>(b-a)));
//const element=prompt("Enter number:");
//----------objects----------//
// var car={color:"red",model:"Swift"}
// console.log(car);
// var car=new Object();
// car.color="red";
// car.model="swift";
// console.log(car);
// console.log(car.color);
// for(p in car)
// {
//     console.log(p+":"+car[p]);
// }
// var mobile={
//     brand:"Apple",
//     model:"6s",
//     RAM:"4gb",
//     ROM:"32gb",
//     YOM:"2016",
//     manufacturer:"India",
//     oredrlist:["Rice","Grain","Soap"],
// }
//console.log(user.firstname);
// user.firstname="Gaurav",
// console.log(user.firstname);
// console.table(mobile);
// var user={
//     firstname:"Gaurav",
//     lastname:"Kumar",
//     role:"SDE",
//     list:[],
//     product:function(buy){
//         this.list.push(buy)
//     },
//     getinfo:function(){
//         return `Name:${this.firstname} ${this.lastname} bought ${this.list}`
//     }
// }
// user.product("Oreo");
// console.log(user.getinfo());
// var d={};
// var d1={firstname:"swami"};
// var d2={key:"singh"};
// d[d1]=123;
// //d[d2]=456;
// console.log(d[d1]);
// console.log({a:1}==={a:1});
// var x=2+2+"5"+2+2;
// console.log(x);
// let del=confirm("Are you sure to delete?");
//----JSON-------//
// var book='{"title":"Aloha","author":"Amish"}';
// var book=JSON.parse(book);
// console.log(book.title);
// console.log(book.author);
// let color=["Voilet","Indigo","Blue","Green","Yellow","Orange","Red"];
// console.log(color[2]);
// color[4]="ultraviolet";
// for(var i=0;i<color.length;i++)
// {
//     console.log(color[i]);
// }
// function abc(){
//     return 4;
// }
// console.log(abc());
// function check(e)
// {
//     if(e>0)
//     {
//         console.log(`${e} is positive`);
//     }
//     else if(e<0)
//     {
//         console.log(`${e} is neagtive`);
//     }
//     else
//     {
//         console.log(`zero`);
//     }
// }
// var x=[97,-3,0,15,-14,7].filter((number)=>{
//     return number<0;    
// });
// console.log(x);
// function check(ele)
// {
//     if(ele.name!=undefined && ele.age!=undefined)
//     {
//         console.log(ele.name+"---"+ele.age);
//     }
// }
// var data = [
//     { name: "A", age: 45 },
//     {name: "B", age: 23},
//     {name: "C", age: null},
//     { name: "D", age: undefined },
//     {name: null, age: undefined},
// ].filter(check);
//console.log(x);
// var date=["12-01","10-02","30-02"]
// console.log("converted dates are:")
// for(var i=0;i<date.length;i++)
// {
//     var res=date[i].replace("-","/");
//     console.log(res);
// }
// var x=[2,4,5].reduce(function(prev,curr){return prev+curr;},2)
// console.log(x);
// function sum()
// {
//     console.log(arguments);
// }
// console.log(sum(1,2,5));
// var student=
// {
//     name:"Ravi Kumar",
//     roll:"78",
//     sec:"A",
//     city:"patna",
// }
// console.log(student.name);
// var area=function(r){return r*r};
// console.log(area(5));
// var sum=[2,4,13,45,21,90].reduce((total,initial)=>{
//     return total+initial;
// },0);
// console.log(sum);
// var element=[2,35,6,76,53,21].filter((ele)=>{
//     return ele%2==0;
// });
// console.log(element);
// var result=element.filter((ele)=>
// {
//     return ele%2==0;
// });
// console.log(result);
// var date=["23-10","10-01","02-01"].map((ele)=>
// {
//     return ele.replace("-","/");
// });
// console.log(date);
// let number=[34,67,31,90,88,87].filter((check)=>
// {
//     if(check%2==0)
//     {
//         console.log(`${check} is even`);
//     }
//     else{
//         console.log(`${check} is odd`);
//     }
// });
//console.log(number);
// var number1=[4,3,21,56,78].reduce((total,initial)=>
// {
//     return total+initial;
// },0);
// console.log(number1);
// let num=[-8,4,-90,56,43].filter((check)=>{
//     if(check<0)
//     {
//         console.log(`${check} is negative`);
//     }
//     else{
//         console.log(`${check} is positive`);
//     }
// });
// let num=[1,2,3].map((ele)=>{
//     return ele*ele;
// }).reduce((final,initial)=>
// {
//     return final+initial;
// },0)
// console.log(num);
// let num=[1,2,3].map(function(ele){
//     return ele*3;
// });
// console.log(num);
// let num=[1,2,3].map((ele)=>{
//     return ele*3;
// })
// console.log(num);
//-----------------------problems on array---------------------//
// let rainbow=["voilet","indigo","blue","green","yellow","orange","red"];
// // print all elements
// console.log(rainbow);
// // print first element
// console.log(rainbow[0]);
// // print thord element
// console.log(rainbow[2]);
// //change the value of last color
// rainbow[rainbow.length-1]="ultraviolet";
// console.log(rainbow);
// //add color to the last
// rainbow.push("hot pink");
// console.log(rainbow);
// //removing the color from last
// rainbow.pop();
// console.log(rainbow);
// console.table(rainbow);
// //printing the length of color
// console.log(rainbow.length);
// for(let index=0;index<rainbow.length;index++)
// {
//     console.log(index+"------>"+rainbow[index]);
// }
// let last_color=rainbow[rainbow.length-1];
// console.log(last_color);
//---------------problems on objects---------------//
// var pugs={
//     "Name":"Pugu",
//     "Origin":"Austria",
//     "Author":"Aloha",
// }
// console.log(`Hello i am penguin and my name is ${pugs.Name}`);
// pugs.canFly="false";
// console.log(pugs);
// var ob={
//     test:function(){
//         console.log(this);
//     }
// }
// var myfn=ob.test;
// myfn();
// ob.test();
// var utk=new User("Utkarshini",4);
// function Circle(r){

// }
// var c=new Circle(2);
// console.log(c);
// function Circle(r){
//     this.radius=r;
// }
// var c=new Circle(2);
// console.log(c);
// function Circle(r){
//     this.area=function(){
//         return Math.PI*r*r;
//     }
// }
// var x=Circle(2);
// console.log(x.area());
// 1.
// function rectangle(height,width){
//     this.height=height;
//     this.width=width;
//     this.area=function(){
//        return this.height*this.width;
//    }
//    this.perimeter=function(){
//        return (this.height+this.width)*2;
//    }
// }
// var a= new rectangle(3,4);
// console.log(a.area());
// console.log(a.perimeter());
// 2.
// function start(x1,y1){
//     this.x1=x1;
//     this.y1=y1;
//     this.distance=function end(x2,y2){
//         this.x2=x2;
//         this.y2=y2;
//         return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
//     }
// }
// var d=new start(4,5);
// console.log(d.distance(3,8));
// //3.
// function check(string){
//     strarray=string.split("");
//     var str1=strarray.reverse().join("");
//     if(string==str1)
//     {
//         console.log(`${string} is palindrome`);
//     }
//     else{
//         console.log(`${string} is not palindrome`);
//     }
// }
// check("abb");
// var x=2;
// switch(x){
//     case 1:{
//         console.log("Monday");
//         break;
//     }
//     case 2:{
//         console.log("Tuesday");
//         break;
//     }
//     default:{
//         console.log("Nothing to display");
//     }
// }
// var a=window.prompt("Enter number1:");
// // 
// var n="swami";
// // var d=name.split("+ ");
// console.log(n.split(" "));
// var color=["violet","indigo","blue","green","yellow"];
// console.log(color[0]);
// color[color.length-1]="cyan";
// console.log(color);
// var forth=color[3];
// console.log(color.length);
// var mypenguins={
//     origin:"korea",
//     name:"pugs",
// }
// mypenguins.prop={
//     sound:"tur",
//     fly:"false",
// }
// console.log(mypenguins);
// var b;
// console.log(b);
// b=1;
// (function () {
//     "use strict";

//     function warmUp() {
        
//         console.log(x);
//         console.log(foo());

//         var x = "variable hosting!";

//         function foo() {
//             return "function hoisting";
//         }
//     }
//     warmUp();
// })();
// console.log(this);
// function first(num1){
//     return function second(num2){
//         return function third(num3){
//             return num1+num2+num3;
//         }
//     }
// }
// var ans=first(2)(9)(7);
// console.log(ans);
// function user(name,age){
//    this.name=name;
//    this.age=age;
//    this.get=function(){
//       // console.log(this.name);
//        return ()=>{
//            console.log(this.name);
//            console.log(this.age);
//        }
//    }
// }
// var name1=new user("swami",45);
// var age=name1.get();
// age();
// var john={
//     fav:"pizza",
// }
// var bob={
//     fav:"pasta",
// }
// var get=function(after){
//     console.log(after+"===="+this.fav);
// }
// get.call(bob,2);
// get.call(bob,[2]);
// var hello=(string)=>string;
// console.log(hello("HI"));
// var array=["a","b","c",78,45];
// var copy=[...array];
// console.log(array.splice(1,4));
// console.log(copy);
// console.log(copy[1]);
// var color=["Violet","Idigo","Blue","Green","Yellow"];
// console.log("----------------");
// console.log(color);
// console.log("----------------");
// console.log(color[0]);
// color[color.length-1]="Orange";
// console.log("----------------");
// console.log(color);
// var forth=color[3];
// console.log("----------------");
// console.log(forth);
// color.push("Red");
// console.log("----------------");
// console.log(color);
// color.unshift("Cyan");
// console.log("----------------");
// console.log(color);
// console.log("----------------");
// console.log(`Length of color is ${color.length}`);
// color.pop();
// console.log("----------------");
// console.log(color);
// console.log("----------------");
// for(var i=0;i<color.length;i++){
//     console.log(`${i}>>>>${color[i]}`);
// }
// var object={
//     firstname:"Ravi",
//     lastname:"Kumar",
//     // details:[67,"delhi","punjab"]
//     obj:{
//         age:"40",
//         education:"B.tech",
//     }
// }
// console.log(object.obj.age);
// // console.log(object.firstname);
// var array=[
//     12,"Ram",{
//         firstname:"Ravi",
//         lastname:"Kumar",
//     },
//     "Delhi","Engineer"
// ]
// console.log(array[2]);
// var object={
//     name:"Swami Sonam Singh",
//     age:24,
//     locality:"Patna",
//     caste:"Kurmi",
// }
// object.obj1={
//     age:"24",
// };
// if(object.age==object.obj1.age){
//     console.log("True");
// }
// else{
//     console.log("false");
// }
// var name="Ravi";
// //world();//anynomous function called after decleration
// function hello(){
//     name="Swami";
//     console.log(`hello>>>> ${name}`);
// }
// hello();//named function called any where
// var world=function(){
//     var name="Saket";
//     console.log(`world>>> ${name}`)
// }
// world();
// console.log(`global>>>>> ${name}`);
// function fn(){
//     if(true){
//         var a=10;
//         console.log(a);
//     }
//     console.log(a);
// }
// fn();
// var a;
// a=1;
// console.log(a);
// // var a;
// for(var i=0;i<=10;i++){}
// console.log(i);
// (function(){
//     "use strict";
//     var x=10;
//     // console.log(y);
//     function scope(){
//         var y=20;
//         console.group(x);
//     }
//     scope();
// })();
// "use strict";
// x=1;
// var x;
// console.log(x);
// "use strict";
// console.log(fn1());
// function fn1(){
//     console.log(fun());
//     function fun(){
//         return "Welcome";
//     }
//     return "go";
// }
// function sh
// function show(){
//     var date=new Date("05:10:2021");
//     var t=new Date();
//     console.log(date==t);
// }
// show();
// var a=2;
// var fn1=function(greet){
//     console.log(greet+" "+(this.a+this.b));
// }
// var res={
//     a:10,
//     b:90,
// }
// fn1.call(res,"hi");
// fn1.apply(res,["Hi"]);
// var array=[20,30,50,80,90];
// console.log(array[2],...array);
// function f1(greet){
//     // var name="Raj"
//     return function(name){
//         console.log(greet+" "+name);
//     }
// }
// f1("Hello")("Ravi");
// var sum=(a,b)=>a+b;
// console.log(sum(10,20));
// var greet=()=>"Hello";
// console.log(greet());
// const arr=["a","b","c","d"];
// const arr1=[first,...arr];
// console.log(arr1);
// // const arr2=arr.splice(1,2);
// // console.log(arr2);
var array=[2,3,4];
var sum=(item)=>{
//    if(item%2==0){
       return item*8;
//    }
};
var arr1=array.map(sum);
console.log(arr1);
var prop=[
    {
        first:"Ravi",
        last:"kumar",
        age:20,
    },{
        first:"Saket",
        last:"Kumar",
        age:21,
    },{
        first:"Swami",
        last:"Sonam",
        age:20,
    }
];
var check=(item)=>{
    if(item.age==20){
        console.log(item.first+" "+item.last);
    }
}
var check1=prop.map(check);
// console.log(check1);