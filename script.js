//--------------------------------------------
// Author: Ben Carthron
// Date: 09/14/2023
// Assignment: At _bat_ 😜 with JS
// Description: JS file for At _bat_ 😜 with JS
//--------------------------------------------


//#1
function sleepIn(weekday, vacation){
    return !weekday || vacation;
}

//#2
function monkeyTrouble(aSmile, bSmile){
    return aSmile == bSmile;
}

//#3
function sumDouble(a, b){
    sum = (a == b) ? (a + b) * 2 : a + b;
    return sum;
}

//#4
function frontBack(str){
    return str = (str.length <= 1) ? str : str.charAt(str.length - 1) + str.substring(1, str.length - 1) + str.charAt(0);
}

//#5
function intMax(a, b, c){
    return Math.max(a, b, c);
}

//#6
function arrayCount9(nums){
    return nums.reduce((sum, element) => (element === 9 ? sum + 1 : sum), 0);
}

//#7
function array667(nums){
    sum = 0;
    for (i = 0; i < nums.length - 1; i++){
        if (nums[i] == 6 && nums[i + 1] == 6 || nums[i] == 6 && nums[i + 1] == 7){
            sum++;
        }
    }
    return sum;
}

//#8
function squirrelPlay(temp, isSummer){
    return isSummer ? (temp >= 60 && temp <= 100) : (temp >= 60 && temp <= 90);
}

//#9
function withoutDoubles(die1, die2, noDoubles){
    return noDoubles && die1 === die2 ? (die1 === 6 ? 1 : die1 + 1) + die2 : die1 + die2;
}

//#10
function greenTicket(a, b, c){
    return a == b && b == c ? 20 : a == b || b == c || a == c ? 10 : 0;
}

//#11
function blackjack(a, b){
    return a > 21 && b > 21 ? 0 : a > 21 ? b : b > 21 ? a : Math.max(a, b);
}

//#12
function makeChocolate(small, big, goal){
    max_big = Math.floor(goal / 5);
    big_used = Math.min(max_big, big);
    remaining_goal = goal - big_used * 5;
    if (remaining_goal <= small){
        return remaining_goal;
    } else {
        return -1;
    }
}