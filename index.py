arr = [6, 5, 4, 3, 2, 3, 2]


def func(arr, left, right):
    mid = (left + right) // 2
    if (
        mid == 0
        or arr[mid - 1] < arr[mid]
        and mid == len(arr) - 1
        or arr[mid] > arr[mid + 1]
    ):
        return arr[mid]
    elif mid > 0 and arr[mid - 1] > arr[mid]:
        return func(arr, left, right - 1)
    else:
        return func(arr, left + 1, right)


print(func(arr, 0, len(arr) - 1))
