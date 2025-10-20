/**
 * Markdown Parser Utility for Exam Questions
 * Parses markdown files to extract exam questions and structure
 */

// Function to parse markdown exam content
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

// Parse answer keys from markdown
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

// Function to read markdown file from Google Drive
function readMarkdownFileFromDrive(fileId) {
  try {
    const file = DriveApp.getFileById(fileId);
    const content = file.getBlob().getDataAsString();
    return parseMarkdownExam(content);
  } catch (error) {
    Logger.log(`Error reading markdown file: ${error.toString()}`);
    throw error;
  }
}

// Function to read markdown file from URL
function readMarkdownFileFromUrl(url) {
  try {
    const response = UrlFetchApp.fetch(url);
    const content = response.getContentText();
    return parseMarkdownExam(content);
  } catch (error) {
    Logger.log(`Error reading markdown from URL: ${error.toString()}`);
    throw error;
  }
}

// Function to validate parsed exam data
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

// Function to export exam data to JSON
function exportExamDataToJson(examData) {
  return JSON.stringify(examData, null, 2);
}

// Function to import exam data from JSON
function importExamDataFromJson(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    Logger.log(`Error parsing JSON: ${error.toString()}`);
    throw error;
  }
}

// Main function to process markdown file and create forms
function processMarkdownAndCreateForms(markdownSource, sourceType = 'drive') {
  try {
    let examData;
    
    if (sourceType === 'drive') {
      examData = readMarkdownFileFromDrive(markdownSource);
    } else if (sourceType === 'url') {
      examData = readMarkdownFileFromUrl(markdownSource);
    } else {
      throw new Error('Invalid source type. Use "drive" or "url"');
    }
    
    // Validate the parsed data
    const validationErrors = validateExamData(examData);
    if (validationErrors.length > 0) {
      Logger.log('Validation errors found:');
      validationErrors.forEach(error => Logger.log(`- ${error}`));
      throw new Error('Exam data validation failed');
    }
    
    Logger.log(`Successfully parsed ${examData.variants.length} exam variants`);
    
    // Create forms using the parsed data
    const formUrls = [];
    examData.variants.forEach(variant => {
      const formUrl = createExamForm(variant, variant.number);
      formUrls.push(formUrl);
    });
    
    return formUrls;
    
  } catch (error) {
    Logger.log(`Error processing markdown and creating forms: ${error.toString()}`);
    throw error;
  }
}
