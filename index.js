let btnOpr=document.querySelectorAll(".btn-opr");
let btn=document.querySelectorAll(".btn");
let btnD=document.querySelector(".btn-d");
let btnC=document.querySelector(".btn-c");
let btnE=document.querySelector(".btn-e")
let result=document.querySelector(".res");
let exp="";
btnOpr.forEach(button=>{
  button.addEventListener("click",()=>{
    exp+=button.innerText;
    result.innerText=exp;
  });
})
btn.forEach(button=>{
  button.addEventListener("click",()=>{
    exp+=button.innerText;
    result.innerText=exp;
  });
})
btnD.addEventListener("click",()=>{
  exp+=btnD.innerText;
  result.innerText=exp;
});
btnC.addEventListener("click",()=>{
  exp=""
  result.innerText="Results";
});
function valid(exp,operator,operand){
  let i=0,n=exp.length;
  let arr=["+","-","x","÷"];
  while(i<n){
    if(arr.includes(exp[i])===false)
    break;
    i++;
  }
  let res="";
  while(i<n){
    if(arr.includes(exp[i])===true){
      if((res.length===0) || (isNaN(Number((res))))){
      //console.log("yes");
      return false;
    }
      operator.push(exp[i]);
      operand.push(Number(res));
      res="";
    }
    else{
      res+=exp[i];
    }
    i++;
  }
  if(res.length===0 || Number(res)==NaN)
  return false;
  operand.push(Number(res));
}

function evaluate(opr,opn){
  var i=0;
  let ans;
  while(i<opr.length){
    if(opr[i]=="x"){
      ans=opn[i]*opn[i+1];
      opr.splice(i,1);
      opn.splice(i,2,ans);
    }
    else if(opr[i]=="÷"){
      ans=opn[i]/opn[i+1];
      opr.splice(i,1);
      opn.splice(i,2,ans);
    }
    else
    i++;
  }
  //console.log(opn);
  i=0;
  while(i<opr.length){
    if(opr[i]=='+'){
      ans=opn[i]+opn[i+1];
      opr.splice(i,1);
      opn.splice(i,2,ans);
    }
    else if(opr[i]=='-'){
      ans=opn[i]-opn[i+1];
      opr.splice(i,1);
      opn.splice(i,2,ans);
    }
  }
  //console.log(opr);
  return opn[0];
}

btnE.addEventListener("click",()=>{
  let operator=[]
  let operand=[]
  if(exp==="")
  return;
  else if(valid(exp,operator,operand)===false){
    result.innerText="Invalid Expression";
  }
  else{
    /*for(x in operator)
    console.log(operator[x]+" ");
    for(x in operand)
    console.log(operand[x]+" ");*/
    console.log("Yes");
    result.innerText=evaluate(operator,operand);
  }
  exp="";
});
