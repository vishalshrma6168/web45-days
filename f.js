class railfrom{
  submit(){
    alert("from is submit")
  }
}

let vishal=new railfrom()
vishal.submit()

class railfrom{
  constructor(givenname,tarinno,address){
    console.log("called")
   this.name=givenname
   this.tarin=tarinno
   this.address=address
  }
  Submit(){
    alert(this.name + "your from is submit and tarin no is:"+this.tarin +"and your address is:" +this.address)
  }
  preview(){
  alert(this.name + "you prieview the from and tarin no is:"+this.tarin +"and your address is:" +this.address)
  }
  cancel(){
   alert(this.name + "your from is cancel and tarin no is:"+this.tarin +"and your address is:" +this.address)
  }
}
 let vishal=new railfrom("vishal",8901,"hamirpur")
 vishal.Submit()

class animal{
  constructor(name,color){
    this.name=name
    this.color=color
  }
  run(){
    alert(this.name +"is running and their color is :"+this.color)
  }
}

class monkey extends animal{
  eatbanana(){
    alert(this.name +"is eating and their color is" +this.color)
  }
  hide(){
    alert("hide")
  }
}

let dog= new animal("dog","black")
dog.eatbanana()

let hello =new monkey("hello","brown")
hello.run()

hello.eatbanana()
hello.hide()