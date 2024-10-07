#!/usr/bin/python3
def pascal_triangle(n):
    """Returns a list of lists representing Pascal's triangle of size n."""
    if n <= 0:
        return []

    triangle = [[1]]  # First row

    for i in range(1, n):
        row = [1]  # Start each row with a 1
        # Calculate the values in between based on the previous row
        for j in range(1, i):
            row.append(triangle[i-1][j-1] + triangle[i-1][j])
        row.append(1)  # End each row with a 1
        triangle.append(row)

    return triangle
