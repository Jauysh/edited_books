/**
 * Google Apps Script for Automated Exam Form Creation
 * Complete solution for creating Google Forms from exam questions
 * 
 * INSTRUCTIONS:
 * 1. Copy this entire file to Google Apps Script (script.google.com)
 * 2. Save the project
 * 3. Run the main() function
 * 4. Check execution logs for form URLs
 * 5. Share forms with students and teachers
 */

// Main execution function - RUN THIS FIRST
function main() {
  try {
    // Create all exam forms
    createAllExamForms();
    
    // Create answer key forms
    createAnswerKeyForms();
    
    // List all created forms
    const forms = listCreatedForms();
    Logger.log('🎉 Created forms:');
    forms.forEach(form => {
      Logger.log(`- ${form.name}: ${form.publishedUrl}`);
    });
    
    return '✅ Exam forms created successfully! Check logs for URLs.';
    
  } catch (error) {
    Logger.log(`❌ Error in main execution: ${error.toString()}`);
    return `Error: ${error.toString()}`;
  }
}

// Test function - Use this to test with single variant first
function testFormCreation() {
  const examContent = getExamContent();
  const singleVariant = [examContent.variants[0]];
  const testContent = { variants: singleVariant };
  const examVariants = parseExamVariants(testContent);
  
  if (examVariants.length > 0) {
    createExamForm(examVariants[0], 1);
    Logger.log('✅ Test form created successfully');
  }
}

// Core functions
function createAllExamForms() {
  try {
    const examContent = getExamContent();
    const examVariants = parseExamVariants(examContent);
    
    examVariants.forEach((variant, index) => {
      createExamForm(variant, index + 1);
    });
    
    Logger.log(`✅ Successfully created ${examVariants.length} exam forms`);
    
  } catch (error) {
    Logger.log(`❌ Error creating exam forms: ${error.toString()}`);
    throw error;
  }
}

function createExamForm(variant, variantNumber) {
  try {
    const formTitle = `Programming Fundamentals Exam - Variant ${variantNumber}`;
    const form = FormApp.create(formTitle);
    
    // Form settings
    form.setDescription(`Programming Fundamentals Examination (35 minutes)\nVariant ${variantNumber}\n\nInstructions:\n- Part 1: Theoretical Questions (20 minutes)\n- Part 2: Practical Tasks (20 minutes)\n- Total time: 35 minutes`);
    form.setAllowResponseEdits(false);
    form.setLimitOneResponsePerUser(true);
    form.setProgressBar(true);
    form.setConfirmationMessage('Thank you for completing the exam!');
    
    // Student information
    form.addPageBreakItem().setTitle('Student Information');
    form.addTextItem().setTitle('Full Name').setRequired(true);
    form.addTextItem().setTitle('Student ID').setRequired(true);
    form.addTextItem().setTitle('Class/Group').setRequired(true);
    
    // Part 1: Theoretical Questions
    form.addPageBreakItem().setTitle('Part 1: Theoretical Questions (20 minutes)');
    variant.theoreticalQuestions.forEach((question, index) => {
      const mcItem = form.addMultipleChoiceItem();
      mcItem.setTitle(`Question ${index + 1}`)
        .setChoices(question.options.map(option => mcItem.createChoice(option)))
        .setRequired(true);
    });
    
    // Part 2: Practical Tasks
    form.addPageBreakItem().setTitle('Part 2: Practical Tasks (20 minutes)');
    variant.practicalTasks.forEach((task, index) => {
      if (task.type === 'programming') {
        const textItem = form.addParagraphTextItem();
        textItem.setTitle(`Task ${index + 1}: Programming`)
          .setHelpText(task.description)
          .setRequired(true);
      } else if (task.type === 'identification') {
        const checkboxItem = form.addCheckboxItem();
        checkboxItem.setTitle(`Task ${index + 1}: Identification`)
          .setChoices(task.options.map(option => checkboxItem.createChoice(option)))
          .setRequired(true);
      } else if (task.type === 'bnf') {
        const textItem = form.addParagraphTextItem();
        textItem.setTitle(`Task ${index + 1}: BNF Rule`)
          .setHelpText(task.description)
          .setRequired(true);
      }
    });
    
    const formUrl = form.getPublishedUrl();
    Logger.log(`✅ Created form for Variant ${variantNumber}: ${formUrl}`);
    return formUrl;
    
  } catch (error) {
    Logger.log(`❌ Error creating form for variant ${variantNumber}: ${error.toString()}`);
    throw error;
  }
}

function createAnswerKeyForms() {
  const examContent = getExamContent();
  const examVariants = parseExamVariants(examContent);
  
  examVariants.forEach((variant, index) => {
    createAnswerKeyForm(variant, index + 1);
  });
}

function createAnswerKeyForm(variant, variantNumber) {
  const formTitle = `Answer Key - Programming Fundamentals Exam - Variant ${variantNumber}`;
  const form = FormApp.create(formTitle);
  
  form.setDescription(`Answer Key for Programming Fundamentals Examination - Variant ${variantNumber}`);
  
  // Theoretical questions answer key
  form.addPageBreakItem().setTitle('Theoretical Questions Answer Key');
  variant.theoreticalQuestions.forEach((question, index) => {
    const textItem = form.addTextItem();
    textItem.setTitle(`Question ${index + 1}`)
      .setHelpText(`Question: ${question.question}\nCorrect Answer: ${question.correctAnswer}`);
  });
  
  // Practical tasks answer key
  form.addPageBreakItem().setTitle('Practical Tasks Answer Key');
  variant.practicalTasks.forEach((task, index) => {
    const textItem = form.addParagraphTextItem();
    let answerText = `Task ${index + 1}: ${task.description}\n\n`;
    
    if (task.type === 'programming') {
      answerText += `Expected Answer:\n${task.expectedAnswer}`;
    } else if (task.type === 'identification') {
      answerText += `Correct Answers: ${task.correctAnswers.join(', ')}`;
    } else if (task.type === 'bnf') {
      answerText += `Expected BNF Rule:\n${task.expectedAnswer}`;
    }
    
    textItem.setTitle(`Task ${index + 1}`).setHelpText(answerText);
  });
  
  const formUrl = form.getPublishedUrl();
  Logger.log(`✅ Created answer key form for Variant ${variantNumber}: ${formUrl}`);
  return formUrl;
}

// Utility functions
function listCreatedForms() {
  const forms = [];
  const files = DriveApp.getFilesByType(MimeType.GOOGLE_FORMS);
  
  while (files.hasNext()) {
    const file = files.next();
    if (file.getName().includes('Programming Fundamentals Exam')) {
      forms.push({
        name: file.getName(),
        url: `https://docs.google.com/forms/d/${file.getId()}/edit`,
        publishedUrl: `https://docs.google.com/forms/d/${file.getId()}/viewform`
      });
    }
  }
  
  return forms;
}

function getExamContent() {
  return EXAM_DATA;
}

function parseExamVariants(content) {
  return content.variants;
}

// Complete Exam Data for all 5 variants
const EXAM_DATA = {
  variants: [
    // Variant 1
    {
      number: 1,
      theoreticalQuestions: [
        {
          question: "Which definition best describes an algorithm?",
          options: ["A) A sequence of mathematical calculations", "B) A finite set of precise instructions for solving a problem", "C) A computer program written in C++", "D) A system of computer hardware commands"],
          correctAnswer: "B"
        },
        {
          question: "What are the primary commands available to the Kangaroo performer?",
          options: ["A) UP, DOWN, RIGHT, LEFT", "B) STEP, TURN, JUMP", "C) ADD, SUBTRACT, DIVIDE", "D) IF, THEN, ELSE"],
          correctAnswer: "B"
        },
        {
          question: "What distinguishes manual control mode from automatic control mode?",
          options: ["A) Manual mode typically requires more execution time", "B) Manual executes commands individually, automatic executes sequences", "C) Automatic mode requires prior programming knowledge", "D) Both modes operate identically"],
          correctAnswer: "B"
        },
        {
          question: "What constitutes a computer program?",
          options: ["A) An algorithm expressed in natural language", "B) A sequence of instructions for automated execution", "C) A mathematical expression or formula", "D) A software application package"],
          correctAnswer: "B"
        },
        {
          question: "What is the primary purpose of syntax diagrams?",
          options: ["A) To create visual representations of algorithms", "B) To provide graphical syntax descriptions for programming languages", "C) To illustrate data structure organization", "D) To demonstrate program execution flow"],
          correctAnswer: "B"
        },
        {
          question: "What process does compilation represent?",
          options: ["A) Program creation and development", "B) Translation from high-level to machine language", "C) Error detection and correction", "D) Program testing and validation"],
          correctAnswer: "B"
        },
        {
          question: "Which languages are classified as high-level programming languages?",
          options: ["A) Machine code and assembly language", "B) C++, Pascal, and Java", "C) Binary numerical representations", "D) Hardware-specific instruction sets"],
          correctAnswer: "B"
        },
        {
          question: "What defines an identifier in programming?",
          options: ["A) A punctuation or operator symbol", "B) A name assigned to variables, functions, or constants", "C) A numerical value or literal", "D) A language-reserved keyword"],
          correctAnswer: "B"
        },
        {
          question: "Which operator handles standard output in C++?",
          options: ["A) cin (console input)", "B) cout (console output)", "C) printf (formatted print)", "D) display (screen output)"],
          correctAnswer: "B"
        },
        {
          question: "What semantic meaning does the ::= symbol carry in BNF notation?",
          options: ["A) Mathematical equality", "B) Definition or \"is defined as\"", "C) Variable assignment operation", "D) Comparative relationship"],
          correctAnswer: "B"
        }
      ],
      practicalTasks: [
        {
          type: "programming",
          description: "Implement a C++ program that outputs \"Hello, world!\" to the console",
          expectedAnswer: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"Hello, world!\" << endl;\n    return 0;\n}"
        },
        {
          type: "identification",
          description: "Identify valid C++ identifiers from the following:",
          options: ["A) myVariable", "B) 1variable", "C) variable-1", "D) variable1"],
          correctAnswers: ["A", "D"]
        },
        {
          type: "bnf",
          description: "Construct a BNF production rule for decimal digits (0-9)",
          expectedAnswer: "<Digit> ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9"
        }
      ]
    },
    // Variant 2
    {
      number: 2,
      theoreticalQuestions: [
        {
          question: "In computer science, what characterizes a performer?",
          options: ["A) A human programmer developing software", "B) An entity capable of executing predefined commands", "C) A malicious software program", "D) A programming language specification"],
          correctAnswer: "B"
        },
        {
          question: "What command repertoire does the Ant performer possess?",
          options: ["A) STEP, TURN, JUMP", "B) UP, DOWN, RIGHT, LEFT", "C) ADD, SUBTRACT, DIVIDE", "D) IF, THEN, ELSE"],
          correctAnswer: "B"
        },
        {
          question: "What fundamental process does compilation involve?",
          options: ["A) Source code creation and editing", "B) Translation to executable machine code", "C) Syntax and semantic error resolution", "D) Program execution and testing"],
          correctAnswer: "B"
        },
        {
          question: "What principal advantage do high-level languages provide?",
          options: ["A) Enhanced execution speed performance", "B) Simplified software development process", "C) Reduced memory consumption", "D) Natural language comprehension"],
          correctAnswer: "B"
        },
        {
          question: "How are terminal symbols depicted in syntax diagrams?",
          options: ["A) Rectangular boxes", "B) Circular or oval shapes", "C) Triangular forms", "D) Square outlines"],
          correctAnswer: "B"
        },
        {
          question: "What does algorithmization encompass?",
          options: ["A) Software implementation and coding", "B) Systematic algorithm development", "C) Computer hardware study", "D) Database management operations"],
          correctAnswer: "B"
        },
        {
          question: "What constitutes a performer's command system?",
          options: ["A) A collection of software programs", "B) The complete set of executable commands", "C) Operating system components", "D) Programming language elements"],
          correctAnswer: "B"
        },
        {
          question: "Which operator manages standard input in C++?",
          options: ["A) cout (console output)", "B) cin (console input)", "C) input (data acquisition)", "D) read (data retrieval)"],
          correctAnswer: "B"
        },
        {
          question: "What defines terminal symbols in BNF grammar?",
          options: ["A) Fundamental program constituents", "B) Abstract grammatical categories", "C) Language-reserved words", "D) Explanatory annotations"],
          correctAnswer: "A"
        },
        {
          question: "What information does each syntax diagram path convey?",
          options: ["A) Problem-solving methodology", "B) Valid syntactic constructions", "C) Program architectural design", "D) Logical operation sequences"],
          correctAnswer: "B"
        }
      ],
      practicalTasks: [
        {
          type: "programming",
          description: "Develop a C++ program displaying your personal name",
          expectedAnswer: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"John\" << endl;\n    return 0;\n}"
        },
        {
          type: "identification",
          description: "Recognize special operator symbols in C++:",
          options: ["A) Addition operator (+)", "B) Subtraction operator (-)", "C) Multiplication operator (*)", "D) Division operator (/)"],
          correctAnswers: ["A", "B", "C", "D"]
        },
        {
          type: "bnf",
          description: "Formulate a BNF rule for Latin alphabet characters",
          expectedAnswer: "<Letter> ::= a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z"
        }
      ]
    },
    // Variant 3
    {
      number: 3,
      theoreticalQuestions: [
        {
          question: "What conceptual process does algorithmization represent?",
          options: ["A) Program implementation and testing", "B) Structured algorithm creation", "C) Computational theory study", "D) Information system design"],
          correctAnswer: "B"
        },
        {
          question: "What comprises a performer's command repertoire?",
          options: ["A) Software application collection", "B) Available instruction set", "C) System software components", "D) Programming language syntax"],
          correctAnswer: "B"
        },
        {
          question: "Which languages demonstrate high-level programming characteristics?",
          options: ["A) Machine-level instruction sets", "B) C++, Pascal, Java platforms", "C) Binary encoding systems", "D) Assembly language dialects"],
          correctAnswer: "B"
        },
        {
          question: "What essential activity defines programming?",
          options: ["A) Computer architecture analysis", "B) Software development process", "C) Network communication", "D) Web application creation"],
          correctAnswer: "B"
        },
        {
          question: "How are non-terminal symbols represented syntactically?",
          options: ["A) Circular or oval containers", "B) Rectangular enclosures", "C) Triangular markers", "D) Diamond shapes"],
          correctAnswer: "B"
        },
        {
          question: "What characterizes machine language?",
          options: ["A) Human-readable text format", "B) Binary instruction sequences", "C) Natural language expressions", "D) Symbolic communication"],
          correctAnswer: "B"
        },
        {
          question: "What sequential stages comprise computer problem-solving?",
          options: ["A) Exclusive program implementation", "B) Algorithm design, implementation, compilation, debugging", "C) Compilation process only", "D) Program execution exclusively"],
          correctAnswer: "B"
        },
        {
          question: "What functional purpose does BNF metalanguage serve?",
          options: ["A) Software development", "B) Formal syntax specification", "C) Database management", "D) Web technology"],
          correctAnswer: "B"
        },
        {
          question: "What distinguishes terminal symbols in formal grammar?",
          options: ["A) Basic lexical elements", "B) Abstract syntactic categories", "C) Reserved vocabulary", "D) Documentation elements"],
          correctAnswer: "A"
        },
        {
          question: "What representational method applies to BNF syntax diagrams?",
          options: ["A) Flowchart methodology", "B) Graphical plotting", "C) Geometric shape combinations", "D) Tabular arrangements"],
          correctAnswer: "C"
        }
      ],
      practicalTasks: [
        {
          type: "programming",
          description: "Create a C++ program outputting numerical sequence 1-3",
          expectedAnswer: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"1\" << endl;\n    cout << \"2\" << endl;\n    cout <<
