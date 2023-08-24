// calci left part

function addToResult(val) {
  var result = document.getElementById("result");
  if (result.value == "0") {
    result.value = val;
  } else {
    result.value += val;
  }
}

function clearResult() {
  document.getElementById("result").value = "0";
}

function calculateResult() {
  var result;
  var vl = document.getElementById("result").value;
  if(vl.includes("^")){
      let inx = vl.indexOf('^');
      var fv =  vl.substr(0,inx);
      var sv =  vl.substr(inx+1,vl.length-1);
      result = Math.pow(fv ,sv);
   
    document.getElementById("result").value = result;
       
  }else if(vl.includes("√")){
       let inx = vl.indexOf('√');
       var fv =  vl.substr(0,inx);
       var sv =  vl.substr(inx+1,vl.length-1);
       result = Math.pow(sv ,1/fv);     
       document.getElementById("result").value = result;
     
  }else{
      result = eval(vl);
      document.getElementById("result").value = result;
  }
 
  sessionStorage.setItem('1',result);

}

function back(){
 
  var result = document.getElementById("result");
  if(result.value!=="0"){

    if(result.value.length>1){
      document.getElementById("result").value = result.value.substring(0,result.value.length-1);
    }else{
       document.getElementById("result").value="0";
    }
  }

}

function generate(){
  document.getElementById('result').value = Math.random()*10;
}

function showmemory(){
    document.getElementById('result').value = sessionStorage.getItem('1');
}

function MinAtMemory(){
  var result = document.getElementById("result");
  result.value -=  sessionStorage.getItem('1');
}

function plusAtMemory(){
  var result = document.getElementById("result");
  result.value +=  sessionStorage.getItem('1');
}


// calci right part


function sin(){
  var result = document.getElementById("result");
  result.value =  Math.sin(result.value * Math.PI / 180);
}

function cos(){
  var result = document.getElementById("result");
  result.value =  Math.cos(result.value * Math.PI / 180);
}

function tan(){
  var result = document.getElementById("result");
  result.value =  Math.tan(result.value * Math.PI / 180);
}

function sini(){
  var result = document.getElementById("result");
  result.value =  Math.asin( result.value);
}

function cosi(){
  var result = document.getElementById("result");
  result.value =  Math.acos(result.value);
}

function tani(){
  var result = document.getElementById("result");
  result.value =  Math.atan(result.value);
}

// pi

function pi(){
  document.getElementById("result").value =Math.PI;
}

function root(){
  var result = document.getElementById("result");
  result.value =Math.sqrt(result.value);
}

function qroot(){
  var result = document.getElementById("result");
  result.value =Math.cbrt(result.value);
}

function po2(){
  var result = document.getElementById("result");
  result.value = Math.pow(result.value ,2);
}

function po3(){
  var result = document.getElementById("result");
  result.value = Math.pow(result.value ,3);
}

function poe(){
  var result = document.getElementById("result");
 
  result.value = Math.pow( 2.7182818285,result.value);
 
}

function e(){
  var result = document.getElementById("result");
 
  result.value = "2.7182818285";
}

function po10(){
  var result = document.getElementById("result");
  result.value = Math.pow(10 ,result.value);
}

function inx(){
  var result = document.getElementById("result");
  result.value = 1/(result.value);
}

function facto(){
  var number = document.getElementById("result").value;
  
  if (number < 0) {
      alert('Error! Factorial for negative number does not exist.');
  }
  else if(number == 0){
      document.getElementById("result").value = '1';
  }
  else if(number > 0) {
      let fact = 1;
      for (i = 1; i <= number; i++) {
          fact *= i;
      }
      document.getElementById("result").value = fact;
  } 
}


function  ln(){
 
  var result = document.getElementById("result");
  result.value = Math.log(result.value);

};



function  log(){
  var result = document.getElementById("result");
  result.value = Math.log10(result.value);

}