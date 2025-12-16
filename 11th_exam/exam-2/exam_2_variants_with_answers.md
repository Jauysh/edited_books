# 11th Grade Informatics – Exam 2 (Records, Sets, Files)  
All Variants with Answers

Topics covered (only from the specified textbook part):

- Records / `struct` (P85, P86)
- Sets represented by arrays and intersection (P87)
- Files and text files, sequential access (P90–P97)
- **Characteristic vectors and Sieve of Eratosthenes are excluded**

Each variant has:

- Part 1: 8 multiple-choice questions (MC)
- Part 2: 6 True / False questions (T/F)
- Part 3: 3 coding / written tasks

---

## Variant 1

### Part 1: Multiple-choice Questions (8)

1. **What is a record (struct) in C++?**  
   a) A data type that stores only numbers of the same type in consecutive memory cells  
   b) A data type that groups several fields, which may have different data types, under one name  
   c) A special type of file used to store text data on disk  
   d) A function that reads a line of text from the keyboard  

   **Answer:** b)

2. **Which of the following correctly defines the struct `Elev` as in the textbook examples?**  
   a) `struct Elev { string Nume; string Prenume; float NotaMedie; };`  
   b) `struct Elev { char Nume[20]; char Prenume[30]; float NotaMedie; };`  
   c) `struct Elev ( char Nume[20], char Prenume[30], float NotaMedie );`  
   d) `Elev struct { char Nume[20]; char Prenume[30]; float NotaMedie; };`  

   **Answer:** b)

3. **Given `typedef Elev ListaElevilor[40]; ListaElevilor LE;` what is the type of `LE[3].NotaMedie`?**  
   a) `Elev`  
   b) `int`  
   c) `float`  
   d) `string`  

   **Answer:** c)

4. **How is a set `A` of at most 20 integers usually represented in C++ as in the textbook?**  
   a) `int A;`  
   b) `int A[20];` and a separate `int nA` for the current number of elements  
   c) `bool A[20];` without any additional variables  
   d) `char A[20];`  

   **Answer:** b)

5. **In Program P87 (intersection of sets A and B), consider the following fragment:**  

```cpp
int A[20], B[20], C[20];
int nA, nB, nC;
bool Found;
for (i = 0; i < nA; i++) {
  Found = false;
  for (j = 0; j < nB; j++)
    if (A[i] == B[j]) Found = true;
  if (Found) { C[nC] = A[i]; nC++; }
}
```

**What does the array `C` represent?**  
   a) The union of A and B  
   b) The difference A − B  
   c) The intersection of A and B (elements that appear in both sets)  
   d) The symmetric difference of A and B  

   **Answer:** c)

6. **In the intersection algorithm with arrays, what is the purpose of the boolean variable `Found`?**  
   a) To count how many elements are in set A  
   b) To indicate whether an element of A is found in B  
   c) To store the result of the intersection  
   d) To indicate that reading input has finished  

   **Answer:** b)

7. **Which header must be included in a C++ program to work with files using `ifstream` and `ofstream`?**  
   a) `#include <iostream>`  
   b) `#include <fstream>`  
   c) `#include <cstring>`  
   d) `#include <cmath>`  

   **Answer:** b)

8. **What does the function `eof()` used with a file stream (for example `f.eof()`) indicate?**  
   a) It returns true if the end of the file has been reached during reading  
   b) It returns the number of lines in the file  
   c) It closes the file  
   d) It erases the content of the file  

   **Answer:** a)

---

### Part 2: True / False (6)

1. In C++, the fields of a record (struct) can be of different data types.  
   **Answer:** True

2. If two variables belong to the same record type, an assignment such as `E1 = E2` copies all corresponding fields.  
   **Answer:** True

3. In the intersection program P87, the array `A` stores the elements of set B and the array `B` stores the elements of set A.  
   **Answer:** False

4. In order to compute the intersection of two sets A and B represented by arrays, we must compare each element of A with all elements of B.  
   **Answer:** True

5. A text file in C++ consists of characters organized into lines, and the end of each line is marked by an EOL (end-of-line) element.  
   **Answer:** True

6. When opening a file using `ofstream` with the name of an existing file, the old content of that file is always preserved and new data is appended at the end.  
   **Answer:** False

---

### Part 3: Coding / Written Tasks (3) – Choose 2 out of 3

1. **Program similar to P85 – Student with highest average grade**  
   Write a C++ program that defines the struct `Elev` with fields:  
   - `char Nume[20];`  
   - `char Prenume[30];`  
   - `float NotaMedie;`  

   The program should:  
   1. Declare three variables `E1`, `E2`, `E3` of type `Elev`.  
   2. Read from the keyboard the last name, first name, and average grade of two students `E1` and `E2`.  
   3. Compare the average grades and assign to `E3` the student with the higher average grade.  
   4. Display on the screen the data of `E3` (last name, first name, average grade).

   **Answer outline:**  
   - Correct `struct Elev` definition (as above).  
   - Use `cin >>` to read `Nume`, `Prenume`, `NotaMedie` for `E1` and `E2`.  
   - `if (E1.NotaMedie > E2.NotaMedie) E3 = E1; else E3 = E2;`  
   - `cout << E3.Nume << ' ' << E3.Prenume << ' ' << E3.NotaMedie;`

2. **Program similar to P87 – Intersection of two sets of integers**  
   Write a C++ program that reads two sets A and B of integers, each with at most 20 elements, and computes their intersection C = A ∩ B.

   **Key requirements:**  
   - Arrays: `int A[20], B[20], C[20];` and `int nA, nB, nC;`  
   - Read `nA` and then `A[0..nA-1]`; read `nB` and then `B[0..nB-1]`.  
   - For each `A[i]`, search through all `B[j]` using a boolean `Found`.  
   - If `Found` is true, assign `C[nC] = A[i]; nC++;`  
   - At the end, print `nC` and all `C[0..nC-1]`.

   **Answer outline:**  
   - Correct nested loops as in P87.  
   - Initialization `nC = 0;` and `Found = false` for each `i`.  
   - Correct printing of count and elements.

3. **Program similar to P90–P91 – Write and read student data from a file**  
   Write a C++ program that uses a text file to store student data.

   **Key requirements:**  
   - `struct elev { char nume[15]; char prenume[20]; float NotaMedie; };`  
   - Read `n`, then arrays of students into `e[i]`.  
   - Open `ofstream f("elevi11.in");` and write each student on a line.  
   - Close, then `ifstream f("elevi11.in");` and read/print until `f.eof()`.

   **Answer outline:**  
   - Use `<fstream>`, `ofstream` and `ifstream`.  
   - Use `f << e[i].nume << ' ' << e[i].prenume << ' ' << e[i].NotaMedie << endl;`  
   - Loop with `while (!f.eof())` to print all records.

---

## Variant 2

### Part 1: Multiple-choice Questions (8)

1. **Which of the following expressions correctly accesses the x-coordinate of point A of triangle T1, if we have `struct Punct { double x; double y; };` and `struct Triunghi { Punct A; Punct B; Punct C; }; Triunghi T1;`**  
   a) `T1.A.x`  
   b) `T1.x.A`  
   c) `A.T1.x`  
   d) `T1.A[x]`  

   **Answer:** a)

2. **Given the declaration `struct Elev { char Nume[20]; char Prenume[30]; float NotaMedie; }; Elev E1, E2;` which statement is correct?**  
   a) `E1` and `E2` can be compared directly using the `>` operator  
   b) `E1 = E2;` copies all fields of `E2` into the corresponding fields of `E1`  
   c) `E1 = E2;` is illegal in C++  
   d) `E1.NotaMedie` is a variable of type `int`  

   **Answer:** b)

3. **What is the main difference between an array and a record (struct)?**  
   a) An array can contain elements of different types, while a record contains elements of the same type  
   b) An array can only contain integers, while a record can contain any type  
   c) A record can contain fields of different types, while an array contains elements of the same type  
   d) There is no difference; they are identical  

   **Answer:** c)

4. **In representing sets with arrays, what does the variable `nA` usually store?**  
   a) The maximum capacity of the array A  
   b) The current number of elements stored in set A  
   c) The last element of set A  
   d) The sum of elements in set A  

   **Answer:** b)

5. **Which pair of declarations is suitable for representing a set B of up to 20 integers and its current size?**  
   a) `int B; int nB;`  
   b) `int B[20]; char nB;`  
   c) `int B[20]; int nB;`  
   d) `char B[20]; int n;`  

   **Answer:** c)

6. **In the intersection algorithm (P87) for sets A and B represented as arrays**

```cpp
int A[20], B[20], C[20];
int nA, nB, nC;
```

**Where are the elements of the intersection stored?**  
   a) In the array A  
   b) In the array B  
   c) In the array C  
   d) In the variable `Found`  
6. **In the intersection algorithm (P87) for sets A and B represented as arrays**

```cpp
int A[20], B[20], C[20];
int nA, nB, nC;
```

**Where are the elements of the intersection stored?**  
   a) In the array A  
   b) In the array B  
   c) In the array C  
   d) In the variable `Found`  

   **Answer:** c)

7. **Which of the following correctly opens a file `"data.txt"` for reading in C++?**  
   a) `ifstream f("data.txt");`  
   b) `ofstream f("data.txt");`  
   c) `open f("data.txt");`  
   d) `file f << "data.txt";`  

   **Answer:** a)

8. **In Program P93 (Creating a text file), consider the fragment:**  

```cpp
// Program P93
// Creating a text file
...
char c;
while (cin.get(c))
  f << c;
```

**Which function is used to read characters from the keyboard (including new lines) and write them to a text file?**  
   a) `cin >> c;`  
   b) `cin.get(c);`  
   c) `getline(cin, c);`  
   d) `scanf("%c", &c);`  
8. **In Program P93 (Creating a text file), consider the fragment:**  

```cpp
// Program P93
// Creating a text file
...
char c;
while (cin.get(c))
  f << c;
```

**Which function is used to read characters from the keyboard (including new lines) and write them to a text file?**  
   a) `cin >> c;`  
   b) `cin.get(c);`  
   c) `getline(cin, c);`  
   d) `scanf("%c", &c);`  

   **Answer:** b)

---

### Part 2: True / False (6)

1. In a record (struct), each field has its own name (identifier) and its own type.  
   **Answer:** True

2. If we declare `Punct P1, P2;` then the assignment `P1 = P2;` will copy both x and y coordinates from `P2` to `P1`.  
   **Answer:** True

3. When computing the intersection of two sets represented as arrays, we never need nested loops.  
   **Answer:** False

4. In program P87, the variable `nC` represents the current number of elements in the intersection set C.  
   **Answer:** True

5. A sequential-access file can be processed only in the order in which its components appear in the file.  
   **Answer:** True

6. In C++, the same logical file (stream variable) can never be associated with more than one external file during program execution.  
   **Answer:** False

---

### Part 3: Coding / Written Tasks (3) – Choose 2 out of 3

1. **Program similar to P86 – Find student with highest average in a list**

   **Answer outline:**  
   - Define `struct Elev` with `Nume`, `Prenume`, `NotaMedie`.  
   - `typedef Elev ListaElevilor[40];` and declare `ListaElevilor LE;`  
   - Read `n` and then all `LE[i]`.  
   - Initialize a variable `Elev E; E.NotaMedie = 0;` or similar.  
   - Loop through array, update `E` when `LE[i].NotaMedie` is higher.  
   - Print `E.Nume`, `E.Prenume`, `E.NotaMedie`.

2. **Program similar to P87 – Elements in A but not in B (with given arrays)**

   Consider the sets A and B of integers represented by the arrays:

   ```cpp
   int A[] = {2, 4, 6, 8};
   int B[] = {4, 8, 10, 12};
   ```

   Let `nA` and `nB` be the numbers of elements of A and B respectively.

   **Task:**  
   Write a C++ program that uses arrays `A`, `B` and an array `D` to determine the set `D` of elements that belong to A but do not belong to B, using a boolean variable `Found` as in the intersection algorithm from Program P87.

   **Answer outline:**  
   - Declare `int A[] = {2,4,6,8}; int B[] = {4,8,10,12}; int D[20]; int nA = 4, nB = 4, nD = 0;`.  
   - For each `A[i]`, set `Found = false;` loop over `B[j]`; if `A[i] == B[j]`, set `Found = true;`.  
   - If `Found` is still false at the end of the inner loop, store `A[i]` in `D[nD]` and increment `nD`.  
   - Print `nD` and elements of `D`.

3. **Program similar to P95 – Copy text from one file to another**

   **Answer outline:**  
   - `ifstream f("in11.txt"); ofstream g("out11.txt");`  
   - `char c; f.get(c);`  
   - `while (!f.eof()) { g.put(c); f.get(c); }`  
   - Close both streams.

---

## Variant 3

### Part 1: Multiple-choice Questions (8)

1. **Which of the following correctly declares two variables `P1` and `P2` of type `Punct`, where `Punct` is a struct with fields x and y?**  
   a) `struct Punct { double x; double y; }; Punct P1, P2;`  
   b) `struct { double x; double y; } P1, P2, Punct;`  
   c) `Punct struct { double x; double y; }; P1, P2;`  
   d) `struct Punct (double x, double y); P1, P2;`  

   **Answer:** a)

2. **Given `Triunghi T1;` where `struct Triunghi { Punct A; Punct B; Punct C; };` which expression is of type `Punct`?**  
   a) `T1`  
   b) `T1.A`  
   c) `T1.A.x`  
   d) `T1.A.x + T1.A.y`  

   **Answer:** b)

3. **Which of the following expressions has type `double`, if `Punct P1;` where `struct Punct { double x; double y; };`?**  
   a) `P1`  
   b) `P1.x`  
   c) `P1 + 1`  
   d) `P1.y = 3`  

   **Answer:** b)

4. **To represent a set of up to 7 days of the week using `enum Zi {L, Ma, Mi, J, V, S, D};` which declaration is appropriate?**  
   a) `Zi Z;`  
   b) `Zi Z[7];` and an `int nZ` for the current number of elements  
   c) `int Z[7];` and no additional variables  
   d) `bool Z;`  

   **Answer:** b)

5. **What does the following loop fragment from Program P87 do?**  

   ```cpp
   for (i = 0; i < nA; i++) {
     Found = false;
     for (j = 0; j < nB; j++)
       if (A[i] == B[j]) Found = true;
     if (Found) { C[nC] = A[i]; nC++; }
   }
   ```  

   a) It copies all elements of B into C  
   b) It deletes all elements of A that are not in B  
   c) It builds the intersection of sets A and B in array C  
   d) It checks if sets A and B are equal  

   **Answer:** c)

6. **Why do we need three arrays A, B, C in the intersection program?**  
   a) A for input, B for output, C for temporary data  
   b) A and B to store the two input sets, C to store the intersection set  
   c) A and B are not used, only C is used  
   d) To waste memory  

   **Answer:** b)

7. **Program P90 (Creating a file containing student data) includes the line:**  

```cpp
ofstream f("elevi.in");
```

**Which stream is associated with the external file containing student data?**  
   a) `cin`  
   b) `cout`  
   c) `f` (from `ofstream f("elevi.in");`)  
   d) `e` (struct variable)  

   **Answer:** c)

8. **Which of the following is true about text files in C++?**  
   a) They contain only numbers separated by spaces  
   b) They consist of characters arranged in lines of variable length  
   c) They cannot be processed sequentially  
   d) They always have fixed-length records  

   **Answer:** b)

---

### Part 2: True / False (6)

1. In C++, you can define a struct type inside the `main()` function, as in Program P85.  
   **Answer:** True

2. In a struct `Elev`, the field `E1.NotaMedie` is accessed using the arrow operator (`->`) when `E1` is not a pointer.  
   **Answer:** False

3. When reading the elements of a set represented by an array, we typically use a `for` loop from index 0 up to `n-1`.  
   **Answer:** True

4. In the intersection program, after the algorithm finishes, `nC` gives the current number of elements in set C.  
   **Answer:** True

5. In Program P91, the data is read from the file `"elevi.in"` until `eof()` indicates that the end of the file has been reached.  
   **Answer:** True

6. After closing a file using `f.close()`, it is impossible to open the same external file again during the same program run.  
   **Answer:** False

---

### Part 3: Coding / Written Tasks (3) – Choose 2 out of 3
### Part 3: Coding / Written Tasks (3) – Choose 2 out of 3

1. **Program similar to P85 – Compare two students**

   **Answer outline:**  
   - Define `struct Elev { char Nume[20]; char Prenume[30]; float NotaMedie; };`.  
   - Declare `Elev E1, E2;`.  
   - Read from the keyboard the last name, first name and average grade for `E1` and `E2`.  
   - Use `if (E1.NotaMedie > E2.NotaMedie)` to decide which student has the higher average grade and print that student’s data.

2. **Program – Count common elements of two sets (with given arrays)**

   Consider the sets A and B of integers:

   ```cpp
   int A[] = {1, 2, 3, 4};
   int B[] = {3, 4, 5, 6};
   ```

   **Task:**  
   Write a C++ program that uses arrays `A`, `B` and a counter to determine how many elements appear in both A and B, using a nested loop as in the intersection algorithm.

   **Answer outline:**  
   - Declare `int A[] = {1,2,3,4}; int B[] = {3,4,5,6}; int nA = 4, nB = 4; int count = 0;`.  
   - For each `A[i]`, loop over all `B[j]`; if `A[i] == B[j]`, increment `count` and optionally break the inner loop.  
   - Print `count`.

3. **Program – Read and print a text file line by line**

   **Answer outline:**  
   - `ifstream f("text11.in");`  
   - `char linie[80];`  
   - Use loop: `while (!f.eof()) { f.getline(linie, 80); cout << linie << endl; }`  
   - Close the file.

---

## Variant 4

### Part 1: Multiple-choice Questions (8)

1. **Which of the following best describes a field of a record?**  
   a) A single character from a text file  
   b) An individual component of a record, having its own name and type  
   c) A separate program that processes records  
   d) A fixed-length array of integers  

   **Answer:** b)

2. **Given `struct Elev { char Nume[20]; char Prenume[30]; float NotaMedie; }; Elev V[40];` what does `V[0].Nume` represent?**  
   a) The type of the student list  
   b) The first student in the list  
   c) The last name (family name) of the first student in the list  
   d) The average grade of the first student in the list  

   **Answer:** c)

3. **Which of the following operations is valid for two variables `P1` and `P2` of type `Punct`, where `struct Punct { double x; double y; };`?**  
   a) `if (P1 > P2) cout << "P1";`  
   b) `P1 = P2;`  
   c) `P1 + P2;`  
   d) `P1 / P2;`  

   **Answer:** b)

4. **Which of the following describes a set A represented in C++ as `int A[20]; int nA;`?**  
   a) A is a fixed-size sequence of characters  
   b) A is a set of at most 20 integers and `nA` is the current number of elements in the set  
   c) A is a set of at most 20 doubles and `nA` is always equal to 20  
   d) A is a matrix with 20 rows and `nA` columns  

   **Answer:** b)

5. **In the intersection algorithm, why is the variable `nC` initialized to 0 before the loop?**  
   a) Because C already contains all elements of A  
   b) To indicate that initially the intersection set C is empty  
   c) Because C has no memory allocated  
   d) Because `nC` stores the number of elements of A  

   **Answer:** b)

6. **In Program P87 (intersection of sets A and B), consider the fragment:**  

```cpp
for (i = 0; i < nA; i++) {
  Found = false;
  for (j = 0; j < nB; j++)
    if (A[i] == B[j]) Found = true;
  if (Found) { C[nC] = A[i]; nC++; }
}
```

**What is the meaning of the condition `if (A[i] == B[j])`?**  
   a) It checks whether the sets A and B have the same number of elements  
   b) It checks whether the element `A[i]` is equal to the element `B[j]`  
   c) It checks whether the index `i` is equal to `j`  
   d) It checks whether A is a subset of B  

   **Answer:** b)

7. **Which of the following correctly creates an output file stream associated with the file `"result.out"`?**  
   a) `ifstream f("result.out");`  
   b) `ofstream f("result.out");`  
   c) `file f = "result.out";`  
   d) `open("result.out", f);`  

   **Answer:** b)

8. **In text files, what does the EOL (end-of-line) element represent?**  
   a) The end of the entire file  
   b) The end of a line of text  
   c) The beginning of a new program  
   d) The end of a numeric constant  

   **Answer:** b)

---

### Part 2: True / False (6)

1. The dot operator (.) is used to access the fields of a struct variable in C++.  
   **Answer:** True

2. In an array of records `V[40]` of type `Elev`, the expression `V[3].NotaMedie` accesses the average grade of the 4th student.  
   **Answer:** True

3. When computing the intersection of two sets, the order of elements in the resulting set C is important.  
   **Answer:** False

4. The intersection set of A and B contains only those elements that appear in both A and B.  
   **Answer:** True

5. When opening an output file with `ofstream`, if the file does not exist, it will be created.  
   **Answer:** True

6. The operator `>>` used with file streams automatically ignores whitespace when reading numbers and strings separated by spaces or line breaks.  
   **Answer:** True

---

### Part 3: Coding / Written Tasks (3)

1. **Program – Read and display a list of students**

   **Answer outline:**  
   - Define `struct Elev` and an array `Elev V[40];`  
   - Read `n`, then for each i read `V[i].Nume`, `V[i].Prenume`, `V[i].NotaMedie`.  
   - Print each student on its own line.

2. **Program – Union of two sets without duplicates (with given arrays)**

   Consider the sets A and B of integers:

   ```cpp
   int A[] = {1, 2, 3, 4};
   int B[] = {3, 4, 5, 6};
   ```

   **Answer outline:**  
   - Declare `int A[] = {1,2,3,4}; int B[] = {3,4,5,6}; int U[40]; int nA = 4, nB = 4, nU = 0;`.  
   - First copy all elements of A into U and set `nU = nA`.  
   - Then for each `B[j]`, check (with a loop and a `Found` boolean) whether it is already in `U`; if not, add it to `U[nU]` and increment `nU`.  
   - Print `nU` and all elements of `U`.

3. **Program – Create a text file with user input (similar to P93)**

   **Answer outline:**  
   - Ask for file name, e.g. into `char nume_fisier[80]; cin.getline(nume_fisier,80);`  
   - `ofstream f(nume_fisier);`  
   - Use `char c;` and `while (cin.get(c)) f << c;`  
   - Close file.

---

## Variant 5

### Part 1: Multiple-choice Questions (8)

1. **Which of the following is a correct way to declare a typedef for an array of 40 `Elev` records named `ListaElevilor`?**  
   a) `typedef Elev ListaElevilor[40];`  
   b) `typedef ListaElevilor[40] Elev;`  
   c) `ListaElevilor typedef Elev[40];`  
   d) `typedef Elev[40] ListaElevilor();`  

   **Answer:** a)

2. **After the declaration `typedef Elev ListaElevilor[40]; ListaElevilor LE;` which of the following is true?**  
   a) LE is a single variable of type `Elev`  
   b) LE is an array of 40 variables of type `Elev`  
   c) LE is a pointer to `Elev`  
   d) LE is an integer variable  

   **Answer:** b)

3. **Given `struct Elev { char Nume[20]; char Prenume[30]; float NotaMedie; };` which expression is of type `char[20]`?**  
   a) `Elev`  
   b) `E.NotaMedie`  
   c) `E.Nume`  
   d) `E.Prenume[0]`  

   **Answer:** c)

4. **Why is it necessary to use a separate variable (such as `nA`) when representing a set as an array?**  
   a) Because the array cannot be declared without it  
   b) Because `nA` stores the index of the last element only  
   c) Because it stores the current number of valid elements in the set  
   d) Because arrays can never be full  

   **Answer:** c)

5. **In a program that computes the intersection of A and B, what happens if we forget to initialize `nC = 0` at the beginning?**  
   a) The program will not compile  
   b) The program will always output an empty intersection  
   c) The program may use an undefined initial value for `nC` and produce incorrect results  
   d) The program will automatically set `nC` to the size of A  

   **Answer:** c)

6. **Program P87 (intersection of sets A and B) uses the following idea:**  

```cpp
for (i = 0; i < nA; i++) {
  Found = false;
  for (j = 0; j < nB; j++)
    if (A[i] == B[j]) Found = true;
  if (Found) { C[nC] = A[i]; nC++; }
}
```

**Which algorithmic idea is used here to compute the intersection of two sets represented by arrays?**  
   a) For each element of A, search linearly in B to see if it appears there  
   b) For each element of B, search linearly in A to see if it appears there; then take the first one  
   c) Sort both arrays and then merge them  
   d) Use random numbers to guess the common elements  

   **Answer:** a)

7. **Which of the following correctly writes three values `x`, `y`, `z` to a text file using an `ofstream f`?**  
   a) `f >> x >> y >> z;`  
   b) `f << x << " " << y << " " << z << std::endl;`  
   c) `write(f, x, y, z);`  
   d) `f.write(x, y, z);`  

   **Answer:** b)

8. **Which of the following describes line-level processing of a text file?**  
   a) Reading character by character using `get()`  
   b) Reading numbers and strings grouped as lexemes  
   c) Reading each line into a string or character array using `getline`  
   d) Reading the entire file as a single string  

   **Answer:** c)

---

### Part 2: True / False (6)

1. A struct type can be used as a field type within another struct (nested structures).  
   **Answer:** True

2. The expression `LE[3].Nume` refers to the entire character array that stores the last name of the 4th student in the list `LE`.  
   **Answer:** True

3. In an array representation of a set, it is allowed to store duplicate elements in the same set.  
   **Answer:** False

4. The intersection set C of A and B is always a subset of both A and B.  
   **Answer:** True

5. When reading data from a text file using the operator `>>`, whitespace characters (spaces, tabs, end-of-line) are ignored between numbers and words.  
   **Answer:** True

6. To process a text file line by line, we can use a loop with `f.getline(linie, 80)` until `f.eof()` becomes true.  
   **Answer:** True

---

### Part 3: Coding / Written Tasks (3)

1. **Program – Copy the best student from a list**

   **Answer outline:**  
   - Same `struct Elev` as before.  
   - Array `Elev V[40];` and a variable `Elev Best;`  
   - Read `n` and all students.  
   - Initialize `Best` as first student or with `Best.NotaMedie = 0;`.  
   - Loop through `V`, update `Best` when a higher `NotaMedie` is found (`Best = V[i];`).  
   - Print `Best`.

2. **Program – Check if one set is included in another (with given arrays)**

   Consider the sets A and B of integers:

   ```cpp
   int A[] = {1, 2, 3};
   int B[] = {0, 1, 2, 3, 4};
   ```

   **Answer outline:**  
   - Declare `int A[] = {1,2,3}; int B[] = {0,1,2,3,4}; int nA = 3, nB = 5;`.  
   - For each `A[i]`, set `Found = false`, scan all `B[j]`; if `A[i] == B[j]`, set `Found = true`.  
   - If some `A[i]` has `Found` still false, print "A is NOT a subset of B" and stop.  
   - Otherwise print "A is a subset of B".

3. **Program similar to P93 – Create a text file from keyboard input**

   **Answer outline:**  
   - Ask the user for a file name (e.g. into `char nume_fisier[80];` and use `cin.getline`).  
   - Open the file for writing with `ofstream f(nume_fisier);`.  
   - Use `char c;` and a loop `while (cin.get(c)) f << c;`.  
   - Close the file at the end.

---

This markdown file now contains **all 5 variants** of the 11th Grade Exam 2, with **answers** (MC and T/F) and **solution outlines** for all coding tasks, matching the Google Forms script `exam_2_google_form_creator.js` and restricted strictly to records, sets via arrays and intersection, and files/text files.
