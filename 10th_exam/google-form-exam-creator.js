/**
 * Google Apps Script for Automated Exam Form Creation
 * Creates Google Forms from exam questions in markdown format
 */

// Main function to create all exam variants
function createAllExamForms() {
  try {
    // Get the exam content from the markdown file
    const examContent = getExamContent();
    
    // Parse the exam variants
    const examVariants = parseExamVariants(examContent);
    
    // Create forms for each variant
    examVariants.forEach((variant, index) => {
      createExamForm(variant, index + 1);
    });
    
    Logger.log(`Successfully created ${examVariants.length} exam forms`);
    
  } catch (error) {
    Logger.log(`Error creating exam forms: ${error.toString()}`);
    throw error;
  }
}

// Function to get exam content from configuration
function getExamContent() {
  // Return the complete exam data from configuration
  return EXAM_DATA;
}

// Parse exam variants from markdown content
function parseExamVariants(content) {
  // This function would parse the actual markdown file
  // For now, we'll use the structured data above
  // In a real implementation, you would parse the markdown text
  return content.variants;
}

// Create a single exam form
function createExamForm(variant, variantNumber) {
  try {
    // Create a new form
    const formTitle = `Programming Fundamentals Exam - Variant ${variantNumber}`;
    const form = FormApp.create(formTitle);
    
    // Set form description and settings
    form.setDescription(`Programming Fundamentals Examination (35 minutes)\nVariant ${variantNumber}\n\nInstructions:\n- Part 1: Theoretical Questions (20 minutes)\n- Part 2: Practical Tasks (20 minutes)\n- Total time: 35 minutes`);
    form.setAllowResponseEdits(false);
    form.setLimitOneResponsePerUser(true);
    form.setProgressBar(true);
    form.setConfirmationMessage('Thank you for completing the exam!');
    
    // Add student information section
    form.addPageBreakItem()
      .setTitle('Student Information');
    
    form.addTextItem()
      .setTitle('Full Name')
      .setRequired(true);
    
    form.addTextItem()
      .setTitle('Student ID')
      .setRequired(true);
    
    form.addTextItem()
      .setTitle('Class/Group')
      .setRequired(true);
    
    // Add Part 1: Theoretical Questions
    form.addPageBreakItem()
      .setTitle('Part 1: Theoretical Questions (20 minutes)');
    
    variant.theoreticalQuestions.forEach((question, index) => {
      const mcItem = form.addMultipleChoiceItem();
      mcItem.setTitle(`Question ${index + 1}`)
        .setChoices(question.options.map(option => 
          mcItem.createChoice(option)
        ))
        .setRequired(true);
    });
    
    // Add Part 2: Practical Tasks
    form.addPageBreakItem()
      .setTitle('Part 2: Practical Tasks (20 minutes)');
    
    variant.practicalTasks.forEach((task, index) => {
      if (task.type === 'programming') {
        const textItem = form.addParagraphTextItem();
        textItem.setTitle(`Task ${index + 1}: Programming`)
          .setHelpText(task.description)
          .setRequired(true);
          
      } else if (task.type === 'identification') {
        const checkboxItem = form.addCheckboxItem();
        checkboxItem.setTitle(`Task ${index + 1}: Identification`)
          .setChoices(task.options.map(option => 
            checkboxItem.createChoice(option)
          ))
          .setRequired(true);
          
      } else if (task.type === 'bnf') {
        const textItem = form.addParagraphTextItem();
        textItem.setTitle(`Task ${index + 1}: BNF Rule`)
          .setHelpText(task.description)
          .setRequired(true);
      }
    });
    
    // Store the form URL for reference
    const formUrl = form.getPublishedUrl();
    Logger.log(`Created form for Variant ${variantNumber}: ${formUrl}`);
    
    return formUrl;
    
  } catch (error) {
    Logger.log(`Error creating form for variant ${variantNumber}: ${error.toString()}`);
    throw error;
  }
}

// Function to create answer key forms for teachers
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
  
  // Add theoretical questions answer key
  form.addPageBreakItem()
    .setTitle('Theoretical Questions Answer Key');
  
  variant.theoreticalQuestions.forEach((question, index) => {
    const textItem = form.addTextItem();
    textItem.setTitle(`Question ${index + 1}`)
      .setHelpText(`Question: ${question.question}\nCorrect Answer: ${question.correctAnswer}`);
  });
  
  // Add practical tasks answer key
  form.addPageBreakItem()
    .setTitle('Practical Tasks Answer Key');
  
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
    
    textItem.setTitle(`Task ${index + 1}`)
      .setHelpText(answerText);
  });
  
  const formUrl = form.getPublishedUrl();
  Logger.log(`Created answer key form for Variant ${variantNumber}: ${formUrl}`);
  return formUrl;
}

// Utility function to get all created forms
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

// Function to set up form notifications
function setupFormNotifications() {
  const forms = listCreatedForms();
  
  forms.forEach(formInfo => {
    const form = FormApp.openByUrl(formInfo.url);
    
    // Set up trigger for form submission notifications
    ScriptApp.newTrigger('onFormSubmit')
      .timeBased()
      .everyMinutes(5)
      .create();
  });
}

// Event handler for form submissions
function onFormSubmit(e) {
  // This function would handle form submission events
  // You could send email notifications, update spreadsheets, etc.
  Logger.log('Form submitted: ' + e.source.getTitle());
}

// Main execution function
function main() {
  try {
    // Create all exam forms
    createAllExamForms();
    
    // Create answer key forms
    createAnswerKeyForms();
    
    // List all created forms
    const forms = listCreatedForms();
    Logger.log('Created forms:');
    forms.forEach(form => {
      Logger.log(`- ${form.name}: ${form.publishedUrl}`);
    });
    
    return 'Exam forms created successfully!';
    
  } catch (error) {
    Logger.log(`Error in main execution: ${error.toString()}`);
    return `Error: ${error.toString()}`;
  }
}

// Test function
function testFormCreation() {
  // Test with a single variant first
  const examContent = getExamContent();
  const singleVariant = [examContent.variants[0]]; // Just test with variant 1
  
  const testContent = { variants: singleVariant };
  const examVariants = parseExamVariants(testContent);
  
  if (examVariants.length > 0) {
    createExamForm(examVariants[0], 1);
    Logger.log('Test form created successfully');
  }
}
