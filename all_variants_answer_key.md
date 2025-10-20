# Comprehensive Answer Key - All 5 Exam Variants
**Grade:** 11th  
**Duration:** 35 minutes each

---

## Variant 1 Answers

### Theory Questions:
1. **b) char[]** - Character arrays store sequences of characters
2. **b) 0** - C++ arrays use zero-based indexing
3. **b) getline()** - Reads strings with spaces, unlike cin >>
4. **b) Composite data** - Names are strings, which are composite data types
5. **b) int array[3][4];** - Correct syntax for 2D array declaration

### Programming Task Solutions:

**Task A: Display Even Numbers**
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[6];
    
    cout << "Enter 6 integers: ";
    for(int i = 0; i < 6; i++) {
        cin >> arr[i];
    }
    
    cout << "Even numbers: ";
    for(int i = 0; i < 6; i++) {
        if(arr[i] % 2 == 0) {
            cout << arr[i] << " ";
        }
    }
    
    return 0;
}
```

**Task B: Count 'a' Letters**
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    int count = 0;
    
    cout << "Enter a string: ";
    getline(cin, str);
    
    for(int i = 0; i < str.length(); i++) {
        if(tolower(str[i]) == 'a') {
            count++;
        }
    }
    
    cout << "Letter 'a' appears " << count << " times" << endl;
    return 0;
}
```

**Task C: Row Sums in 2x3 Matrix**
```cpp
#include <iostream>
using namespace std;

int main() {
    int matrix[2][3];
    
    cout << "Enter 2x3 matrix values:" << endl;
    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 3; j++) {
            cin >> matrix[i][j];
        }
    }
    
    for(int i = 0; i < 2; i++) {
        int sum = 0;
        for(int j = 0; j < 3; j++) {
            sum += matrix[i][j];
        }
        cout << "Row " << i+1 << " sum: " << sum << endl;
    }
    
    return 0;
}
```

---

## Variant 2 Answers

### Theory Questions:
1. **c) string** - String is a composite data type
2. **c) '\0'** - Null character terminates C-style strings
3. **a) Concatenation with +** - String type supports + operator
4. **b) One-dimensional array** - Monthly data fits 1D array structure
5. **a) int arr[] = {1,2,3};** - Correct array initialization

### Programming Task Solutions:

**Task A: Find Smallest Value**
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[7];
    
    cout << "Enter 7 numbers: ";
    for(int i = 0; i < 7; i++) {
        cin >> arr[i];
    }
    
    int min = arr[0];
    for(int i = 1; i < 7; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    
    cout << "Smallest value: " << min << endl;
    return 0;
}
```

**Task B: Replace Vowels with ***
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string sentence;
    
    cout << "Enter a sentence: ";
    getline(cin, sentence);
    
    for(int i = 0; i < sentence.length(); i++) {
        char c = tolower(sentence[i]);
        if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            sentence[i] = '*';
        }
    }
    
    cout << "Modified: " << sentence << endl;
    return 0;
}
```

**Task C: Secondary Diagonal Sum**
```cpp
#include <iostream>
using namespace std;

int main() {
    int matrix[4][4];
    
    cout << "Enter 4x4 matrix:" << endl;
    for(int i = 0; i < 4; i++) {
        for(int j = 0; j < 4; j++) {
            cin >> matrix[i][j];
        }
    }
    
    int sum = 0;
    for(int i = 0; i < 4; i++) {
        sum += matrix[i][3-i];
    }
    
    cout << "Secondary diagonal sum: " << sum << endl;
    return 0;
}
```

---

## Variant 3 Answers

### Theory Questions:
1. **c) Multiple values of the same type** - Arrays store homogeneous data
2. **c) Automatic memory management** - String handles memory automatically
3. **b) Two-dimensional array** - Chess board is 8x8 grid
4. **c) It may cause undefined behavior** - Array bounds violation
5. **b) <string>** - Required for string type

### Programming Task Solutions:

**Task A: Reverse Display**
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[8];
    
    cout << "Enter 8 integers: ";
    for(int i = 0; i < 8; i++) {
        cin >> arr[i];
    }
    
    cout << "Reversed: ";
    for(int i = 7; i >= 0; i--) {
        cout << arr[i] << " ";
    }
    
    return 0;
}
```

**Task B: Palindrome Check**
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string word;
    
    cout << "Enter a word: ";
    cin >> word;
    
    bool isPalindrome = true;
    int len = word.length();
    for(int i = 0; i < len/2; i++) {
