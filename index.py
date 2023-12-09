arr = [1, 2, 2, 3, 4]

seen = set()
res = next(i for i in arr if i in seen or seen.add(i))

print(res)
