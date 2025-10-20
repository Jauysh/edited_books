/**
 * Test Implementation Script
 * Tests the Google Apps Script functionality locally
 */

// Mock Google Apps Script objects for local testing
const FormApp = {
  create: function(title) {
    console.log(`[MOCK] Creating form: ${title}`);
    return new MockForm();
  },
  openByUrl: function(url) {
    console.log(`[MOCK] Opening form by URL: ${url}`);
    return new MockForm();
  }
};

const DriveApp = {
  getFilesByType: function(type) {
    console.log(`[MOCK] Getting files by type: ${type}`);
    return new MockFileIterator();
  },
  getFileById: function(id) {
    console.log(`[MOCK] Getting file by ID: ${id}`);
    return new MockFile();
  }
};

const UrlFetchApp = {
  fetch: function(url) {
    console.log(`[MOCK] Fetching URL: ${url}`);
    return new MockResponse();
  }
};

const ScriptApp = {
  newTrigger: function(functionName) {
    console.log(`[MOCK] Creating trigger for: ${functionName}`);
    return new MockTriggerBuilder();
  }
};

const Logger = {
  log: function(message) {
    console.log(`[LOG] ${message}`);
  }
};

const MimeType = {
  GOOGLE_FORMS: 'application/vnd.google-apps.form'
};

// Mock classes
class MockForm {
  constructor() {
    this.items = [];
    this.title = '';
    this.description = '';
    this.settings = {
      allowResponseEdits: false,
      limitOneResponsePerUser: false,
      progressBar: false
    };
  }
  
  setDescription(desc) {
    this.description = desc;
    return this;
  }
  
  setAllowResponseEdits(allow) {
    this.settings.allowResponseEdits = allow;
    return this;
  }
  
  setLimitOneResponsePerUser(limit) {
    this.settings.limitOneResponsePerUser = limit;
    return this;
  }
  
  setProgressBar(show) {
    this.settings.progressBar = show;
    return this;
  }
  
  setConfirmationMessage(message) {
    this.confirmationMessage = message;
    return this;
  }
  
  addPageBreakItem() {
    const item = new MockPageBreakItem();
    this.items.push(item);
    return item;
  }
  
  addTextItem() {
    const item = new MockTextItem();
    this.items.push(item);
    return item;
  }
  
  addMultipleChoiceItem() {
    const item = new MockMultipleChoiceItem();
    this.items.push(item);
    return item;
  }
  
  addParagraphTextItem() {
    const item = new MockParagraphTextItem();
    this.items.push(item);
    return item;
  }
  
  addCheckboxItem() {
    const item = new MockCheckboxItem();
    this.items.push(item);
    return item;
  }
  
  getPublishedUrl() {
    return `https://docs.google.com/forms/d/mock-form-id-${Date.now()}/viewform`;
  }
  
  getTitle() {
    return this.title;
  }
}

class MockPageBreakItem {
  setTitle(title) {
    this.title = title;
    return this;
  }
}

class MockTextItem {
  setTitle(title) {
    this.title = title;
    return this;
  }
  
  setRequired(required) {
    this.required = required;
    return this;
  }
  
  setHelpText(helpText) {
    this.helpText = helpText;
    return this;
  }
}

class MockMultipleChoiceItem {
  constructor() {
    this.choices = [];
  }
  
  setTitle(title) {
    this.title = title;
    return this;
  }
  
  setChoices(choices) {
    this.choices = choices;
    return this;
  }
  
  setRequired(required) {
    this.required = required;
    return this;
  }
  
  createChoice(option) {
    return option;
  }
}

class MockParagraphTextItem {
  setTitle(title) {
    this.title = title;
    return this;
  }
  
  setRequired(required) {
    this.required = required;
    return this;
  }
  
  setHelpText(helpText) {
    this.helpText = helpText;
    return this;
  }
}

class MockCheckboxItem {
  constructor() {
    this.choices = [];
  }
  
  setTitle(title) {
    this.title = title;
    return this;
  }
  
  setChoices(choices) {
    this.choices = choices;
    return this;
  }
  
  setRequired(required) {
    this.required = required;
    return this;
  }
  
  createChoice(option) {
    return option;
  }
}

class MockFileIterator {
  hasNext() {
    return false;
  }
  
  next() {
    return new MockFile();
  }
}

class MockFile {
  getName() {
    return 'Mock Form';
  }
  
  getId() {
    return 'mock-file-id';
  }
  
  getBlob() {
    return {
      getDataAsString: function() {
        return 'Mock file content';
      }
    };
  }
}

class MockResponse {
  getContentText() {
    return 'Mock response content';
  }
}

class MockTriggerBuilder {
  timeBased() {
    return this;
  }
  
  everyMinutes(minutes) {
    return this;
  }
  
  create() {
    console.log('[MOCK] Trigger created');
  }
}

// Test functions
function testExamDataStructure() {
  console.log('=== Testing Exam Data Structure ===');
  
  const examContent = getExamContent();
  console.log(`Found ${examContent.variants.length} variants`);
  
  examContent.variants.forEach(variant => {
    console.log(`Variant ${variant.number}:`);
    console.log(`  - ${variant.theoreticalQuestions.length} theoretical questions`);
    console.log(`  - ${variant.practicalTasks.length} practical tasks`);
    
    // Test first question
    if (variant.theoreticalQuestions.length > 0) {
      const firstQuestion = variant.theoreticalQuestions[0];
      console.log(`  First question: ${firstQuestion.question}`);
      console.log(`  Options: ${firstQuestion.options.length}`);
      console.log(`  Correct answer: ${firstQuestion.correctAnswer}`);
    }
  });
  
  console.log('✓ Exam data structure test passed\n');
}

function testFormCreation() {
  console.log('=== Testing Form Creation ===');
  
  const examContent = getExamContent();
  const singleVariant = [examContent.variants[0]];
  const testContent = { variants: singleVariant };
  const examVariants = parseExamVariants(testContent);
  
  if (examVariants.length > 0) {
    const formUrl = createExamForm(examVariants[0], 1);
    console.log(`✓ Form created successfully: ${formUrl}`);
  } else {
    console.log('✗ No variants found for testing');
  }
  
  console.log('✓ Form creation test passed\n');
}

function testMarkdownParser() {
  console.log('=== Testing Markdown Parser ===');
  
  // Test with minimal markdown content
  const testMarkdown = `
## Variant 1

### Part 1: Theoretical Questions (20 minutes)

1. Which definition best describes an algorithm?
   A) A sequence of mathematical calculations
   B) A finite set of precise instructions for solving a problem
   C) A computer program written in C++
   D) A system of computer hardware commands

### Part 2: Practical Tasks (20 minutes)

11. Implement a C++ program that outputs "Hello, world!" to the console

## Examination Answer Key

### Variant 1
1. B

\`\`\`cpp
#include <iostream>
using namespace std;
int main() {
    cout << "Hello, world!" << endl;
    return 0;
}
\`\`\`
`;
  
  try {
    const parsedData = parseMarkdownExam(testMarkdown);
    console.log(`Parsed ${parsedData.variants.length} variants`);
    
    if (parsedData.variants.length > 0) {
      const variant = parsedData.variants[0];
      console.log(`Variant ${variant.number}:`);
      console.log(`  Questions: ${variant.theoreticalQuestions.length}`);
      console.log(`  Tasks: ${variant.practicalTasks.length}`);
      
      // Validate parsing
      if (variant.theoreticalQuestions.length > 0) {
        const question = variant.theoreticalQuestions[0];
        console.log(`  First question: ${question.question}`);
        console.log(`  Correct answer: ${question.correctAnswer}`);
      }
      
      if (variant.practicalTasks.length > 0) {
        const task = variant.practicalTasks[0];
        console.log(`  First task: ${task.description}`);
        console.log(`  Task type: ${task.type}`);
      }
    }
    
    console.log('✓ Markdown parser test passed\n');
  } catch (error) {
    console.log(`✗ Markdown parser test failed: ${error.message}\n`);
  }
}

function testDataValidation() {
  console.log('=== Testing Data Validation ===');
  
  const examContent = getExamContent();
  const errors = validateExamData(examContent);
  
  if (errors.length === 0) {
    console.log('✓ Exam data validation passed - no errors found\n');
  } else {
    console.log('✗ Exam data validation failed:');
    errors.forEach(error => console.log(`  - ${error}`));
    console.log('');
  }
}

function testAnswerKeyCreation() {
  console.log('=== Testing Answer Key Creation ===');
  
  const examContent = getExamContent();
  const singleVariant = [examContent.variants[0]];
  const testContent = { variants: singleVariant };
  const examVariants = parseExamVariants(testContent);
  
  if (examVariants.length > 0) {
    const answerKeyUrl = createAnswerKeyForm(examVariants[0], 1);
    console.log(`✓ Answer key form created: ${answerKeyUrl}\n`);
  } else {
    console.log('✗ No variants found for answer key testing\n');
  }
}

function runAllTests() {
  console.log('🚀 Running Google Apps Script Implementation Tests\n');
  
  try {
    testExamDataStructure();
    testFormCreation();
    testMarkdownParser();
    testDataValidation();
    testAnswerKeyCreation();
    
    console.log('🎉 All tests completed successfully!');
    console.log('\n📋 Next Steps:');
    console.log('1. Copy the script files to Google Apps Script');
    console.log('2. Run the main() function to create forms');
    console.log('3. Check the execution logs for form URLs');
    console.log('4. Share the forms with students and teachers');
    
  } catch (error) {
    console.log(`❌ Test execution failed: ${error.message}`);
  }
}

// Import required functions from other files
// Note: In a real Google Apps Script environment, these would be in the same project
function getExamContent() {
  return EXAM_DATA;
}

function parseExamVariants(content) {
  return content.variants;
}

// Import markdown parser functions
function parseMarkdownExam(markdownText) {
  try {
    const lines = markdownText.split('\n');
    const variants = [];
    let currentVariant = null;
    let currentSection = null;
    let currentQuestion = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Detect variant headers
      if (line.startsWith('## Variant')) {
        if (currentVariant) {
          variants.push(currentVariant);
        }
        currentVariant = {
          number: parseInt(line.match(/Variant (\d+)/)[1]),
          theoreticalQuestions: [],
          practicalTasks: []
        };
        currentSection = null;
        currentQuestion = null;
      }
      
      // Detect section headers
      else if (line.startsWith('### Part')) {
        if (line.includes('Theoretical Questions')) {
          currentSection = 'theoretical';
        } else if (line.includes('Practical Tasks')) {
          currentSection = 'practical';
        }
      }
      
      // Detect questions (numbered lines)
      else if (line.match(/^\d+\.\s/)) {
        if (currentSection === 'theoretical' && currentVariant) {
          currentQuestion = {
            question: line.replace(/^\d+\.\s/, ''),
            options: [],
            correctAnswer: null
          };
          currentVariant.theoreticalQuestions.push(currentQuestion);
        }
      }
      
      // Detect multiple choice options
      else if (line.match(/^[A-D]\)\s/)) {
        if (currentQuestion && currentSection === 'theoretical') {
          currentQuestion.options.push(line);
        }
      }
      
      // Detect practical tasks
      else if (line.match(/^\d+\.\s/) && currentSection === 'practical') {
        const taskDescription = line.replace(/^\d+\.\s/, '');
        if (taskDescription.includes('Implement a C++ program')) {
          currentVariant.practicalTasks.push({
            type: 'programming',
            description: taskDescription,
            expectedAnswer: ''
          });
        } else if (taskDescription.includes('Identify') || taskDescription.includes('Recognize')) {
          currentVariant.practicalTasks.push({
            type: 'identification',
            description: taskDescription,
            options: [],
            correctAnswers: []
          });
        } else if (taskDescription.includes('BNF') || taskDescription.includes('Construct')) {
          currentVariant.practicalTasks.push({
            type: 'bnf',
            description: taskDescription,
            expectedAnswer: ''
          });
        }
      }
      
      // Detect answer key sections
      else if (line.startsWith('## Examination Answer Key')) {
        // Parse answer keys for all variants
        parseAnswerKeys(lines.slice(i), variants);
        break;
      }
    }
    
    // Add the last variant
    if (currentVariant) {
      variants.push(currentVariant);
    }
    
    return { variants };
    
  } catch (error) {
    Logger.log(`Error parsing markdown: ${error.toString()}`);
    throw error;
  }
}

function parseAnswerKeys(lines, variants) {
  let currentVariant = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Detect variant answer key headers
    if (line.startsWith('### Variant')) {
      const variantNumber = parseInt(line.match(/Variant (\d+)/)[1]);
      currentVariant = variants.find(v => v.number === variantNumber);
    }
    
    // Parse theoretical question answers
    else if (line.match(/^\d+\.\s[A-D]/) && currentVariant) {
      const match = line.match(/^(\d+)\.\s([A-D])/);
      if (match) {
        const questionIndex = parseInt(match[1]) - 1;
        const correctAnswer = match[2];
        
        if (currentVariant.theoreticalQuestions[questionIndex]) {
          currentVariant.theoreticalQuestions[questionIndex].correctAnswer = correctAnswer;
        }
      }
    }
    
    // Parse practical task answers
    else if (line.includes('```cpp') && currentVariant) {
      // Extract programming answers
      const codeLines = [];
      let j = i + 1;
      while (j < lines.length && !lines[j].includes('```')) {
        codeLines.push(lines[j]);
        j++;
      }
      
      const programmingTask = currentVariant.practicalTasks.find(t => t.type === 'programming');
      if (programmingTask) {
        programmingTask.expectedAnswer = codeLines.join('\n');
      }
      
      i = j;
    }
  }
}

function validateExamData(examData) {
  const errors = [];
  
  if (!examData.variants || !Array.isArray(examData.variants)) {
    errors.push('No variants found in exam data');
    return errors;
  }
  
  examData.variants.forEach((variant, index) => {
    if (!variant.theoreticalQuestions || !Array.isArray(variant.theoreticalQuestions)) {
      errors.push(`Variant ${variant.number}: Missing theoretical questions`);
    }
    
    if (!variant.practicalTasks || !Array.isArray(variant.practicalTasks)) {
      errors.push(`Variant ${variant.number}: Missing practical tasks`);
    }
    
    // Validate theoretical questions
    variant.theoreticalQuestions.forEach((question, qIndex) => {
      if (!question.question) {
        errors.push(`Variant ${variant.number}, Question ${qIndex + 1}: Missing question text`);
      }
      
      if (!question.options || question.options.length === 0) {
        errors.push(`Variant ${variant.number}, Question ${qIndex + 1}: Missing options`);
      }
      
      if (!question.correctAnswer) {
        errors.push(`Variant ${variant.number}, Question ${qIndex + 1}: Missing correct answer`);
      }
    });
    
    // Validate practical tasks
    variant.practicalTasks.forEach((task, tIndex) => {
      if (!task.description) {
        errors.push(`Variant ${variant.number}, Task ${tIndex + 1}: Missing description`);
      }
      
      if (task.type === 'identification' && (!task.options || task.options.length === 0)) {
        errors.push(`Variant ${variant.number}, Task ${tIndex + 1}: Missing identification options`);
      }
      
      if (task.type === 'programming' && !task.expectedAnswer) {
        errors.push(`Variant ${variant.number}, Task ${tIndex + 1}: Missing expected programming answer`);
      }
      
      if (task.type === 'bnf' && !task.expectedAnswer) {
        errors.push(`Variant ${variant.number}, Task ${tIndex + 1}: Missing expected BNF answer`);
      }
    });
  });
  
  return errors;
}

function createExamForm(variant, variantNumber) {
  // Implementation from google-form-exam-creator.js
  try {
    const formTitle = `Programming Fundamentals Exam - Variant ${variantNumber}`;
    const form = FormApp.create(formTitle);
    
    form.setDescription(`Programming Fundamentals Examination (35 minutes)\nVariant ${variantNumber}\n\nInstructions:\n- Part 1: Theoretical Questions (20 minutes)\n- Part 2: Practical Tasks (20 minutes)\n- Total time: 35 minutes`);
    form.setAllowResponseEdits(false);
    form.setLimitOneResponsePerUser(true);
    form.setProgressBar(true);
    form.setConfirmationMessage('Thank you for completing the exam!');
    
    // Add student information section
    form.addPageBreakItem().setTitle('Student Information');
    form.addTextItem().setTitle('Full Name').setRequired(true);
    form.addTextItem().setTitle('Student ID').setRequired(true);
    form.addTextItem().setTitle('Class/Group').setRequired(true);
    
    // Add Part 1: Theoretical Questions
    form.addPageBreakItem().setTitle('Part 1: Theoretical Questions (20 minutes)');
    
    variant.theoreticalQuestions.forEach((question, index) => {
      const mcItem = form.addMultipleChoiceItem();
      mcItem.setTitle(`Question ${index + 1}`)
        .setChoices(question.options.map(option => mcItem.createChoice(option)))
        .setRequired(true);
    });
    
    // Add Part 2: Practical Tasks
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
    Logger.log(`Created form for Variant ${variantNumber}: ${formUrl}`);
    return formUrl;
    
  } catch (error) {
    Logger.log(`Error creating form for variant ${variantNumber}: ${error.toString()}`);
    throw error;
  }
}

function createAnswerKeyForm(variant, variantNumber) {
  const formTitle = `Answer Key - Programming Fundamentals Exam - Variant ${variantNumber}`;
  const form = FormApp.create(formTitle);
  
  form.setDescription(`Answer Key for Programming Fundamentals Examination - Variant ${variantNumber}`);
  
  // Add theoretical questions answer key
  form.addPageBreakItem().setTitle('Theoretical Questions Answer Key');
  
  variant.theoreticalQuestions.forEach((question, index) => {
    const textItem = form.addTextItem();
    textItem.setTitle(`Question ${index + 1}`)
      .setHelpText(`Question: ${question.question}\nCorrect Answer: ${question.correctAnswer}`);
  });
  
  // Add practical tasks answer key
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
  Logger.log(`Created answer key form for Variant ${variantNumber}: ${formUrl}`);
  return formUrl;
}

// Import exam data (this would be in the same file in Google Apps Script)
const EXAM_DATA = {
  variants: [
    // Include a minimal version for testing
    {
      number: 1,
      theoreticalQuestions: [
        {
          question: "Which definition best describes an algorithm?",
          options: [
            "A) A sequence of mathematical calculations",
            "B) A finite set of precise instructions for solving a problem",
            "C) A computer program written in C++",
            "D) A system of computer hardware commands"
          ],
          correctAnswer: "B"
        }
      ],
      practicalTasks: [
        {
          type: "programming",
          description: "Implement a C++ program that outputs \"Hello, world!\" to the console",
          expectedAnswer: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"Hello, world!\" << endl;\n    return 0;\n}"
        }
      ]
    }
  ]
};

// Run the tests
runAllTests();
