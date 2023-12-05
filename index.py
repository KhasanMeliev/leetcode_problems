def bin_search(n):
    left, right = 1, n // 2
    res = 0
    while left <= right:
        mid = (left + right) // 2
        sqr = mid**2
        if sqr == n:
            return mid
        elif sqr < n:
            left = mid + 1
            res = mid
        else:
            right = mid - 1
    return res


print(bin_search())
