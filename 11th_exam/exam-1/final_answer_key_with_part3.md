# Final Answer Key - With Part 3: Theory Application
**Grade:** 11th  
**Duration:** 35 minutes each

---

## Variant 1 Answers

### Part 1: Theory Questions (5 points)
1. **a) integer**
2. **b) To aggregate multiple simple data into one structure**
3. **b) One-dimensional array**
4. **a) 0**
5. **b) "Student Name"**

### Part 2: Programming Tasks (12 points)

**Task A: Array Sum**
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[5];
    int sum = 0;
    
    cout << "Enter 5 integers: ";
    for(int i = 0; i < 5; i++) {
        cin >> arr[i];
        sum += arr[i];
    }
    
    cout << "Sum = " << sum << endl;
    return 0;
}
```

**Task B: Student Name Display**
```cpp
#include <iostream>
using namespace std;

int main() {
    char name[20];
    
    name[0] = 'I'; name[1] = 'o'; name[2] = 'n'; name[3] = '\0';
    cout << "Student name: " << name << endl;
    
    return 0;
}
```

**Task C: 2x3 Matrix Sum**
```cpp
#include <iostream>
using namespace std;

int main() {
    int matrix[2][3];
    int sum = 0;
    
    cout << "Enter 2x3 matrix:" << endl;
    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 3; j++) {
            cin >> matrix[i][j];
            sum += matrix[i][j];
        }
    }
    
    cout << "Sum of all elements: " << sum << endl;
    return 0;
}
```

### Part 3: Theory Application (10 points)

**Question 1: Simple vs Composite Data Types**
**Expected Answer:**
**Simple data types** store single values:
- Examples: integer, float, char, boolean
- Used for individual pieces of data like age (int), temperature (float), letter grade (char)

**Composite data types** aggregate multiple simple data:
- Examples: arrays, strings
- Used for collections of related data like student names (string), daily temperatures (array)

**Key difference:** Simple types store one value, composite types store multiple related values.

**Grading (5 points):**
- Clear definition of simple types: 1 point
- Clear definition of composite types: 1 point
- Correct examples: 2 points
- Clear difference explanation: 1 point

**Question 2: Electricity Consumption Data Structure**
**Expected Answer:**
For daily electricity consumption for a month:
- **Data Structure:** One-dimensional array
- **Type:** `float consumption[31]` or `float consumption[32]` (for intuitive indexing)
- **Why:** Each day's consumption is a single value, so a 1D array is sufficient
- **Alternative:** Could use 2D array but that would be overkill for this simple case

**Grading (5 points):**
- Correct data structure choice: 2 points
- Appropriate type selection: 1 point
- Clear reasoning: 2 points

---

## Variant 2 Answers

### Part 1: Theory Questions (5 points)
1. **c) array**
2. **c) '\0'**
3. **c) Two-dimensional array**
4. **a) int array[10];**
5. **c) char array or string**

### Part 2: Programming Tasks (12 points)

**Task A: Find Largest Number**
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[5];
    int max;
    
    cout << "Enter 5 integers: ";
    for(int i = 0; i < 5; i++) {
        cin >> arr[i];
    }
    
    max = arr[0];
    for(int i = 1; i < 5; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    
    cout << "Largest number: " << max << endl;
    return 0;
}
```

**Task B: Name and Surname**
```cpp
#include <iostream>
using namespace std;

int main() {
    char name[20], surname[20];
    
    cout << "Enter name: ";
    cin >> name;
    cout << "Enter surname: ";
    cin >> surname;
    
    cout << "Name: " << name << endl;
    cout << "Surname: " << surname << endl;
    
    return 0;
}
```

**Task C: Array Copy**
```cpp
#include <iostream>
using namespace std;

int main() {
    int original[5], copy[5];
    
    cout << "Enter 5 integers: ";
    for(int i = 0; i < 5; i++) {
        cin >> original[i];
        copy[i] = original[i];
    }
    
    cout << "Copied array: ";
    for(int i = 0; i < 5; i++) {
        cout << copy[i] << " ";
    }
    cout << endl;
    
    return 0;
}
```

### Part 3: Theory Application (10 points)

**Question 1: Simple and Composite Data Types Examples**
**Expected Answer:**
**Simple data types:**
- integer (int) - for whole numbers like age, count
- float (real) - for decimal numbers like temperature, price
- char - for single characters like letter grades
- boolean (bool) - for true/false values

**Composite data types:**
- Arrays - for collections of related data like daily temperatures
- Strings - for text data like student names

**Grading (5 points):**
- Two correct simple types: 2 points
- Two correct composite types: 2 points
- Clear examples: 1 point

**Question 2: Purpose of '\0' Character**
**Expected Answer:**
The '\0' character (null terminator) marks the end of C-style strings because:
- **String termination:** Tells functions where the string ends
- **Memory management:** Prevents reading beyond actual string content
- **Function compatibility:** Required for string functions like strlen(), strcpy()
- **Safety:** Prevents buffer overflows and undefined behavior

**Grading (5 points):**
- Clear explanation of purpose: 2 points
- Two valid reasons: 2 points
- Safety consideration: 1 point

---

## Variant 3 Answers

### Part 1: Theory Questions (5 points)
1. **a) integer, float, char, boolean**
2. **b) Composite types aggregate multiple values**
3. **b) One-dimensional array of size 24**
4. **b) <string>**
5. **b) 19**

### Part 2: Programming Tasks (12 points)

**Task A: Daily Income Total**
```cpp
#include <iostream>
using namespace std;

int main() {
    double income[5];
    double total = 0;
    
    cout << "Enter daily income for 5 days:" << endl;
    for(int i = 0; i < 5; i++) {
        cout << "Day " << i+1 << ": ";
        cin >> income[i];
        total += income[i];
    }
    
    cout << "Total income: " << total << endl;
    return 0;
}
```

**Task B: String Copy**
```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main() {
    char source[20], destination[20];
    
    strcpy(source, "Hello");
    strcpy(destination, source);
    
    cout << "Source: " << source << endl;
    cout << "Destination: " << destination << endl;
    
    return 0;
}
```

**Task C: Average Temperature**
```cpp
#include <iostream>
using namespace std;

int main() {
    int temperatures[5];
    double sum = 0;
    
    cout << "Enter 5 temperatures: ";
    for(int i = 0; i < 5; i++) {
        cin >> temperatures[i];
        sum += temperatures[i];
    }
    
    double average = sum / 5;
    cout << "Average temperature: " << average << endl;
    
    return 0;
}
```

### Part 3: Theory Application (10 points)

**Question 1: What is an Array?**
**Expected Answer:**
An array is a composite data type that stores multiple values of the same type in a single variable. It's useful because:
- **Organization:** Groups related data together (like daily temperatures)
- **Efficiency:** Allows processing multiple values with loops
- **Memory:** More efficient than declaring many separate variables
- **Access:** Easy to access individual elements using indices

**Example:** Instead of `temp1, temp2, temp3...`, use `temperatures[24]` for hourly temperatures.

**Grading (5 points):**
- Clear definition: 2 points
- Two valid reasons: 2 points
- Good example: 1 point

**Question 2: String Functions**
**Expected Answer:**
**strcpy()** - Copies one string to another
- Example: `strcpy(dest, source)` copies source to dest
- Used for C-style strings (char arrays)

**strcat()** - Concatenates (joins) two strings
- Example: `strcat(str1, str2)` adds str2 to the end of str1
- Used for C-style strings

**strlen()** - Returns the length of a string
- Example: `strlen("Hello")` returns 5
- Used for both C-style strings and string type

**Grading (5 points):**
- Two correct functions: 2 points
- Clear explanations: 2 points
- Good examples: 1 point

---

## Variant 4 Answers

### Part 1: Theory Questions (5 points)
1. **a) Aggregating simple data**
2. **b) To store multiple related daily consumption values**
3. **b) getline()**
4. **a) int arr[] = {1,2,3};**
5. **c) Array of strings**

### Part 2: Programming Tasks (12 points)

**Task A: Daily Consumption Display**
```cpp
#include <iostream>
using namespace std;

int main() {
    double consumption[3];
    
    cout << "Enter electricity consumption for 3 days:" << endl;
    for(int i = 0; i < 3; i++) {
        cout << "Day " << i+1 << ": ";
        cin >> consumption[i];
    }
    
    cout << "Daily consumption:" << endl;
    for(int i = 0; i < 3; i++) {
        cout << "Day " << i+1 << ": " << consumption[i] << endl;
    }
    
    return 0;
}
```

**Task B: String Concatenation**
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string firstName, lastName, fullName;
    
    firstName = "Ion";
    lastName = "Popescu";
    fullName = firstName + " " + lastName;
    
    cout << "Full name: " << fullName << endl;
    return 0;
}
```

**Task C: Count Positive Numbers**
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[5];
    int count = 0;
    
    cout << "Enter 5 numbers: ";
    for(int i = 0; i < 5; i++) {
        cin >> arr[i];
        if(arr[i] > 0) {
            count++;
        }
    }
    
    cout << "Positive numbers: " << count << endl;
    return 0;
}
```

### Part 3: Theory Application (10 points)

**Question 1: 1D vs 2D Arrays**
**Expected Answer:**
**One-dimensional arrays** have one index and store linear data:
- **Example:** Daily electricity consumption for a month: `float consumption[31]`
- **Use when:** Data has only one changing variable (like day of month)

**Two-dimensional arrays** have two indices and store tabular data:
- **Example:** Monthly electricity consumption for a year: `float consumption[12][31]`
- **Use when:** Data has two changing variables (like month and day)

**Key difference:** 1D arrays use one index, 2D arrays use two indices for rows and columns.

**Grading (5 points):**
- Clear distinction: 2 points
- Correct examples: 2 points
- Clear difference explanation: 1 point

**Question 2: Char Arrays vs String Type**
**Expected Answer:**
We need both because they serve different purposes:

**Char arrays (C-style strings):**
- Fixed size, manual memory management
- **Use when:** Working with C libraries, fixed-length data, or when memory control is important
- **Example:** `char name[20]` for student names

**String type:**
- Dynamic size, automatic memory management
- **Use when:** General string operations, unknown length, or when ease of use is important
- **Example:** `string name` for general text processing

**Reason:** Char arrays provide more control, string type provides more convenience.

**Grading (5 points):**
- Clear comparison: 2 points
- Appropriate usage scenarios: 2 points
- Clear reasoning: 1 point

---

## Variant 5 Answers

### Part 1: Theory Questions (5 points)
1. **a) arrays and strings**
2. **c) Concatenate strings**
3. **b) To make indexing more intuitive (use index 1-31)**
4. **a) string1 + string2**
5. **c) Automatic memory management**

### Part 2: Programming Tasks (12 points)

**Task A: String to Char Array**
```cpp
#include <iostream>
#include <string>
#include <cstring>
using namespace std;

int main() {
    string strType = "Informatics";
    char charArray[20];
    
    strcpy(charArray, strType.c_str());
    cout << "Char array: " << charArray << endl;
    
    return 0;
}
```

**Task B: Student Names**
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string students[3];
    
    cout << "Enter 3 student names:" << endl;
    for(int i = 0; i < 3; i++) {
        cout << "Student " << i+1 << ": ";
        getline(cin, students[i]);
    }
    
    cout << "Student names:" << endl;
    for(int i = 0; i < 3; i++) {
        cout << students[i] << endl;
    }
    
    return 0;
}
```

**Task C: Array Average**
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[5];
    double sum = 0;
    
    cout << "Enter 5 numbers: ";
    for(int i = 0; i < 5; i++) {
        cin >> arr[i];
        sum += arr[i];
    }
    
    double average = sum / 5;
    cout << "Average: " << average << endl;
    
    return 0;
}
```

### Part 3: Theory Application (10 points)

**Question 1: String Representations in C++**
**Expected Answer:**
**Char arrays (C-style strings):**
- Fixed size, must specify maximum length
- Manual memory management
- **Use when:** Working with C libraries, fixed-length data, or when memory control is important
- **Example:** `char name[20] = "Ion";`

**String type:**
- Dynamic size, automatic memory management
- Built-in functions and operators
- **Use when:** General string operations, unknown length, or when ease of use is important
- **Example:** `string name = "Ion";`

**Choice:** Use char arrays for compatibility with C code, string type for general C++ programming.

**Grading (5 points):**
- Clear description of both methods: 2 points
- Appropriate usage scenarios: 2 points
- Clear examples: 1 point

**Question 2: Importance of Composite Data Types**
**Expected Answer:**
Composite data types are important because:
- **Organization:** Group related data together instead of using many separate variables
- **Efficiency:** Process multiple values with loops instead of individual operations
- **Real-world representation:** Better match real data structures (like student lists, temperature records)
- **Memory management:** More efficient use of memory for related data

**Example:** Instead of `temp1, temp2, temp3...`, use `temperatures[24]` for hourly data.

**Grading (5 points):**
- Two valid reasons: 2 points
- Clear explanation: 2 points
- Good example: 1 point

---

## Updated Grading Guidelines

### Total Points: 27 points
- **Part 1:** Theory Questions (5 points) - 1 point per question
- **Part 2:** Programming Tasks (12 points) - 6 points per task × 2 tasks
- **Part 3:** Theory Application (10 points) - 5 points per question × 2 questions

### Part 3 Grading Rubric (per question):
- **Content accuracy:** 2 points
- **Completeness:** 2 points
- **Clarity and organization:** 1 point

### Time Management:
- **Part 1:** 10 minutes (2 minutes per question)
- **Part 2:** 15 minutes (7-8 minutes per programming task)
- **Part 3:** 10 minutes (5 minutes per theory application question)

All variants maintain consistent Easy-Medium difficulty with comprehensive coverage of composite data types concepts.
