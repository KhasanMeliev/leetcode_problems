s = input()
count = 0
for i in range(0, len(s)):
    for j in range(i + 1, len(s)):
        for k in range(j + 1, len(s)):
            for l in range(k + 1, len(s)):
                if s[i] == s[l] and s[j] == s[k]:
                    count += 1
print(count)
