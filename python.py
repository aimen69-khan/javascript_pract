message = "Hello World!"
print(message)
print("My Name is Ahmed Raza")

def sum(a, b):
    return a + b

def sub(a, b):
    return a - b

def mult(a, b):
    return a * b

def div(a, b):
    return a / b

userInput_1 = float(input("Enter Any Number: "))
userInput_2 = float(input("Enter another Number: "))
userInput_3 = input("Enter Any operator (+ - / *): ")

if userInput_3 == "+":
    print(sum(userInput_1, userInput_2))

elif userInput_3 == "-":
    print(sub(userInput_1, userInput_2))

elif userInput_3 == "*":
    print(mult(userInput_1, userInput_2))

elif userInput_3 == "/":
    print(div(userInput_1, userInput_2))

else:
    print("Invalid")
    
