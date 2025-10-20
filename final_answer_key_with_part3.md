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
*(Same solutions as previous answer key)*

### Part 3: Theory Application (10 points)

**Question 1: Student Grades Structure**
**Expected Answer:**
For representing grades of 30 students in 5 subjects, I would use:
- **Data Type:** Two-dimensional array
- **Structure:** `float grades[30][5]`
- **Explanation:** 
  - Rows represent students (30 students)
  - Columns represent subjects (5 subjects)
  - `grades[i][j]` would store grade of student i in subject j
- **Alternative:** Could use array of structures, but 2D array is simpler for this case

**Grading (5 points):**
- Appropriate data type selection: 2 points
- Correct structure design: 2 points
- Clear explanation: 1 point

**Question 2: Char Arrays vs String Type**
**Expected Answer:**
**Char Arrays:**
- Fixed size, must specify maximum length
- Manual memory management
- **Advantages:**
  1. More control over memory usage
  2. Direct access to individual characters
- **Use when:** Working with fixed-length data or interfacing with C libraries

**String Type:**
- Dynamic size, automatic memory management
- Built-in functions and operators
- **Advantages:**
  1. Easier to use and more intuitive
  2. Automatic memory management
- **Use when:** General string operations, especially when length is unknown

**Grading (5 points):**
- Clear distinction: 2 points
- Two advantages for each: 2 points
- Appropriate usage scenarios: 1 point

---

## Variant 2 Answers

### Part 1: Theory Questions (5 points)
1. **c) array**
2. **c) '\0'**
3. **c) Two-dimensional array**
4. **a) int array[10];**
5. **c) char array or string**

### Part 2: Programming Tasks (12 points)
*(Same solutions as previous answer key)*

### Part 3: Theory Application (10 points)

**Question 1: Weather Data Structure**
**Expected Answer:**
For temperature data every hour for 7 days:
- **Data Type:** Two-dimensional array
- **Structure:** `float temperature[7][24]`
- **Explanation:**
  - Rows represent days (7 days)
  - Columns represent hours (24 hours per day)
  - `temperature[i][j]` stores temperature on day i at hour j
- **Reasoning:** 2D array naturally represents the tabular structure of days × hours

**Grading (5 points):**
- Appropriate data type: 2 points
- Correct structure: 2 points
- Clear reasoning: 1 point

**Question 2: 1D vs 2D Arrays**
**Expected Answer:**
**One-dimensional arrays** are appropriate for:
- Linear sequences of data
- **Example:** Daily electricity consumption for a month
- **Why:** Only one variable changes (day of month)

**Two-dimensional arrays** are appropriate for:
- Tabular data with two variables
- **Example:** Monthly electricity consumption for a year
- **Why:** Two variables change (month and day)

**Key difference:** 1D arrays have one index, 2D arrays have two indices representing different dimensions of data.

**Grading (5 points):**
- Clear comparison: 2 points
- Appropriate examples: 2 points
- Explanation of differences: 1 point

---

## Variant 3 Answers

### Part 1: Theory Questions (5 points)
1. **a) integer, float, char, boolean**
2. **b) Composite types aggregate multiple values**
3. **b) One-dimensional array of size 24**
4. **b) <string>**
5. **b) 19**

### Part 2: Programming Tasks (12 points)
*(Same solutions as previous answer key)*

### Part 3: Theory Application (10 points)

**Question 1: Supermarket Sales Data**
**Expected Answer:**
For tracking 10 products over 30 days:
- **Data Type:** Two-dimensional array
- **Structure:** `double sales[10][30]`
- **Explanation:**
  - Rows represent products (10 products)
  - Columns represent days (30 days)
  - `sales[i][j]` stores sales of product i on day j
- **Design choice:** 2D array efficiently represents the product×day relationship

**Grading (5 points):**
- Appropriate structure: 2 points
- Clear organization: 2 points
- Design justification: 1 point

**Question 2: Importance of Composite Types**
**Expected Answer:**
Composite data types are essential because:
1. **Real-world data is complex:** Student records contain multiple attributes (name, grades, ID)
2. **Efficient organization:** Arrays group related data instead of using many separate variables
3. **Practical processing:** Enables operations on entire datasets (sorting, searching, calculations)

**Examples from theory:**
- Electricity consumption data (arrays for monthly/yearly data)
- Student names (strings/arrays of characters)
- Temperature measurements (arrays for hourly data)

**Grading (5 points):**
- Clear explanation of importance: 2 points
- Real-world examples: 2 points
- Connection to theory: 1 point

---

## Variant 4 Answers

### Part 1: Theory Questions (5 points)
1. **a) Aggregating simple data**
2. **b) To store multiple related daily consumption values**
3. **b) getline()**
4. **a) int arr[] = {1,2,3};**
5. **c) Array of strings**

### Part 2: Programming Tasks (12 points)
*(Same solutions as previous answer key)*

### Part 3: Theory Application (10 points)

**Question 1: Chess Board Representation**
**Expected Answer:**
For representing a chess board (8x8 grid):
- **Data Type:** Two-dimensional array
- **Structure:** `char board[8][8]`
- **Organization:**
  - Rows represent ranks (1-8)
  - Columns represent files (a-h)
  - Each element stores piece information (e.g., 'K' for king, 'Q' for queen, ' ' for empty)
- **Alternative:** Could use enumeration types for pieces

**Grading (5 points):**
- Appropriate data type: 2 points
- Clear organization: 2 points
- Piece representation: 1 point

**Question 2: Array Indexing in C++**
**Expected Answer:**
**Zero-based indexing** means arrays start at index 0 because:
- **Historical reasons:** C and C++ tradition from early computing
- **Memory addressing:** Direct correspondence with memory offsets
- **Mathematical convenience:** Simplifies pointer arithmetic

**Practical implications:**
- Must be careful with array bounds (accessing arr[size] causes errors)
- Loops typically run from 0 to size-1
- Can be counterintuitive for beginners used to 1-based counting

**Grading (5 points):**
- Explanation of zero-based indexing: 2 points
- Practical implications: 2 points
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
*(Same solutions as previous answer key)*

### Part 3: Theory Application (10 points)

**Question 1: Library Book Data**
**Expected Answer:**
For storing book information for 1000 books:
- **Data Structure:** Array of structures or multiple parallel arrays
- **Option 1 (Structures):**
  ```cpp
  struct Book {
      string title;
      string author;
      int year;
  };
  Book library[1000];
  ```
- **Option 2 (Parallel arrays):**
  ```cpp
  string titles[1000];
  string authors[1000];
  int years[1000];
  ```
- **Choice justification:** Structures are better as they keep related data together

**Grading (5 points):**
- Appropriate structure design: 2 points
- Multiple options presented: 2 points
- Clear justification: 1 point

**Question 2: strcpy() vs Assignment**
**Expected Answer:**
**strcpy() function:**
- Used for C-style strings (char arrays)
- Copies content from source to destination
- **When to use:** When working with char arrays
- **Limitations:** Must ensure destination has enough space

**Simple assignment:**
- Used for string type
- `string1 = string2` copies the entire string
- **When to use:** When working with string type
- **Limitations:** Only works with string type, not char arrays

**Key difference:** strcpy() is for char arrays, assignment is for string type. They serve similar purposes but for different string representations.

**Grading (5 points):**
- Clear comparison: 2 points
- Usage scenarios: 2 points
- Limitations explained: 1 point

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
