let htmlLoader = document.querySelector('.html-loader');
let cssLoader = document.querySelector('.css-loader');
let jsLoader = document.querySelector('.js-loader');
let bootstrapLoader = document.querySelector('.bootstrap-loader');

let htmlValue = document.querySelector('.html-value');
let cssValue = document.querySelector('.css-value');
let jsValue = document.querySelector('.js-value');
let bootstrapValue = document.querySelector('.bootstrap-value');


function load1(){
let count = 0;

let myInterval = setInterval(() => {
count++;
htmlValue.innerHTML = count + "%";
if(count === 90){
    clearInterval(myInterval);
}

htmlLoader.style.background = `
conic-gradient(orange ${count * 3.6}deg ,
  white ${count * 3.6}deg)
`;


},30);
}

load1();



function load2(){
  let count = 0;
  
  let myInterval = setInterval(() => {
  count++;
  cssValue.innerHTML = count + "%";
  if(count === 80){
      clearInterval(myInterval);
  }
  
  cssLoader.style.background = `
  conic-gradient(orange ${count * 3.6}deg ,
    white ${count * 3.6}deg)
  `;
  
  
  },30);
  }
  
  load2();


  function load3(){
    let count = 0;
    
    let myInterval = setInterval(() => {
    count++;
    jsValue.innerHTML = count + "%";
    if(count === 60){
        clearInterval(myInterval);
    }
    
    jsLoader.style.background = `
    conic-gradient(orange ${count * 3.6}deg ,
      white ${count * 3.6}deg)
    `;
    
    
    },30);
    }
    
    load3();


    function load4(){
      let count = 0;
      
      let myInterval = setInterval(() => {
      count++;
      bootstrapValue.innerHTML = count + "%";
      if(count === 50){
          clearInterval(myInterval);
      }
      
      bootstrapLoader.style.background = `
      conic-gradient(orange ${count * 3.6}deg ,
        white ${count * 3.6}deg)
      `;
      
      
      },30);
      }
      
      load4();


      let changeText = document.getElementById('change-text');

      function changeTextFunction(){
        let textArr = [
        'Jobel v. golde', 'Programmer','BSIT Student'
        ];

        let index = 0;
        setInterval(() =>{
          if(index == 3){
            index = 0;
          }
        changeText.innerHTML = textArr[index];
        
        index++;
        },2000);
      }

      changeTextFunction();

      // let btnList = document.querySelector('._btn-list');
      // let side = document.querySelector('.side');
    
      // btnList.addEventListener('click', () =>{
       

      //  if(side.style.width === '30%'){
     
      //   side.style.width= '-100%';
        
      //  }else{
      
      //   side.style.left = '30%'
   
      //  }
      // });
      
      
    