// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function sortByString(s, t){
    //hash to store letters which will later increment
    let hash={};
    let result="";
        
    //count s letters appearence
    for(let i=0; i<s.length; i++){
      hash[s[i]] = hash[s[i]] ? hash[s[i]]+1:1;
    }

    //Find matching letters in t and add them to the string
    for(let i=0; i<t.length; i++){
      if(hash[t[i]]) result+=t[i].repeat(hash[t[i]])
    }
    
    return result;
}