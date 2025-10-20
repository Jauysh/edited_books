# Google Apps Script for Automated Exam Form Creation

## Overview
This Google Apps Script automates the creation of Google Forms for 11th Grade Computer Science exams based on the exam variants defined in `final_exam_variants_with_part3.md`. The script creates 5 different exam variants, each with the same structure but different questions.

## Features

### Exam Structure
Each exam form includes three parts:
- **Part 1**: Theory Questions (5 multiple choice questions, 5 points)
- **Part 2**: Practical Programming (Choose 2 of 3 tasks, 12 points)
- **Part 3**: Theory Application (2 written questions, 10 points)

### Total Points: 27 points
- Part 1: 5 points (1 point per question)
- Part 2: 12 points (6 points per task × 2 tasks)
- Part 3: 10 points (5 points per question × 2 questions)

### Form Settings
- Collects student email addresses
- Requires Google login
- Limits to one response per user
- Shows progress bar
- Prevents response editing after submission

## How to Use

### Method 1: Using the Custom Menu (Recommended)
1. Open Google Apps Script (script.google.com)
2. Create a new project and paste the code from `google_form_exam_creator.js`
3. Save the project
4. Run the `onOpen()` function once to create the custom menu
5. Use the "Exam Creator" menu in Google Sheets or Forms to:
   - Create all 5 variants at once
   - Create individual variants
   - Export form URLs to a spreadsheet

### Method 2: Direct Function Calls
You can also call these functions directly:

```javascript
// Create all 5 exam variants
createAllExamForms();

// Create a specific variant (1-5)
createSpecificVariant(3);

// Export URLs to a spreadsheet
exportFormUrlsToSheet();
```

## Exam Variants Details

### Variant 1
- **Part 1**: Simple vs composite data types, array basics
- **Part 2**: Array sum, student name display, matrix sum
- **Part 3**: Data type differences, electricity consumption structure

### Variant 2
- **Part 1**: Data type identification, string termination
- **Part 2**: Largest number, name input, array copy
- **Part 3**: Data type examples, '\0' character purpose

### Variant 3
- **Part 1**: Simple types, array usage, string libraries
- **Part 2**: Income total, string copy, temperature average
- **Part 3**: Array usefulness, string functions

### Variant 4
- **Part 1**: Composite types, string input, array initialization
- **Part 2**: Consumption display, name concatenation, positive numbers
- **Part 3**: 1D vs 2D arrays, char arrays vs string type

### Variant 5
- **Part 1**: Composite examples, string operations, array sizing
- **Part 2**: String conversion, student names, array average
- **Part 3**: String representations, composite type importance

## Implementation Details

### Data Structure
The script uses three main data functions:
- `getPart1Questions(variant)` - Returns multiple choice questions
- `getPart2Tasks(variant)` - Returns programming tasks
- `getPart3Questions(variant)` - Returns theory application questions

### Form Creation Process
1. Creates form with title and description
2. Sets up form settings (email collection, login requirement)
3. Adds page breaks for each part
4. Adds appropriate question types:
   - Multiple choice for Part 1
   - Paragraph text for Parts 2 and 3
5. Logs form URLs for easy access

### Grading Notes
- **Part 1**: Can be auto-graded using Google Forms quiz feature
- **Part 2**: Requires manual grading of programming code
- **Part 3**: Requires manual grading of theory explanations

## Customization

### Adding New Questions
To add new questions, modify the data arrays in:
- `getPart1Questions()` for multiple choice
- `getPart2Tasks()` for programming tasks  
- `getPart3Questions()` for theory questions

### Modifying Exam Structure
Change the point values and timing in:
- Section titles in `createPart1Section()`, `createPart2Section()`, `createPart3Section()`
- Form description in `createExamForm()`

### Changing Form Settings
Modify form properties in `createExamForm()`:
- `setCollectEmail(true/false)`
- `setRequireLogin(true/false)`
- `setAllowResponseEdits(true/false)`

## Error Handling
The script includes try-catch blocks to handle common errors:
- Invalid variant numbers
- Form creation failures
- Spreadsheet export issues

## Logging
All operations are logged using `Logger.log()` for debugging:
- Form creation status
- Form URLs
- Error messages

## Best Practices

### Before Deployment
1. Test with a single variant first
2. Verify form settings match your requirements
3. Check that all questions display correctly
4. Test the response collection process

### Security Considerations
- Forms require login to prevent unauthorized access
- Email collection helps identify respondents
- Response editing is disabled to maintain integrity

### Maintenance
- Regularly update questions to prevent cheating
- Monitor form responses for any issues
- Keep backup of the script code

## Support
For issues or questions:
1. Check the Google Apps Script logs
2. Verify form permissions
3. Ensure all required Google services are enabled

This script provides a complete solution for automated exam form creation, saving significant time while maintaining consistency across multiple exam variants.
