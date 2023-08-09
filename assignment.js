
                           //      problem #1
                           // -------------------- 

          function cubeNumber(number){
             if(typeof number !== "number" || number < 0){
                 return "please input positive number.";
             }else{
                 let result = Math.pow(number,3);
                 return result;
             }   
           }  
          console.log(cubeNumber(2));


                            //    problem #2 
                           //--------------------

   function matchFinder(string1, string2) {
       if(typeof string1 !== "string" || typeof string2 !== "string"){
            return "please input string.";
       }else{
           if(string1.includes(string2)){
               return true;
           } else {
               return false;
           }    
       }
   }
   console.log(matchFinder("Peter Parker","par"));


                            // problem #3
                        //------------------

   function sortMaker(arr){
      if(arr.length > 2){
          return "please input 2 element.";
      }else{
          if(arr[0] > 0 && arr[1] > 0){
              if(arr[0] < arr[1]){
                  return [arr[0], arr[1]] = [arr[1], arr[0]];
              }else if(arr[0] > arr[1]){
                  return [arr[1], arr[0]] = [arr[0], arr[1]];
              }else{
                  return "equal";
              }
            }else if(arr[0] < 0 || arr[1] < 0){
              return "invalid input";
            }else{
              return "please input array.";
            }
      }  
   } 
   let myArr =[5,10];
   console.log(sortMaker(myArr));

                                
                           // problem #4
                      //--------------------

   function findAddress(obj){
       if(typeof obj !== "object"){
           return "please input object";
       }else{
           const street = obj.street || "__";
           const house = obj.house || "__";
           const society = obj.society || "__";
           return street + "," + house + "," + society;
       }
   } 

   let object = {
     street: 20,
   }
   console.log(findAddress(object));


                            // problem #5
                         //------------------
                         
  function canPay(changeArray, totalDue){
      if(changeArray.length === 0){
          return "your array is empty. please input an array.";
      }else{
          let sumOfChangeArray = 0;
          for(let i = 0; i < changeArray.length; i++){
              sumOfChangeArray += changeArray[i];
          }
          if(sumOfChangeArray >= totalDue){
              return true;
          }else{
              return false;
          }
      }   
  } 

  let changeArray = [0,5,5];
  let totalDue = 10;
  console.log(canPay(changeArray,totalDue));