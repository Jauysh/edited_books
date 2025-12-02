/**
 * Google Apps Script to Create Grade 11 Social Group Exam
 * Based on: exam_for_google_form_11_social_group.md
 * 
 * INSTRUCTIONS:
 * 1. Open Google Drive (https://drive.google.com)
 * 2. Click "+ New" > "More" > "Google Apps Script"
 * 3. Delete any existing code
 * 4. Copy this entire script into the editor
 * 5. Save the project (Ctrl+S or Cmd+S)
 * 6. Click "Run" > "createExamForm"
 * 7. Authorize the script when prompted
 * 8. Check "View" > "Logs" (Ctrl+Enter) for the form URL
 * 
 * The script will create a Google Form with all 5 exam variants.
 */

function createExamForm() {
  // Create the form
  var form = FormApp.create('Grade 11 Social Group - Composite Data Types Exam');
  
  // Set form description
  form.setDescription(
    'Duration: 35 minutes\n' +
    'Difficulty: Easy–Medium (mostly easy)\n' +
    'Total Points: 40\n' +
    'Passing Score: 24 (60%)\n\n' +
    'This exam tests your knowledge of composite data types, arrays, and strings in C++.'
  );
  
  // Enable response collection
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setShowLinkToRespondAgain(false);
  
  // Add student information section
  form.addTextItem()
    .setTitle('Full Name')
    .setRequired(true);
  
  form.addTextItem()
    .setTitle('Class')
    .setRequired(true);
  
  // Add variant selection (students will be told which variant by teacher)
  form.addMultipleChoiceItem()
    .setTitle('Select Your Variant (as assigned by your teacher)')
    .setChoiceValues(['Variant 1', 'Variant 2', 'Variant 3', 'Variant 4', 'Variant 5'])
    .setRequired(true);
  
  // Add page break before variants begin
  form.addPageBreakItem()
    .setTitle('Important Instructions')
    .setHelpText(
      'Please complete ONLY the variant assigned to you by your teacher.\n\n' +
      'Each question is labeled with its variant (e.g., [V1-Q1], [V2-Q1]).\n\n' +
      'Answer all questions in your assigned variant carefully.'
    );
  
  // Create all 5 variants
  createVariant1(form);
  createVariant2(form);
  createVariant3(form);
  createVariant4(form);
  createVariant5(form);
  
  // Set up confirmation message
  form.setConfirmationMessage(
    'Thank you for completing the exam!\n\n' +
    'Your responses have been recorded.\n' +
    'Total Points: 40\n' +
    'Passing Score: 24 (60%)'
  );
  
  // Log the form URL
  Logger.log('Form created successfully!');
  Logger.log('Form URL: ' + form.getPublishedUrl());
  Logger.log('Edit URL: ' + form.getEditUrl());
  
  return form;
}

// ==================== VARIANT 1 ====================
function createVariant1(form) {
  form.addPageBreakItem().setTitle('VARIANT 1 - Section 1: Multiple Choice (10 points)');
  
  var mc1 = form.addMultipleChoiceItem();
  mc1.setTitle('[V1-Q1] What does the term "data type" mean?')
     .setChoiceValues([
       'a) A way to store information in computer memory',
       'b) A set of values and operations on them',
       'c) Only numeric data format',
       'd) A sorting method'
     ])
     .setPoints(1)
     .setRequired(true);
  
  var mc2 = form.addMultipleChoiceItem();
  mc2.setTitle('[V1-Q2] Which of the following is a SIMPLE data type?')
     .setChoiceValues(['a) Array', 'b) String', 'c) Integer', 'd) Record'])
     .setPoints(1)
     .setRequired(true);
  
  var mc3 = form.addMultipleChoiceItem();
  mc3.setTitle('[V1-Q3] Which data type is used to store a sequence of characters?')
     .setChoiceValues(['a) int', 'b) float', 'c) string', 'd) bool'])
     .setPoints(1)
     .setRequired(true);
  
  var mc4 = form.addMultipleChoiceItem();
  mc4.setTitle('[V1-Q4] What is an ARRAY?')
     .setChoiceValues([
       'a) A set of random numbers',
       'b) A collection of homogeneous data elements arranged sequentially',
       'c) A table with different data types',
       'd) Only a two-dimensional structure'
     ])
     .setPoints(1)
     .setRequired(true);
  
  var mc5 = form.addMultipleChoiceItem();
  mc5.setTitle('[V1-Q5] What is the index of the first element in an array in C++?')
     .setChoiceValues(['a) 1', 'b) 0', 'c) -1', 'd) Depends on the data type'])
     .setPoints(1)
     .setRequired(true);
  
  var mc6 = form.addMultipleChoiceItem();
  mc6.setTitle('[V1-Q6] Which data type is used to store truth values?')
     .setChoiceValues(['a) int', 'b) bool', 'c) char', 'd) string'])
     .setPoints(1)
     .setRequired(true);
  
  var mc7 = form.addMultipleChoiceItem();
  mc7.setTitle('[V1-Q7] What does the function strlen(S) do?')
     .setChoiceValues([
       'a) Compares two strings',
       'b) Returns the length of a string',
       'c) Copies a string',
       'd) Deletes a string'
     ])
     .setPoints(1)
     .setRequired(true);
  
  var mc8 = form.addMultipleChoiceItem();
  mc8.setTitle('[V1-Q8] Which symbol marks the end of a string in a character array?')
     .setChoiceValues(['a) \\n', 'b) \\0', 'c) \\t', 'd) \\\\'])
     .setPoints(1)
     .setRequired(true);
  
  var mc9 = form.addMultipleChoiceItem();
  mc9.setTitle('[V1-Q9] Which data type is used to store a set of values defined by identifiers?')
     .setChoiceValues(['a) enum', 'b) bool', 'c) string', 'd) float'])
     .setPoints(1)
     .setRequired(true);
  
  var mc10 = form.addMultipleChoiceItem();
  mc10.setTitle('[V1-Q10] What does the function strcat(S1, S2) do?')
      .setChoiceValues([
        'a) Compares strings',
        'b) Copies a string',
        'c) Concatenates strings',
        'd) Deletes a string'
      ])
      .setPoints(1)
      .setRequired(true);
  
  // Section 2: True/False
  form.addPageBreakItem().setTitle('VARIANT 1 - Section 2: True / False (5 points)');
  
  form.addMultipleChoiceItem()
      .setTitle('[V1-Q11] An array can contain elements of different data types.')
      .setChoiceValues(['True', 'False'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V1-Q12] A string of type "string" requires specifying the maximum length when declared.')
      .setChoiceValues(['True', 'False'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V1-Q13] In C++, array indices start from zero.')
      .setChoiceValues(['True', 'False'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V1-Q14] The "char" data type is used to store characters.')
      .setChoiceValues(['True', 'False'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V1-Q15] The cin.getline() function allows reading a string with spaces.')
      .setChoiceValues(['True', 'False'])
      .setPoints(1)
      .setRequired(true);
  
  // Section 3: Short Answer
  form.addPageBreakItem().setTitle('VARIANT 1 - Section 3: Short Answer (10 points)');
  
  form.addParagraphTextItem()
      .setTitle('[V1-Q16] Give two examples of SIMPLE data types. (2 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V1-Q17] Give two examples of COMPOSITE data types. (2 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V1-Q18] Explain the difference between simple and composite data types. (2 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V1-Q19] What is BUBBLE SORT and how does it work? (2 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V1-Q20] Which data type would you use to store monthly family electricity expenses? Explain why. (2 points)')
      .setRequired(true);
  
  // Section 4: Practical
  form.addPageBreakItem().setTitle('VARIANT 1 - Section 4: Practical (9 points)');
  
  form.addParagraphTextItem()
      .setTitle('[V1-Q21] Write a declaration of a one-dimensional array of 10 elements of type float. (3 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V1-Q22] Write a code fragment that reads 5 integers into an array and prints their sum. (3 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V1-Q23] Write a code fragment that combines two strings FirstName and LastName into one string FullName with a space between them. (3 points)')
      .setRequired(true);
  
  // Section 5: Bonus
  form.addPageBreakItem().setTitle('VARIANT 1 - Section 5: Bonus (5 points)');
  
  form.addParagraphTextItem()
      .setTitle('[V1-Q24] Write a program that reads a string and prints the number of spaces in it. Hint: use the string data type and a for loop. (5 points)')
      .setRequired(true);
}

// ==================== VARIANT 2 ====================
function createVariant2(form) {
  form.addPageBreakItem().setTitle('VARIANT 2 - Section 1: Multiple Choice (10 points)');
  
  form.addMultipleChoiceItem()
      .setTitle('[V2-Q1] Which of the following is a COMPOSITE data type?')
      .setChoiceValues(['a) int', 'b) float', 'c) array', 'd) bool'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V2-Q2] What does the term "composite data" mean?')
      .setChoiceValues([
        'a) Data formed by combining simple data',
        'b) Only numeric data',
        'c) A programming language',
        'd) A sorting algorithm'
      ])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V2-Q3] Which data type is used to store real numbers?')
      .setChoiceValues(['a) int', 'b) char', 'c) float', 'd) enum'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V2-Q4] What is the purpose of an index in an array?')
      .setChoiceValues([
        'a) To delete elements',
        'b) To access specific elements',
        'c) To sort the array',
        'd) To count elements'
      ])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V2-Q5] In C++, what is the last valid index of an array declared as int A[10];?')
      .setChoiceValues(['a) 10', 'b) 9', 'c) 11', 'd) 0'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V2-Q6] Which data type is used to store single characters?')
      .setChoiceValues(['a) string', 'b) int', 'c) char', 'd) float'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V2-Q7] What does the function strcpy(S1, S2) do?')
      .setChoiceValues([
        'a) Compares strings',
        'b) Copies string S2 into S1',
        'c) Concatenates strings',
        'd) Returns string length'
      ])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V2-Q8] Which header file is needed to use string functions like strlen and strcpy?')
      .setChoiceValues(['a) <iostream>', 'b) <cstring>', 'c) <cmath>', 'd) <algorithm>'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V2-Q9] What is the float data type used for?')
      .setChoiceValues([
        'a) Storing integers',
        'b) Storing real numbers',
        'c) Storing characters',
        'd) Storing truth values'
      ])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V2-Q10] Which operator is used to concatenate two strings of type string?')
      .setChoiceValues(['a) *', 'b) +', 'c) -', 'd) /'])
      .setPoints(1)
      .setRequired(true);
  
  // Section 2
  form.addPageBreakItem().setTitle('VARIANT 2 - Section 2: True / False (5 points)');
  
  form.addMultipleChoiceItem()
      .setTitle('[V2-Q11] Simple data types include integer, float, char, and bool.')
      .setChoiceValues(['True', 'False'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V2-Q12] Arrays in C++ can have elements of type string.')
      .setChoiceValues(['True', 'False'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V2-Q13] The escape character \\0 marks the end of a character array string.')
      .setChoiceValues(['True', 'False'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V2-Q14] Bubble sort is a method for searching elements in an array.')
      .setChoiceValues(['True', 'False'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V2-Q15] The function getline(cin, S) reads a string including spaces.')
      .setChoiceValues(['True', 'False'])
      .setPoints(1)
      .setRequired(true);
  
  // Section 3
  form.addPageBreakItem().setTitle('VARIANT 2 - Section 3: Short Answer (10 points)');
  
  form.addParagraphTextItem()
      .setTitle('[V2-Q16] Give two examples of COMPOSITE data types. (2 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V2-Q17] What is the difference between char array strings and string type? (2 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V2-Q18] Explain what an ARRAY is and give an example of its use. (2 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V2-Q19] What is the purpose of the \\0 character in character arrays? (2 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V2-Q20] Which data type would you use to store daily temperatures for a month? Explain why. (2 points)')
      .setRequired(true);
  
  // Section 4
  form.addPageBreakItem().setTitle('VARIANT 2 - Section 4: Practical (9 points)');
  
  form.addParagraphTextItem()
      .setTitle('[V2-Q21] Write a declaration of a one-dimensional array of 15 elements of type int. (3 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V2-Q22] Write a code fragment that reads 3 real numbers into an array and calculates their average. (3 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V2-Q23] Write a code fragment that reads two strings Name and Surname and displays them together. (3 points)')
      .setRequired(true);
  
  // Section 5
  form.addPageBreakItem().setTitle('VARIANT 2 - Section 5: Bonus (5 points)');
  
  form.addParagraphTextItem()
      .setTitle('[V2-Q24] Write a program that reads a string and prints the number of letter "a" occurrences in it (both uppercase and lowercase). Hint: use the string data type and check for both a and A. (5 points)')
      .setRequired(true);
}

// ==================== VARIANT 3 ====================
function createVariant3(form) {
  form.addPageBreakItem().setTitle('VARIANT 3 - Section 1: Multiple Choice (10 points)');
  
  form.addMultipleChoiceItem()
      .setTitle('[V3-Q1] What are SIMPLE data types?')
      .setChoiceValues([
        'a) Data types that store multiple values',
        'b) Data types that store a single value',
        'c) Only arrays',
        'd) Only strings'
      ])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V3-Q2] Which of the following is NOT a simple data type?')
      .setChoiceValues(['a) int', 'b) string', 'c) bool', 'd) char'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V3-Q3] Which data type stores whole numbers?')
      .setChoiceValues(['a) float', 'b) char', 'c) int', 'd) string'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V3-Q4] What is the main characteristic of an array?')
      .setChoiceValues([
        'a) Elements can be of different types',
        'b) All elements are of the same type',
        'c) It can only store numbers',
        'd) It has no indices'
      ])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V3-Q5] How do you access the third element in array V in C++?')
      .setChoiceValues(['a) V[3]', 'b) V[2]', 'c) V(3)', 'd) V(2)'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V3-Q6] Which data type is best for storing yes/no values?')
      .setChoiceValues(['a) int', 'b) float', 'c) bool', 'd) char'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V3-Q7] What does the function S.length() return for a string S?')
      .setChoiceValues([
        'a) The first character',
        'b) The number of characters',
        'c) The last character',
        'd) The string itself'
      ])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V3-Q8] In C++, how do you declare a string variable using the string type?')
      .setChoiceValues(['a) char S;', 'b) string S;', 'c) int S;', 'd) array S;'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V3-Q9] What is the enum data type used for?')
      .setChoiceValues([
        'a) Storing real numbers',
        'b) Defining a set of named constants',
        'c) Storing characters',
        'd) Creating arrays'
      ])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V3-Q10] Which function concatenates two character array strings?')
      .setChoiceValues(['a) strlen', 'b) strcmp', 'c) strcat', 'd) strcpy'])
      .setPoints(1)
      .setRequired(true);
  
  // Section 2
  form.addPageBreakItem().setTitle('VARIANT 3 - Section 2: True / False (5 points)');
  
  form.addMultipleChoiceItem()
      .setTitle('[V3-Q11] Composite data types are formed by combining simple data types.')
      .setChoiceValues(['True', 'False'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V3-Q12] In C++, you must specify the maximum length when declaring a string variable.')
      .setChoiceValues(['True', 'False'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V3-Q13] Array indices in C++ always start from 1.')
      .setChoiceValues(['True', 'False'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V3-Q14] The real or float data type is used for decimal numbers.')
      .setChoiceValues(['True', 'False'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V3-Q15] You can use cin >> to read a string with spaces.')
      .setChoiceValues(['True', 'False'])
      .setPoints(1)
      .setRequired(true);
  
  // Section 3
  form.addPageBreakItem().setTitle('VARIANT 3 - Section 3: Short Answer (10 points)');
  
  form.addParagraphTextItem()
      .setTitle('[V3-Q16] Give two examples of SIMPLE data types. (2 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V3-Q17] Name three composite data types. (2 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V3-Q18] Explain the purpose of arrays in programming. (2 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V3-Q19] What sorting method is called bubble sort? Describe it briefly. (2 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V3-Q20] Which data type would you use to store student names in a class? Explain why. (2 points)')
      .setRequired(true);
  
  // Section 4
  form.addPageBreakItem().setTitle('VARIANT 3 - Section 4: Practical (9 points)');
  
  form.addParagraphTextItem()
      .setTitle('[V3-Q21] Write a declaration of a one-dimensional array of 20 elements of type char. (3 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V3-Q22] Write a code fragment that reads 4 integers into an array and finds the maximum value. (3 points)')
      .setRequired(true);
  
  form.addParagraphTextItem()
      .setTitle('[V3-Q23] Write a code fragment that declares a string variable and assigns it the value Informatica. (3 points)')
      .setRequired(true);
  
  // Section 5
  form.addPageBreakItem().setTitle('VARIANT 3 - Section 5: Bonus (5 points)');
  
  form.addParagraphTextItem()
      .setTitle('[V3-Q24] Write a program that reads a string and prints it in reverse order. Hint: use the string data type and access characters by index. (5 points)')
      .setRequired(true);
}

// ==================== VARIANT 4 ====================
function createVariant4(form) {
  form.addPageBreakItem().setTitle('VARIANT 4 - Section 1: Multiple Choice (10 points)');
  
  form.addMultipleChoiceItem()
      .setTitle('[V4-Q1] Which statement about data types is correct?')
      .setChoiceValues([
        'a) All data types can store any kind of data',
        'b) Each data type has specific values and operations',
        'c) Data types are not important in programming',
        'd) Only numbers need data types'
      ])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V4-Q2] Which is an example of a COMPOSITE data type?')
      .setChoiceValues(['a) char', 'b) int', 'c) array', 'd) bool'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V4-Q3] What does string store?')
      .setChoiceValues([
        'a) A single character',
        'b) A sequence of characters',
        'c) Only numbers',
        'd) Boolean values'
      ])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V4-Q4] In a one-dimensional array, how are elements organized?')
      .setChoiceValues([
        'a) In a random order',
        'b) In a sequence',
        'c) In a tree structure',
        'd) In a circular pattern'
      ])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V4-Q5] What is the valid range of indices for array int A[8]; in C++?')
      .setChoiceValues(['a) 1 to 8', 'b) 0 to 7', 'c) 0 to 8', 'd) 1 to 7'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V4-Q6] Which data type would you use for storing a persons age?')
      .setChoiceValues(['a) string', 'b) bool', 'c) int', 'd) char'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V4-Q7] What does strcpy function do?')
      .setChoiceValues([
        'a) Compares two strings',
        'b) Finds string length',
        'c) Copies one string to another',
        'd) Concatenates strings'
      ])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V4-Q8] Which character marks the end of a string in a character array?')
      .setChoiceValues(['a) Space', 'b) \\n', 'c) \\0', 'd) \\t'])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V4-Q9] What is the bool data type used for?')
      .setChoiceValues([
        'a) Storing numbers',
        'b) Storing true/false values',
        'c) Storing text',
        'd) Storing characters'
      ])
      .setPoints(1)
      .setRequired(true);
  
  form.addMultipleChoiceItem()
      .setTitle('[V4-Q10] How do you combine strings S1 and S2 of type string?')
      .setChoiceValues(['a) S1 - S2', 'b) S1 * S2', 'c) S1 + S2', 'd) S1 / S2'])
      .setPoints(1)
      .setRequired(true);
  
  // Section 2
  form.addPageBreakItem().setTitle('VARIANT 4 - Section 2: True / False (5 points)');
  
  form.addMultipleChoiceItem()
      .setTitle('[V4-Q11] An array must contain elements of the same data type.')
      .setChoiceValues(['True', 'False'])
      .setPoints(1)
      .setRequired(true);
