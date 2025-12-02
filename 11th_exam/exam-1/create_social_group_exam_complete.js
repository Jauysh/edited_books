/**
 * Google Apps Script - Grade 11 Social Group Exam Creator
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Click "New Project"
 * 3. Delete existing code and paste this entire script
 * 4. Click the disk icon to save (name it "Exam Creator")
 * 5. Click "Run" button and select "createExamForm"
 * 6. Authorize when prompted
 * 7. Check "Execution log" (Ctrl+Enter) for the form URL
 * 
 * The script creates a Google Form with all 5 exam variants.
 */

function createExamForm() {
  var form = FormApp.create('Grade 11 Social Group - Composite Data Types Exam');
  
  form.setDescription(
    'Duration: 35 minutes | Total Points: 40 | Passing: 24 (60%)\n\n' +
    'This exam tests knowledge of composite data types, arrays, and strings in C++.'
  );
  
  // Enable Quiz mode (REQUIRED before setting points)
  form.setIsQuiz(true);
  
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  
  // Student Info
  form.addTextItem().setTitle('Full Name').setRequired(true);
  form.addTextItem().setTitle('Class').setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Select Your Variant (as assigned by teacher)')
    .setChoiceValues(['Variant 1', 'Variant 2', 'Variant 3', 'Variant 4', 'Variant 5'])
    .setRequired(true);
  
  form.addPageBreakItem().setTitle('Instructions')
    .setHelpText('Complete ONLY your assigned variant. Each question is labeled (e.g., V1-Q1).');
  
  // Add all variants
  addVariant1(form);
  addVariant2(form);
  addVariant3(form);
  addVariant4(form);
  addVariant5(form);
  
  form.setConfirmationMessage('Thank you! Your exam has been submitted. Total: 40 points, Passing: 24');
  
  Logger.log('Form created!');
  Logger.log('URL: ' + form.getPublishedUrl());
  Logger.log('Edit: ' + form.getEditUrl());
  
  return form;
}

function addVariant1(form) {
  form.addPageBreakItem().setTitle('VARIANT 1 - Multiple Choice (10 pts)');
  
  var questions = [
    ['[V1-Q1] What does "data type" mean?', 
     ['a) Store info in memory', 'b) Set of values and operations', 'c) Only numeric format', 'd) Sorting method']],
    ['[V1-Q2] Which is a SIMPLE data type?', 
     ['a) Array', 'b) String', 'c) Integer', 'd) Record']],
    ['[V1-Q3] Type for sequence of characters?', 
     ['a) int', 'b) float', 'c) string', 'd) bool']],
    ['[V1-Q4] What is an ARRAY?', 
     ['a) Random numbers', 'b) Homogeneous elements sequentially', 'c) Different data types', 'd) Only 2D']],
    ['[V1-Q5] First array element index in C++?', 
     ['a) 1', 'b) 0', 'c) -1', 'd) Depends']],
    ['[V1-Q6] Type for truth values?', 
     ['a) int', 'b) bool', 'c) char', 'd) string']],
    ['[V1-Q7] What does strlen(S) do?', 
     ['a) Compares strings', 'b) Returns length', 'c) Copies', 'd) Deletes']],
    ['[V1-Q8] String end symbol in char array?', 
     ['a) \\n', 'b) \\0', 'c) \\t', 'd) \\\\']],
    ['[V1-Q9] Type for identifier-defined values?', 
     ['a) enum', 'b) bool', 'c) string', 'd) float']],
    ['[V1-Q10] What does strcat(S1,S2) do?', 
     ['a) Compares', 'b) Copies', 'c) Concatenates', 'd) Deletes']]
  ];
  
  for (var i = 0; i < questions.length; i++) {
    form.addMultipleChoiceItem()
      .setTitle(questions[i][0])
      .setChoiceValues(questions[i][1])
      .setPoints(1)
      .setRequired(true);
  }
  
  form.addPageBreakItem().setTitle('VARIANT 1 - True/False (5 pts)');
  var tf = [
    '[V1-Q11] Array can have different data types',
    '[V1-Q12] String type needs max length specified',
    '[V1-Q13] C++ array indices start from 0',
    '[V1-Q14] char stores characters',
    '[V1-Q15] cin.getline() reads strings with spaces'
  ];
  for (var j = 0; j < tf.length; j++) {
    form.addMultipleChoiceItem()
      .setTitle(tf[j])
      .setChoiceValues(['True', 'False'])
      .setPoints(1)
      .setRequired(true);
  }
  
  form.addPageBreakItem().setTitle('VARIANT 1 - Short Answer (10 pts)');
  form.addParagraphTextItem().setTitle('[V1-Q16] Give 2 SIMPLE data types (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V1-Q17] Give 2 COMPOSITE data types (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V1-Q18] Difference: simple vs composite (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V1-Q19] What is BUBBLE SORT? (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V1-Q20] Type for monthly electricity expenses? Why? (2pts)').setRequired(true);
  
  form.addPageBreakItem().setTitle('VARIANT 1 - Practical (9 pts)');
  form.addParagraphTextItem().setTitle('[V1-Q21] Declare array: 10 floats (3pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V1-Q22] Code: read 5 ints, print sum (3pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V1-Q23] Code: combine FirstName + LastName (3pts)').setRequired(true);
  
  form.addPageBreakItem().setTitle('VARIANT 1 - Bonus (5 pts)');
  form.addParagraphTextItem().setTitle('[V1-Q24] Program: count spaces in string (5pts)').setRequired(true);
}

function addVariant2(form) {
  form.addPageBreakItem().setTitle('VARIANT 2 - Multiple Choice (10 pts)');
  
  var questions = [
    ['[V2-Q1] Which is COMPOSITE type?', ['a) int', 'b) float', 'c) array', 'd) bool']],
    ['[V2-Q2] Composite data means?', ['a) Combined simple data', 'b) Only numeric', 'c) Language', 'd) Algorithm']],
    ['[V2-Q3] Type for real numbers?', ['a) int', 'b) char', 'c) float', 'd) enum']],
    ['[V2-Q4] Purpose of array index?', ['a) Delete', 'b) Access elements', 'c) Sort', 'd) Count']],
    ['[V2-Q5] Last index of int A[10]?', ['a) 10', 'b) 9', 'c) 11', 'd) 0']],
    ['[V2-Q6] Type for single character?', ['a) string', 'b) int', 'c) char', 'd) float']],
    ['[V2-Q7] strcpy(S1,S2) does?', ['a) Compares', 'b) Copies S2 to S1', 'c) Concatenates', 'd) Gets length']],
    ['[V2-Q8] Header for strlen, strcpy?', ['a) iostream', 'b) cstring', 'c) cmath', 'd) algorithm']],
    ['[V2-Q9] float type for?', ['a) Integers', 'b) Real numbers', 'c) Characters', 'd) Truth values']],
    ['[V2-Q10] Operator to concatenate string?', ['a) *', 'b) +', 'c) -', 'd) /']]
  ];
  
  for (var i = 0; i < questions.length; i++) {
    form.addMultipleChoiceItem().setTitle(questions[i][0]).setChoiceValues(questions[i][1]).setPoints(1).setRequired(true);
  }
  
  form.addPageBreakItem().setTitle('VARIANT 2 - True/False (5 pts)');
  var tf = [
    '[V2-Q11] Simple types: int, float, char, bool',
    '[V2-Q12] Arrays can have string elements',
    '[V2-Q13] \\0 marks char array string end',
    '[V2-Q14] Bubble sort searches array',
    '[V2-Q15] getline(cin,S) reads with spaces'
  ];
  for (var j = 0; j < tf.length; j++) {
    form.addMultipleChoiceItem().setTitle(tf[j]).setChoiceValues(['True', 'False']).setPoints(1).setRequired(true);
  }
  
  form.addPageBreakItem().setTitle('VARIANT 2 - Short Answer (10 pts)');
  form.addParagraphTextItem().setTitle('[V2-Q16] Give 2 COMPOSITE types (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V2-Q17] Difference: char array vs string? (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V2-Q18] What is ARRAY? Example use? (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V2-Q19] Purpose of \\0 in char arrays? (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V2-Q20] Type for daily temps? Why? (2pts)').setRequired(true);
  
  form.addPageBreakItem().setTitle('VARIANT 2 - Practical (9 pts)');
  form.addParagraphTextItem().setTitle('[V2-Q21] Declare array: 15 ints (3pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V2-Q22] Code: read 3 reals, calc average (3pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V2-Q23] Code: read Name+Surname, display (3pts)').setRequired(true);
  
  form.addPageBreakItem().setTitle('VARIANT 2 - Bonus (5 pts)');
  form.addParagraphTextItem().setTitle('[V2-Q24] Program: count letter a (upper+lower) (5pts)').setRequired(true);
}

function addVariant3(form) {
  form.addPageBreakItem().setTitle('VARIANT 3 - Multiple Choice (10 pts)');
  
  var questions = [
    ['[V3-Q1] SIMPLE data types are?', ['a) Multiple values', 'b) Single value', 'c) Only arrays', 'd) Only strings']],
    ['[V3-Q2] NOT a simple type?', ['a) int', 'b) string', 'c) bool', 'd) char']],
    ['[V3-Q3] Type for whole numbers?', ['a) float', 'b) char', 'c) int', 'd) string']],
    ['[V3-Q4] Array main characteristic?', ['a) Different types', 'b) Same type elements', 'c) Only numbers', 'd) No indices']],
    ['[V3-Q5] Access 3rd element in V?', ['a) V[3]', 'b) V[2]', 'c) V(3)', 'd) V(2)']],
    ['[V3-Q6] Best type for yes/no?', ['a) int', 'b) float', 'c) bool', 'd) char']],
    ['[V3-Q7] S.length() returns?', ['a) First char', 'b) Number of chars', 'c) Last char', 'd) String itself']],
    ['[V3-Q8] Declare string variable?', ['a) char S', 'b) string S', 'c) int S', 'd) array S']],
    ['[V3-Q9] enum type for?', ['a) Real numbers', 'b) Named constants', 'c) Characters', 'd) Arrays']],
    ['[V3-Q10] Function to concatenate char arrays?', ['a) strlen', 'b) strcmp', 'c) strcat', 'd) strcpy']]
  ];
  
  for (var i = 0; i < questions.length; i++) {
    form.addMultipleChoiceItem().setTitle(questions[i][0]).setChoiceValues(questions[i][1]).setPoints(1).setRequired(true);
  }
  
  form.addPageBreakItem().setTitle('VARIANT 3 - True/False (5 pts)');
  var tf = [
    '[V3-Q11] Composite = combined simple types',
    '[V3-Q12] Must specify string max length',
    '[V3-Q13] Array indices start from 1',
    '[V3-Q14] float for decimal numbers',
    '[V3-Q15] cin >> reads strings with spaces'
  ];
  for (var j = 0; j < tf.length; j++) {
    form.addMultipleChoiceItem().setTitle(tf[j]).setChoiceValues(['True', 'False']).setPoints(1).setRequired(true);
  }
  
  form.addPageBreakItem().setTitle('VARIANT 3 - Short Answer (10 pts)');
  form.addParagraphTextItem().setTitle('[V3-Q16] Give 2 SIMPLE types (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V3-Q17] Name 3 composite types (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V3-Q18] Purpose of arrays? (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V3-Q19] What is bubble sort? (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V3-Q20] Type for student names? Why? (2pts)').setRequired(true);
  
  form.addPageBreakItem().setTitle('VARIANT 3 - Practical (9 pts)');
  form.addParagraphTextItem().setTitle('[V3-Q21] Declare array: 20 chars (3pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V3-Q22] Code: read 4 ints, find max (3pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V3-Q23] Code: string = "Informatica" (3pts)').setRequired(true);
  
  form.addPageBreakItem().setTitle('VARIANT 3 - Bonus (5 pts)');
  form.addParagraphTextItem().setTitle('[V3-Q24] Program: reverse string (5pts)').setRequired(true);
}

function addVariant4(form) {
  form.addPageBreakItem().setTitle('VARIANT 4 - Multiple Choice (10 pts)');
  
  var questions = [
    ['[V4-Q1] Correct about data types?', ['a) Store any data', 'b) Specific values+operations', 'c) Not important', 'd) Only numbers']],
    ['[V4-Q2] Example of COMPOSITE?', ['a) char', 'b) int', 'c) array', 'd) bool']],
    ['[V4-Q3] string stores?', ['a) Single char', 'b) Sequence of chars', 'c) Only numbers', 'd) Boolean']],
    ['[V4-Q4] 1D array elements organized?', ['a) Random', 'b) Sequence', 'c) Tree', 'd) Circular']],
    ['[V4-Q5] Valid indices for int A[8]?', ['a) 1 to 8', 'b) 0 to 7', 'c) 0 to 8', 'd) 1 to 7']],
    ['[V4-Q6] Type for persons age?', ['a) string', 'b) bool', 'c) int', 'd) char']],
    ['[V4-Q7] strcpy function does?', ['a) Compares', 'b) Finds length', 'c) Copies string', 'd) Concatenates']],
    ['[V4-Q8] Char array string end?', ['a) Space', 'b) \\n', 'c) \\0', 'd) \\t']],
    ['[V4-Q9] bool type for?', ['a) Numbers', 'b) true/false', 'c) Text', 'd) Characters']],
    ['[V4-Q10] Combine S1+S2 (string type)?', ['a) S1-S2', 'b) S1*S2', 'c) S1+S2', 'd) S1/S2']]
  ];
  
  for (var i = 0; i < questions.length; i++) {
    form.addMultipleChoiceItem().setTitle(questions[i][0]).setChoiceValues(questions[i][1]).setPoints(1).setRequired(true);
  }
  
  form.addPageBreakItem().setTitle('VARIANT 4 - True/False (5 pts)');
  var tf = [
    '[V4-Q11] Array must have same type elements',
    '[V4-Q12] string type needs max length',
    '[V4-Q13] First element has index 0',
    '[V4-Q14] char can store entire word',
    '[V4-Q15] cin.getline() reads with spaces'
  ];
  for (var j = 0; j < tf.length; j++) {
    form.addMultipleChoiceItem().setTitle(tf[j]).setChoiceValues(['True', 'False']).setPoints(1).setRequired(true);
  }
  
  form.addPageBreakItem().setTitle('VARIANT 4 - Short Answer (10 pts)');
  form.addParagraphTextItem().setTitle('[V4-Q16] List 2 simple types, explain (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V4-Q17] List 2 composite types (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V4-Q18] Difference: simple vs composite? (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V4-Q19] Describe bubble sort (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V4-Q20] Type for item prices? Why? (2pts)').setRequired(true);
  
  form.addPageBreakItem().setTitle('VARIANT 4 - Practical (9 pts)');
  form.addParagraphTextItem().setTitle('[V4-Q21] Declare array: 12 doubles (3pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V4-Q22] Code: read 6 ints, print smallest (3pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V4-Q23] Code: combine First+Last names (3pts)').setRequired(true);
  
  form.addPageBreakItem().setTitle('VARIANT 4 - Bonus (5 pts)');
  form.addParagraphTextItem().setTitle('[V4-Q24] Program: count vowels (a,e,i,o,u) (5pts)').setRequired(true);
}

function addVariant5(form) {
  form.addPageBreakItem().setTitle('VARIANT 5 - Multiple Choice (10 pts)');
  
  var questions = [
    ['[V5-Q1] Data type defines?', ['a) Only display', 'b) Values+operations', 'c) Only memory', 'd) Language']],
    ['[V5-Q2] Which is SIMPLE?', ['a) array', 'b) record', 'c) float', 'd) string']],
    ['[V5-Q3] Type for text sequences?', ['a) int', 'b) bool', 'c) string', 'd) float']],
    ['[V5-Q4] Array best described as?', ['a) Unorganized', 'b) Same-type in sequence', 'c) Single value', 'd) Formula']],
    ['[V5-Q5] Array indexing starts from?', ['a) 1', 'b) -1', 'c) 0', 'd) 10']],
    ['[V5-Q6] Type for true/false?', ['a) char', 'b) int', 'c) bool', 'd) float']],
    ['[V5-Q7] strlen(S) returns?', ['a) First char', 'b) Number of chars', 'c) Copy', 'd) Last char']],
    ['[V5-Q8] Symbol ending char array string?', ['a) \\n', 'b) Space', 'c) \\0', 'd) \\t']],
    ['[V5-Q9] enum used for?', ['a) Decimals', 'b) Named constants', 'c) Arrays', 'd) Characters']],
    ['[V5-Q10] strcat(S1,S2) does?', ['a) Compares', 'b) Copies', 'c) Adds S2 to S1', 'd) Deletes']]
  ];
  
  for (var i = 0; i < questions.length; i++) {
    form.addMultipleChoiceItem().setTitle(questions[i][0]).setChoiceValues(questions[i][1]).setPoints(1).setRequired(true);
  }
  
  form.addPageBreakItem().setTitle('VARIANT 5 - True/False (5 pts)');
  var tf = [
    '[V5-Q11] Arrays can have different types',
    '[V5-Q12] string doesnt need max length',
    '[V5-Q13] Array indices start from 0',
    '[V5-Q14] char stores individual characters',
    '[V5-Q15] Cannot read spaces with cin >>'
  ];
  for (var j = 0; j < tf.length; j++) {
    form.addMultipleChoiceItem().setTitle(tf[j]).setChoiceValues(['True', 'False']).setPoints(1).setRequired(true);
  }
  
  form.addPageBreakItem().setTitle('VARIANT 5 - Short Answer (10 pts)');
  form.addParagraphTextItem().setTitle('[V5-Q16] Name 2 simple types, describe (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V5-Q17] Name 2 composite types (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V5-Q18] How composite differs from simple? (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V5-Q19] Bubble sort: what and when? (2pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V5-Q20] Type for weekly rainfall? Why? (2pts)').setRequired(true);
  
  form.addPageBreakItem().setTitle('VARIANT 5 - Practical (9 pts)');
  form.addParagraphTextItem().setTitle('[V5-Q21] Declare array: 25 ints (3pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V5-Q22] Code: read 5 reals, print product (3pts)').setRequired(true);
  form.addParagraphTextItem().setTitle('[V5-Q23] Code: combine First+Last variables (3pts)').setRequired(true);
  
  form.addPageBreakItem().setTitle('VARIANT 5 - Bonus (5 pts)');
  form.addParagraphTextItem().setTitle('[V5-Q24] Program: check if palindrome (5pts)').setRequired(true);
}
