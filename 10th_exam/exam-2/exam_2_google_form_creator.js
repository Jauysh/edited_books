/**
 * Google Apps Script for Automated Exam 2 Form Creation
 * 10th Grade Informatics – Simple Data Types, Variables, Constants
 *
 * INSTRUCTIONS:
 * 1. Open https://script.google.com/ and create a new Apps Script project.
 * 2. Copy-paste this entire file into a script file (e.g. Code.gs).
 * 3. Save the project.
 * 4. Run the main10Exam2() function.
 * 5. Check the execution logs for the created form URLs.
 *
 * This script creates 5 Google Forms (one for each exam variant).
 * Forms are based on EXAM_10_SIMPLE_TYPES defined at the bottom of this file.
 */

// ===================== MAIN ENTRY POINT =====================

function main10Exam2() {
  try {
    const urls = createAllExam2Forms();
    Logger.log('✅ Created Exam 2 forms for 10th grade (Simple Data Types).');
    urls.forEach(function (info) {
      Logger.log('Variant ' + info.variant + ': ' + info.url);
    });
    return '✅ Exam 2 forms created. Check Logs for URLs.';
  } catch (error) {
    Logger.log('❌ Error in main10Exam2: ' + error.toString());
    return 'Error: ' + error.toString();
  }
}

// Create all 5 variant forms
function createAllExam2Forms() {
  const urls = [];
  EXAM_10_SIMPLE_TYPES.variants.forEach(function (variant, index) {
    const variantNumber = variant.number || (index + 1);
    const form = createExam2Form(variant, variantNumber);
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
function createSingleExam2Variant(variantNumber) {
  if (variantNumber < 1 || variantNumber > EXAM_10_SIMPLE_TYPES.variants.length) {
    Logger.log('Invalid variant number. Please use 1-' + EXAM_10_SIMPLE_TYPES.variants.length);
    return;
  }
  const variant = EXAM_10_SIMPLE_TYPES.variants[variantNumber - 1];
  createExam2Form(variant, variantNumber);
}

// ===================== FORM CREATION =====================

function createExam2Form(variant, variantNumber) {
  const formTitle = '10th Grade Informatics – Exam 2 (Simple Data Types) – Variant ' + variantNumber;
  const formDescription =
    'Exam 2 – Simple Data Types, Variables, Constants (Chapter 2)\n' +
    'Time: 35 minutes\n' +
    'Variant ' + variantNumber + '\n\n' +
    'Structure:\n' +
    '- Part 1: Multiple-choice questions (8)\n' +
    '- Part 2: True / False questions (6)\n' +
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

  Logger.log('Created Exam 2 Form – Variant ' + variantNumber + ': ' + form.getPublishedUrl());
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
      .setHelpText(task.description + (task.topic ? '\nTopic: ' + task.topic : ''))
      .setRequired(true);
  });
}

// ===================== EXAM DATA =====================

/**
 * Exam content for 10th Grade Informatics – Exam 2
 * Mirrors the content in 10th_exam/exam-2/exam-2-questions-english.md
 * Only simple data types, variables, constants, ordinal types (C++).
 */
const EXAM_10_SIMPLE_TYPES = {
  variants: [
    {
      number: 1,
      multipleChoice: [
        {
          question: 'What is a data type in a programming language?',
          options: [
            'A) A specific binary code used by the processor',
            'B) A set of possible values and a set of operations defined on them',
            'C) The size of the computer’s main memory',
            'D) The format of text files on disk'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Which of the following is a predefined simple data type in C++?',
          options: [
            'A) array',
            'B) int',
            'C) string',
            'D) matrix'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Which operation is NOT valid for the float data type in C++?',
          options: [
            'A) +',
            'B) -',
            'C) *',
            'D) %'
          ],
          correctAnswer: 'D'
        },
        {
          question: 'Which of the following is an integer constant (type int) according to C++ rules?',
          options: [
            'A) -301',
            'B) -301.0',
            'C) -61.00e+2',
            'D) 3.14'
          ],
          correctAnswer: 'A'
        },
        {
          question: 'Which statement about overflow of the int data type is correct?',
          options: [
            'A) Overflow can never occur if we use int.',
            'B) Overflow may occur if the result of an operation exceeds the range of int.',
            'C) Overflow only occurs for negative numbers.',
            'D) Overflow only occurs for division operations.'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Which expression performs integer division in C++?',
          options: [
            'A) 7 / 2 where both operands are of type int',
            'B) 7.0 / 2.0',
            'C) 7.0 / 2',
            'D) 7 / 2.0'
          ],
          correctAnswer: 'A'
        },
        {
          question: 'Which integer value becomes false when assigned to a variable of type bool?',
          options: [
            'A) -1',
            'B) 0',
            'C) 1',
            'D) 2'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Given the declaration enum Color {Yellow, Green, Blue, Violet}; what is the ordinal value of Violet?',
          options: [
            'A) 0',
            'B) 1',
            'C) 2',
            'D) 3'
          ],
          correctAnswer: 'D'
        }
      ],
      trueFalse: [
        {
          statement: 'In C++, every quantity (variable or constant) used in a program must be associated with a specific data type.',
          answer: true
        },
        {
          statement: 'In C++, the operator % (modulo) can be applied to both int and float operands.',
          answer: false
        },
        {
          statement: 'Real numbers of type float are stored exactly, without rounding errors.',
          answer: false
        },
        {
          statement: 'In C++, by default, integer types are signed (they can represent both positive and negative values).',
          answer: true
        },
        {
          statement: 'The character \'A\' and the integer 65 have the same ordinal number in the ASCII table.',
          answer: true
        },
        {
          statement: 'For an enumerated type enum Answer {No, Yes};, the value Yes has ordinal number 2.',
          answer: false
        }
      ],
      codingTasks: [
        {
          title: 'Identify data types of constants',
          topic: 'data-types',
          description:
            'a) Indicate the data type of each of the following constants in C++:\n' +
            '- -301\n- -301.0\n- 3.14\n- 0314\n\n' +
            'b) Explain why the expression 5 % 2.0 is invalid in C++.'
        },
        {
          title: 'Declare and use integer and real variables',
          topic: 'variables',
          description:
            'a) Write C++ declarations for the following variables:\n' +
            '- a, b, c – integer variables\n- p, q – real (floating-point) variables\n\n' +
            'b) Using the variables from part (a), write a small C++ program fragment that:\n' +
            '- assigns integer values to a, b, c,\n' +
            '- computes the sum s = a + b + c;\n' +
            '- prints the value of s on the screen.'
        },
        {
          title: 'Declare typed constants and compute area of a circle',
          topic: 'constants',
          description:
            'a) Declare the following typed constants in C++:\n' +
            '- gravitational acceleration g = 9 (integer)\n' +
            '- approximation of pi: pi = 3.14 (floating-point)\n\n' +
            'b) Using these constants, write a C++ expression that computes the area S of a circle with radius r = 5\n' +
            '(assume S = pi * r * r). Declare the constant r and the variable S with appropriate types.'
        }
      ]
    },
    {
      number: 2,
      multipleChoice: [
        {
          question: 'How are data represented in a computer’s machine code?',
          options: [
            'A) As decimal numbers',
            'B) As sequences of binary digits (bits)',
            'C) As characters from the ASCII table',
            'D) As text strings'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Which of the following lists contains only predefined simple data types in C++?',
          options: [
            'A) int, float, bool, char',
            'B) int, array, float, bool',
            'C) int, string, bool, char',
            'D) float, matrix, bool, char'
          ],
          correctAnswer: 'A'
        },
        {
          question: 'Which operation is meaningful only for integer operands and not for float?',
          options: [
            'A) +',
            'B) -',
            'C) *',
            'D) %'
          ],
          correctAnswer: 'D'
        },
        {
          question: 'Which of the following constants is of type float (real)?',
          options: [
            'A) 10',
            'B) 10.0',
            'C) 0314',
            'D) 0x15'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Which suffix can be used in C++ to specify an unsigned long integer constant?',
          options: [
            'A) u or U',
            'B) l or L',
            'C) ul or lu',
            'D) ll or LL'
          ],
          correctAnswer: 'C'
        },
        {
          question: 'What is the effect of integer division 18 / 4 in C++ (with both operands of type int)?',
          options: [
            'A) The result is 4.5',
            'B) The result is 5',
            'C) The result is 4',
            'D) The result is 0'
          ],
          correctAnswer: 'C'
        },
        {
          question: 'Which of the following is a correct declaration of a Boolean variable in C++?',
          options: [
            'A) logical x;',
            'B) bool x;',
            'C) boolean x;',
            'D) int bool;'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Given enum Answer {No, Yes};, which assignment is valid in C++?',
          options: [
            'A) Answer x = 1;',
            'B) Answer x = Yes;',
            'C) Answer x = "Yes";',
            'D) Answer x = true;'
          ],
          correctAnswer: 'B'
        }
      ],
      trueFalse: [
        {
          statement: 'The set of values of the int data type depends on the compiler and the operating system.',
          answer: true
        },
        {
          statement: 'The result of integer division 5 / 2 in C++ is 2.5.',
          answer: false
        },
        {
          statement: 'Real numbers of type float can always represent any real number exactly.',
          answer: false
        },
        {
          statement: 'In C++, true is internally represented by the integer 1, and false by the integer 0.',
          answer: true
        },
        {
          statement: 'The character constant "+" is of type char.',
          answer: true
        },
        {
          statement: 'In C++, variables of an enumerated type can take any integer value, not only the ones listed in the enum definition.',
          answer: false
        }
      ],
      codingTasks: [
        {
          title: 'Identify data types of variables',
          topic: 'data-types',
          description:
            'Consider the following declarations:\n' +
            'int r, y;\nfloat s, z;\nbool t, x;\n\n' +
            'a) Write the data type of each variable (r, s, t, x, y, z).\n' +
            'b) Explain what kind of values each of these data types can store.'
        },
        {
          title: 'Rectangle area using real variables',
          topic: 'variables',
          description:
            'a) Declare the following variables in C++:\n' +
            '- length, width – real (floating-point) variables\n' +
            '- area – real (floating-point) variable\n\n' +
            'b) Write a small program fragment that:\n' +
            '- assigns values to length and width,\n' +
            '- computes the area of a rectangle area = length * width;\n' +
            '- prints the value of area on the screen.'
        },
        {
          title: 'Constants for group size and passing grade',
          topic: 'constants',
          description:
            'a) Declare the following constants in C++:\n' +
            '- maximum number of students in a group: MaxStudents = 30 (integer)\n' +
            '- minimum passing grade: MinGrade = 5 (integer)\n\n' +
            'b) Write a program fragment that declares an integer variable students and explains (for example, in a comment)\n' +
            'whether students can exceed MaxStudents.'
        }
      ]
    },
    {
      number: 3,
      multipleChoice: [
        {
          question: 'Which of the following is the best description of a variable?',
          options: [
            'A) A quantity whose value cannot change during program execution',
            'B) A quantity whose value can change during program execution',
            'C) A fixed binary code in the processor',
            'D) A constant stored in read-only memory'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Which declaration correctly introduces two integer variables and one real variable in C++?',
          options: [
            'A) int x; float y, z;',
            'B) int x, y; float z;',
            'C) float x, y; int z;',
            'D) bool x, y; float z;'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'What is the type of the constant -61.00e+2 in C++?',
          options: [
            'A) int',
            'B) float / double (real)',
            'C) char',
            'D) bool'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Which statement about integer division and modulo is correct?',
          options: [
            'A) 11 % 3 gives 1',
            'B) 11 % 3 gives 2',
            'C) 11 / 3 gives 2.5',
            'D) 11 / 3 gives 3'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Which of the following is a correct character literal in C++?',
          options: [
            'A) "A"',
            'B) \'A\'',
            'C) A',
            'D) 65'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'What is the result of the logical expression true && false?',
          options: [
            'A) true',
            'B) false',
            'C) 1',
            'D) 0'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Which comparison is true for the enumerated type enum Color {Yellow, Green, Blue, Violet};?',
          options: [
            'A) Green < Yellow',
            'B) Yellow > Violet',
            'C) Blue > Green',
            'D) Violet < Yellow'
          ],
          correctAnswer: 'C'
        },
        {
          question: 'Which C++ keyword is used to create a new name (alias) for an existing data type?',
          options: [
            'A) enum',
            'B) typedef',
            'C) void',
            'D) bool'
          ],
          correctAnswer: 'B'
        }
      ],
      trueFalse: [
        {
          statement: 'A constant is a quantity whose value cannot change during program execution.',
          answer: true
        },
        {
          statement: 'The type of a constant in C++ is determined by the way it is written.',
          answer: true
        },
        {
          statement: 'The expression x = true; is invalid if x is of type int.',
          answer: false
        },
        {
          statement: 'char values are usually ordered according to the ASCII code table.',
          answer: true
        },
        {
          statement: 'In C++, the smallest value of an enumerated type has no predecessor.',
          answer: true
        },
        {
          statement: 'The void type in C++ means that a function returns an integer value.',
          answer: false
        }
      ],
      codingTasks: [
        {
          title: 'Identify data types of several constants',
          topic: 'data-types',
          description:
            'a) For each of the following constants, indicate its data type in C++ (int, float, char, or bool):\n' +
            '- 10\n- 10.0\n- \'+\'\n- false\n\n' +
            'b) Explain why real (float) operations may produce approximate results.'
        },
        {
          title: 'Use typedef to create an alias for int',
          topic: 'variables',
          description:
            'a) Using typedef, define a new type name intreg as an alias for int.\n' +
            'b) Declare three integer variables x1, i, t1 of type intreg.\n' +
            'c) Write a short program fragment that assigns values to these variables and computes their sum.'
        },
        {
          title: 'Use INT_MAX constant from <limits>',
          topic: 'constants',
          description:
            'a) Declare a constant MaxInt of type int whose value is INT_MAX from the header <limits>.\n' +
            'b) Write a small C++ program that prints the value of MaxInt on the screen.'
        }
      ]
    },
    {
      number: 4,
      multipleChoice: [
        {
          question: 'Which data types are ordinal in C++?',
          options: [
            'A) int, bool, char, enum',
            'B) float, double, long double',
            'C) void, float, bool',
            'D) string, char, double'
          ],
          correctAnswer: 'A'
        },
        {
          question: 'What is compared when relational operators (<, <=, ==, etc.) are applied to ordinal types?',
          options: [
            'A) The memory addresses of the variables',
            'B) The ordinal numbers of their values',
            'C) The names of the variables',
            'D) The size of the variables in bytes'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Which of the following is the correct declaration of an enumerated type in C++?',
          options: [
            'A) enum Color Yellow, Green, Blue, Violet;',
            'B) Color enum {Yellow, Green, Blue, Violet};',
            'C) enum Color {Yellow, Green, Blue, Violet};',
            'D) enum {Color Yellow, Green, Blue, Violet};'
          ],
          correctAnswer: 'C'
        },
        {
          question: 'What is the ordinal number of the value true for the type bool?',
          options: [
            'A) -1',
            'B) 0',
            'C) 1',
            'D) 2'
          ],
          correctAnswer: 'C'
        },
        {
          question: 'Which of the following is a correct declaration of a constant in C++?',
          options: [
            'A) const int g = 9;',
            'B) int const g;',
            'C) int g = const 9;',
            'D) constant int g = 9;'
          ],
          correctAnswer: 'A'
        },
        {
          question: 'What will be printed by the following code: bool x; x = false; cout << x;',
          options: [
            'A) true',
            'B) false',
            'C) 0',
            'D) 1'
          ],
          correctAnswer: 'C'
        },
        {
          question: 'Which of the following statements about the void type is correct?',
          options: [
            'A) void variables can store any value.',
            'B) void is used when a function does not return a value.',
            'C) void means the same as int.',
            'D) void is a floating-point type.'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Which of the following declarations introduces an anonymous enumerated type variable?',
          options: [
            'A) enum Weekday {Mon, Tue, Wed} d;',
            'B) enum {Mon, Tue, Wed} d;',
            'C) typedef enum {Mon, Tue, Wed} d;',
            'D) enum d {Mon, Tue, Wed};'
          ],
          correctAnswer: 'B'
        }
      ],
      trueFalse: [
        {
          statement: 'For ordinal types, each value has an ordinal number.',
          answer: true
        },
        {
          statement: 'The predecessor and successor of an ordinal value in C++ are always defined.',
          answer: false
        },
        {
          statement: 'The expression char(\'A\' + 1) produces the character \'B\'.',
          answer: true
        },
        {
          statement: 'The float data type is an ordinal type in C++.',
          answer: false
        },
        {
          statement: 'Two types defined by typedef from the same base type are identical.',
          answer: true
        },
        {
          statement: 'In C++, enumerated type identifiers from different enum declarations can freely repeat the same names without errors.',
          answer: false
        }
      ],
      codingTasks: [
        {
          title: 'Define and use an enumerated type Education',
          topic: 'data-types',
          description:
            'a) Define an enumerated type Education with the values Elementary = 1, Secondary, Higher.\n' +
            'b) Declare a variable e of type Education, assign it the value Secondary, and print its ordinal number (as an integer) on the screen.'
        },
        {
          title: 'Use double and char variables',
          topic: 'variables',
          description:
            'a) Declare the following variables:\n' +
            '- x, y, z – variables of type double\n' +
            '- c – variable of type char\n\n' +
            'b) Write a program fragment that:\n' +
            '- reads x and y from the keyboard,\n' +
            '- computes z = x / y;\n' +
            '- reads c from the keyboard,\n' +
            '- prints z and c on the screen.'
        },
        {
          title: 'Declare char and string constants',
          topic: 'constants',
          description:
            'a) Declare a constant of type char that stores the character \'+\'.\n' +
            'b) Declare a constant of type string named Message with the value "STOP".\n' +
            'c) Write a short program fragment that prints both constants on the screen.'
        }
      ]
    },
    {
      number: 5,
      multipleChoice: [
        {
          question: 'Which of the following declarations correctly uses typedef in C++?',
          options: [
            'A) typedef intreg int;',
            'B) typedef int intreg;',
            'C) int typedef intreg;',
            'D) typedef int; intreg;'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'After the declarations typedef int T4; typedef int T5;, how are the types int, T4, and T5 related?',
          options: [
            'A) They are all different types.',
            'B) T4 and T5 are identical, but different from int.',
            'C) All three are identical types.',
            'D) Only T4 is identical to int.'
          ],
          correctAnswer: 'C'
        },
        {
          question: 'Which of the following values can a variable of type bool take in C++?',
          options: [
            'A) Only 0',
            'B) Only 1',
            'C) Any integer value',
            'D) true or false'
          ],
          correctAnswer: 'D'
        },
        {
          question: 'Which constant below has type char?',
          options: [
            'A) \'*\'',
            'B) "*"',
            'C) 42',
            'D) false'
          ],
          correctAnswer: 'A'
        },
        {
          question: 'Which of the following is a valid declaration of several variables of the same type in C++?',
          options: [
            'A) int a, b, c;',
            'B) int a; b; c;',
            'C) a, b, c int;',
            'D) int (a, b), c;'
          ],
          correctAnswer: 'A'
        },
        {
          question: 'What is the result of the logical expression !false || (false && true)?',
          options: [
            'A) true',
            'B) false',
            'C) 0',
            'D) It is a compilation error.'
          ],
          correctAnswer: 'A'
        },
        {
          question: 'Which of the following describes a constant in C++?',
          options: [
            'A) A named quantity whose value may change during program execution',
            'B) A named quantity whose value cannot change during program execution',
            'C) Any integer literal',
            'D) Any variable of type int'
          ],
          correctAnswer: 'B'
        },
        {
          question: 'Which of the following declarations correctly describes a constant named Pi of type float with value 3.14?',
          options: [
            'A) const float Pi = 3.14;',
            'B) float const Pi;',
            'C) float Pi = const 3.14;',
            'D) constant float Pi = 3.14;'
          ],
          correctAnswer: 'A'
        }
      ],
      trueFalse: [
        {
          statement: 'The ordinal number of an int value is the value itself.',
          answer: true
        },
        {
          statement: 'When an integer value is assigned to a bool variable, 0 becomes false and any non-zero value becomes true.',
          answer: true
        },
        {
          statement: 'Relational operators like < and == can be applied to values of any ordinal type (such as int, char, or enum).',
          answer: true
        },
        {
          statement: 'The void type can be used for a function that has no parameters and no return value.',
          answer: true
        },
        {
          statement: 'In C++, the expression Green < Violet is evaluated by comparing the names of the enumerators alphabetically.',
          answer: false
        },
        {
          statement: 'The char type in C++ is actually an integer type represented by one byte.',
          answer: true
        }
      ],
      codingTasks: [
        {
          title: 'Work with values of several simple types',
          topic: 'data-types',
          description:
            'a) Write a small C++ program that:\n' +
            '- declares variables int a; float b; bool c; char d;,\n' +
            '- assigns sample values to each variable,\n' +
            '- prints the values of all four variables on the screen.\n\n' +
            'b) Add instructions that cast char d to int and bool c to int and print these integer values.\n' +
            '   Explain what integer values you expect for d and for c.'
        },
        {
          title: 'Use an anonymous enumerated type for days of the week',
          topic: 'variables',
          description:
            'a) Declare an anonymous enumerated type with the days of the week:\n' +
            'enum {M, Tu, W, Th, F, Sa, Su} day;\n\n' +
            'b) Write a program fragment that assigns the value W to day and prints its ordinal number.'
        },
        {
          title: 'Use integer constants to improve readability',
          topic: 'constants',
          description:
            'a) Declare a constant named PageLength of type int with value 40.\n' +
            'b) Declare a constant named CharacterCount of type int with value 60.\n' +
            'c) Explain in a short comment how such constants can improve the readability of a program.'
        }
      ]
    }
  ]
};
