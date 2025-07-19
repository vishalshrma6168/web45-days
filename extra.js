let student={
  name:"vishal",
  marks:200,
  prop:this,
 getName: function (){
    // console.log(this);
    return this.name
  },
  getmarks:function(){
return this.marks
  }
}
 
let st=student.getmarks()
console.log(st)