// two sum problem using javascript

const twoSum = (nums, target) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i = i + 1){

        const compliment = target - nums[i];
        if(map.has(compliment)){
            return [map.get(compliment), i];
        }

        map.set(nums[i], i);

    }

    return [];
}

let nums = [2, 4, 8, 5];
let target = 6;

console.log(twoSum(nums, target));

//time complexity of O(n);
// space complexity of O(n);
// we basically get the indices of the two numbers that add up to the target number, for this case its the indices 0 and 1 that numbers 2 and 4
// this was Brian Itira 