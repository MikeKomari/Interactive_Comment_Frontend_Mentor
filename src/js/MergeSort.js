export function mergeSort(arr, startIndex = 0, endIndex = arr.length - 1) {
  if (arr.length <= 1) return arr;

  if (startIndex < endIndex) {
    const middle = Math.floor((startIndex + endIndex) / 2);

    mergeSort(arr, startIndex, middle);
    mergeSort(arr, middle + 1, endIndex);

    merge(arr, startIndex, endIndex, middle);
  }
}

export function merge(arr, startIndex, endIndex, middle) {
  const leftArray = arr.slice(startIndex, middle + 1);
  const rightArray = arr.slice(middle + 1, endIndex + 1);

  let leftIndex = 0;
  let rightIndex = 0;
  let mergeIndex = startIndex;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex].score < rightArray[rightIndex].score) {
      arr[mergeIndex++] = leftArray[leftIndex++];
    } else {
      arr[mergeIndex++] = rightArray[rightIndex++];
    }
  }

  while (leftIndex < leftArray.length) {
    arr[mergeIndex++] = leftArray[leftIndex++];
  }

  while (rightIndex < rightArray.length) {
    arr[mergeIndex++] = rightArray[rightIndex++];
  }
}

// mergeSort(comments);
