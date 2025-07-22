// for(let i=0;i<=5;i++){
  
//  if(i==5){
//   console.log("stop",)
//  }
//  else{
//   console.log(i)
//  }
// }


// for(let i=0;i<=10;i++){
//   if(i%2==0){
//     console.log(i)
//   }
  
// }

// let i = Number(prompt("enter a number"))
// for(i ;i<=10;i++){
//   console.log(i)
// }

// let count=0; // variable initization
// while(count<10){ //condition
//   console.log(count)
//   count++; //updation
// }


// // nested for loop
// for(let i=0;i<3;i++){
//   for(let j=0;j<3;j++){
//     console.log(`i:${i},j:${j}`)
//   }
// }



// for(let i=1;i<11;i++){
//   for(let j=1;j<11;j++){
//     console.log()
//   }
// }

// let i=0;
// do{
//   console.log(i)
//   i++; 
// }while(i<=5)
// for of


// let str="vishal"
// for(let val of str){
//   console.log(val)
// }


// let obj={
//   "name":"vishal",
//   "id":"vishalsharma@gmail.com"
// }

// for(let keys in obj){
//   console.log(keys,obj[keys])
// }


// arrays
// let arr=["vishal","shreya","sita","ram"]
// // methods
// arr.pop()
// console.log(arr)


// let arr=["vishal","sharma"]
// console.log(arr.toString())

// let arr=["vidhsl","aanku","shreya","kashish","kamlesh"]
// let arr2=["abc"]
// console.log(arr.concat(arr2))
// let arr=["vishal","sharma","anku","bhfiuewfi","hvuihb","hhfuiwrhgu"]
//  let b=arr.slice(1,4)
// console.log(b)


// function deercation
// function hello(){
//   console.log("hello vishal")


//   function bye(){
//     console.log("bye vishal")
//   }
//   bye()
   
//   function goodmorning(){
//     console.log("good morning vishal")
//   }
//   goodmorning()
// }

// // function calling
// hello()



// function add(a,b){
//   c=a+b
//   console.log(c)
// }

// add(8,7)




// let arr=[]
// user1=prompt("enter commpay name")
// user2=prompt("enter commpay name")
// user3=prompt("enter commpay name")
// arr.push(user1,user2,user3)
// arr.splice(0,1,"ola")
// console.log(arr)

// function hello(){
//   console.log("hello")
// }

// // function calling
// hello()


// let var const



// let name="vishal"
// name="saniya" //update are possible
// // rederad not posiible
// let name="anku"
// console.log(name)

// const name="vishal"
// // update not posssible
// name="anku"
// // rederaded not possible
// const name="abc"
// console.log(name)

// // var
// var name="vishal"
// // var name="anku"
// name="abc"
// console.log(name)

// alert("hello")

// settime out
// console.log("hello")

// setTimeout(()=>{
//   console.log("hello vishal in 5 sec")
// },5000)


// setInterval(()=>{
//   console.log("hello")
// },2000)

// console.log("hello")

// setTimeout(()=>{
//  console.log("vishal")
// },2000)


// setTimeout(()=>{
  // obj={
  //   name:"vishal",
  //   email:"garg2000vishal@gmail.com"
  // }
  // console.log(obj)
// },2000)

// setInterval(()=>{
//   obj={
//     name:"vishal",
//     email:"garg2000vishal@gmail.com"
//   }
//   console.log(obj)
// },2000)


// let students={
//   name:"vishal",
//   email:"garg2000vishal@gmail.com",
//   phoneNumber:7876612810,
//   getName:function (){
//     return this.name
//   },
//   getEmail:function(){
//    return this.email
//   },
//   getPhoneNumber:function(){
//     return this.phoneNumber
//   }
// }
// let st=students.getPhoneNumber()
// console.log(st)







//  function age(){
//   let age=19
//   let output= age >18 ?"adult" :"not adult"
//   console.log(output)
//  }

//  age()





// let a=10
// let b=5
// console.log(a%b)

// let a=2
// console.log(a)
// let a=3

// a**=3 // a=a*3
// console.log(a)

// let a=13
// let b=13
// console.log(a>b)

// true----false
// false---true


// let a=33
// let b=44
// let c=55
// console.log((a>b) || (b<c))


let color="yellow"
if(color=="red"){
  console.log("stop now")
}
else if(color=="green"){
  console.log("go now")
}
else if(color=="yellow"){
console.log("please wait")
}
else{
  console.log("invalid color")
}