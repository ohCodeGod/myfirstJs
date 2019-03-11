let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
myHeading.onclick = function(){
    alert('stop,click');
}

let icecream = 'chocolates';
if (icecream === 'chocolate') {
    alert(multiply(4,4));
} else {
    
}
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
}

let myImage = document.querySelector('img');
myImage.setAttribute('srcset','images/firefox-icon.png 2x');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/test.png');
      myImage.setAttribute('srcset','images/test.png 2x');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
      myImage.setAttribute('srcset','images/firefox-icon.png 2x');

    }
}

function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
  }
  
  function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
  } 
  
  let storedName = localStorage.getItem('name');
  if(!storedName) {
     setUserName();
  } else {
     setHeading(storedName);
  }
  
  let myButton = document.querySelector('button'); 
  myButton.onclick = setUserName;