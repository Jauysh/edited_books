/**
 * Google Apps Script for Automated Exam 2 Form Creation
 * 11th Grade Informatics – Records, Sets, Files
 *
 * INSTRUCTIONS:
 * 1. Open https://script.google.com/ and create a new Apps Script project.
 * 2. Copy-paste this entire file into a script file (e.g. Code.gs).
 * 3. Save the project.
 * 4. Run the main11Exam2() function.
 * 5. Check the execution logs for the created form URLs.
 *
 * This script creates 5 Google Forms (one for each exam variant).
 * Content is based ONLY on:
 *  - Records / struct (P85, P86),
 *  - Sets represented by arrays and intersection (P87),
 *  - Files and text files (P90–P97),
 * EXCLUDING characteristic vectors / sieve of Eratosthenes.
 */

// ===================== MAIN ENTRY POINT =====================

function main11Exam2() {
  try {
    const urls = createAllExam2Forms11();
    Logger.log('✅ Created Exam 2 forms for 11th grade (Records, Sets, Files).');
    urls.forEach(function (info) {
      Logger.log('Variant ' + info.variant + ': ' + info.url);
    });
    return '✅ Exam 2 forms created. Check Logs for URLs.';
  } catch (error) {
    Logger.log('❌ Error in main11Exam2: ' + error.toString());
    return 'Error: ' + error.toString();
  }
}

// Create all 5 variant forms
function createAllExam2Forms11() {
  const urls = [];
  EXAM_11_RECORDS_SETS_FILES.variants.forEach(function (variant, index) {
    const variantNumber = variant.number || (index + 1);
    const form = createExam2Form11(variant, variantNumber);
    urls.push({
      variant: variantNumber,
      url: form.getPublishedUrl(),
      editUrl: form.getEditUrl(),
      title: form.getTitle()
    });
  });
  return urls;
}

// Utility to create a single specific variant (1-5)
function createSingleExam2Variant11(variantNumber) {
  if (variantNumber < 1 || variantNumber > EXAM_11_RECORDS_SETS_FILES.variants.length) {
    Logger.log('Invalid variant number. Please use 1-' + EXAM_11_RECORDS_SETS_FILES.variants.length);
    return;
  }
  const variant = EXAM_11_RECORDS_SETS_FILES.variants[variantNumber - 1];
  createExam2Form11(variant, variantNumber);
}

// ===================== FORM CREATION =====================

function createExam2Form11(variant, variantNumber) {
  const formTitle = '11th Grade Informatics – Exam 2 (Records, Sets, Files) – Variant ' + variantNumber;
  const formDescription =
    'Exam 2 – Composite Data Types: Records, Sets (via arrays), Files (sequential & text)\\n' +
    'Time: 40 minutes\\n' +
    'Variant ' + variantNumber + '\\n\\n' +
    'Structure:\\n' +
    '- Part 1: Multiple-choice questions (8)\\n' +
    '- Part 2: True / False questions (6)\\n' +
    '- Part 3: 3 coding / written tasks';

  const form = FormApp.create(formTitle);
  form.setDescription(formDescription);
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(true);
  form.setProgressBar(true);
  form.setConfirmationMessage('Thank you for completing the exam! Your responses have been recorded.');

  // Collect emails if running in a Google Workspace domain
  try {
    form.setCollectEmail(true);
    form.setRequireLogin(true);
  } catch (e) {
    // In consumer accounts these may fail silently; ignore
    Logger.log('Info: Could not enforce login/collectEmail in this context.');
  }

  addStudentInfoSection(form);
  addPart1Section(form, variant);
  addPart2Section(form, variant);
  addPart3Section(form, variant);

  Logger.log('Created 11th Grade Exam 2 Form – Variant ' + variantNumber + ': ' + form.getPublishedUrl());
  return form;
}

function addStudentInfoSection(form) {
  const section = form.addPageBreakItem();
  section.setTitle('Student Information');
  section.setHelpText('Please fill in your personal data.');

  form.addTextItem()
    .setTitle('Full Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Class / Group')
    .setRequired(true);

  form.addTextItem()
    .setTitle('School')
    .setRequired(false);
}

function addPart1Section(form, variant) {
  const section = form.addPageBreakItem();
  section.setTitle('Part 1: Multiple-choice Questions');
  section.setHelpText('Choose ONE correct answer for each question.');

  variant.multipleChoice.forEach(function (q, index) {
    const item = form.addMultipleChoiceItem();
    item.setTitle('Question ' + (index + 1) + ': ' + q.question)
      .setChoices(
        q.options.map(function (opt) {
          return item.createChoice(opt);
        })
      )
      .setRequired(true);
  });
}

function addPart2Section(form, variant) {
  const section = form.addPageBreakItem();
  section.setTitle('Part 2: True / False Questions');
  section.setHelpText('Mark each statement as True or False.');

  variant.trueFalse.forEach(function (q, index) {
    const item = form.addMultipleChoiceItem();
    item.setTitle('Statement ' + (index + 1) + ': ' + q.statement)
      .setChoices([
        item.createChoice('True'),
        item.createChoice('False')
      ])
      .setRequired(true);
  });
}

function addPart3Section(form, variant) {
  const section = form.addPageBreakItem();
  section.setTitle('Part 3: Coding / Written Tasks');
  section.setHelpText('Answer all three tasks. Write C++ code or explanations as required.');

  variant.codingTasks.forEach(function (task, index) {
    const item = form.addParagraphTextItem();
    item.setTitle('Task ' + (index + 1) + ': ' + task.title)
      .setHelpText(task.description + (task.topic ? '\\nTopic: ' + task.topic : ''))
      .setRequired(true);
  });
}

// ===================== EXAM DATA =====================

/**
 * Exam content for 11th Grade Informatics – Exam 2
 * Only records/structs, sets via arrays & intersection, and files/text files.
 * No characteristic vectors or Sieve of Eratosthenes.
 *
 * BALANCED VARIANTS:
 * - Each variant: 8 MC (3 records, 3 sets, 2 files)
 * - Each variant: 6 T/F (2 records, 2 sets, 2 files)
 * - Each variant: 3 coding tasks
 *     - Task 1: records (P85/P86-style)
 *     - Task 2: sets & intersection (P87-style)
 *     - Task 3: files/text files (P90–P97-style)
 *
 * Note: correct answers are stored for reference (correctAnswer/answer) but
 *       not used by this script (Forms will be manually graded).
 */

const EXAM_11_RECORDS_SETS_FILES = {
  variants: [
    // ============ VARIANT 1 ============
    {
      number: 1,
      multipleChoice: [
        // Records (3)
        {
          question: 'What is a record (struct) in C++?',
          options: [
            'A) A data type that stores only numbers of the same type in consecutive memory cells',
            'B) A data type that groups several fields, which may have different data types, under one name',
            'C) A special type of file used to store text data on disk',
            'D) A function that reads a line of text from the keyboard'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Which of the following correctly defines the struct Elev as in the textbook examples?',
          options: [
            'A) struct Elev { string Nume; string Prenume; float NotaMedie; };',
            'B) struct Elev { char Nume[20]; char Prenume[30]; float NotaMedie; };',
            'C) struct Elev ( char Nume[20], char Prenume[30], float NotaMedie );',
            'D) Elev struct { char Nume[20]; char Prenume[30]; float NotaMedie; };'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Given typedef Elev ListaElevilor[40]; ListaElevilor LE; what is the type of LE[3].NotaMedie?',
          options: [
            'A) Elev',
            'B) int',
            'C) float',
            'D) string'
          ],
          correctAnswer: 'C'
        },
        // Sets via arrays & intersection (3)
        {
          question: 'How is a set A of at most 20 integers usually represented in C++ as in the textbook?',
          options: [
            'A) int A;',
            'B) int A[20]; and a separate int nA for the current number of elements',
            'C) bool A[20]; without any additional variables',
            'D) char A[20];'
          ],
          correctAnswer: 'B'
        },
        {
          question:
            'In Program P87 (intersection of sets A and B), consider the following fragment:\\n\\n' +
            'int A[20], B[20], C[20];\\n' +
            'int nA, nB, nC;\\n' +
            'bool Found;\\n' +
            'for (i = 0; i < nA; i++) {\\n' +
            '  Found = false;\\n' +
            '  for (j = 0; j < nB; j++)\\n' +
            '    if (A[i] == B[j]) Found = true;\\n' +
            '  if (Found) { C[nC] = A[i]; nC++; }\\n' +
            '}\\n\\n' +
            'What does the array C represent?',
          options: [
            'A) The union of A and B',
            'B) The difference A - B',
            'C) The intersection of A and B (elements that appear in both sets)',
            'D) The symmetric difference of A and B'
          ],
          correctAnswer: 'C'
        },
        {
          question: 'In the intersection algorithm with arrays, what is the purpose of the boolean variable Found?',
          options: [
            'A) To count how many elements are in set A',
            'B) To indicate whether an element of A is found in B',
            'C) To store the result of the intersection',
            'D) To indicate that reading input has finished'
          ],
          correctAnswer: 'B'
        },
        // Files / text files (2)
        {
          question: 'Which header must be included in a C++ program to work with files using ifstream and ofstream?',
          options: [
            'A) #include <iostream>',
            'B) #include <fstream>',
            'C) #include <cstring>',
            'D) #include <cmath>'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'What does the function eof() used with a file stream (for example f.eof()) indicate?',
          options: [
            'A) It returns true if the end of the file has been reached during reading',
            'B) It returns the number of lines in the file',
            'C) It closes the file',
            'D) It erases the content of the file'
          ],
          correctAnswer: 'A'
        }
      ],
      trueFalse: [
        // Records (2)
        {
          statement: 'In C++, the fields of a record (struct) can be of different data types.',
          answer: true
        },
        {
          statement: 'If two variables belong to the same record type, an assignment such as E1 = E2 copies all corresponding fields.',
          answer: true
        },
        // Sets via arrays & intersection (2)
        {
          statement: 'In the intersection program P87, the array A stores the elements of set B and the array B stores the elements of set A.',
          answer: false
        },
        {
          statement: 'In order to compute the intersection of two sets A and B represented by arrays, we must compare each element of A with all elements of B.',
          answer: true
        },
        // Files / text files (2)
        {
          statement: 'A text file in C++ consists of characters organized into lines, and the end of each line is marked by an EOL (end-of-line) element.',
          answer: true
        },
        {
          statement: 'When opening a file using ofstream with the name of an existing file, the old content of that file is always preserved and new data is appended at the end.',
          answer: false
        }
      ],
      codingTasks: [
        {
          title: 'Program similar to P85 – Student with highest average grade',
          topic: 'records',
          description:
            'Write a C++ program that defines the struct Elev with fields:\n' +
            '  - char Nume[20];\n  - char Prenume[30];\n  - float NotaMedie;\n\n' +
            'The program should:\n' +
            '1) Declare three variables E1, E2, E3 of type Elev.\n' +
            '2) Read from the keyboard the last name, first name, and average grade of two students E1 and E2.\n' +
            '3) Compare the average grades and assign to E3 the student with the higher average grade.\n' +
            '4) Display on the screen the data of E3 (last name, first name, average grade).'
        },
        {
          title: 'Program similar to P87 – Intersection of two sets of integers',
          topic: 'sets',
          description:
            'Write a C++ program that reads two sets A and B of integers, each with at most 20 elements, and computes their intersection C = A ∩ B.\n' +
            'Requirements:\n' +
            '- Use arrays int A[20], B[20], C[20];\n' +
            '- Read nA, then the nA elements of A;\n' +
            '- Read nB, then the nB elements of B;\n' +
            '- For each element of A, check whether it appears in B;\n' +
            '- If it does, add it to C;\n' +
            '- At the end, display the number of elements of C and all elements of C on one line.'
        },
        {
          title: 'Program similar to P90–P91 – Write and read student data from a file',
          topic: 'files',
          description:
            'Write a C++ program that uses a text file to store student data.\n' +
            'The program should:\n' +
            '1) Define struct elev with fields: char nume[15], char prenume[20], float NotaMedie;\n' +
            '2) Ask the user for the number n of students and then read their data from the keyboard;\n' +
            '3) Write the data of all students to a text file called \"elevi11.in\" (one student per line);\n' +
            '4) Close the file and then reopen it for reading, and display on the screen all lines from \"elevi11.in\".'
        }
      ]
    },

    // ============ VARIANT 2 ============
    {
      number: 2,
      multipleChoice: [
        // Records (3)
        {
          question: 'Which of the following expressions correctly accesses the x-coordinate of point A of triangle T1, if we have struct Punct { double x; double y; }; and struct Triunghi { Punct A; Punct B; Punct C; }; Triunghi T1;',
          options: [
            'A) T1.A.x',
            'B) T1.x.A',
            'C) A.T1.x',
            'D) T1.A[x]'
          ],
          correctAnswer: 'A'
        },
        {
          question: 'Given the declaration struct Elev { char Nume[20]; char Prenume[30]; float NotaMedie; }; Elev E1, E2; which statement is correct?',
          options: [
            'A) E1 and E2 can be compared directly using the > operator',
            'B) E1 = E2; copies all fields of E2 into the corresponding fields of E1',
            'C) E1 = E2; is illegal in C++',
            'D) E1.NotaMedie is a variable of type int'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'What is the main difference between an array and a record (struct)?',
          options: [
            'A) An array can contain elements of different types, while a record contains elements of the same type',
            'B) An array can only contain integers, while a record can contain any type',
            'C) A record can contain fields of different types, while an array contains elements of the same type',
            'D) There is no difference; they are identical'
          ],
          correctAnswer: 'C'
        },
        // Sets via arrays & intersection (3)
        {
          question: 'In representing sets with arrays, what does the variable nA usually store?',
          options: [
            'A) The maximum capacity of the array A',
            'B) The current number of elements stored in set A',
            'C) The last element of set A',
            'D) The sum of elements in set A'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Which pair of declarations is suitable for representing a set B of up to 20 integers and its current size?',
          options: [
            'A) int B; int nB;',
            'B) int B[20]; char nB;',
            'C) int B[20]; int nB;',
            'D) char B[20]; int n;'
          ],
          correctAnswer: 'C'
        },
        {
          question:
            'In the intersection algorithm (P87) for sets A and B represented as arrays\\n' +
            'int A[20], B[20], C[20];\\n' +
            'int nA, nB, nC;\\n' +
            'where are the elements of the intersection stored?',
          options: [
            'A) In the array A',
            'B) In the array B',
            'C) In the array C',
            'D) In the variable Found'
          ],
          correctAnswer: 'C'
        },
        // Files / text files (2)
        {
          question: 'Which of the following correctly opens a file \"data.txt\" for reading in C++?',
          options: [
            'A) ifstream f(\"data.txt\");',
            'B) ofstream f(\"data.txt\");',
            'C) open f(\"data.txt\");',
            'D) file f << \"data.txt\";'
          ],
          correctAnswer: 'A'
        },
        {
          question:
            'In Program P93 (Creating a text file), consider the following fragment:\\n\\n' +
            '// Program P93\\n' +
            '// Creating a text file\\n' +
            '...\\n' +
            'char c;\\n' +
            'while (cin.get(c))\\n' +
            '  f << c;\\n\\n' +
            'Which function is used to read characters from the keyboard (including new lines) and write them to a text file?',
          options: [
            'A) cin >> c;',
            'B) cin.get(c);',
            'C) getline(cin, c);',
            'D) scanf("%c", &c);'
          ],
          correctAnswer: 'B'
        }
      ],
      trueFalse: [
        // Records (2)
        {
          statement: 'In a record (struct), each field has its own name (identifier) and its own type.',
          answer: true
        },
        {
          statement: 'If we declare Punct P1, P2; then the assignment P1 = P2; will copy both x and y coordinates from P2 to P1.',
          answer: true
        },
        // Sets via arrays & intersection (2)
        {
          statement: 'When computing the intersection of two sets represented as arrays, we never need nested loops.',
          answer: false
        },
        {
          statement: 'In program P87, the variable nC represents the current number of elements in the intersection set C.',
          answer: true
        },
        // Files / text files (2)
        {
          statement: 'A sequential-access file can be processed only in the order in which its components appear in the file.',
          answer: true
        },
        {
          statement: 'In C++, the same logical file (stream variable) can never be associated with more than one external file during program execution.',
          answer: false
        }
      ],
      codingTasks: [
        {
          title: 'Program similar to P85 – Student with higher average grade',
          topic: 'records',
          description:
            'Write a C++ program that defines struct Elev { char Nume[20]; char Prenume[30]; float NotaMedie; } and then:\\n' +
            '1) Declares two variables E1 and E2 of type Elev;\\n' +
            '2) Reads for each student the last name, first name and average grade from the keyboard;\\n' +
            '3) Displays on the screen the data of the student who has the higher average grade.'
        },
        {
          title: 'Program similar to P87 – Elements in A but not in B (with given arrays)',
          topic: 'sets',
          description:
            'Consider two sets A and B of integers represented by the arrays:\\n' +
            '  int A[] = {2, 4, 6, 8};\\n' +
            '  int B[] = {4, 8, 10, 12};\\n' +
            'Let nA and nB be the number of elements of A and B respectively. Write a C++ program that uses arrays A, B and an array D to determine the set D of elements that belong to A but do not belong to B, using a boolean variable Found as in the intersection algorithm.'
        },
        {
          title: 'Program similar to P93 – Create a text file from keyboard input',
          topic: 'files',
          description:
            'Write a C++ program that creates a text file and writes characters from the keyboard into it, similar to Program P93.\\n' +
            'The program should:\\n' +
            '- Ask the user for the name of a text file;\\n' +
            '- Open the file for writing using ofstream;\\n' +
            '- Read characters from the keyboard using cin.get(c) inside a loop;\\n' +
            '- Write each character to the file;\\n' +
            '- Stop when end-of-input is signaled (for example by CTRL+Z followed by ENTER);\\n' +
            '- Close the file at the end.'
        }
      ]
    },

    // ============ VARIANT 3 ============
    {
      number: 3,
      multipleChoice: [
        // Records (3)
        {
          question: 'Which of the following correctly declares two variables P1 and P2 of type Punct, where Punct is a struct with fields x and y?',
          options: [
            'A) struct Punct { double x; double y; }; Punct P1, P2;',
            'B) struct { double x; double y; } P1, P2, Punct;',
            'C) Punct struct { double x; double y; }; P1, P2;',
            'D) struct Punct (double x, double y); P1, P2;'
          ],
          correctAnswer: 'A'
        },
        {
          question: 'Given Triunghi T1; where struct Triunghi { Punct A; Punct B; Punct C; }; which expression is of type Punct?',
          options: [
            'A) T1',
            'B) T1.A',
            'C) T1.A.x',
            'D) T1.A.x + T1.A.y'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Which of the following expressions has type double, if Punct P1; where struct Punct { double x; double y; };?',
          options: [
            'A) P1',
            'B) P1.x',
            'C) P1 + 1',
            'D) P1.y = 3'
          ],
          correctAnswer: 'B'
        },
        // Sets via arrays & intersection (3)
        {
          question: 'To represent a set of up to 7 days of the week using an enum Zi {L, Ma, Mi, J, V, S, D}; which declaration is appropriate?',
          options: [
            'A) Zi Z;',
            'B) Zi Z[7]; and an int nZ for the current number of elements',
            'C) int Z[7]; and no additional variables',
            'D) bool Z;'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'What does the following loop fragment from Program P87 do?\\nfor (i = 0; i < nA; i++) { Found = false; for (j = 0; j < nB; j++) if (A[i] == B[j]) Found = true; if (Found) { C[nC] = A[i]; nC++; } }',
          options: [
            'A) It copies all elements of B into C',
            'B) It deletes all elements of A that are not in B',
            'C) It builds the intersection of sets A and B in array C',
            'D) It checks if sets A and B are equal'
          ],
          correctAnswer: 'C'
        },
        {
          question: 'Why do we need three arrays A, B, C in the intersection program?',
          options: [
            'A) A for input, B for output, C for temporary data',
            'B) A and B to store the two input sets, C to store the intersection set',
            'C) A and B are not used, only C is used',
            'D) To waste memory'
          ],
          correctAnswer: 'B'
        },
        // Files / text files (2)
        {
          question: 'In Program P90, which stream is associated with the external file containing student data?',
          options: [
            'A) cin',
            'B) cout',
            'C) f (ofstream f(\"elevi.in\"));',
            'D) e (struct variable)'
          ],
          correctAnswer: 'C'
        },
        {
          question: 'Which of the following is true about text files in C++?',
          options: [
            'A) They contain only numbers separated by spaces',
            'B) They consist of characters arranged in lines of variable length',
            'C) They cannot be processed sequentially',
            'D) They always have fixed-length records'
          ],
          correctAnswer: 'B'
        }
      ],
      trueFalse: [
        // Records (2)
        {
          statement: 'In C++, you can define a struct type inside the main() function, as in Program P85.',
          answer: true
        },
        {
          statement: 'In a struct Elev, the field E1.NotaMedie is accessed using the arrow operator (->) when E1 is not a pointer.',
          answer: false
        },
        // Sets via arrays & intersection (2)
        {
          statement: 'When reading the elements of a set represented by an array, we typically use a for loop from index 0 up to n-1.',
          answer: true
        },
        {
          statement: 'In the intersection program, after the algorithm finishes, nC gives the current number of elements in set C.',
          answer: true
        },
        // Files / text files (2)
        {
          statement: 'In Program P91, the data is read from the file \"elevi.in\" until eof() indicates that the end of the file has been reached.',
          answer: true
        },
        {
          statement: 'After closing a file using f.close(), it is impossible to open the same external file again during the same program run.',
          answer: false
        }
      ],
      codingTasks: [
        {
          title: 'Program similar to P85 – Compare two students',
          topic: 'records',
          description:
            'Write a C++ program that defines struct Elev { char Nume[20]; char Prenume[30]; float NotaMedie; } and then:\\n' +
            '1) Declares two variables E1 and E2 of type Elev;\\n' +
            '2) Reads from the keyboard the last name, first name and average grade of the two students;\\n' +
            '3) Displays on the screen the data of the student with the higher average grade.'
        },
        {
          title: 'Program – Count common elements of two sets',
          topic: 'sets',
          description:
            'Write a C++ program that reads two sets of integers A and B (each with at most 20 elements) and computes how many elements they have in common.\n' +
            'Requirements:\n' +
            '- Use arrays int A[20], B[20]; and integers nA, nB;\n' +
            '- Read nA and then the nA elements of A;\n' +
            '- Read nB and then the nB elements of B;\n' +
            '- For each element of A, check whether it appears in B;\n' +
            '- Count how many elements appear in both sets and display this number on the screen.'
        },
        {
          title: 'Program – Read and print a text file line by line',
          topic: 'files',
          description:
            'Write a C++ program that reads a text file \"text11.in\" line by line and displays its contents on the screen.\n' +
            'Requirements:\n' +
            '- Use ifstream f(\"text11.in\");\n' +
            '- Use a character array char linie[80];\n' +
            '- Use getline (for example f.getline(linie, 80);) inside a loop controlled by eof();\n' +
            '- After finishing reading, close the file.'
        }
      ]
    },

    // ============ VARIANT 4 ============
    {
      number: 4,
      multipleChoice: [
        // Records (3)
        {
          question: 'Which of the following best describes a field of a record?',
          options: [
            'A) A single character from a text file',
            'B) An individual component of a record, having its own name and type',
            'C) A separate program that processes records',
            'D) A fixed-length array of integers'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Given struct Elev { char Nume[20]; char Prenume[30]; float NotaMedie; }; Elev V[40]; what does V[0].Nume represent?',
          options: [
            'A) The type of the student list',
            'B) The first student in the list',
            'C) The last name (family name) of the first student in the list',
            'D) The average grade of the first student in the list'
          ],
          correctAnswer: 'C'
        },
        {
          question: 'Which of the following operations is valid for two variables P1 and P2 of type Punct, where struct Punct { double x; double y; };?',
          options: [
            'A) if (P1 > P2) cout << \"P1\";',
            'B) P1 = P2;',
            'C) P1 + P2;',
            'D) P1 / P2;'
          ],
          correctAnswer: 'B'
        },
        // Sets via arrays & intersection (3)
        {
          question: 'Which of the following describes a set A represented in C++ as int A[20]; int nA;?',
          options: [
            'A) A is a fixed-size sequence of characters',
            'B) A is a set of at most 20 integers and nA is the current number of elements in the set',
            'C) A is a set of at most 20 doubles and nA is always equal to 20',
            'D) A is a matrix with 20 rows and nA columns'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'In the intersection algorithm, why is the variable nC initialized to 0 before the loop?',
          options: [
            'A) Because C already contains all elements of A',
            'B) To indicate that initially the intersection set C is empty',
            'C) Because C has no memory allocated',
            'D) Because nC stores the number of elements of A'
          ],
          correctAnswer: 'B'
        },
        {
          question:
            'In Program P87 (intersection of sets A and B), consider the fragment:\\n\\n' +
            'for (i = 0; i < nA; i++) {\\n' +
            '  Found = false;\\n' +
            '  for (j = 0; j < nB; j++)\\n' +
            '    if (A[i] == B[j]) Found = true;\\n' +
            '  if (Found) { C[nC] = A[i]; nC++; }\\n' +
            '}\\n\\n' +
            'What is the meaning of the condition if (A[i] == B[j])?',
          options: [
            'A) It checks whether the sets A and B have the same number of elements',
            'B) It checks whether the element A[i] is equal to the element B[j]',
            'C) It checks whether the index i is equal to j',
            'D) It checks whether A is a subset of B'
          ],
          correctAnswer: 'B'
        },
        // Files / text files (2)
        {
          question: 'Which of the following correctly creates an output file stream associated with the file \"result.out\"?',
          options: [
            'A) ifstream f(\"result.out\");',
            'B) ofstream f(\"result.out\");',
            'C) file f = \"result.out\";',
            'D) open(\"result.out\", f);'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'In text files, what does the EOL (end-of-line) element represent?',
          options: [
            'A) The end of the entire file',
            'B) The end of a line of text',
            'C) The beginning of a new program',
            'D) The end of a numeric constant'
          ],
          correctAnswer: 'B'
        }
      ],
      trueFalse: [
        // Records (2)
        {
          statement: 'The dot operator (.) is used to access the fields of a struct variable in C++.',
          answer: true
        },
        {
          statement: 'In an array of records V[40] of type Elev, the expression V[3].NotaMedie accesses the average grade of the 4th student.',
          answer: true
        },
        // Sets via arrays & intersection (2)
        {
          statement: 'When computing the intersection of two sets, the order of elements in the resulting set C is important.',
          answer: false
        },
        {
          statement: 'The intersection set of A and B contains only those elements that appear in both A and B.',
          answer: true
        },
        // Files / text files (2)
        {
          statement: 'When opening an output file with ofstream, if the file does not exist, it will be created.',
          answer: true
        },
        {
          statement: 'The operator >> used with file streams automatically ignores whitespace when reading numbers and strings separated by spaces or line breaks.',
          answer: true
        }
      ],
      codingTasks: [
        {
          title: 'Program – Read and display a list of students',
          topic: 'records',
          description:
            'Write a C++ program that defines struct Elev { char Nume[20]; char Prenume[30]; float NotaMedie; } and then:\n' +
            '1) Asks the user for the number n of students (n ≤ 40);\n' +
            '2) Reads the last name, first name, and average grade of each student into an array Elev V[40];\n' +
            '3) Displays on the screen, one per line, the data of all students in the form: Nume Prenume NotaMedie.'
        },
        {
          title: 'Program – Union of two sets without duplicates',
          topic: 'sets',
          description:
            'Write a C++ program that reads two sets A and B of integers (each with at most 20 elements) and constructs their union U = A ∪ B without duplicates.\n' +
            'Requirements:\n' +
            '- Use arrays int A[20], B[20], U[40]; and integers nA, nB, nU;\n' +
            '- First copy all elements of A into U;\n' +
            '- Then for each element of B, check whether it is already in U; if it is not, add it to U;\n' +
            '- At the end, display nU and all elements of U.'
        },
        {
          title: 'Program – Create a text file with user input (similar to P93)',
          topic: 'files',
          description:
            'Write a C++ program that:\n' +
            '1) Asks the user for the name of a text file;\n' +
            '2) Opens this file for writing using ofstream;\n' +
            '3) Reads characters from the keyboard (using cin.get(c)) and writes them to the file;\n' +
            '4) Stops reading when the user indicates end-of-input (for example by pressing a special key combination such as CTRL+Z followed by ENTER);\n' +
            '5) Closes the file at the end.'
        }
      ]
    },

    // ============ VARIANT 5 ============
    {
      number: 5,
      multipleChoice: [
        // Records (3)
        {
          question: 'Which of the following is a correct way to declare a typedef for an array of 40 Elev records named ListaElevilor?',
          options: [
            'A) typedef Elev ListaElevilor[40];',
            'B) typedef ListaElevilor[40] Elev;',
            'C) ListaElevilor typedef Elev[40];',
            'D) typedef Elev[40] ListaElevilor();'
          ],
          correctAnswer: 'A'
        },
        {
          question: 'After the declaration typedef Elev ListaElevilor[40]; ListaElevilor LE; which of the following is true?',
          options: [
            'A) LE is a single variable of type Elev',
            'B) LE is an array of 40 variables of type Elev',
            'C) LE is a pointer to Elev',
            'D) LE is an integer variable'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Given struct Elev { char Nume[20]; char Prenume[30]; float NotaMedie; }; which expression is of type char[20]?',
          options: [
            'A) Elev',
            'B) E.NotaMedie',
            'C) E.Nume',
            'D) E.Prenume[0]'
          ],
          correctAnswer: 'C'
        },
        // Sets via arrays & intersection (3)
        {
          question: 'Why is it necessary to use a separate variable (such as nA) when representing a set as an array?',
          options: [
            'A) Because the array cannot be declared without it',
            'B) Because nA stores the index of the last element only',
            'C) Because it stores the current number of valid elements in the set',
            'D) Because arrays can never be full'
          ],
          correctAnswer: 'C'
        },
        {
          question: 'In a program that computes the intersection of A and B, what happens if we forget to initialize nC = 0 at the beginning?',
          options: [
            'A) The program will not compile',
            'B) The program will always output an empty intersection',
            'C) The program may use an undefined initial value for nC and produce incorrect results',
            'D) The program will automatically set nC to the size of A'
          ],
          correctAnswer: 'C'
        },
        {
          question:
            'Program P87 (intersection of sets A and B) uses the following idea:\\n\\n' +
            'for (i = 0; i < nA; i++) {\\n' +
            '  Found = false;\\n' +
            '  for (j = 0; j < nB; j++)\\n' +
            '    if (A[i] == B[j]) Found = true;\\n' +
            '  if (Found) { C[nC] = A[i]; nC++; }\\n' +
            '}\\n\\n' +
            'Which algorithmic idea is used here to compute the intersection of two sets represented by arrays?',
          options: [
            'A) For each element of A, search linearly in B to see if it appears there',
            'B) For each element of B, search linearly in A to see if it appears there; then take the first one',
            'C) Sort both arrays and then merge them',
            'D) Use random numbers to guess the common elements'
          ],
          correctAnswer: 'A'
        },
        // Files / text files (2)
        {
          question: 'Which of the following correctly writes three values x, y, z to a text file using an ofstream f?',
          options: [
            'A) f >> x >> y >> z;',
            'B) f << x << \" \" << y << \" \" << z << std::endl;',
            'C) write(f, x, y, z);',
            'D) f.write(x, y, z);'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Which of the following describes line-level processing of a text file?',
          options: [
            'A) Reading character by character using get()',
            'B) Reading numbers and strings grouped as lexemes',
            'C) Reading each line into a string or character array using getline',
            'D) Reading the entire file as a single string'
          ],
          correctAnswer: 'C'
        }
      ],
      trueFalse: [
        // Records (2)
        {
          statement: 'A struct type can be used as a field type within another struct (nested structures).',
          answer: true
        },
        {
          statement: 'The expression LE[3].Nume refers to the entire character array that stores the last name of the 4th student in the list LE.',
          answer: true
        },
        // Sets via arrays & intersection (2)
        {
          statement: 'In an array representation of a set, it is allowed to store duplicate elements in the same set.',
          answer: false
        },
        {
          statement: 'The intersection set C of A and B is always a subset of both A and B.',
          answer: true
        },
        // Files / text files (2)
        {
          statement: 'When reading data from a text file using the operator >>, whitespace characters (spaces, tabs, end-of-line) are ignored between numbers and words.',
          answer: true
        },
        {
          statement: 'To process a text file line by line, we can use a loop with f.getline(linie, 80) until f.eof() becomes true.',
          answer: true
        }
      ],
      codingTasks: [
        {
          title: 'Program – Copy the best student from a list',
          topic: 'records',
          description:
            'Write a C++ program that:\n' +
            '1) Defines struct Elev { char Nume[20]; char Prenume[30]; float NotaMedie; };\n' +
            '2) Declares an array Elev V[40]; and a variable Elev Best;\n' +
            '3) Reads n and then the data of n students into V (1 ≤ n ≤ 40);\n' +
            '4) Uses a loop to find the student with the highest average grade and copies this student into Best using an assignment Best = V[i];\n' +
            '5) Displays the data of Best on the screen.'
        },
        {
          title: 'Program – Check if one set is included in another',
          topic: 'sets',
          description:
            'Write a C++ program that reads two sets A and B (each with at most 20 integers) and checks whether A is a subset of B (every element of A also belongs to B).\n' +
            'Requirements:\n' +
            '- Use arrays int A[20], B[20]; and integers nA, nB;\n' +
            '- For each element of A, search for it in B using a loop and a boolean variable Found;\n' +
            '- If for some element of A, Found remains false, then A is not a subset of B;\n' +
            '- Display an appropriate message on the screen.'
        },
        {
          title: 'Program similar to P93 – Create a text file from keyboard input',
          topic: 'files',
          description:
            'Write a C++ program that creates a text file and writes characters from the keyboard into it.\\n' +
            'The program should:\\n' +
            '- Ask the user for the name of a text file;\\n' +
            '- Open this file for writing using ofstream;\\n' +
            '- Read characters from the keyboard using cin.get(c) inside a loop;\\n' +
            '- Write each character to the file;\\n' +
            '- Stop when end-of-input is signaled (for example by CTRL+Z followed by ENTER);\\n' +
            '- Close the file at the end.'
        }
      ]
    }
  ]
};
