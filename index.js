import fetch from 'node-fetch';

//

export const surnameCount = async (x,y) => { 
  let input1 = x,
      input2 = y;

  //

  const response1 = await fetch('https://www.names.org/n/'+input1+'/about#');
  
  const data1 = await response1.text();
  
  const param1_data = data1.substring(
            data1.lastIndexOf("the U.S. Census Bureau surveyed") + 32,
            data1.lastIndexOf("people with the last name")
          );

  const response2 = await fetch('https://www.names.org/n/'+input2+'/about#');
  
  const data2 = await response2.text();
  
  const param2_data = data2.substring(
            data2.lastIndexOf("the U.S. Census Bureau surveyed") + 32,
            data2.lastIndexOf("people with the last name")
          );
  
  const p1d = parseFloat(param1_data.replace(/,/g, '')),
        p2d = parseFloat(param2_data.replace(/,/g, ''));

  //

  let result1 = p1d,
      result2 = p2d;

  //

  var diff = (a, b) => { return Math.abs(a - b); };

  //

  let results = diff(result1,result2);
  
  if(input1 === ""){
    input1 = "no name entered";
  }

  if(input2 === ""){
    input2 = "no name entered";
  }

  //

function largest(a, b) {
  var x = input1,
      y = input2;
      
  if(a > b) {
    
    return x;
  }
  else if(a === b) {
    return 0;
  }
  else {
    return y;
  }
}
let l = largest(result1,result2);
  //
  if(Number.isNaN(result1)){
     result1 = "there are no results for that name";
  };

  if(Number.isNaN(result2)){
     result2 = "there are no results for that name";
  };

  //

  var r1 = (i,r) => {
    console.log(i + ": " + r);
  };

  var r2 = (i,r) => {
    console.log(i + ": " + r);
  };

  var rs = (l,r) => {
    if(Number.isNaN(results)){
       results = "cannot calculate difference";
       console.log(results);
    } else {
       console.log(l + " is more popular by " + r + " people");
    }
  };
  
  //

  r1(input1,result1);
  r2(input2,result2);
  rs(l,results);
  process.exit(1);
};

//
