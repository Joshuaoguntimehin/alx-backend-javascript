#!/usr/bin/python3
"""function in duc"""
def pascal_triangle(n):
    if n <= 0:
        return []
    
    triangle = []
    """function in duc"""
    for i in range(n):
        """function in duc"""
        row = [1] * (i + 1)  # Start with a row of 1s
        for j in range(1, i):
            """function in duc"""
            row[j] = triangle[i-1][j-1] + triangle[i-1][j]  # Sum of two elements above
        triangle.append(row)
    
    return triangle



