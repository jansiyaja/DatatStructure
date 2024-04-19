

//Input: nums = [2, 7, 11, 15], target = 9
//Output: [0, 1]
//Explanation: nums[0] + nums[1] = 2 + 7 = 9, so the indices of the two numbers are 0 and 1.
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
               
//                 return [i, j];
//             }
//         }
//     }
    
    
//     return [];
// };

//  const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target));
//----------------------------------------------------------------------//

// Input: nums = [1, 2, 3, 1]
// Output: true
// Explanation: There are two 1s in the array, which means there are duplicate elements.

function duplicate(num) {
    for(let i=0;i<num.length;i++){
        for(let j=0;j<num.length;j++){
            if(num[i]===num[j]){
                return true
            }else{
                return false
            }
        }
    }
}
const num = [2, 7,12,2, 11, 15];
console.log(duplicate(num));
//----------------------------------------------------------------------//
// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
// Explanation: 
// - The product of all the elements except nums[0] is 2 * 3 * 4 = 24.
// - The product of all the elements except nums[1] is 1 * 3 * 4 = 12.
// - The product of all the elements except nums[2] is 1 * 2 * 4 = 8.
// - The product of all the elements except nums[3] is 1 * 2 * 3 = 6.

function arraySum(num) {
    let result=[];
    let productBefore = 1;
    for (let i = 0; i < num.length; i++) {
        result[i] = productBefore;
        productBefore *= num[i];
    }
    let productAfter=1;
    for (let i = num.length - 1; i >= 0; i--) {
        result[i] *= productAfter;
        productAfter *= num[i];
    }
    return result
}
const nums =[1, 2, 3, 4];
console.log(arraySum(nums));
//----------------------------------------------------------------------//