/**
 * Test Script for Google Apps Script Exam Creator
 * This script can be used to test individual functions
 */

function testExamCreation() {
  try {
    Logger.log('Starting test of exam creation functionality...');
    
    // Test data retrieval functions
    testDataFunctions();
    
    // Test form creation for one variant
    testSingleFormCreation();
    
    Logger.log('Test completed successfully!');
  } catch (error) {
    Logger.log('Test failed: ' + error.toString());
  }
}

function testDataFunctions() {
  Logger.log('Testing data retrieval functions...');
  
  // Test Part 1 questions
  const part1Questions = getPart1Questions(1);
  Logger.log('Part 1 Questions for Variant 1: ' + part1Questions.length);
  
  // Test Part 2 tasks
  const part2Tasks = getPart2Tasks(1);
  Logger.log('Part 2 Tasks for Variant 1: ' + part2Tasks.length);
  
  // Test Part 3 questions
  const part3Questions = getPart3Questions(1);
  Logger.log('Part 3 Questions for Variant 1: ' + part3Questions.length);
  
  // Verify data structure
  if (part1Questions.length === 5 && 
      part2Tasks.length === 3 && 
      part3Questions.length === 2) {
    Logger.log('✓ All data functions working correctly');
  } else {
    throw new Error('Data functions returned incorrect number of items');
  }
}

function testSingleFormCreation() {
  Logger.log('Testing single form creation...');
  
  // Create a test form (Variant 1)
  const form = createExamForm(1);
  
  if (form && form.getTitle().includes('Variant 1')) {
    Logger.log('✓ Form creation successful: ' + form.getTitle());
    
    // Get form URL for verification
    const formUrl = form.getPublishedUrl();
    Logger.log('✓ Form URL: ' + formUrl);
    
    // Clean up - delete the test form (optional)
    // Note: Uncomment the line below if you want to automatically delete test forms
    // DriveApp.getFileById(form.getId()).setTrashed(true);
    
  } else {
    throw new Error('Form creation failed');
  }
}

function testAllVariantsData() {
  Logger.log('Testing data for all variants...');
  
  for (let variant = 1; variant <= 5; variant++) {
    const part1 = getPart1Questions(variant);
    const part2 = getPart2Tasks(variant);
    const part3 = getPart3Questions(variant);
    
    Logger.log(`Variant ${variant}: Part1=${part1.length}, Part2=${part2.length}, Part3=${part3.length}`);
    
    if (part1.length !== 5 || part2.length !== 3 || part3.length !== 2) {
      throw new Error(`Variant ${variant} has incorrect data structure`);
    }
  }
  
  Logger.log('✓ All variants have correct data structure');
}

// Quick test function for menu creation
function testMenuCreation() {
  try {
    onOpen();
    Logger.log('✓ Menu creation function executed successfully');
  } catch (error) {
    Logger.log('Menu creation test: ' + error.toString());
  }
}

// Function to validate question data
function validateQuestionData() {
  Logger.log('Validating question data integrity...');
  
  const variants = [1, 2, 3, 4, 5];
  
  for (const variant of variants) {
    const part1Questions = getPart1Questions(variant);
    
    // Check that each question has exactly one correct answer
    for (const question of part1Questions) {
      const correctAnswers = question.choices.filter(choice => choice.isCorrect).length;
      if (correctAnswers !== 1) {
        throw new Error(`Variant ${variant} question "${question.question}" has ${correctAnswers} correct answers (should be 1)`);
      }
    }
    
    Logger.log(`✓ Variant ${variant} questions validated`);
  }
  
  Logger.log('✓ All question data validated successfully');
}

// Run comprehensive tests
function runAllTests() {
  Logger.log('=== Running Comprehensive Tests ===');
  
  testDataFunctions();
  testAllVariantsData();
  validateQuestionData();
  testMenuCreation();
  
  Logger.log('=== All Tests Completed Successfully ===');
}

// Export function for easy testing
function quickTest() {
  runAllTests();
}
