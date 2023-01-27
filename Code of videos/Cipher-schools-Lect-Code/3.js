
////////// ListNode

class ListNode{
    val;
    next;

    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
};

class TestClass {
    head;

    constructor(head = null){
        this.head = head;
    }

    hasLast() {
        return this.head != null;
    }
    
    getLast() {
        if(!this.hasLast()){
            return null;
        }
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
         let finalValue = current.val;
    
         current = this.head;
         while(current.next.next !== null && current.next !== null){
            current = current.next;
         }
         if(current.next!= null && current.next.next ==  null ){
              this.head = null;
         }
         current.next = null;
         return finalValue;
    }
}

let myVariable = new TestClass(
    new ListNode(
        1,
        new ListNode(2, new ListNode(3,new  ListNode(4, new ListNode(5)) ))
    )
);

console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast()); 




//////    promise


let promise = new Promise((fulfilled, notfulfilled) => {
    let num1 = 10;
    let num2= 15;
    let sum = num1+num2;
    if(sum > 24){
     fulfilled();
    } else { 
     notfulfilled();
    }
 });
 
 
 promise.then(()=>{
     console.log("promise is fulfilled")
 }).catch(() => {
     console.log("Promise is not fulfilled");
 });
 
 
 function addTwoNumbers(num1, num2){
     let sum =0;
     setTimeout(()=>{
        console.log(num1+ num2);
        sum = num1 + num2;
     }, 5000);
 
     console.log("Inside addTwoNumbers");
     return sum;
 }
 
 console.log(addTwoNumbers(5,8));
 
 function addTwoNumbers2(num1, num2){
     return new Promise((fulfilled, notfulfilled)=> {
         setTimeout(()=>{
             console.log("Inside setTimeout");
            fulfilled(num1+num2);
          }, 5000);
          
     });
     
 }
 
 addTwoNumbers2(10,5).then(()=>{
     console.log("promise is fulfilled")
 }).catch(() => {
     console.log("Promise is not fulfilled");
 });
