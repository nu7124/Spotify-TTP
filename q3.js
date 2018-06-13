// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function changePossibilities(coins,amount){
    //keep track of how many ways to make different amounts
    const ways= new Array(amount+1).fill(0);
    ways[0]=1; //there is only one way to make 0 cents 
  
    for(coin of coins){
      for(let i=1; i<=amount; i++){
        if(coin <= i){
          //if coin is less than i then there is possibility to make that amount with the coin
  
          //we check how many ways there are to make the missing amount to make coin equal to amount
          ways[i] += ways[i-coin]
        }
      }
    }
  
    return ways[amount];
}