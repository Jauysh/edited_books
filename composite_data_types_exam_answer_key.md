# Exam Answer Key: Composite Data Types
**Grade:** 11th  
**Duration:** 35 minutes  
**Total Points:** 27

---

## Part 1: Theory Questions (5 points)

### Correct Answers:
1. **c) array** - Arrays are composite data types, not simple data types
2. **a) int array[10];** - Correct C++ syntax for array declaration
3. **b) '\0'** - Null character marks the end of strings in C++
4. **a) 0** - C++ arrays use zero-based indexing
5. **b) "Hello World"** - Strings are composite data types

**Scoring:** 1 point per correct answer = 5 points total

---

## Part 2: Practical Programming Tasks (12 points)

### Task A: Array Operations - Sample Solution (6 points)
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[5];
    int sum = 0, max;
    
    // Read values from user
    cout << "Enter 5 integers: ";
    for(int i = 0; i < 5; i++) {
        cin >> arr[i];
    }
    
    // Calculate sum and find maximum
    max = arr[0];
    for(int i = 0; i < 5; i++) {
        sum += arr[i];
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    
    // Display results
    cout << "Sum: " << sum << endl;
    cout << "Maximum value: " << max << endl;
    
    return 0;
}
```

**Grading Rubric for Task A:**
- Array declaration: 1 point
- Reading input correctly: 1 point
- Calculating sum: 1 point
- Finding maximum: 1 point
- Displaying results: 1 point
- Code structure and comments: 1 point

### Task B: String Manipulation - Sample Solution (6 points)
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string input;
    int vowelCount = 0;
    
    // Read string from user
    cout << "Enter a string: ";
    getline(cin, input);
    
    // Count vowels
    for(int i = 0; i < input.length(); i++) {
        char c = tolower(input[i]);
        if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            vowelCount++;
        }
    }
    
    // Replace spaces with hyphens
    for(int i = 0; i < input.length(); i++) {
        if(input[i] == ' ') {
            input[i] = '-';
        }
    }
    
    // Display results
    cout << "Number of vowels: " << vowelCount << endl;
    cout << "Modified string: " << input << endl;
    
    return 0;
}
```

**Grading Rubric for Task B:**
- String input handling: 1 point
- Vowel counting logic: 1 point
- Space replacement: 1 point
- Case handling (tolower): 1 point
- Displaying results: 1 point
- Code structure and comments: 1 point

### Task C: Two-dimensional Array - Sample Solution (6 points)
```cpp
#include <iostream>
using namespace std;

int main() {
    int matrix[3][3];
    int diagonalSum = 0;
    
    // Read matrix values
    cout << "Enter 3x3 matrix values:" << endl;
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            cout << "matrix[" << i << "][" << j << "] = ";
            cin >> matrix[i][j];
        }
    }
    
    // Calculate main diagonal sum
    for(int i = 0; i < 3; i++) {
        diagonalSum += matrix[i][i];
    }
    
    // Display matrix
    cout << "\nMatrix:" << endl;
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
    
    cout << "Sum of main diagonal: " << diagonalSum << endl;
    
    return 0;
}
```

**Grading Rubric for Task C:**
- Matrix declaration: 1 point
- Reading 2D array input: 1 point
- Diagonal sum calculation: 1 point
- Matrix display formatting: 1 point
- Correct output: 1 point
- Code structure and comments: 1 point

---

## Part 3: Theory Application (10 points)

### Question 1: Real-world Application (5 points)

**Expected Answer:**
For representing daily electricity consumption data over one month, I would use:

**Data Types:**
- Use `float` or `double` for consumption values (since consumption can have decimal values)
- Use a one-dimensional array to store daily consumption

**Structure:**
```cpp
typedef float DailyConsumption[32];  // Using 32 to accommodate days 1-31
DailyConsumption consumption;
```
- `consumption[1]` would store consumption for day 1
- `consumption[2]` for day 2, etc.
- `consumption[0]` would remain unused for better readability

**Why Composite Types are Necessary:**
- Simple data types can only store single values
- Composite types (arrays) allow storing multiple related values together
- Enables operations like calculating monthly total, finding peak consumption days
- Makes data processing efficient and organized

**Grading Rubric:**
- Appropriate data type selection: 1 point
- Correct array structure: 1 point
- Explanation of indexing approach: 1 point
- Clear reasoning for composite types: 1 point
- Complete and coherent answer: 1 point

### Question 2: Programming Concepts (5 points)

**Expected Answer:**

**char arrays (char[]):**
- Fixed size, must specify maximum length
- Manual memory management
- Use null terminator '\0' to mark end
- **Advantages:**
  1. More control over memory usage
  2. Direct access to individual characters
- **When to use:** When working with fixed-length strings or interfacing with C libraries

**string type:**
- Dynamic size, automatically manages memory
- Built-in functions for common operations
- No need for null terminator
- **Advantages:**
  1. Easier to use and more intuitive
  2. Automatic memory management
- **When to use:** For most string operations, especially when length is unknown

**Preference:**
- Use `string` for general programming tasks
- Use `char[]` when working with hardware interfaces or legacy code

**Grading Rubric:**
- Clear distinction between approaches: 1 point
- Two advantages for char arrays: 1 point
- Two advantages for string type: 1 point
- Appropriate usage scenarios: 1 point
- Complete and coherent answer: 1 point

---

## Total Score Calculation

**Part 1:** 5 points  
**Part 2:** 12 points (6 points × 2 tasks)  
**Part 3:** 10 points  
**Total:** 27 points

## Grading Scale Suggestions
- **Excellent:** 24-27 points (89-100%)
- **Good:** 19-23 points (70-88%)
- **Satisfactory:** 14-18 points (52-69%)
- **Needs Improvement:** 0-13 points (0-51%)

## Common Mistakes to Watch For
- Array indexing errors (off-by-one)
- Forgetting to include necessary headers
- Incorrect string termination in char arrays
- Confusing simple vs composite data types
- Poor code formatting and lack of comments

## Teacher Notes
- Allow partial credit for partially correct solutions
- Consider code readability and structure in grading
- Look for understanding of concepts rather than perfect syntax
- Encourage students to show their work and thought process
