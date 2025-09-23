var removeElement = function (nums, val) {
    let newNums = []
    for(let i= 0; i<nums.length;i++){
        if(nums[i]!==val){
            newNums.push(nums[i])
        }
    }
    for(let i=0; i<nums.length; i++){
        nums[i]= newNums[i]
    }
    return newNums.length
};