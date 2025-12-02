# 10th Grade Informatics – Exam 2 (Simple Data Types)
## Based on textbook section: Simple data types, variables, constants, ordinal types (C++)

Time: 35 minutes  
All variants contain:
- Part 1: Multiple-choice questions (8)
- Part 2: True / False questions (6)
- Part 3: 3 coding / written tasks:
  - Task 1 – Data types
  - Task 2 – Variables
  - Task 3 – Constants

---

## Variant 1

### Part 1: Multiple-choice questions

1. **What is a data type in a programming language?**  
   A) A specific binary code used by the processor  
   B) A set of possible values and a set of operations defined on them  
   C) The size of the computer’s main memory  
   D) The format of text files on disk  

2. **Which of the following is a predefined *simple* data type in C++?**  
   A) `array`  
   B) `int`  
   C) `string`  
   D) `matrix`  

3. **Which operation is NOT valid for the `float` data type in C++?**  
   A) `+`  
   B) `-`  
   C) `*`  
   D) `%`  

4. **Which of the following is an integer constant (type `int`) according to C++ rules?**  
   A) `-301`  
   B) `-301.0`  
   C) `-61.00e+2`  
   D) `3.14`  

5. **Which statement about overflow of the `int` data type is correct?**  
   A) Overflow can never occur if we use `int`.  
   B) Overflow may occur if the result of an operation exceeds the range of `int`.  
   C) Overflow only occurs for negative numbers.  
   D) Overflow only occurs for division operations.  

6. **Which expression performs *integer division* in C++?**  
   A) `7 / 2` where both operands are of type `int`  
   B) `7.0 / 2.0`  
   C) `7.0 / 2`  
   D) `7 / 2.0`  

7. **Which integer value becomes `false` when assigned to a variable of type `bool`?**  
   A) `-1`  
   B) `0`  
   C) `1`  
   D) `2`  

8. **Given the declaration `enum Color {Yellow, Green, Blue, Violet};` what is the ordinal value of `Violet`?**  
   A) `0`  
   B) `1`  
   C) `2`  
   D) `3`  

---

### Part 2: True / False questions

Mark each statement as **True (T)** or **False (F)**.

9. In C++, every quantity (variable or constant) used in a program must be associated with a specific data type.  

10. In C++, the operator `%` (modulo) can be applied to both `int` and `float` operands.  

11. Real numbers of type `float` are stored exactly, without rounding errors.  

12. In C++, by default, integer types are signed (they can represent both positive and negative values).  

13. The character `'A'` and the integer `65` have the same ordinal number in the ASCII table.  

14. For an enumerated type `enum Answer {No, Yes};`, the value `Yes` has ordinal number `2`.  

---

### Part 3: Coding / written tasks

15. **Task 1 – Data types**

   a) Indicate the data type of each of the following constants in C++:

   - `-301`  
   - `-301.0`  
   - `3.14`  
   - `0314`  

   b) Explain why the expression `5 % 2.0` is invalid in C++.

---

16. **Task 2 – Variables**

   a) Write C++ declarations for the following variables:

   - `a`, `b`, `c` – integer variables  
   - `p`, `q` – real (floating-point) variables  

   b) Using the variables from part (a), write a small C++ program fragment that:

   - assigns integer values to `a`, `b`, `c`,  
   - computes the sum `s = a + b + c;`  
   - prints the value of `s` on the screen.

---

17. **Task 3 – Constants**

   a) Declare the following *typed constants* in C++:

   - gravitational acceleration `g = 9` (integer)  
   - approximation of π: `pi = 3.14` (floating-point)  

   b) Using these constants, write a C++ expression that computes the area `S` of a circle with radius `r = 5` (assume `S = pi * r * r`). Declare the constant `r` and the variable `S` with appropriate types.

---

## Variant 2

### Part 1: Multiple-choice questions

1. **How are data represented in a computer’s machine code?**  
   A) As decimal numbers  
   B) As sequences of binary digits (bits)  
   C) As characters from the ASCII table  
   D) As text strings  

2. **Which of the following lists contains only *predefined simple data types* in C++?**  
   A) `int`, `float`, `bool`, `char`  
   B) `int`, `array`, `float`, `bool`  
   C) `int`, `string`, `bool`, `char`  
   D) `float`, `matrix`, `bool`, `char`  

3. **Which operation is meaningful only for integer operands and not for `float`?**  
   A) `+`  
   B) `-`  
   C) `*`  
   D) `%`  

4. **Which of the following constants is of type `float` (real)?**  
   A) `10`  
   B) `10.0`  
   C) `0314`  
   D) `0x15`  

5. **Which suffix can be used in C++ to specify an `unsigned long` integer constant?**  
   A) `u` or `U`  
   B) `l` or `L`  
   C) `ul` or `lu`  
   D) `ll` or `LL`  

6. **What is the effect of integer division `18 / 4` in C++ (with both operands of type `int`)?**  
   A) The result is `4.5`  
   B) The result is `5`  
   C) The result is `4`  
   D) The result is `0`  

7. **Which of the following is a correct declaration of a Boolean variable in C++?**  
   A) `logical x;`  
   B) `bool x;`  
   C) `boolean x;`  
   D) `int bool;`  

8. **Given `enum Answer {No, Yes};`, which assignment is valid in C++?**  
   A) `Answer x = 1;`  
   B) `Answer x = Yes;`  
   C) `Answer x = "Yes";`  
   D) `Answer x = true;`  

---

### Part 2: True / False questions

9. The set of values of the `int` data type depends on the compiler and the operating system.  

10. The result of integer division `5 / 2` in C++ is `2.5`.  

11. Real numbers of type `float` can always represent any real number exactly.  

12. In C++, `true` is internally represented by the integer `1`, and `false` by the integer `0`.  

13. The character constant `'+'` is of type `char`.  

14. In C++, variables of an enumerated type can take any integer value, not only the ones listed in the `enum` definition.  

---

### Part 3: Coding / written tasks

15. **Task 1 – Data types**

   Consider the following declarations:

   ```cpp
   int r, y;
   float s, z;
   bool t, x;
   ```

   a) Write the data type of each variable (`r`, `s`, `t`, `x`, `y`, `z`).  
   b) Explain what kind of values each of these data types can store.

---

16. **Task 2 – Variables**

   a) Declare the following variables in C++:

   - `length`, `width` – real (floating-point) variables  
   - `area` – real (floating-point) variable  

   b) Write a small program fragment that:

   - assigns values to `length` and `width`,  
   - computes the area of a rectangle `area = length * width;`,  
   - prints the value of `area` on the screen.

---

17. **Task 3 – Constants**

   a) Declare the following constants in C++:

   - maximum number of students in a group: `MaxStudents = 30` (integer)  
   - minimum passing grade: `MinGrade = 5` (integer)  

   b) Write a program fragment that declares an integer variable `students` and checks (using a comment or explanation) whether `students` can exceed `MaxStudents`.

---

## Variant 3

### Part 1: Multiple-choice questions

1. **Which of the following is the best description of a *variable*?**  
   A) A quantity whose value cannot change during program execution  
   B) A quantity whose value can change during program execution  
   C) A fixed binary code in the processor  
   D) A constant stored in read-only memory  

2. **Which declaration correctly introduces two integer variables and one real variable in C++?**  
   A) `int x; float y, z;`  
   B) `int x, y; float z;`  
   C) `float x, y; int z;`  
   D) `bool x, y; float z;`  

3. **What is the type of the constant `-61.00e+2` in C++?**  
   A) `int`  
   B) `float` / `double` (real)  
   C) `char`  
   D) `bool`  

4. **Which statement about integer division and modulo is correct?**  
   A) `11 % 3` gives `1`  
   B) `11 % 3` gives `2`  
   C) `11 / 3` gives `2.5`  
   D) `11 / 3` gives `3`  

5. **Which of the following is a correct character literal in C++?**  
   A) `"A"`  
   B) `'A'`  
   C) `A`  
   D) `65`  

6. **What is the result of the logical expression `true && false`?**  
   A) `true`  
   B) `false`  
   C) `1`  
   D) `0`  

7. **Which comparison is true for the enumerated type `enum Color {Yellow, Green, Blue, Violet};`?**  
   A) `Green < Yellow`  
   B) `Yellow > Violet`  
   C) `Blue > Green`  
   D) `Violet < Yellow`  

8. **Which C++ keyword is used to create a new name (alias) for an existing data type?**  
   A) `enum`  
   B) `typedef`  
   C) `void`  
   D) `bool`  

---

### Part 2: True / False questions

9. A constant is a quantity whose value cannot change during program execution.  

10. The type of a constant in C++ is determined by the way it is written.  

11. The expression `x = true;` is invalid if `x` is of type `int`.  

12. `char` values are usually ordered according to the ASCII code table.  

13. In C++, the smallest value of an enumerated type has no predecessor.  

14. The `void` type in C++ means that a function returns an integer value.  

---

### Part 3: Coding / written tasks

15. **Task 1 – Data types**

   a) For each of the following constants, indicate its data type in C++ (`int`, `float`, `char`, or `bool`):

   - `10`  
   - `10.0`  
   - `'+'`  
   - `false`  

   b) Explain why real (`float`) operations may produce approximate results.

---

16. **Task 2 – Variables**

   a) Using `typedef`, define a new type name `intreg` as an alias for `int`.  

   b) Declare three integer variables `x1`, `i`, `t1` of type `intreg`.  

   c) Write a short program fragment that assigns values to these variables and computes their sum.

---

17. **Task 3 – Constants**

   a) Declare a constant `MaxInt` of type `int` whose value is `INT_MAX` from the header `<limits>`.  

   b) Write a small C++ program that prints the value of `MaxInt` on the screen.

---

## Variant 4

### Part 1: Multiple-choice questions

1. **Which data types are ordinal in C++?**  
   A) `int`, `bool`, `char`, `enum`  
   B) `float`, `double`, `long double`  
   C) `void`, `float`, `bool`  
   D) `string`, `char`, `double`  

2. **What is compared when relational operators (`<`, `<=`, `==`, etc.) are applied to ordinal types?**  
   A) The memory addresses of the variables  
   B) The ordinal numbers of their values  
   C) The names of the variables  
   D) The size of the variables in bytes  

3. **Which of the following is the correct declaration of an enumerated type in C++?**  
   A) `enum Color Yellow, Green, Blue, Violet;`  
   B) `Color enum {Yellow, Green, Blue, Violet};`  
   C) `enum Color {Yellow, Green, Blue, Violet};`  
   D) `enum {Color Yellow, Green, Blue, Violet};`  

4. **What is the ordinal number of the value `true` for the type `bool`?**  
   A) `-1`  
   B) `0`  
   C) `1`  
   D) `2`  

5. **Which of the following is a correct declaration of a constant in C++?**  
   A) `const int g = 9;`  
   B) `int const g;`  
   C) `int g = const 9;`  
   D) `constant int g = 9;`  

6. **What will be printed by the following code?**

   ```cpp
   bool x;
   x = false;
   cout << x;
   ```

   A) `true`  
   B) `false`  
   C) `0`  
   D) `1`  

7. **Which of the following statements about the `void` type is correct?**  
   A) `void` variables can store any value.  
   B) `void` is used when a function does not return a value.  
   C) `void` means the same as `int`.  
   D) `void` is a floating-point type.  

8. **Which of the following declarations introduces an anonymous enumerated type variable?**  
   A) `enum Weekday {Mon, Tue, Wed} d;`  
   B) `enum {Mon, Tue, Wed} d;`  
   C) `typedef enum {Mon, Tue, Wed} d;`  
   D) `enum d {Mon, Tue, Wed};`  

---

### Part 2: True / False questions

9. For ordinal types, each value has an ordinal number.  

10. The predecessor and successor of an ordinal value in C++ are always defined.  

11. The expression `char('A' + 1)` produces the character `'B'`.  

12. The `float` data type is an ordinal type in C++.  

13. Two types defined by `typedef` from the same base type are identical.  

14. In C++, enumerated type identifiers from different `enum` declarations can freely repeat the same names without errors.  

---

### Part 3: Coding / written tasks

15. **Task 1 – Data types**

   a) Define an enumerated type `Education` with the values `Elementary = 1`, `Secondary`, `Higher`.  

   b) Declare a variable `e` of type `Education`, assign it the value `Secondary`, and print its ordinal number (as an integer) on the screen.

---

16. **Task 2 – Variables**

   a) Declare the following variables:

   - `x`, `y`, `z` – variables of type `double`  
   - `c` – variable of type `char`  

   b) Write a program fragment that:

   - reads `x` and `y` from the keyboard,  
   - computes `z = x / y;`,  
   - reads `c` from the keyboard,  
   - prints `z` and `c` on the screen.

---

17. **Task 3 – Constants**

   a) Declare a constant of type `char` that stores the character `'+'`.  

   b) Declare a constant of type `string` named `Message` with the value `"STOP"`. (You may assume that the `string` type is available.)  

   c) Write a short program fragment that prints both constants on the screen.

---

## Variant 5

### Part 1: Multiple-choice questions

1. **Which of the following declarations correctly uses `typedef` in C++?**  
   A) `typedef intreg int;`  
   B) `typedef int intreg;`  
   C) `int typedef intreg;`  
   D) `typedef int; intreg;`  

2. **After the declarations `typedef int T4; typedef int T5;`, how are the types `int`, `T4`, and `T5` related?**  
   A) They are all different types.  
   B) `T4` and `T5` are identical, but different from `int`.  
   C) All three are identical types.  
   D) Only `T4` is identical to `int`.  

3. **Which of the following values can a variable of type `bool` take in C++?**  
   A) Only `0`  
   B) Only `1`  
   C) Any integer value  
   D) `true` or `false`  

4. **Which constant below has type `char`?**  
   A) `'*'`  
   B) `"*"`  
   C) `42`  
   D) `false`  

5. **Which of the following is a valid declaration of several variables of the same type in C++?**  
   A) `int a, b, c;`  
   B) `int a; b; c;`  
   C) `a, b, c int;`  
   D) `int (a, b), c;`  

6. **What is the result of the logical expression `!false || (false && true)`?**  
   A) `true`  
   B) `false`  
   C) `0`  
   D) It is a compilation error.  

7. **Which of the following describes a constant in C++?**  
   A) A named quantity whose value may change during program execution  
   B) A named quantity whose value cannot change during program execution  
   C) Any integer literal  
   D) Any variable of type `int`  

8. **Which of the following declarations correctly describes a constant named `Pi` of type `float` with value `3.14`?**  
   A) `const float Pi = 3.14;`  
   B) `float const Pi;`  
   C) `float Pi = const 3.14;`  
   D) `constant float Pi = 3.14;`  

---

### Part 2: True / False questions

9. The ordinal number of an `int` value is the value itself.  

10. When an integer value is assigned to a `bool` variable, `0` becomes `false` and any non-zero value becomes `true`.  

11. Relational operators like `<` and `==` can be applied to values of any ordinal type (such as `int`, `char`, or `enum`).  

12. The `void` type can be used for a function that has no parameters and no return value.  

13. In C++, the expression `Green < Violet` is evaluated by comparing the names of the enumerators alphabetically.  

14. The `char` type in C++ is actually an integer type represented by one byte.  

---

### Part 3: Coding / written tasks

15. **Task 1 – Data types**

   a) Write a small C++ program that:

   - declares variables `int a; float b; bool c; char d;`,  
   - assigns sample values to each variable,  
   - prints the values of all four variables on the screen.

   b) Add instructions that cast `char d` to `int` and `bool c` to `int` and print these integer values.  
      Explain what integer values you expect for `d` and for `c`.

---

16. **Task 2 – Variables**

   a) Declare an anonymous enumerated type with the days of the week:

   ```cpp
   enum {M, Tu, W, Th, F, Sa, Su} day;
   ```

   b) Write a program fragment that assigns the value `W` to `day` and prints its ordinal number.

---

17. **Task 3 – Constants**

   a) Declare a constant named `PageLength` of type `int` with value `40`.  

   b) Declare a constant named `CharacterCount` of type `int` with value `60`.  

   c) Explain in a short comment how such constants can improve the readability of a program.

---

# Answer Key (Summary)

## Variant 1

**Part 1 (MC):**  
1. B  
2. B  
3. D  
4. A  
5. B  
6. A  
7. B  
8. D  

**Part 2 (T/F):**  
9. T  
10. F  
11. F  
12. T  
13. T  
14. F  

**Part 3 (coding – sample ideas):**  
15.  
- `-301` → `int`  
- `-301.0` → `float` / real  
- `3.14` → `float` / real  
- `0314` → `int` (octal)  
- `%` only for integers, so `5 % 2.0` invalid.  

16. Declarations: `int a, b, c; float p, q;` etc., simple sum and `cout`.  

17. `const int g = 9; const float pi = 3.14; const int r = 5; float S = pi * r * r;`  

---

## Variant 2

**Part 1 (MC):**  
1. B  
2. A  
3. D  
4. B  
5. C  
6. C  
7. B  
8. B  

**Part 2 (T/F):**  
9. T  
10. F  
11. F  
12. T  
13. T  
14. F  

**Part 3 (coding – sample ideas):**  
15. Types: `int`, `float`, `bool`, explanation of their value sets.  

16. `double` or `float` variables, rectangle area.  

17. `const int MaxStudents = 30; const int MinGrade = 5;` etc.  

---

## Variant 3

**Part 1 (MC):**  
1. B  
2. B  
3. B  
4. B  
5. B  
6. B  
7. C  
8. B  

**Part 2 (T/F):**  
9. T  
10. T  
11. F  
12. T  
13. T  
14. F  

**Part 3 (coding – sample ideas):**  
15. Types: `int`, `float`, `char`, `bool`; explanation of approximation.  

16. `typedef int intreg; intreg x1, i, t1;` etc.  

17. Use `<limits>` and `INT_MAX`.  

---

## Variant 4

**Part 1 (MC):**  
1. A  
2. B  
3. C  
4. C  
5. A  
6. C  
7. B  
8. B  

**Part 2 (T/F):**  
9. T  
10. F  
11. T  
12. F  
13. T  
14. F  

**Part 3 (coding – sample ideas):**  
15. `enum Education {Elementary = 1, Secondary, Higher};` etc.  

16. Declarations with `double` and `char`, input and output.  

17. `const char Plus = '+'; const string Message = "STOP";` etc.  

---

## Variant 5

**Part 1 (MC):**  
1. B  
2. C  
3. D  
4. A  
5. A  
6. A  
7. B  
8. A  

**Part 2 (T/F):**  
9. T  
10. T  
11. T  
12. T  
13. F  
14. T  

**Part 3 (coding – sample ideas):**  
15. Program that declares `int`, `float`, `bool`, `char`, assigns values, prints them, and also prints the integer values obtained from `char` and `bool`.  

16. Anonymous `enum` days of week, assignment and cast to `int`.  

17. `const int PageLength = 40; const int CharacterCount = 60;` etc.
