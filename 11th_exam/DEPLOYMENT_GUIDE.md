# Google Apps Script Deployment Guide

## Quick Start - How to Actually Create the Forms

### Step 1: Access Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Sign in with your Google account
3. Click "New Project"

### Step 2: Copy the Script
1. Open `google_form_exam_creator.js` from this folder
2. Copy ALL the code
3. Paste it into the Google Apps Script editor
4. Save the project (Ctrl+S or Cmd+S)

### Step 3: Enable Required Services
1. In the Google Apps Script editor, click on **"Services"** on the left sidebar
2. Click **"+ Add a service"**
3. Add these services:
   - **Google Forms API**
   - **Google Sheets API** (for URL export)
   - **Google Drive API**

### Step 4: Run the Script
1. In the Google Apps Script editor, select the function `createAllExamForms` from the dropdown
2. Click the **Run** button (▶️)
3. Authorize the script when prompted
4. Wait for execution to complete

### Step 5: Check Results
1. Go to [drive.google.com](https://drive.google.com)
2. Look for new Google Forms with names like:
   - "11th Grade Computer Science Exam - Variant 1"
   - "11th Grade Computer Science Exam - Variant 2"
   - etc.

## Alternative: Create One Form at a Time

If you want to test with just one form first:

1. Select `createSpecificVariant` from the function dropdown
2. Change the parameter to the variant number you want (1-5)
3. Click **Run**

## Using the Custom Menu

After running the script once:

1. Open Google Sheets or Google Forms
2. You should see an "Exam Creator" menu
3. Use the menu to create forms without going back to the script editor

## Troubleshooting Common Issues

### "Execution completed" but no forms created?
- Check that you authorized all permissions
- Look in Google Drive for the forms
- Check the execution logs in Google Apps Script

### Authorization errors?
- Make sure you're signed in with the correct Google account
- Grant all requested permissions
- Try running the script again

### Forms created but not visible?
- They might be in a different Google Drive folder
- Search for "11th Grade Computer Science Exam" in Google Drive
- Check the "Shared with me" section

### Script execution limits?
- Google Apps Script has daily quotas
- If you hit limits, wait 24 hours or use a different account

## Verifying Successful Creation

After running the script, you should see:

1. **5 new Google Forms** in your Google Drive
2. **Execution logs** showing success messages
3. **Form URLs** in the logs (you can click these to open the forms)

## Next Steps After Creation

1. **Review each form** to ensure questions display correctly
2. **Test submission** with a sample response
3. **Share forms** with students via the published URLs
4. **Monitor responses** in the Forms response section

## Important Notes

- The forms will be created in the same Google Drive account you used to run the script
- Each form will have unique questions based on the variant
- Forms are set to collect email addresses and require login
- Students can only submit each form once

If you continue to have issues, try running the test functions first to verify the script is working correctly.
