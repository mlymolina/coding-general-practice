// Given a sorted array of integers, return the index of the given key. Return -1 if not found.
// Runtime Complexity: O(logn)
//a is sorted array
let binary_search_check = (a, key, low, high) => {

  if (low > high) return -1;

  let mid = low + Math.floor((high - low)/2);
  if (a[mid] === key) {
    return mid; 
  } else if (a[mid] > key) {
    high = mid - 1;
    return binary_search_check(a, key, low, high);
  } if (a[mid] < key) {
    low = mid + 1;
    return binary_search_check(a, key, low, high);
  }
  
}

let binary_search = (a, key) => {
  let high = a.length - 1;
  return binary_search_check(a, key, 0, high);
};

let tests = [1, 3, 5, 24, 56, 80, 90, 100, 200, 234, 500];

let result = binary_search(tests, 80);
console.log(result);