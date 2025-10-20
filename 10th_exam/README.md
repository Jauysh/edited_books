# Google Apps Script for Automated Exam Form Creation

This project provides a complete Google Apps Script solution for automatically creating Google Forms from exam questions stored in markdown format. The system can parse exam questions and create interactive forms for all 5 variants of the Programming Fundamentals examination.

## Project Structure

```
10th_exam/
├── google-form-exam-creator.js    # Main Google Apps Script file
├── exam-data-config.js            # Exam data configuration (all 5 variants)
├── markdown-parser.js             # Markdown parsing utilities
├── exam-questions-english.md      # Source exam questions (English)
├── exam-questions.md              # Source exam questions (Russian)
└── README.md                      # This documentation file
```

## Features

### Core Functionality
- **Automated Form Creation**: Creates Google Forms for all 5 exam variants
- **Student Information Section**: Collects name, ID, and class information
- **Theoretical Questions**: Multiple choice questions with automatic scoring
- **Practical Tasks**: Programming, identification, and BNF rule tasks
- **Answer Key Forms**: Separate forms for teachers with correct answers
- **Form Management**: Lists and manages all created forms

### Advanced Features
- **Markdown Parsing**: Can parse exam questions directly from markdown files
- **Data Validation**: Validates exam structure and completeness
- **Flexible Input Sources**: Supports Google Drive files and URLs
- **Error Handling**: Comprehensive error handling and logging

## File Descriptions

### google-form-exam-creator.js
Main script containing all form creation logic:
- `createAllExamForms()` - Creates forms for all variants
- `createExamForm(variant, variantNumber)` - Creates individual exam form
- `createAnswerKeyForms()` - Creates answer key forms for teachers
- `main()` - Main execution function
- `testFormCreation()` - Test function for single variant

### exam-data-config.js
Contains complete exam data for all 5 variants:
- 10 theoretical questions per variant (multiple choice)
- 3 practical tasks per variant (programming, identification, BNF)
- Correct answers and expected solutions

### markdown-parser.js
Utilities for parsing markdown exam files:
- `parseMarkdownExam(markdownText)` - Parses markdown content
- `readMarkdownFileFromDrive(fileId)` - Reads from Google Drive
- `readMarkdownFileFromUrl(url)` - Reads from URL
- `validateExamData(examData)` - Validates parsed data
- `processMarkdownAndCreateForms()` - Complete processing pipeline

## Usage Instructions

### Method 1: Using Pre-configured Data (Recommended)

1. **Open Google Apps Script**
   - Go to [script.google.com](https://script.google.com)
   - Create a new project

2. **Copy the Script Files**
   - Copy contents from `google-form-exam-creator.js`
   - Copy contents from `exam-data-config.js`
   - Paste into the same Google Apps Script file

3. **Run the Script**
   ```javascript
   function main() {
     // This will create all 5 exam forms and answer keys
     return main();
   }
   ```

4. **View Results**
   - Check the execution log for form URLs
   - Forms will be created in your Google Drive

### Method 2: Using Markdown Files

1. **Upload your markdown file to Google Drive**
2. **Get the file ID**
3. **Use the markdown parser:**
   ```javascript
   function createFromMarkdown() {
     const fileId = 'YOUR_FILE_ID_HERE';
     return processMarkdownAndCreateForms(fileId, 'drive');
   }
   ```

## Form Structure

Each exam form includes:

### Student Information Section
- Full Name (required)
- Student ID (required)
- Class/Group (required)

### Part 1: Theoretical Questions (20 minutes)
- 10 multiple choice questions
- Automatic scoring enabled
- Required responses

### Part 2: Practical Tasks (20 minutes)
- Programming tasks (paragraph text)
- Identification tasks (checkbox)
- BNF rule tasks (paragraph text)

## API Reference

### Main Functions

#### `createAllExamForms()`
Creates Google Forms for all 5 exam variants.

**Returns:** Array of form URLs

#### `createAnswerKeyForms()`
Creates answer key forms for teachers.

**Returns:** Array of answer key form URLs

#### `processMarkdownAndCreateForms(source, sourceType)`
Processes markdown file and creates forms.

**Parameters:**
- `source`: File ID or URL
- `sourceType`: 'drive' or 'url'

**Returns:** Array of form URLs

### Utility Functions

#### `listCreatedForms()`
Lists all created exam forms.

**Returns:** Array of form objects with names and URLs

#### `setupFormNotifications()`
Sets up form submission notifications.

## Example Usage

### Basic Usage
```javascript
// Create all exam forms
function createExams() {
  const result = main();
  Logger.log(result);
  return result;
}

// Create only answer keys
function createAnswerKeys() {
  createAnswerKeyForms();
}

// Test with single variant
function testSingleVariant() {
  testFormCreation();
}
```

### Advanced Usage
```javascript
// Create forms from markdown file in Drive
function createFromDriveFile() {
  const fileId = '1ABC123def456GHI789';
  return processMarkdownAndCreateForms(fileId, 'drive');
}

// Create forms from markdown URL
function createFromUrl() {
  const url = 'https://example.com/exam-questions.md';
  return processMarkdownAndCreateForms(url, 'url');
}

// List all created forms
function showForms() {
  const forms = listCreatedForms();
  forms.forEach(form => {
    Logger.log(`${form.name}: ${form.publishedUrl}`);
  });
  return forms;
}
```

## Configuration

### Exam Data Structure
Each variant follows this structure:
```javascript
{
  number: 1,
  theoreticalQuestions: [
    {
      question: "Question text?",
      options: ["A) Option 1", "B) Option 2", "C) Option 3", "D) Option 4"],
      correctAnswer: "B"
    }
  ],
  practicalTasks: [
    {
      type: "programming", // or "identification" or "bnf"
      description: "Task description",
      expectedAnswer: "Expected solution",
      options: ["Option A", "Option B"], // for identification tasks
      correctAnswers: ["A", "B"] // for identification tasks
    }
  ]
}
```

## Error Handling

The script includes comprehensive error handling:
- Validation of exam data structure
- Error logging for debugging
- Graceful failure with informative messages

## Troubleshooting

### Common Issues

1. **Forms not created**
   - Check execution logs for errors
   - Verify Google Forms API permissions

2. **Markdown parsing fails**
   - Ensure markdown follows expected format
   - Check file permissions for Drive files

3. **Missing questions**
   - Validate exam data structure
   - Check for required fields

### Logging
All operations are logged using `Logger.log()`. Check the execution logs in Google Apps Script for detailed information.

## Security Considerations

- Forms are created in your Google Drive
- Student data is stored in Google Forms responses
- Consider form sharing settings for privacy
- Review form permissions before distribution

## Support

For issues or questions:
1. Check execution logs in Google Apps Script
2. Verify exam data structure matches expected format
3. Ensure proper Google Forms API permissions

## License

This project is designed for educational use with Programming Fundamentals examination materials.
