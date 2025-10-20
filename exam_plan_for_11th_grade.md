# Exam Plan for 11th Grade - Composite Data Types
**Duration:** 35 minutes  
**Based on:** Chapter 1 - Composite Data Types from exam_1_for_11.md

## Exam Structure

### Part 1: Theory Questions (10 minutes)
**Multiple Choice Questions (5 questions, 2 minutes each)**

1. **Simple vs Composite Data Types**
   - Which of the following is NOT a simple data type?
     a) integer
     b) boolean
     c) array
     d) char

2. **Array Declaration**
   - What is the correct way to declare a one-dimensional array of 10 integers in C++?
     a) int array[10];
     b) array int[10];
     c) int[10] array;
     d) array[10] int;

3. **String Representation**
   - How is the end of a string represented in C++ when using char arrays?
     a) '\n'
     b) '\0'
     c) 'end'
     d) 'stop'

4. **Array Indexing**
   - In C++, array indices start from:
     a) 0
     b) 1
     c) -1
     d) Programmer's choice

5. **Data Type Identification**
   - Which of these represents composite data?
     a) 3.14
     b) "Hello World"
     c) true
     d) 'A'

### Part 2: Practical Programming Tasks (15 minutes)
**Choose 2 out of 3 tasks**

**Task A: Array Operations**
Write a C++ program that:
1. Declares an array of 5 integers
2. Reads values from the user
3. Calculates and displays the sum of all elements
4. Finds and displays the maximum value

**Task B: String Manipulation**
Write a C++ program that:
1. Reads a string from the user
2. Counts and displays the number of vowels (a, e, i, o, u)
3. Replaces all spaces with hyphens '-'
4. Displays the modified string

**Task C: Two-dimensional Array**
Write a C++ program that:
1. Declares a 3x3 integer matrix
2. Reads values from the user
3. Calculates and displays the sum of the main diagonal elements
4. Displays the matrix in a formatted way

### Part 3: Theory Application (10 minutes)
**Short Answer Questions (2 questions, 5 minutes each)**

1. **Real-world Application**
   Describe how you would use composite data types to represent daily electricity consumption data for a household over one month. Specify:
   - Which data types you would use
   - How you would structure the data
   - Why composite types are necessary for this task

2. **Programming Concepts**
   Explain the difference between representing strings as:
   - char arrays (char[])
   - string type
   Include at least two advantages of each approach and when you would prefer one over the other.

## Assessment Criteria

### Theory Questions (Part 1)
- 1 point per correct answer
- Total: 5 points

### Practical Programming (Part 2)
- **Task completion:** 3 points per task
- **Code correctness:** 2 points per task  
- **Code quality:** 1 point per task
- Total: 12 points (6 points per task × 2 tasks)

### Theory Application (Part 3)
- **Completeness:** 2 points per question
- **Accuracy:** 2 points per question
- **Clarity:** 1 point per question
- Total: 10 points

**Total Exam Score: 27 points**

## Time Allocation Guide
- **Part 1:** 10 minutes (2 minutes per question)
- **Part 2:** 15 minutes (7-8 minutes per programming task)
- **Part 3:** 10 minutes (5 minutes per theory question)

## Materials Allowed
- Pen/pencil
- Paper for rough work
- No electronic devices or reference materials

## Exam Instructions for Students
1. Read all questions carefully before starting
2. Manage your time effectively across all sections
3. For programming tasks, write clean, commented code
4. Show your work for partial credit
5. Answer all questions to the best of your ability

## Sample Solutions (For Teacher Reference)

### Part 1 Sample Answers:
1. c) array
2. a) int array[10];
3. b) '\0'
4. a) 0
5. b) "Hello World"

### Part 2 Sample Code (Task A):
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[5];
    int sum = 0, max;
    
    // Read values
    cout << "Enter 5 integers: ";
    for(int i = 0; i < 5; i++) {
        cin >> arr[i];
    }
    
    // Calculate sum and find max
    max = arr[0];
    for(int i = 0; i < 5; i++) {
        sum += arr[i];
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    
    cout << "Sum: " << sum << endl;
    cout << "Maximum: " << max << endl;
    
    return 0;
}
```

This exam plan ensures comprehensive coverage of the composite data types theory while maintaining the 35-minute timeframe and including both theoretical understanding and practical application components.
