/**
 * Google Apps Script for Automated Exam Form Creation
 * Creates Google Forms for 11th Grade Computer Science Exams
 * Based on final_exam_variants_with_part3.md
 */

function createAllExamForms() {
  try {
    // Create forms for all 5 variants
    for (let variant = 1; variant <= 5; variant++) {
      createExamForm(variant);
    }
    
    Logger.log('Successfully created all 5 exam forms');
  } catch (error) {
    Logger.log('Error creating forms: ' + error.toString());
  }
}

function createExamForm(variantNumber) {
  // Create a new Google Form
  const formTitle = `11th Grade Computer Science Exam - Variant ${variantNumber}`;
  const formDescription = `Final Exam - Composite Data Types\nDuration: 35 minutes\nTotal Points: 27`;
  
  const form = FormApp.create(formTitle);
  form.setDescription(formDescription);
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(true);
  form.setProgressBar(true);
  form.setConfirmationMessage('Thank you for completing the exam! Your responses have been recorded.');
  
  // Add form settings
  form.setCollectEmail(true);
  form.setRequireLogin(true);
  
  // Create sections for each part
  createPart1Section(form, variantNumber);
  createPart2Section(form, variantNumber);
  createPart3Section(form, variantNumber);
  
  // Log the form URL
  const formUrl = form.getPublishedUrl();
  Logger.log(`Created Variant ${variantNumber}: ${formUrl}`);
  
  return form;
}

function createPart1Section(form, variant) {
  // Part 1: Theory Questions (5 points, 10 minutes)
  const section = form.addPageBreakItem();
  section.setTitle(`Part 1: Theory Questions (10 minutes, 5 points)`);
  section.setHelpText('Answer all multiple choice questions. Each question is worth 1 point.');
  
  const questions = getPart1Questions(variant);
  
  questions.forEach((questionData, index) => {
    const question = form.addMultipleChoiceItem();
    question.setTitle(`Question ${index + 1}: ${questionData.question}`)
            .setChoices(questionData.choices.map(choice => 
              question.createChoice(choice.text, choice.isCorrect)
            ))
            .setRequired(true);
  });
}

function createPart2Section(form, variant) {
  // Part 2: Practical Programming (12 points, 15 minutes)
  const section = form.addPageBreakItem();
  section.setTitle(`Part 2: Practical Programming (15 minutes, 12 points)`);
  section.setHelpText('Choose 2 out of 3 programming tasks. Each task is worth 6 points.');
  
  const tasks = getPart2Tasks(variant);
  
  tasks.forEach((taskData, index) => {
    const question = form.addParagraphTextItem();
    question.setTitle(`Task ${String.fromCharCode(65 + index)}: ${taskData.title}`)
            .setHelpText(taskData.description)
            .setRequired(false); // Not required since they choose 2 out of 3
  });
}

function createPart3Section(form, variant) {
  // Part 3: Theory Application (10 points, 10 minutes)
  const section = form.addPageBreakItem();
  section.setTitle(`Part 3: Theory Application (10 minutes, 10 points)`);
  section.setHelpText('Answer both theory application questions. Each question is worth 5 points.');
  
  const questions = getPart3Questions(variant);
  
  questions.forEach((questionData, index) => {
    const question = form.addParagraphTextItem();
    question.setTitle(`Question ${index + 1}: ${questionData.question}`)
            .setHelpText(`Points: 5\nExpected length: ${questionData.expectedLength}`)
            .setRequired(true);
  });
}

function getPart1Questions(variant) {
  // Define questions for each variant
  const allQuestions = {
    1: [
      {
        question: "Which of these is a simple data type?",
        choices: [
          { text: "integer", isCorrect: true },
          { text: "array", isCorrect: false },
          { text: "string", isCorrect: false },
          { text: "matrix", isCorrect: false }
        ]
      },
      {
        question: "What is the purpose of composite data types?",
        choices: [
          { text: "To store single values", isCorrect: false },
          { text: "To aggregate multiple simple data into one structure", isCorrect: true },
          { text: "To perform mathematical operations", isCorrect: false },
          { text: "To declare variables", isCorrect: false }
        ]
      },
      {
        question: "For storing daily electricity consumption for a month, which data structure is appropriate?",
        choices: [
          { text: "Single float variable", isCorrect: false },
          { text: "One-dimensional array", isCorrect: true },
          { text: "Two-dimensional array", isCorrect: false },
          { text: "Character", isCorrect: false }
        ]
      },
      {
        question: "In C++, array indices start from:",
        choices: [
          { text: "0", isCorrect: true },
          { text: "1", isCorrect: false },
          { text: "-1", isCorrect: false },
          { text: "Programmer's choice", isCorrect: false }
        ]
      },
      {
        question: "Which represents composite data?",
        choices: [
          { text: "3.14", isCorrect: false },
          { text: "\"Student Name\"", isCorrect: true },
          { text: "true", isCorrect: false },
          { text: "'A'", isCorrect: false }
        ]
      }
    ],
    2: [
      {
        question: "Which is NOT a simple data type?",
        choices: [
          { text: "char", isCorrect: false },
          { text: "float", isCorrect: false },
          { text: "array", isCorrect: true },
          { text: "boolean", isCorrect: false }
        ]
      },
      {
        question: "What character marks the end of a C-style string?",
        choices: [
          { text: "'\\n'", isCorrect: false },
          { text: "' '", isCorrect: false },
          { text: "'\\0'", isCorrect: true },
          { text: "'end'", isCorrect: false }
        ]
      },
      {
        question: "For representing monthly electricity consumption for a year, which data structure is appropriate?",
        choices: [
          { text: "Single variable", isCorrect: false },
          { text: "One-dimensional array", isCorrect: false },
          { text: "Two-dimensional array", isCorrect: true },
          { text: "Character", isCorrect: false }
        ]
      },
      {
        question: "What is the correct way to declare a one-dimensional array of 10 integers?",
        choices: [
          { text: "int array[10];", isCorrect: true },
          { text: "array int[10];", isCorrect: false },
          { text: "int[10] array;", isCorrect: false },
          { text: "array[10] int;", isCorrect: false }
        ]
      },
      {
        question: "Which data type would you use to store a student's full name?",
        choices: [
          { text: "int", isCorrect: false },
          { text: "float", isCorrect: false },
          { text: "char array or string", isCorrect: true },
          { text: "bool", isCorrect: false }
        ]
      }
    ],
    3: [
      {
        question: "Simple data types include:",
        choices: [
          { text: "integer, float, char, boolean", isCorrect: true },
          { text: "array, string, matrix", isCorrect: false },
          { text: "only numbers", isCorrect: false },
          { text: "only characters", isCorrect: false }
        ]
      },
      {
        question: "The main difference between simple and composite data types is:",
        choices: [
          { text: "Simple types are faster", isCorrect: false },
          { text: "Composite types aggregate multiple values", isCorrect: true },
          { text: "Simple types use less memory", isCorrect: false },
          { text: "Composite types are only for numbers", isCorrect: false }
        ]
      },
      {
        question: "For storing temperature measurements every hour for 24 hours, which is appropriate?",
        choices: [
          { text: "24 separate variables", isCorrect: false },
          { text: "One-dimensional array of size 24", isCorrect: true },
          { text: "Two-dimensional array", isCorrect: false },
          { text: "Single variable", isCorrect: false }
        ]
      },
      {
        question: "Which library is needed for string type in C++?",
        choices: [
          { text: "<iostream>", isCorrect: false },
          { text: "<string>", isCorrect: true },
          { text: "<cstring>", isCorrect: false },
          { text: "<array>", isCorrect: false }
        ]
      },
      {
        question: "What is the maximum number of significant characters in char name[20]?",
        choices: [
          { text: "20", isCorrect: false },
          { text: "19", isCorrect: true },
          { text: "21", isCorrect: false },
          { text: "Unlimited", isCorrect: false }
        ]
      }
    ],
    4: [
      {
        question: "Composite data types are formed by:",
        choices: [
          { text: "Aggregating simple data", isCorrect: true },
          { text: "Using only numbers", isCorrect: false },
          { text: "Using only characters", isCorrect: false },
          { text: "Declaring multiple variables", isCorrect: false }
        ]
      },
      {
        question: "In the electricity consumption example, why is a composite type necessary?",
        choices: [
          { text: "To store single values", isCorrect: false },
          { text: "To store multiple related daily consumption values", isCorrect: true },
          { text: "To perform calculations faster", isCorrect: false },
          { text: "To use less memory", isCorrect: false }
        ]
      },
      {
        question: "Which function is used to read strings with spaces?",
        choices: [
          { text: "cin >>", isCorrect: false },
          { text: "getline()", isCorrect: true },
          { text: "scanf()", isCorrect: false },
          { text: "read()", isCorrect: false }
        ]
      },
      {
        question: "What is the correct way to initialize an array?",
        choices: [
          { text: "int arr[] = {1,2,3};", isCorrect: true },
          { text: "arr int[] = {1,2,3};", isCorrect: false },
          { text: "int[] arr = 1,2,3;", isCorrect: false },
          { text: "int arr = [1,2,3];", isCorrect: false }
        ]
      },
      {
        question: "For storing student names in a class list, which is appropriate?",
        choices: [
          { text: "Array of integers", isCorrect: false },
          { text: "Array of floats", isCorrect: false },
          { text: "Array of strings", isCorrect: true },
          { text: "Single string", isCorrect: false }
        ]
      }
    ],
    5: [
      {
        question: "Examples of composite data types include:",
        choices: [
          { text: "arrays and strings", isCorrect: true },
          { text: "integers and floats", isCorrect: false },
          { text: "characters and booleans", isCorrect: false },
          { text: "only arrays", isCorrect: false }
        ]
      },
      {
        question: "The strcat() function is used to:",
        choices: [
          { text: "Compare strings", isCorrect: false },
          { text: "Copy strings", isCorrect: false },
          { text: "Concatenate strings", isCorrect: true },
          { text: "Find string length", isCorrect: false }
        ]
      },
      {
        question: "Why might we declare an array with size 32 for 31 days of monthly data?",
        choices: [
          { text: "To waste memory", isCorrect: false },
          { text: "To make indexing more intuitive (use index 1-31)", isCorrect: true },
          { text: "To store extra data", isCorrect: false },
          { text: "Because arrays must have even size", isCorrect: false }
        ]
      },
      {
        question: "Which is correct for string type operations?",
        choices: [
          { text: "string1 + string2", isCorrect: true },
          { text: "string1 * string2", isCorrect: false },
          { text: "string1 - string2", isCorrect: false },
          { text: "string1 / string2", isCorrect: false }
        ]
      },
      {
        question: "What is the advantage of string type over char arrays?",
        choices: [
          { text: "Fixed size", isCorrect: false },
          { text: "Manual memory management", isCorrect: false },
          { text: "Automatic memory management", isCorrect: true },
          { text: "Faster execution", isCorrect: false }
        ]
      }
    ]
  };
  
  return allQuestions[variant] || allQuestions[1];
}

function getPart2Tasks(variant) {
  const allTasks = {
    1: [
      {
        title: "Array Sum Calculation",
        description: "Write a program that reads 5 integers into an array and calculates their sum."
      },
      {
        title: "Student Name Display",
        description: "Write a program that declares a student name using char array and displays it."
      },
      {
        title: "Matrix Sum Calculation",
        description: "Write a program that reads a 2x3 matrix and calculates the sum of all elements."
      }
    ],
    2: [
      {
        title: "Find Largest Number",
        description: "Write a program that reads 5 integers and finds the largest number."
      },
      {
        title: "Name and Surname Input",
        description: "Write a program that reads two strings (name and surname) and displays them."
      },
      {
        title: "Array Copy",
        description: "Write a program that copies an array to another array."
      }
    ],
    3: [
      {
        title: "Daily Income Total",
        description: "Write a program that reads daily income for 5 days and calculates total income."
      },
      {
        title: "String Copy Function",
        description: "Write a program that uses strcpy function to copy one string to another."
      },
      {
        title: "Average Temperature",
        description: "Write a program that reads 5 temperatures and finds the average temperature."
      }
    ],
    4: [
      {
        title: "Electricity Consumption Display",
        description: "Write a program that reads electricity consumption for 3 days and displays each day's consumption."
      },
      {
        title: "Name Concatenation",
        description: "Write a program that uses string type to concatenate first and last name."
      },
      {
        title: "Count Positive Numbers",
        description: "Write a program that counts how many numbers in an array are positive."
      }
    ],
    5: [
      {
        title: "String to Char Array Conversion",
        description: "Write a program that converts a string to char array using c_str()."
      },
      {
        title: "Student Names Input",
        description: "Write a program that reads 3 student names and displays them."
      },
      {
        title: "Array Average Calculation",
        description: "Write a program that calculates average of 5 array elements."
      }
    ]
  };
  
  return allTasks[variant] || allTasks[1];
}

function getPart3Questions(variant) {
  const allQuestions = {
    1: [
      {
        question: "What is the difference between simple data types and composite data types? Give one example of each.",
        expectedLength: "3-5 sentences with examples"
      },
      {
        question: "For storing daily electricity consumption for a month, which data structure would you use and why?",
        expectedLength: "2-3 sentences with reasoning"
      }
    ],
    2: [
      {
        question: "Give two examples of simple data types and two examples of composite data types.",
        expectedLength: "4 examples total with brief explanations"
      },
      {
        question: "What is the purpose of the '\\0' character in C-style strings?",
        expectedLength: "2-3 sentences explaining its function"
      }
    ],
    3: [
      {
        question: "What is an array and why is it useful for storing related data?",
        expectedLength: "3-4 sentences with practical example"
      },
      {
        question: "Name two string functions in C++ and explain what each one does.",
        expectedLength: "Brief explanation of two functions"
      }
    ],
    4: [
      {
        question: "What is the difference between one-dimensional and two-dimensional arrays? Give one example use for each.",
        expectedLength: "2-3 sentences with examples"
      },
      {
        question: "Why do we need both char arrays and string type in C++?",
        expectedLength: "2-3 sentences explaining different use cases"
      }
    ],
    5: [
      {
        question: "What are the two ways to represent strings in C++ and when would you use each?",
        expectedLength: "3-4 sentences with usage scenarios"
      },
      {
        question: "Why is it important to use composite data types instead of many separate variables?",
        expectedLength: "2-3 sentences with practical benefits"
      }
    ]
  };
  
  return allQuestions[variant] || allQuestions[1];
}

// Utility function to create a single specific variant
function createSpecificVariant(variantNumber) {
  if (variantNumber < 1 || variantNumber > 5) {
    Logger.log('Invalid variant number. Please use 1-5.');
    return;
  }
  createExamForm(variantNumber);
}

// Function to set up quiz grading (manual for now - Google Forms auto-grading can be added)
function setupQuizGrading(form) {
  // Note: Google Forms has built-in quiz functionality that can be enabled
  // This would require setting correct answers for multiple choice questions
  // For now, we'll rely on manual grading for programming and theory questions
  Logger.log('Quiz grading setup: Manual grading required for programming and theory questions');
}

// Function to export form URLs to a spreadsheet
function exportFormUrlsToSheet() {
  try {
    const ss = SpreadsheetApp.create('Exam Form URLs - ' + new Date().toISOString());
    const sheet = ss.getActiveSheet();
    
    sheet.getRange('A1:C1').setValues([['Variant', 'Form Title', 'Form URL']]);
    
    for (let variant = 1; variant <= 5; variant++) {
      const form = createExamForm(variant);
      const formUrl = form.getPublishedUrl();
      const editUrl = form.getEditUrl();
      
      sheet.getRange(variant + 1, 1, 1, 3).setValues([[
        `Variant ${variant}`,
        form.getTitle(),
        formUrl
      ]]);
    }
    
    Logger.log('Form URLs exported to: ' + ss.getUrl());
    return ss.getUrl();
  } catch (error) {
    Logger.log('Error exporting URLs: ' + error.toString());
  }
}

// Main execution function with user interface
function onOpen() {
  // This function creates a custom menu in Google Sheets/Forms
  try {
    FormApp.getUi().createMenu('Exam Creator')
      .addItem('Create All Variants', 'createAllExamForms')
      .addItem('Create Variant 1', 'createVariant1')
      .addItem('Create Variant 2', 'createVariant2')
      .addItem('Create Variant 3', 'createVariant3')
      .addItem('Create Variant 4', 'createVariant4')
      .addItem('Create Variant 5', 'createVariant5')
      .addItem('Export URLs to Sheet', 'exportFormUrlsToSheet')
      .addToUi();
  } catch (e) {
    // If not in Forms context, try Sheets
    try {
      SpreadsheetApp.getUi().createMenu('Exam Creator')
        .addItem('Create All Variants', 'createAllExamForms')
        .addItem('Create Variant 1', 'createVariant1')
        .addItem('Create Variant 2', 'createVariant2')
        .addItem('Create Variant 3', 'createVariant3')
        .addItem('Create Variant 4', 'createVariant4')
        .addItem('Create Variant 5', 'createVariant5')
        .addItem('Export URLs to Sheet', 'exportFormUrlsToSheet')
        .addToUi();
    } catch (e2) {
      Logger.log('Could not create menu: ' + e2.toString());
    }
  }
}

// Individual variant creation functions for menu
function createVariant1() { createSpecificVariant(1); }
function createVariant2() { createSpecificVariant(2); }
function createVariant3() { createSpecificVariant(3); }
function createVariant4() { createSpecificVariant(4); }
function createVariant5() { createSpecificVariant(5); }
