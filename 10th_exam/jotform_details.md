# JotForm Exam Creation Summary

## Form Details
- **Form ID**: 252923610018349
- **Form URL**: https://form.jotform.com/252923610018349
- **Title**: Programming Fundamentals Examination - 10th Grade
- **API Key Used**: a7a9cab94eb9b70323efd4ce1381502f

## Form Structure

### Question Types Used:
1. **Dropdown** - For variant selection (1 question)
2. **Radio Buttons** - For multiple choice questions with single answer (50 questions - 10 per variant)
3. **Checkboxes** - For multiple selection questions (5 questions - Q12 for each variant)
4. **Text Area** - For coding and BNF production questions (10 questions - Q11 and Q13 for each variant)

### Total Questions: 66
- 1 Variant selection dropdown
- 5 Variants × 13 questions each = 65 questions

### Question Breakdown Per Variant:
- **Q1-Q10**: Multiple choice (Radio buttons) - Theoretical questions
- **Q11**: Text area - C++ programming task
- **Q12**: Checkboxes - Multiple selection question
- **Q13**: Text area - BNF production rule

## Variants Covered:
✓ Variant 1 (v1q1 - v1q13)
✓ Variant 2 (v2q1 - v2q13)
✓ Variant 3 (v3q1 - v3q13)
✓ Variant 4 (v4q1 - v4q13)
✓ Variant 5 (v5q1 - v5q13)

## Important: Manual Configuration Required

### Conditional Logic Setup
The form currently shows all questions. You need to configure conditional logic so that only questions for the selected variant are displayed:

#### Steps to Configure:
1. Open form in JotForm Builder: https://form.jotform.com/252923610018349
2. Log in with your account
3. For each question (v1q1 through v5q13):
   - Click on the question
   - Go to the "Conditions" tab (or "Settings" → "Conditions")
   - Add a new condition:
     - **Type**: Show/Hide Field
     - **If**: "Select Your Exam Variant" field
     - **Condition**: equals
     - **Value**: 
       - For v1q1-v1q13: "Variant 1"
       - For v2q1-v2q13: "Variant 2"
       - For v3q1-v3q13: "Variant 3"
       - For v4q1-v4q13: "Variant 4"
       - For v5q1-v5q13: "Variant 5"
     - **Then**: Show this field
4. Save each condition
5. Test the form by selecting different variants

### Alternative: Bulk Condition Setup
If available in your JotForm plan, you can use the "Bulk Actions" feature:
1. Select all questions for one variant
2. Apply the same condition to all selected questions
3. Repeat for each variant

## Answer Key Reference
The correct answers for all variants are documented in the original file:
- File: `10th_exam/exam-questions-english.md`
- Section: "Examination Answer Key" at the bottom of the file

### Quick Answer Reference:
- **Variant 1**: Q1-10: All B, Q12: A,D, Q13: BNF digits rule
- **Variant 2**: Q1-8: B, Q9: A, Q10: B, Q12: A,B,C,D, Q13: BNF letters rule
- **Variant 3**: Q1-9: B, Q10: C, Q12: A,D, Q13: BNF signed integer
- **Variant 4**: Q1-10: B (Q4: A, Q5: C), Q12: A,B, Q13: BNF identifier
- **Variant 5**: All B, Q12: A,B, Q13: BNF signs

## Testing Checklist
- [ ] Test Variant 1 selection - verify only V1 questions appear
- [ ] Test Variant 2 selection - verify only V2 questions appear
- [ ] Test Variant 3 selection - verify only V3 questions appear
- [ ] Test Variant 4 selection - verify only V4 questions appear
- [ ] Test Variant 5 selection - verify only V5 questions appear
- [ ] Test form submission with sample answers
- [ ] Verify answer collection in JotForm dashboard
- [ ] Check form appearance on mobile devices
- [ ] Test all question types (radio, checkbox, textarea)

## Additional Customization Options
1. **Form Theme**: Customize colors, fonts, and layout
2. **Email Notifications**: Set up email alerts for submissions
3. **Thank You Page**: Create custom completion message
4. **Time Limit**: Add a 35-minute timer if needed
5. **Submission Limit**: Set maximum submissions per user
6. **PDF Generation**: Enable automatic PDF reports
7. **Google Sheets Integration**: Auto-export to spreadsheet

## Form Management
- **Edit Form**: https://form.jotform.com/build/252923610018349
- **View Submissions**: Check your JotForm account dashboard
- **Share Form**: Use the URL or embed code provided by JotForm

## Notes
- Form created on: October 20, 2025
- API endpoint: https://eu-api.jotform.com (EU Safe mode)
- All questions successfully added
- Conditional logic requires manual configuration
- Form is currently in ENABLED status
