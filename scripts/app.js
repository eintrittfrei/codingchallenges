
// Calculate the return amount and how many bills and coins of each rill be returned to the customer 
// Supermakret till 
// total amount 16.06
// given 50.00

const billsCoins = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01] // array of the available return bills and coins 

function money(paid, bill ) {  // function with 2 parameters taking the paid and total amount 
  const changeSplit = [] // create empyt array for the result to be returned 
  const change = paid - bill // calculate change to be given amount
  let count = change // set variable to count down change remaninig 
  let check = 0 // check if correct change is caclualted at the end 

  for (let i = 0; i <= billsCoins.length - 1; i++ ) { // a basic for loop to iterate over the array of bills and coins 
    
    const result = (count / billsCoins[i]).toPrecision(7)  // set a const for the bill amount devided by the current bill or coin 
    // console.log('result', result, billsCoins[i]) USING toPrescision here so we don't loose a cent at the end!!! 
    
    if (result < 1) { // else if the result is < 0 no bill/ coin returned 
      changeSplit.push() // push 0 to array `${0}: £${billsCoins[i]}` or push nothing to not add to array 
    } else if (result >= 1) { // if result is > 1 
      // console.log('billsCoins[i]', billsCoins[i] * Math.floor(result))
      
      changeSplit.push(`${Math.floor(result)}: £${billsCoins[i]}`) // use math.floor to round down to next integer to work out number of bills or coins
      count -= billsCoins[i] * Math.floor(result) // subsract from count amount what has been used aleady 
      check += billsCoins[i] * Math.floor(result) // add same amount to the check variable 
      // console.log('count', count, billsCoins[i])
    } 
    
  }
  console.log(`Total amount: ${bill}, Given: ${paid} Change: ${change}`)
  
  console.log('check return amount counter: ', check) // console.log amount in check 
  return changeSplit // return array with bills and coins to be returned given 
  
} 

console.log(money(50, 16.06)) // enter money given and total amount to be paid in place of parameters 


