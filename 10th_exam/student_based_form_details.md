# Student-Based JotForm Exam - Documentation

## Form Details
- **Form ID**: 252923895129367
- **Form URL**: https://form.jotform.com/252923895129367
- **Edit URL**: https://form.jotform.com/build/252923895129367
- **API Key Used**: a7a9cab94eb9b70323efd4ce1381502f
- **Created**: October 20, 2025

## Form Structure

This form uses student names instead of variant selection. Each student selects their name from a dropdown and automatically sees only their assigned variant questions.

### Student-Variant Assignments

#### Variant 1 (5 students):
- ALKHATIB Abdel
- CHESERAD David
- CHIRNEVA Alexandra
- HVATOVA Victoria
- ZABOLOTNII Daniel

#### Variant 2 (5 students):
- BOTIZATU Catalina
- CULCITCHI Ilia
- GORAS Vlada
- JARDAN Bogdan
- TARAN Mihail

#### Variant 3 (5 students):
- BIVOL Gloria
- BODRUG Sofia
- MOCREAC Bogdan
- PATRAS Victor
- Rafiey Tabrizi Mandana

#### Variant 4 (5 students):
- BIVOL Anna Maria
- COLIBAN Alexandru
- ERGUN Yasemin
- IVANICICHIN Alexandr
- POPA Daniela

#### Variant 5 (4 students):
- BLAGODARENCO Pavel
- DRAGOMIR Amelia-Sabina
- OALA Fabian
- POTACEVSCHI Gheorghe

**Total Students**: 24

## Form Components

### Question 1: Student Name Selection
- **Type**: Dropdown
- **Field Name**: studentName
- **Options**: All 24 student names (alphabetically sorted)
- **Required**: Yes

### Questions 2-66: Exam Questions
- **Variant 1**: v1q1 - v1q13 (13 questions)
- **Variant 2**: v2q1 - v2q13 (13 questions)
- **Variant 3**: v3q1 - v3q13 (13 questions)
- **Variant 4**: v4q1 - v4q13 (13 questions)
- **Variant 5**: v5q1 - v5q13 (13 questions)

Each variant contains:
- Q1-Q10: Multiple choice (Radio buttons) - Theoretical questions
- Q11: Text area - C++ programming task
- Q12: Checkboxes - Multiple selection question
- Q13: Text area - BNF production rule

## CRITICAL: Conditional Logic Configuration Required

The form currently shows all questions. You **MUST** configure conditional logic so each student only sees their assigned variant questions.

### Configuration Steps (JotForm Builder)

1. **Open the form in edit mode**: https://form.jotform.com/build/252923895129367

2. **For Variant 1 Questions (v1q1 through v1q13)**:
   - Select all 13 questions for Variant 1
   - Click "Conditions" tab
   - Add "Show/Hide Field" condition
   - Configure:
     ```
     IF 'Select Your Name' equals 'ALKHATIB Abdel'
     OR 'Select Your Name' equals 'CHESERAD David'
     OR 'Select Your Name' equals 'CHIRNEVA Alexandra'
     OR 'Select Your Name' equals 'HVATOVA Victoria'
     OR 'Select Your Name' equals 'ZABOLOTNII Daniel'
     THEN Show these fields
     ```

3. **For Variant 2 Questions (v2q1 through v2q13)**:
   - Select all 13 questions for Variant 2
   - Add condition:
     ```
     IF 'Select Your Name' equals 'BOTIZATU Catalina'
     OR 'Select Your Name' equals 'CULCITCHI Ilia'
     OR 'Select Your Name' equals 'GORAS Vlada'
     OR 'Select Your Name' equals 'JARDAN Bogdan'
     OR 'Select Your Name' equals 'TARAN Mihail'
     THEN Show these fields
     ```

4. **For Variant 3 Questions (v3q1 through v3q13)**:
   - Select all 13 questions for Variant 3
   - Add condition:
     ```
     IF 'Select Your Name' equals 'BIVOL Gloria'
     OR 'Select Your Name' equals 'BODRUG Sofia'
     OR 'Select Your Name' equals 'MOCREAC Bogdan'
     OR 'Select Your Name' equals 'PATRAS Victor'
     OR 'Select Your Name' equals 'Rafiey Tabrizi Mandana'
     THEN Show these fields
     ```

5. **For Variant 4 Questions (v4q1 through v4q13)**:
   - Select all 13 questions for Variant 4
   - Add condition:
     ```
     IF 'Select Your Name' equals 'BIVOL Anna Maria'
     OR 'Select Your Name' equals 'COLIBAN Alexandru'
     OR 'Select Your Name' equals 'ERGUN Yasemin'
     OR 'Select Your Name' equals 'IVANICICHIN Alexandr'
     OR 'Select Your Name' equals 'POPA Daniela'
     THEN Show these fields
     ```

6. **For Variant 5 Questions (v5q1 through v5q13)**:
   - Select all 13 questions for Variant 5
   - Add condition:
     ```
     IF 'Select Your Name' equals 'BLAGODARENCO Pavel'
     OR 'Select Your Name' equals 'DRAGOMIR Amelia-Sabina'
     OR 'Select Your Name' equals 'OALA Fabian'
     OR 'Select Your Name' equals 'POTACEVSCHI Gheorghe'
     THEN Show these fields
     ```

7. **Save the form** after adding all conditions

### Tips for Faster Configuration

1. **Bulk Selection**: Use Shift+Click to select multiple questions at once
2. **Copy Conditions**: Some JotForm plans allow copying conditions between fields
3. **Test After Each Variant**: Test one variant before moving to the next
4. **Use Form Preview**: Preview mode shows how the form will appear to students

## Testing Checklist

Before distributing the form to students, test thoroughly:

- [ ] Test with ALKHATIB Abdel - verify only Variant 1 questions appear
- [ ] Test with BOTIZATU Catalina - verify only Variant 2 questions appear
- [ ] Test with BIVOL Gloria - verify only Variant 3 questions appear
- [ ] Test with BIVOL Anna Maria - verify only Variant 4 questions appear
- [ ] Test with BLAGODARENCO Pavel - verify only Variant 5 questions appear
- [ ] Verify all 24 student names appear in dropdown
- [ ] Verify student names are sorted alphabetically
- [ ] Test form submission works correctly
- [ ] Check that only 13 questions appear (not all 65)
- [ ] Verify all question types work (radio, checkbox, textarea)
- [ ] Test on mobile devices
- [ ] Verify form appearance and layout

## Answer Key Reference

Correct answers for each variant:

### Variant 1 (Students: ALKHATIB Abdel, CHESERAD David, CHIRNEVA Alexandra, HVATOVA Victoria, ZABOLOTNII Daniel)
- Q1-Q10: All B
- Q11: C++ Hello World program
- Q12: A, D (myVariable, variable1)
- Q13: `<Digit> ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9`

### Variant 2 (Students: BOTIZATU Catalina, CULCITCHI Ilia, GORAS Vlada, JARDAN Bogdan, TARAN Mihail)
- Q1-Q8, Q10: B
- Q9: A
- Q11: C++ program displaying name
- Q12: A, B, C, D (all operators)
- Q13: `<Letter> ::= a | b | c | ... | z`

### Variant 3 (Students: BIVOL Gloria, BODRUG Sofia, MOCREAC Bogdan, PATRAS Victor, Rafiey Tabrizi Mandana)
- Q1-Q9: B
- Q10: C
- Q11: C++ program outputting 1, 2, 3
- Q12: A, D (variable, myName)
- Q13: `<Integer> ::= [+ | -] <Digit> {<Digit>}`

### Variant 4 (Students: BIVOL Anna Maria, COLIBAN Alexandru, ERGUN Yasemin, IVANICICHIN Alexandr, POPA Daniela)
- Q1-Q3: B
- Q4: A
- Q5: C
- Q6-Q10: B
- Q11: C++ program displaying subject (e.g., "Mathematics")
- Q12: A, B (int, main)
- Q13: `<Identifier> ::= <Letter> {<Letter> | <Digit>}`

### Variant 5 (Students: BLAGODARENCO Pavel, DRAGOMIR Amelia-Sabina, OALA Fabian, POTACEVSCHI Gheorghe)
- Q1-Q10: All B
- Q11: C++ program outputting date
- Q12: A, B (<=, >=)
- Q13: `<Sign> ::= + | -`

## Additional Configuration Options

### Recommended Settings

1. **Time Limit**: Add a 35-minute timer
   - Form Settings → Limit Options → Enable Time Limit
   - Set to 35 minutes (2100 seconds)

2. **Single Submission Per Student**:
   - Form Settings → Limit Options → Limit Submissions
   - Enable "Unique Answers" for the student name field

3. **Email Notifications**:
   - Settings → Emails → Send notification to teacher email
   - Enable submission notifications

4. **Auto-Responder**:
   - Settings → Emails → Set up auto-response to students
   - Customize thank you message

5. **Save and Continue**:
   - Consider disabling this to prevent cheating
   - Settings → Form Options → Disable "Save and Continue Later"

6. **Require HTTPS**:
   - Already enabled by default for security

### Analytics & Reporting

- View submissions by student in JotForm dashboard
- Export results to Excel/CSV for grading
- Set up Google Sheets integration for real-time results
- Enable PDF generation for each submission

## Distribution

### Sharing the Form

**Primary URL**: https://form.jotform.com/252923895129367

**Distribution Methods**:
1. Share direct link via email or learning management system
2. Generate QR code for in-class distribution
3. Embed in school website or LMS
4. Share via Google Classroom or similar platform

### Instructions for Students

"Programming Fundamentals Examination - Instructions:

1. Open the exam form link
2. Select your full name from the dropdown menu
3. Answer all 13 questions for your assigned variant
4. Questions include:
   - 10 multiple choice questions (select one answer)
   - 1 multiple selection question (select all correct answers)
   - 2 text entry questions (write C++ code and BNF rules)
5. Review your answers before submitting
6. Click Submit when complete
7. You have 35 minutes to complete the exam

Note: Make sure to select the correct name. You will only see the questions assigned to you."

## Files & Scripts

- **Creation Script**: `create_jotform_with_students.py`
- **Original Exam Questions**: `10th_exam/exam-questions-english.md`
- **Previous Form (Variant Selection)**: Form ID 252923610018349
- **Current Form (Student Names)**: Form ID 252923895129367

## Support & Troubleshooting

### Common Issues

**Issue**: Student sees all questions instead of just 13
- **Solution**: Conditional logic not configured. Follow configuration steps above.

**Issue**: Student name not in dropdown
- **Solution**: Check spelling in STUDENT_VARIANTS dictionary in script. Re-run script if needed.

**Issue**: Wrong variant shown for student
- **Solution**: Verify student-variant mapping in conditional logic configuration.

**Issue**: Form not submitting
- **Solution**: Check all required fields are answered. Verify internet connection.

### Form Management

- **Edit Form**: https://form.jotform.com/build/252923895129367
- **View Submissions**: JotForm Dashboard → My Forms → Programming Fundamentals Examination
- **Delete Form**: JotForm Dashboard → Select Form → Delete (if needed to recreate)
- **Clone Form**: Use JotForm's clone feature to create backup

## Comparison with Previous Form

| Feature | Variant Selection Form (252923610018349) | Student Name Form (252923895129367) |
|---------|------------------------------------------|-------------------------------------|
| Selection Method | Manual variant selection | Student name dropdown |
| Cheating Prevention | Students could choose any variant | Students assigned specific variants |
| Tracking | By variant only | By student name and variant |
| Configuration | 5 conditions (one per variant) | 5 conditions (grouped by student) |
| Best For | Practice or self-study | Official examination |
| **Recommended** | ❌ Less secure | ✅ **Use This** |

## Security Considerations

1. **Do not share the edit URL** - Only share the public form URL
2. **Enable single submission per student** to prevent multiple attempts
3. **Consider time-limited access** - Set form to only accept submissions during exam period
4. **Disable save and continue** to prevent students from accessing questions beforehand
5. **Monitor submissions in real-time** during the exam
6. **Keep API key confidential** - Already secured in script

## Next Steps

1. ✅ Form created with all 24 students and 5 variants
2. ⚠️ **CONFIGURE CONDITIONAL LOGIC** (Critical - Must do before using form!)
3. 🔧 Configure additional settings (time limit, single submission, etc.)
4. ✅ Test form with each variant
5. 📧 Distribute form link to students
6. 📊 Monitor submissions during exam
7. 📁 Export results for grading

---

**Created**: October 20, 2025, 4:59 PM
**Status**: Form created, awaiting conditional logic configuration
**Priority**: HIGH - Must configure conditions before exam
