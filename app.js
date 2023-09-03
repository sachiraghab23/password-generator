const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "~!@#$%^&*()_+/";

//selectors
const totalChar = document.getElementById('total-char');
const passBox = document.getElementById('pass-box');
const upperInput = document.getElementById('upper-case');
const lowerInput = document.getElementById('lower-case');
const numInput = document.getElementById('numbers');
const symbolInput = document.getElementById('symbols');

const getRandomData = (dataSet) =>{
  let random = Math.floor(Math.random() * dataSet.length);
  return dataSet[random];
}
const genPassword = (password="") =>{
  if(upperInput.checked){
    password += getRandomData(upperSet);
  }
  if(lowerInput.checked){
    password += getRandomData(lowerSet);
  }
  if(numInput.checked){
    password += getRandomData(numberSet);
  }
  if(symbolInput.checked){
    password += getRandomData(symbolSet);
  }
  if(password.length<totalChar.value){
    return genPassword(password);
  }
  let finalPass = truncateString(password,totalChar.value);
  passBox.innerText = finalPass;
  navigator.clipboard.writeText(finalPass);
}
genPassword();
document.getElementById('btn').addEventListener('click',()=>{
  try {    
    if(upperInput.checked || lowerInput.checked || numInput.checked || symbolInput.checked){
      genPassword();
    }else{
      alert("select atleast 1 criteria");
    }  
  } catch (error) {
    console.log(error);
  }
});
function truncateString(str,num){
  if(str.length>num){
    let subStr = str.substring(0,num);
    return subStr;
  }else{
    return str;
  }
}