const firstMissingPositive = (nums: number[]): number => {
    const n = nums.length;
    
    // Place each number in its correct position if possible
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }
    
    // Find the first position where the number is incorrect
    for (let i = 0 ; i < n; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }
    
    // If all positions are correct, return n + 1
    return n + 1;
} 