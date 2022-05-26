// main varibles adding data and removing it  and display the size of the stack 
const stackSizeDisplay = document.querySelector('.stacksize');
const addBtn = document.querySelector(".add");
const removeBtn = document.querySelector(".remove");
const elemntDisplayContiner = document.querySelector(".main_elemnt_handler");
// main stack class
class Stack{
    constructor(){
        this.data = [];
        this.stackData = 0;
    };
    addData(elemnt){
        if(this.stackSize >= 10){
            alert('the stack is full!')
        }else{
            this.data.push(elemnt);
            this.stackData ++;
            let c = document.createElement('div');
            c.classList.add("elemnt_stack")
            elemntDisplayContiner.appendChild(c);
            this.stackSize()
        }
    };
    removeData(){
        this.data.pop();
        if(this.stackData === 0){
            alert("stack size hase nothin")
        }else{
            this.stackData--;
            this.stackSize();
            elemntDisplayContiner.removeChild(elemntDisplayContiner.firstElementChild)
        }
    };
    stackSize(){
        stackSizeDisplay.innerHTML = `stack size : ${this.stackData}`;
    };
};
let stack1 = new Stack();
//add elemnt
addBtn.addEventListener("click",()=>{
    stack1.addData(1)
});
//remove elemnt
removeBtn.addEventListener('click',()=>{
    stack1.removeData();
})

