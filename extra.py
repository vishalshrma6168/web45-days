# recursion
# A function that calls itself to solve a problem

# def factorial(n):
#   if n==0:
#     return 1
#   else:
#     return n * factorial(n-1)
  
# print(factorial(5))  # Output: 120






# map method
# applies a function to every item in an iterable

# numbers=[1,2,3,4,5]
# sq=list(map(lambda x:x*2,numbers))
# print(sq)


# numbers=[1,2,3,4,5,6,7,8]
# def square(x):
#     return x*x

# sq=list(map(square,numbers))
# print(sq)




# filter method
# selects items from an iterable based on a condition

# numbers=[1,2,3,4,5,6,7,8]
# even=list(filter(lambda x:x%2==0,numbers))
# print(even)



# reduce method
# combine two or more values into a single value

# from functools import reduce
# numbers=[1,2,3,4,5]
# sum_of_num=reduce(lambda x,y:x+y,numbers)
# print(sum_of_num)


