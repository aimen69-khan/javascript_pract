def my(a, b):
    return a + b
  
def yes(a, b):
    return a - b
    
def no(a, b):

    if b == 0:
        return "Cannot divide by zero"
    return a / b

userInput_1 = float(input("Enter Your Number? "))
userInput_2 = float(input("Enter Another Number? "))
userInput_3 = input("Enter An Operator (+, -, /) ")
      
if userInput_3 == "+":
    print(my(userInput_1, userInput_2))
      
elif userInput_3 == "-":
    print(yes(userInput_1, userInput_2))
      
elif userInput_3 == "/":
    print(no(userInput_1, userInput_2))
      
else:
    print("Invalid Operator")


message = "My Name Is Ahmed raza"
print(message)
