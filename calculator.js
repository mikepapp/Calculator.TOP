const  nums=document.querySelectorAll(".num");
const display=document.querySelector(".td1");
var g=[];
var r=[];
var k=0;
var m=0;
var res=0;
var opCalled=0;
var counter=0;
nums.forEach( (num ) => {
    num.addEventListener("click",function(event){
        let str1=0;
        let str2=0;
        if(parseInt(display.textContent)===0){
        display.textContent=" "
        display.append(num.textContent.replace(/\s+/g, ''));}
        else if(display.textContent.length<11 && counter===0){
            display.append(num.textContent.replace(/\s+/g, ''));
        }
        else if(display.textContent!=='0' && counter!==0){
            display.textContent='';
            counter=0;
            display.append(num.textContent.replace(/\s+/g, ''));
            
            
        }

        }
        )
    }
)
const operationButtons=document.querySelectorAll(".op");
operationButtons.forEach((button => {
    button.addEventListener("click",function(){
        if(display.textContent!=='0' && opCalled===0){
            k=display.textContent;
            m=k.replace(/\s+/g, '');
            g.push(parseFloat(m));
            display.textContent="0"
            opCalled=button.value;
            m=0;
            k=0;
            

        }
        else if(display.textContent!=='0' && opCalled!==0 ){
            k=display.textContent;
            m=k.replace(/\s+/g, '');
            g.push(parseFloat(m));
            console.log(opCalled);
            display.textContent="0"
            switch(opCalled){
                case "add": display.textContent=operate(add,g[g.length-2],g[g.length-1]);
                break;
                case "multiply":display.textContent=operate(multiply,g[g.length-2],g[g.length-1]);
                break
                case "divide":display.textContent=operate(divide,g[g.length-2],g[g.length-1]);
                break;
                case "subtract":display.textContent=operate(subtract,g[g.length-2],g[g.length-1]);
                break;
            }
            g=[];
            k=0;
            m=0;
            opCalled="";
            k=display.textContent;
            m=k.replace(/\s+/g, '');
            g.push(parseFloat(m));
            opCalled=button.value;
            counter++;

        }
        
        
    })
          }))
const del=document.querySelector(".del");
    del.addEventListener("click",function(){
    display.textContent="0";
    g.length=0;
    k=0;
    m=0;
    res=0;
    opCalled=0;
     })
const eq=document.querySelector(".eq");
eq.addEventListener("click",function(){
         if(display.textContent!=="0"){
            k=display.textContent;
            m=k.replace(/\s+/g, '');
            g.push(parseFloat(m));
            console.log(opCalled);
            switch(opCalled){
                case "add": display.textContent=operate(add,g[g.length-2],g[g.length-1]);
                break;
                case "multiply":display.textContent=operate(multiply,g[g.length-2],g[g.length-1]);
                break
                case "divide":display.textContent=operate(divide,g[g.length-2],g[g.length-1]);
                break;
                case "subtract":display.textContent=operate(subtract,g[g.length-2],g[g.length-1]);
                break;
            }
            g=[];
            k=0;
            m=0;
            opCalled=0;
            k=display.textContent;
            m=k.replace(/\s+/g, '');
            g.push(parseFloat(m));
            counter++;
            

        

            
        }}
        
    )
function add(num1,num2){ return num1+num2;}
function subtract(num1,num2){return num1-num2;}
function multiply(num1,num2){return num1*num2;}
function divide(num1,num2){return num1/num2;}
function operate(operation,n1,n2){
        return operation(n1,n2);
       }
                   

         
      
    