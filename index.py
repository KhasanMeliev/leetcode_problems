def binary_search(arr):
    left, right = 0, len(arr) - 1
    diff = (arr[-1] - arr[0]) // len(arr)
    while left <= right:
        mid = (left + right) // 2
        if mid + 1 < len(arr) and arr[mid + 1] - arr[mid] != diff:
            return arr[mid + 1] - diff
        if mid - 1 >= 0 and arr[mid] - arr[mid - 1] != diff:
            return arr[mid - 1] + diff
        if arr[mid] - arr[0] != (mid - 0) * diff:
            right = mid - 1
        else:
            left = mid + 1
    return -1


print(binary_search([5, 7, 9, 11, 15]))
