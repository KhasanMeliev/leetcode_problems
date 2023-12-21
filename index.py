arr = [1, 4, 5, 10]
res = -1
for i in range(len(arr)):
    for j in range(i, len(arr)):
        if arr[j] > arr[i]:
            res = max(res, arr[j] - arr[i])
print(res)
