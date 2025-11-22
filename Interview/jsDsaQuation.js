
// const isPalindrome = function (x){
//     return x === +x.toString().split("").reverse().join("")
// }

// console.log( isPalindrome("asa"));
 




const isPalindrome = function(x) {
  const s = x;
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("asa"));  // true
console.log(isPalindrome("hello")); // false



var fib = function(n){
    const arr = [0,1];

    for(let i=2; i<=n; i++){
        arr.push(arr[i-1] + arr[i-2]);
    }
    console.log(arr);
    
}
fib(4);


const fib2=function(n){
    if(n <= 1) return n;

    return fib2(n-1) + fib2(n-2);
}
console.log(fib2(4));




const isAnagram = function(s,t){
    s=s.split("").sort().join("");
    t=t.split("").sort().join("");

    if(s==t){
        return true
    }

    return false;
}

console.log(isAnagram("asd","dsa"));




const isAnagram2 = function(s,t){
    if(s.length !== t.length) return false;
 
    let obj1 = {};
    let obj2 = {};

    for(let i=0; i < s.length; i++){
        obj1[s[i]]=(obj1[s[i]] || 0) + 1;
        obj2[t[i]]=(obj2[t[i]] || 0) + 1;
    }

    for(const key in obj1){
        if(obj1[key] !== obj2[key]) return false;
    }
    return true;
}




const twoSum = function(nums,target){
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) return[i,j];
        }
    }
}


const twoSum2 = function(nums,target){
    var obj = {};

    for(let i=0; i<nums.length; i++){
        var n=nums[i];

        if(obj[target-n] >= 0){
            return [obj[target - n], i];
        }else{
            obj[n]=i;
        }
    }
}