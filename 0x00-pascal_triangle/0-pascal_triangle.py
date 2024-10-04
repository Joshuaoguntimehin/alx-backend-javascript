def pascal_triangle(n):
    if n <= 0:
        return []
    
    triangle = []
    
    for i in range(n):
        row = [1] * (i + 1)  # Start with a row of 1s
        for j in range(1, i):
            row[j] = triangle[i-1][j-1] + triangle[i-1][j]  # Sum of two elements above
        triangle.append(row)
    
    return triangle

# Example usage:
print(pascal_triangle(5))
