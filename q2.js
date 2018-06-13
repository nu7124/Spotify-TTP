// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function decodeString(s){
    let left=0;
    let right=s.length-1;
    let result="";
    let numString="";
    let encodedString;//string inside []
  
    while(s[left] !== "[" || s[right] !== "]"){
      //checks for letters  
      if(s[left] !== "[" && (isNaN(s[left]))) result = result.concat(s[left]);
      
      //checks for numbers
      if(!(isNaN(s[left]))) numString = numString.concat(s[left]);

      //increments left, right, or both if they dont equal [ or ]
      if(s[left] !== "[" ) left++;
      if(s[right] !== "]" ) right--;

      //no braces then return the string
      if(left > right) return s;
    }
    //obtains string between []
    encodedString = s.slice(left+1, right);
    //calls funciton on encoded string, if there are no more [] it return string
    result = result.concat(decodeString(encodedString).repeat(numString*1));
    return result;
}
  