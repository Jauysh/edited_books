import requests
import json

# JotForm API configuration
API_KEY = "a7a9cab94eb9b70323efd4ce1381502f"
BASE_URL = "https://eu-api.jotform.com"

headers = {
    "APIKEY": API_KEY,
    "Content-Type": "application/x-www-form-urlencoded"
}

# Student-Variant mapping
STUDENT_VARIANTS = {
    "ALKHATIB Abdel": "Variant 1",
    "BIVOL Anna Maria": "Variant 4",
    "BIVOL Gloria": "Variant 3",
    "BLAGODARENCO Pavel": "Variant 5",
    "BODRUG Sofia": "Variant 3",
    "BOTIZATU Catalina": "Variant 2",
    "CHESERAD David": "Variant 1",
    "CHIRNEVA Alexandra": "Variant 1",
    "COLIBAN Alexandru": "Variant 4",
    "CULCITCHI Ilia": "Variant 2",
    "DRAGOMIR Amelia-Sabina": "Variant 5",
    "ERGUN Yasemin": "Variant 4",
    "GORAS Vlada": "Variant 2",
    "HVATOVA Victoria": "Variant 1",
    "IVANICICHIN Alexandr": "Variant 4",
    "JARDAN Bogdan": "Variant 2",
    "MOCREAC Bogdan": "Variant 3",
    "OALA Fabian": "Variant 5",
    "PATRAS Victor": "Variant 3",
    "POPA Daniela": "Variant 4",
    "POTACEVSCHI Gheorghe": "Variant 5",
    "Rafiey Tabrizi Mandana": "Variant 3",
    "TARAN Mihail": "Variant 2",
    "ZABOLOTNII Daniel": "Variant 1"
}

# Group students by variant
def get_students_by_variant():
    variant_students = {f"Variant {i}": [] for i in range(1, 6)}
    for student, variant in STUDENT_VARIANTS.items():
        variant_students[variant].append(student)
    return variant_students

# Create the form
def create_exam_form():
    form_data = {
        "properties[title]": "Programming Fundamentals Examination - 10th Grade",
        "properties[height]": "600"
    }
    
    response = requests.post(f"{BASE_URL}/form", data=form_data, headers=headers)
    
    print(f"Response Status: {response.status_code}")
    
    if response.status_code == 200:
        response_data = response.json()
        if "content" in response_data and "id" in response_data["content"]:
            form_id = response_data["content"]["id"]
            print(f"Form created successfully! Form ID: {form_id}")
            return form_id
        else:
            print(f"Unexpected response structure: {response_data}")
            return None
    else:
        print(f"Error creating form: {response.status_code}")
        print(response.text)
        return None

# Add questions to the form
def add_questions(form_id):
    # Question 1: Student Name Selection (Dropdown)
    student_names = "|".join(sorted(STUDENT_VARIANTS.keys()))
    
    student_question = {
        "question[type]": "control_dropdown",
        "question[text]": "Select Your Name",
        "question[order]": "1",
        "question[name]": "studentName",
        "question[required]": "Yes",
        "question[options]": student_names
    }
    
    response = requests.post(f"{BASE_URL}/form/{form_id}/questions", 
                            data=student_question, headers=headers)
    if response.status_code == 200:
        student_qid = response.json()["content"]["qid"]
        print(f"Added student name dropdown: {student_qid}")
    else:
        print(f"Error adding student question: {response.text}")
        return
    
    # Variant 1 Questions
    v1_questions = [
        {
            "type": "control_radio",
            "text": "Q1: Which definition best describes an algorithm?",
            "order": "2",
            "name": "v1q1",
            "required": "Yes",
            "options": "A) A sequence of mathematical calculations|B) A finite set of precise instructions for solving a problem|C) A computer program written in C++|D) A system of computer hardware commands"
        },
        {
            "type": "control_radio",
            "text": "Q2: What are the primary commands available to the Kangaroo performer?",
            "order": "3",
            "name": "v1q2",
            "required": "Yes",
            "options": "A) UP, DOWN, RIGHT, LEFT|B) STEP, TURN, JUMP|C) ADD, SUBTRACT, DIVIDE|D) IF, THEN, ELSE"
        },
        {
            "type": "control_radio",
            "text": "Q3: What distinguishes manual control mode from automatic control mode?",
            "order": "4",
            "name": "v1q3",
            "required": "Yes",
            "options": "A) Manual mode typically requires more execution time|B) Manual executes commands individually, automatic executes sequences|C) Automatic mode requires prior programming knowledge|D) Both modes operate identically"
        },
        {
            "type": "control_radio",
            "text": "Q4: What constitutes a computer program?",
            "order": "5",
            "name": "v1q4",
            "required": "Yes",
            "options": "A) An algorithm expressed in natural language|B) A sequence of instructions for automated execution|C) A mathematical expression or formula|D) A software application package"
        },
        {
            "type": "control_radio",
            "text": "Q5: What is the primary purpose of syntax diagrams?",
            "order": "6",
            "name": "v1q5",
            "required": "Yes",
            "options": "A) To create visual representations of algorithms|B) To provide graphical syntax descriptions for programming languages|C) To illustrate data structure organization|D) To demonstrate program execution flow"
        },
        {
            "type": "control_radio",
            "text": "Q6: What process does compilation represent?",
            "order": "7",
            "name": "v1q6",
            "required": "Yes",
            "options": "A) Program creation and development|B) Translation from high-level to machine language|C) Error detection and correction|D) Program testing and validation"
        },
        {
            "type": "control_radio",
            "text": "Q7: Which languages are classified as high-level programming languages?",
            "order": "8",
            "name": "v1q7",
            "required": "Yes",
            "options": "A) Machine code and assembly language|B) C++, Pascal, and Java|C) Binary numerical representations|D) Hardware-specific instruction sets"
        },
        {
            "type": "control_radio",
            "text": "Q8: What defines an identifier in programming?",
            "order": "9",
            "name": "v1q8",
            "required": "Yes",
            "options": "A) A punctuation or operator symbol|B) A name assigned to variables, functions, or constants|C) A numerical value or literal|D) A language-reserved keyword"
        },
        {
            "type": "control_radio",
            "text": "Q9: Which operator handles standard output in C++?",
            "order": "10",
            "name": "v1q9",
            "required": "Yes",
            "options": "A) cin (console input)|B) cout (console output)|C) printf (formatted print)|D) display (screen output)"
        },
        {
            "type": "control_radio",
            "text": "Q10: What semantic meaning does the ::= symbol carry in BNF notation?",
            "order": "11",
            "name": "v1q10",
            "required": "Yes",
            "options": "A) Mathematical equality|B) Definition or \"is defined as\"|C) Variable assignment operation|D) Comparative relationship"
        },
        {
            "type": "control_textarea",
            "text": "Q11: Implement a C++ program that outputs \"Hello, world!\" to the console",
            "order": "12",
            "name": "v1q11",
            "required": "Yes"
        },
        {
            "type": "control_checkbox",
            "text": "Q12: Identify valid C++ identifiers from the following:",
            "order": "13",
            "name": "v1q12",
            "required": "Yes",
            "options": "A) myVariable|B) 1variable|C) variable-1|D) variable1"
        },
        {
            "type": "control_textarea",
            "text": "Q13: Construct a BNF production rule for decimal digits (0-9)",
            "order": "14",
            "name": "v1q13",
            "required": "Yes"
        }
    ]
    
    # Variant 2 Questions
    v2_questions = [
        {
            "type": "control_radio",
            "text": "Q1: In computer science, what characterizes a performer?",
            "order": "15",
            "name": "v2q1",
            "required": "Yes",
            "options": "A) A human programmer developing software|B) An entity capable of executing predefined commands|C) A malicious software program|D) A programming language specification"
        },
        {
            "type": "control_radio",
            "text": "Q2: What command repertoire does the Ant performer possess?",
            "order": "16",
            "name": "v2q2",
            "required": "Yes",
            "options": "A) STEP, TURN, JUMP|B) UP, DOWN, RIGHT, LEFT|C) ADD, SUBTRACT, DIVIDE|D) IF, THEN, ELSE"
        },
        {
            "type": "control_radio",
            "text": "Q3: What fundamental process does compilation involve?",
            "order": "17",
            "name": "v2q3",
            "required": "Yes",
            "options": "A) Source code creation and editing|B) Translation to executable machine code|C) Syntax and semantic error resolution|D) Program execution and testing"
        },
        {
            "type": "control_radio",
            "text": "Q4: What principal advantage do high-level languages provide?",
            "order": "18",
            "name": "v2q4",
            "required": "Yes",
            "options": "A) Enhanced execution speed performance|B) Simplified software development process|C) Reduced memory consumption|D) Natural language comprehension"
        },
        {
            "type": "control_radio",
            "text": "Q5: How are terminal symbols depicted in syntax diagrams?",
            "order": "19",
            "name": "v2q5",
            "required": "Yes",
            "options": "A) Rectangular boxes|B) Circular or oval shapes|C) Triangular forms|D) Square outlines"
        },
        {
            "type": "control_radio",
            "text": "Q6: What does algorithmization encompass?",
            "order": "20",
            "name": "v2q6",
            "required": "Yes",
            "options": "A) Software implementation and coding|B) Systematic algorithm development|C) Computer hardware study|D) Database management operations"
        },
        {
            "type": "control_radio",
            "text": "Q7: What constitutes a performer's command system?",
            "order": "21",
            "name": "v2q7",
            "required": "Yes",
            "options": "A) A collection of software programs|B) The complete set of executable commands|C) Operating system components|D) Programming language elements"
        },
        {
            "type": "control_radio",
            "text": "Q8: Which operator manages standard input in C++?",
            "order": "22",
            "name": "v2q8",
            "required": "Yes",
            "options": "A) cout (console output)|B) cin (console input)|C) input (data acquisition)|D) read (data retrieval)"
        },
        {
            "type": "control_radio",
            "text": "Q9: What defines terminal symbols in BNF grammar?",
            "order": "23",
            "name": "v2q9",
            "required": "Yes",
            "options": "A) Fundamental program constituents|B) Abstract grammatical categories|C) Language-reserved words|D) Explanatory annotations"
        },
        {
            "type": "control_radio",
            "text": "Q10: What information does each syntax diagram path convey?",
            "order": "24",
            "name": "v2q10",
            "required": "Yes",
            "options": "A) Problem-solving methodology|B) Valid syntactic constructions|C) Program architectural design|D) Logical operation sequences"
        },
        {
            "type": "control_textarea",
            "text": "Q11: Develop a C++ program displaying your personal name",
            "order": "25",
            "name": "v2q11",
            "required": "Yes"
        },
        {
            "type": "control_checkbox",
            "text": "Q12: Recognize special operator symbols in C++:",
            "order": "26",
            "name": "v2q12",
            "required": "Yes",
            "options": "A) Addition operator (+)|B) Subtraction operator (-)|C) Multiplication operator (*)|D) Division operator (/)"
        },
        {
            "type": "control_textarea",
            "text": "Q13: Formulate a BNF rule for Latin alphabet characters",
            "order": "27",
            "name": "v2q13",
            "required": "Yes"
        }
    ]
    
    # Variant 3 Questions
    v3_questions = [
        {
            "type": "control_radio",
            "text": "Q1: What conceptual process does algorithmization represent?",
            "order": "28",
            "name": "v3q1",
            "required": "Yes",
            "options": "A) Program implementation and testing|B) Structured algorithm creation|C) Computational theory study|D) Information system design"
        },
        {
            "type": "control_radio",
            "text": "Q2: What comprises a performer's command repertoire?",
            "order": "29",
            "name": "v3q2",
            "required": "Yes",
            "options": "A) Software application collection|B) Available instruction set|C) System software components|D) Programming language syntax"
        },
        {
            "type": "control_radio",
            "text": "Q3: Which languages demonstrate high-level programming characteristics?",
            "order": "30",
            "name": "v3q3",
            "required": "Yes",
            "options": "A) Machine-level instruction sets|B) C++, Pascal, Java platforms|C) Binary encoding systems|D) Assembly language dialects"
        },
        {
            "type": "control_radio",
            "text": "Q4: What essential activity defines programming?",
            "order": "31",
            "name": "v3q4",
            "required": "Yes",
            "options": "A) Computer architecture analysis|B) Software development process|C) Network communication|D) Web application creation"
        },
        {
            "type": "control_radio",
            "text": "Q5: How are non-terminal symbols represented syntactically?",
            "order": "32",
            "name": "v3q5",
            "required": "Yes",
            "options": "A) Circular or oval containers|B) Rectangular enclosures|C) Triangular markers|D) Diamond shapes"
        },
        {
            "type": "control_radio",
            "text": "Q6: What characterizes machine language?",
            "order": "33",
            "name": "v3q6",
            "required": "Yes",
            "options": "A) Human-readable text format|B) Binary instruction sequences|C) Natural language expressions|D) Symbolic communication"
        },
        {
            "type": "control_radio",
            "text": "Q7: What sequential stages comprise computer problem-solving?",
            "order": "34",
            "name": "v3q7",
            "required": "Yes",
            "options": "A) Exclusive program implementation|B) Algorithm design, implementation, compilation, debugging|C) Compilation process only|D) Program execution exclusively"
        },
        {
            "type": "control_radio",
            "text": "Q8: What functional purpose does BNF metalanguage serve?",
            "order": "35",
            "name": "v3q8",
            "required": "Yes",
            "options": "A) Software development|B) Formal syntax specification|C) Database management|D) Web technology"
        },
        {
            "type": "control_radio",
            "text": "Q9: What distinguishes terminal symbols in formal grammar?",
            "order": "36",
            "name": "v3q9",
            "required": "Yes",
            "options": "A) Basic lexical elements|B) Abstract syntactic categories|C) Reserved vocabulary|D) Documentation elements"
        },
        {
            "type": "control_radio",
            "text": "Q10: What representational method applies to BNF syntax diagrams?",
            "order": "37",
            "name": "v3q10",
            "required": "Yes",
            "options": "A) Flowchart methodology|B) Graphical plotting|C) Geometric shape combinations|D) Tabular arrangements"
        },
        {
            "type": "control_textarea",
            "text": "Q11: Create a C++ program outputting numerical sequence 1-3",
            "order": "38",
            "name": "v3q11",
            "required": "Yes"
        },
        {
            "type": "control_checkbox",
            "text": "Q12: Determine letter-initial sequences:",
            "order": "39",
            "name": "v3q12",
            "required": "Yes",
            "options": "A) variable|B) 1var|C) _temp|D) myName"
        },
        {
            "type": "control_textarea",
            "text": "Q13: Define BNF production for signed integer notation",
            "order": "40",
            "name": "v3q13",
            "required": "Yes"
        }
    ]
    
    # Variant 4 Questions
    v4_questions = [
        {
            "type": "control_radio",
            "text": "Q1: What fundamental nature defines machine language?",
            "order": "41",
            "name": "v4q1",
            "required": "Yes",
            "options": "A) Natural language communication|B) Binary instruction encoding|C) Human language expression|D) Gestural communication"
        },
        {
            "type": "control_radio",
            "text": "Q2: What systematic approach solves computational problems?",
            "order": "42",
            "name": "v4q2",
            "required": "Yes",
            "options": "A) Program writing exclusively|B) Algorithm specification, implementation, translation, verification|C) Translation process only|D) Execution phase solely"
        },
        {
            "type": "control_radio",
            "text": "Q3: What analytical function does BNF metalanguage perform?",
            "order": "43",
            "name": "v4q3",
            "required": "Yes",
            "options": "A) Program composition|B) Syntax formalization|C) Data organization|D) Web development"
        },
        {
            "type": "control_radio",
            "text": "Q4: What constitutes terminal symbols in formal definition?",
            "order": "44",
            "name": "v4q4",
            "required": "Yes",
            "options": "A) Elementary language tokens|B) Grammatical categories|C) Keyword elements|D) Commentary text"
        },
        {
            "type": "control_radio",
            "text": "Q5: What visualization technique represents BNF formally?",
            "order": "45",
            "name": "v4q5",
            "required": "Yes",
            "options": "A) Process flow depiction|B) Mathematical graphing|C) Geometric symbol arrangement|D) Data tabulation"
        },
        {
            "type": "control_radio",
            "text": "Q6: What integrated functionality defines development environments?",
            "order": "46",
            "name": "v4q6",
            "required": "Yes",
            "options": "A) Text editing capability|B) Comprehensive programming tools|C) Compilation services|D) Operating system functions"
        },
        {
            "type": "control_radio",
            "text": "Q7: What operational capabilities do IDEs provide?",
            "order": "47",
            "name": "v4q7",
            "required": "Yes",
            "options": "A) Translation services only|B) Editing, compilation, debugging integration|C) Execution functionality|D) File management"
        },
        {
            "type": "control_radio",
            "text": "Q8: What descriptive purpose do syntax diagrams serve?",
            "order": "48",
            "name": "v4q8",
            "required": "Yes",
            "options": "A) Mathematical function plotting|B) Language syntax visualization|C) Algorithm representation|D) Hardware schematic design"
        },
        {
            "type": "control_radio",
            "text": "Q9: What abstract role do non-terminal symbols fulfill?",
            "order": "49",
            "name": "v4q9",
            "required": "Yes",
            "options": "A) Concrete language elements|B) Grammatical constructs|C) Numerical representations|D) Alphabetic characters"
        },
        {
            "type": "control_radio",
            "text": "Q10: What linguistic information does syntax diagram traversal provide?",
            "order": "50",
            "name": "v4q10",
            "required": "Yes",
            "options": "A) Problem-solving strategy|B) Grammatically valid constructs|C) Program organization|D) Logical procedure"
        },
        {
            "type": "control_textarea",
            "text": "Q11: Implement a C++ program displaying academic subject preference",
            "order": "51",
            "name": "v4q11",
            "required": "Yes"
        },
        {
            "type": "control_checkbox",
            "text": "Q12: Identify C++ reserved keywords:",
            "order": "52",
            "name": "v4q12",
            "required": "Yes",
            "options": "A) int (integer type)|B) main (program entry)|C) variable (user-defined)|D) number (user-defined)"
        },
        {
            "type": "control_textarea",
            "text": "Q13: Specify BNF grammar for identifier construction",
            "order": "53",
            "name": "v4q13",
            "required": "Yes"
        }
    ]
    
    # Variant 5 Questions
    v5_questions = [
        {
            "type": "control_radio",
            "text": "Q1: What comprehensive toolset defines development environments?",
            "order": "54",
            "name": "v5q1",
            "required": "Yes",
            "options": "A) Text processing applications|B) Integrated programming utilities|C) Translation programs|D) System software"
        },
        {
            "type": "control_radio",
            "text": "Q2: What functional integration characterizes modern IDEs?",
            "order": "55",
            "name": "v5q2",
            "required": "Yes",
            "options": "A) Compilation capability|B) Code editing, translation, debugging|C) Program execution|D) Data storage"
        },
        {
            "type": "control_radio",
            "text": "Q3: What representational method describes syntax diagrams?",
            "order": "56",
            "name": "v5q3",
            "required": "Yes",
            "options": "A) Mathematical function graphs|B) Language syntax illustration|C) Algorithm flowcharting|D) Technical drawing"
        },
        {
            "type": "control_radio",
            "text": "Q4: What grammatical function do non-terminal symbols perform?",
            "order": "57",
            "name": "v5q4",
            "required": "Yes",
            "options": "A) Concrete language tokens|B) Abstract syntactic categories|C) Numerical digits|D) Alphabetic letters"
        },
        {
            "type": "control_radio",
            "text": "Q5: What linguistic validity does syntax path analysis establish?",
            "order": "58",
            "name": "v5q5",
            "required": "Yes",
            "options": "A) Problem solution methodology|B) Syntactic construction correctness|C) Program structural design|D) Logical operation sequence"
        },
        {
            "type": "control_radio",
            "text": "Q6: What conceptual framework defines algorithms?",
            "order": "59",
            "name": "v5q6",
            "required": "Yes",
            "options": "A) Mathematical formalism|B) Systematic problem-solving procedure|C) Computer program implementation|D) Programming language specification"
        },
        {
            "type": "control_radio",
            "text": "Q7: What operational commands characterize the Kangaroo performer?",
            "order": "60",
            "name": "v5q7",
            "required": "Yes",
            "options": "A) UP, DOWN, RIGHT, LEFT|B) STEP, TURN, JUMP|C) ADD, SUBTRACT, MULTIPLY|D) IF, WHILE, REPEAT"
        },
        {
            "type": "control_radio",
            "text": "Q8: What operational distinction separates control modes?",
            "order": "61",
            "name": "v5q8",
            "required": "Yes",
            "options": "A) Execution speed differential|B) Individual vs. sequential command execution|C) Task complexity handling|D) Functional equivalence"
        },
        {
            "type": "control_radio",
            "text": "Q9: What executable entity constitutes a program?",
            "order": "62",
            "name": "v5q9",
            "required": "Yes",
            "options": "A) Natural language algorithm description|B) Automated instruction sequence|C) Mathematical equation system|D) Interactive software application"
        },
        {
            "type": "control_radio",
            "text": "Q10: What descriptive utility do syntax diagrams provide?",
            "order": "63",
            "name": "v5q10",
            "required": "Yes",
            "options": "A) Algorithm visualization|B) Programming language syntax illustration|C) Data structure representation|D) Program execution demonstration"
        },
        {
            "type": "control_textarea",
            "text": "Q11: Develop a C++ program outputting current date information",
            "order": "64",
            "name": "v5q11",
            "required": "Yes"
        },
        {
            "type": "control_checkbox",
            "text": "Q12: Recognize compound operator symbols:",
            "order": "65",
            "name": "v5q12",
            "required": "Yes",
            "options": "A) Less than or equal (<=)|B) Greater than or equal (>=)|C) Assignment operator (=)|D) Addition operator (+)"
        },
        {
            "type": "control_textarea",
            "text": "Q13: Define BNF production for arithmetic signs",
            "order": "66",
            "name": "v5q13",
            "required": "Yes"
        }
    ]
    
    # Add all questions
    all_questions = v1_questions + v2_questions + v3_questions + v4_questions + v5_questions
    
    for q in all_questions:
        question_data = {}
        for key, value in q.items():
            question_data[f"question[{key}]"] = value
        
        response = requests.post(f"{BASE_URL}/form/{form_id}/questions", 
                                data=question_data, headers=headers)
        if response.status_code == 200:
            print(f"Added question: {q['name']}")
        else:
            print(f"Error adding question {q['name']}: {response.text}")
    
    return student_qid

# Print configuration instructions
def print_instructions(form_id):
    print("\n" + "="*80)
    print("CONDITIONAL LOGIC CONFIGURATION INSTRUCTIONS")
    print("="*80)
    
    variant_students = get_students_by_variant()
    
    print("\nYou need to configure Show/Hide conditions for each question based on student names.")
    print("\nFor JotForm Builder:")
    print("1. Open form: https://form.jotform.com/build/" + form_id)
    print("2. For each question set (v1q1-v1q13, v2q1-v2q13, etc.):")
    print("   - Select all questions for that variant")
    print("   - Go to Conditions → Show/Hide Field")
    print("   - Configure as follows:\n")
    
    for variant in ["Variant 1", "Variant 2", "Variant 3", "Variant 4", "Variant 5"]:
        variant_num = variant.split()[1]
        students = variant_students[variant]
        print(f"\n{variant} Questions (v{variant_num}q1 - v{variant_num}q13):")
        print(f"   Show if 'Select Your Name' equals:")
        for student in students:
            print(f"      - {student}")
    
    print("\n" + "="*80)
    print("\nAlternative: Use conditional logic with OR conditions")
    print("For each variant's questions, create ONE condition with multiple OR statements")
    print("Example for Variant 1 questions:")
    print("  IF 'Select Your Name' equals 'ALKHATIB Abdel'")
    print("  OR 'Select Your Name' equals 'CHESERAD David'")
    print("  OR 'Select Your Name' equals 'CHIRNEVA Alexandra'")
    print("  OR 'Select Your Name' equals 'HVATOVA Victoria'")
    print("  OR 'Select Your Name' equals 'ZABOLOTNII Daniel'")
    print("  THEN Show these fields")
    print("="*80)

# Main execution
if __name__ == "__main__":
    print("Creating JotForm for Programming Fundamentals Examination with Student Names...")
    print("\nStudent-Variant Mapping:")
    print("-" * 60)
    for student, variant in sorted(STUDENT_VARIANTS.items()):
        print(f"{student:<35} -> {variant}")
    print("-" * 60)
    
    # Create form
    form_id = create_exam_form()
    
    if form_id:
        # Add questions
        student_qid = add_questions(form_id)
        
        # Print instructions
        print_instructions(form_id)
        
        print(f"\n✓ Form created successfully!")
        print(f"Form ID: {form_id}")
        print(f"Form URL: https://form.jotform.com/{form_id}")
        print(f"Edit URL: https://form.jotform.com/build/{form_id}")
        
        print("\n" + "="*80)
        print("SUMMARY")
        print("="*80)
        print(f"Total Students: {len(STUDENT_VARIANTS)}")
        variant_students = get_students_by_variant()
        for variant in ["Variant 1", "Variant 2", "Variant 3", "Variant 4", "Variant 5"]:
            print(f"{variant}: {len(variant_students[variant])} students")
        print("="*80)
