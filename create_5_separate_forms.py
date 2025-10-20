import requests
import json

# JotForm API configuration
API_KEY = "a7a9cab94eb9b70323efd4ce1381502f"
BASE_URL = "https://eu-api.jotform.com"

headers = {
    "APIKEY": API_KEY,
    "Content-Type": "application/x-www-form-urlencoded"
}

# Student assignments by variant
VARIANT_STUDENTS = {
    "Variant 1": [
        "ALKHATIB Abdel",
        "CHESERAD David",
        "CHIRNEVA Alexandra",
        "HVATOVA Victoria",
        "ZABOLOTNII Daniel"
    ],
    "Variant 2": [
        "BOTIZATU Catalina",
        "CULCITCHI Ilia",
        "GORAS Vlada",
        "JARDAN Bogdan",
        "TARAN Mihail"
    ],
    "Variant 3": [
        "BIVOL Gloria",
        "BODRUG Sofia",
        "MOCREAC Bogdan",
        "PATRAS Victor",
        "Rafiey Tabrizi Mandana"
    ],
    "Variant 4": [
        "BIVOL Anna Maria",
        "COLIBAN Alexandru",
        "ERGUN Yasemin",
        "IVANICICHIN Alexandr",
        "POPA Daniela"
    ],
    "Variant 5": [
        "BLAGODARENCO Pavel",
        "DRAGOMIR Amelia-Sabina",
        "OALA Fabian",
        "POTACEVSCHI Gheorghe"
    ]
}

# Questions for each variant
VARIANT_QUESTIONS = {
    "Variant 1": [
        {
            "type": "control_radio",
            "text": "Q1: Which definition best describes an algorithm?",
            "name": "q1",
            "options": "A) A sequence of mathematical calculations|B) A finite set of precise instructions for solving a problem|C) A computer program written in C++|D) A system of computer hardware commands"
        },
        {
            "type": "control_radio",
            "text": "Q2: What are the primary commands available to the Kangaroo performer?",
            "name": "q2",
            "options": "A) UP, DOWN, RIGHT, LEFT|B) STEP, TURN, JUMP|C) ADD, SUBTRACT, DIVIDE|D) IF, THEN, ELSE"
        },
        {
            "type": "control_radio",
            "text": "Q3: What distinguishes manual control mode from automatic control mode?",
            "name": "q3",
            "options": "A) Manual mode typically requires more execution time|B) Manual executes commands individually, automatic executes sequences|C) Automatic mode requires prior programming knowledge|D) Both modes operate identically"
        },
        {
            "type": "control_radio",
            "text": "Q4: What constitutes a computer program?",
            "name": "q4",
            "options": "A) An algorithm expressed in natural language|B) A sequence of instructions for automated execution|C) A mathematical expression or formula|D) A software application package"
        },
        {
            "type": "control_radio",
            "text": "Q5: What is the primary purpose of syntax diagrams?",
            "name": "q5",
            "options": "A) To create visual representations of algorithms|B) To provide graphical syntax descriptions for programming languages|C) To illustrate data structure organization|D) To demonstrate program execution flow"
        },
        {
            "type": "control_radio",
            "text": "Q6: What process does compilation represent?",
            "name": "q6",
            "options": "A) Program creation and development|B) Translation from high-level to machine language|C) Error detection and correction|D) Program testing and validation"
        },
        {
            "type": "control_radio",
            "text": "Q7: Which languages are classified as high-level programming languages?",
            "name": "q7",
            "options": "A) Machine code and assembly language|B) C++, Pascal, and Java|C) Binary numerical representations|D) Hardware-specific instruction sets"
        },
        {
            "type": "control_radio",
            "text": "Q8: What defines an identifier in programming?",
            "name": "q8",
            "options": "A) A punctuation or operator symbol|B) A name assigned to variables, functions, or constants|C) A numerical value or literal|D) A language-reserved keyword"
        },
        {
            "type": "control_radio",
            "text": "Q9: Which operator handles standard output in C++?",
            "name": "q9",
            "options": "A) cin (console input)|B) cout (console output)|C) printf (formatted print)|D) display (screen output)"
        },
        {
            "type": "control_radio",
            "text": "Q10: What semantic meaning does the ::= symbol carry in BNF notation?",
            "name": "q10",
            "options": "A) Mathematical equality|B) Definition or \"is defined as\"|C) Variable assignment operation|D) Comparative relationship"
        },
        {
            "type": "control_textarea",
            "text": "Q11: Implement a C++ program that outputs \"Hello, world!\" to the console",
            "name": "q11"
        },
        {
            "type": "control_checkbox",
            "text": "Q12: Identify valid C++ identifiers from the following:",
            "name": "q12",
            "options": "A) myVariable|B) 1variable|C) variable-1|D) variable1"
        },
        {
            "type": "control_textarea",
            "text": "Q13: Construct a BNF production rule for decimal digits (0-9)",
            "name": "q13"
        }
    ],
    "Variant 2": [
        {
            "type": "control_radio",
            "text": "Q1: In computer science, what characterizes a performer?",
            "name": "q1",
            "options": "A) A human programmer developing software|B) An entity capable of executing predefined commands|C) A malicious software program|D) A programming language specification"
        },
        {
            "type": "control_radio",
            "text": "Q2: What command repertoire does the Ant performer possess?",
            "name": "q2",
            "options": "A) STEP, TURN, JUMP|B) UP, DOWN, RIGHT, LEFT|C) ADD, SUBTRACT, DIVIDE|D) IF, THEN, ELSE"
        },
        {
            "type": "control_radio",
            "text": "Q3: What fundamental process does compilation involve?",
            "name": "q3",
            "options": "A) Source code creation and editing|B) Translation to executable machine code|C) Syntax and semantic error resolution|D) Program execution and testing"
        },
        {
            "type": "control_radio",
            "text": "Q4: What principal advantage do high-level languages provide?",
            "name": "q4",
            "options": "A) Enhanced execution speed performance|B) Simplified software development process|C) Reduced memory consumption|D) Natural language comprehension"
        },
        {
            "type": "control_radio",
            "text": "Q5: How are terminal symbols depicted in syntax diagrams?",
            "name": "q5",
            "options": "A) Rectangular boxes|B) Circular or oval shapes|C) Triangular forms|D) Square outlines"
        },
        {
            "type": "control_radio",
            "text": "Q6: What does algorithmization encompass?",
            "name": "q6",
            "options": "A) Software implementation and coding|B) Systematic algorithm development|C) Computer hardware study|D) Database management operations"
        },
        {
            "type": "control_radio",
            "text": "Q7: What constitutes a performer's command system?",
            "name": "q7",
            "options": "A) A collection of software programs|B) The complete set of executable commands|C) Operating system components|D) Programming language elements"
        },
        {
            "type": "control_radio",
            "text": "Q8: Which operator manages standard input in C++?",
            "name": "q8",
            "options": "A) cout (console output)|B) cin (console input)|C) input (data acquisition)|D) read (data retrieval)"
        },
        {
            "type": "control_radio",
            "text": "Q9: What defines terminal symbols in BNF grammar?",
            "name": "q9",
            "options": "A) Fundamental program constituents|B) Abstract grammatical categories|C) Language-reserved words|D) Explanatory annotations"
        },
        {
            "type": "control_radio",
            "text": "Q10: What information does each syntax diagram path convey?",
            "name": "q10",
            "options": "A) Problem-solving methodology|B) Valid syntactic constructions|C) Program architectural design|D) Logical operation sequences"
        },
        {
            "type": "control_textarea",
            "text": "Q11: Develop a C++ program displaying your personal name",
            "name": "q11"
        },
        {
            "type": "control_checkbox",
            "text": "Q12: Recognize special operator symbols in C++:",
            "name": "q12",
            "options": "A) Addition operator (+)|B) Subtraction operator (-)|C) Multiplication operator (*)|D) Division operator (/)"
        },
        {
            "type": "control_textarea",
            "text": "Q13: Formulate a BNF rule for Latin alphabet characters",
            "name": "q13"
        }
    ],
    "Variant 3": [
        {
            "type": "control_radio",
            "text": "Q1: What conceptual process does algorithmization represent?",
            "name": "q1",
            "options": "A) Program implementation and testing|B) Structured algorithm creation|C) Computational theory study|D) Information system design"
        },
        {
            "type": "control_radio",
            "text": "Q2: What comprises a performer's command repertoire?",
            "name": "q2",
            "options": "A) Software application collection|B) Available instruction set|C) System software components|D) Programming language syntax"
        },
        {
            "type": "control_radio",
            "text": "Q3: Which languages demonstrate high-level programming characteristics?",
            "name": "q3",
            "options": "A) Machine-level instruction sets|B) C++, Pascal, Java platforms|C) Binary encoding systems|D) Assembly language dialects"
        },
        {
            "type": "control_radio",
            "text": "Q4: What essential activity defines programming?",
            "name": "q4",
            "options": "A) Computer architecture analysis|B) Software development process|C) Network communication|D) Web application creation"
        },
        {
            "type": "control_radio",
            "text": "Q5: How are non-terminal symbols represented syntactically?",
            "name": "q5",
            "options": "A) Circular or oval containers|B) Rectangular enclosures|C) Triangular markers|D) Diamond shapes"
        },
        {
            "type": "control_radio",
            "text": "Q6: What characterizes machine language?",
            "name": "q6",
            "options": "A) Human-readable text format|B) Binary instruction sequences|C) Natural language expressions|D) Symbolic communication"
        },
        {
            "type": "control_radio",
            "text": "Q7: What sequential stages comprise computer problem-solving?",
            "name": "q7",
            "options": "A) Exclusive program implementation|B) Algorithm design, implementation, compilation, debugging|C) Compilation process only|D) Program execution exclusively"
        },
        {
            "type": "control_radio",
            "text": "Q8: What functional purpose does BNF metalanguage serve?",
            "name": "q8",
            "options": "A) Software development|B) Formal syntax specification|C) Database management|D) Web technology"
        },
        {
            "type": "control_radio",
            "text": "Q9: What distinguishes terminal symbols in formal grammar?",
            "name": "q9",
            "options": "A) Basic lexical elements|B) Abstract syntactic categories|C) Reserved vocabulary|D) Documentation elements"
        },
        {
            "type": "control_radio",
            "text": "Q10: What representational method applies to BNF syntax diagrams?",
            "name": "q10",
            "options": "A) Flowchart methodology|B) Graphical plotting|C) Geometric shape combinations|D) Tabular arrangements"
        },
        {
            "type": "control_textarea",
            "text": "Q11: Create a C++ program outputting numerical sequence 1-3",
            "name": "q11"
        },
        {
            "type": "control_checkbox",
            "text": "Q12: Determine letter-initial sequences:",
            "name": "q12",
            "options": "A) variable|B) 1var|C) _temp|D) myName"
        },
        {
            "type": "control_textarea",
            "text": "Q13: Define BNF production for signed integer notation",
            "name": "q13"
        }
    ],
    "Variant 4": [
        {
            "type": "control_radio",
            "text": "Q1: What fundamental nature defines machine language?",
            "name": "q1",
            "options": "A) Natural language communication|B) Binary instruction encoding|C) Human language expression|D) Gestural communication"
        },
        {
            "type": "control_radio",
            "text": "Q2: What systematic approach solves computational problems?",
            "name": "q2",
            "options": "A) Program writing exclusively|B) Algorithm specification, implementation, translation, verification|C) Translation process only|D) Execution phase solely"
        },
        {
            "type": "control_radio",
            "text": "Q3: What analytical function does BNF metalanguage perform?",
            "name": "q3",
            "options": "A) Program composition|B) Syntax formalization|C) Data organization|D) Web development"
        },
        {
            "type": "control_radio",
            "text": "Q4: What constitutes terminal symbols in formal definition?",
            "name": "q4",
            "options": "A) Elementary language tokens|B) Grammatical categories|C) Keyword elements|D) Commentary text"
        },
        {
            "type": "control_radio",
            "text": "Q5: What visualization technique represents BNF formally?",
            "name": "q5",
            "options": "A) Process flow depiction|B) Mathematical graphing|C) Geometric symbol arrangement|D) Data tabulation"
        },
        {
            "type": "control_radio",
            "text": "Q6: What integrated functionality defines development environments?",
            "name": "q6",
            "options": "A) Text editing capability|B) Comprehensive programming tools|C) Compilation services|D) Operating system functions"
        },
        {
            "type": "control_radio",
            "text": "Q7: What operational capabilities do IDEs provide?",
            "name": "q7",
            "options": "A) Translation services only|B) Editing, compilation, debugging integration|C) Execution functionality|D) File management"
        },
        {
            "type": "control_radio",
            "text": "Q8: What descriptive purpose do syntax diagrams serve?",
            "name": "q8",
            "options": "A) Mathematical function plotting|B) Language syntax visualization|C) Algorithm representation|D) Hardware schematic design"
        },
        {
            "type": "control_radio",
            "text": "Q9: What abstract role do non-terminal symbols fulfill?",
            "name": "q9",
            "options": "A) Concrete language elements|B) Grammatical constructs|C) Numerical representations|D) Alphabetic characters"
        },
        {
            "type": "control_radio",
            "text": "Q10: What linguistic information does syntax diagram traversal provide?",
            "name": "q10",
            "options": "A) Problem-solving strategy|B) Grammatically valid constructs|C) Program organization|D) Logical procedure"
        },
        {
            "type": "control_textarea",
            "text": "Q11: Implement a C++ program displaying academic subject preference",
            "name": "q11"
        },
        {
            "type": "control_checkbox",
            "text": "Q12: Identify C++ reserved keywords:",
            "name": "q12",
            "options": "A) int (integer type)|B) main (program entry)|C) variable (user-defined)|D) number (user-defined)"
        },
        {
            "type": "control_textarea",
            "text": "Q13: Specify BNF grammar for identifier construction",
            "name": "q13"
        }
    ],
    "Variant 5": [
        {
            "type": "control_radio",
            "text": "Q1: What comprehensive toolset defines development environments?",
            "name": "q1",
            "options": "A) Text processing applications|B) Integrated programming utilities|C) Translation programs|D) System software"
        },
        {
            "type": "control_radio",
            "text": "Q2: What functional integration characterizes modern IDEs?",
            "name": "q2",
            "options": "A) Compilation capability|B) Code editing, translation, debugging|C) Program execution|D) Data storage"
        },
        {
            "type": "control_radio",
            "text": "Q3: What representational method describes syntax diagrams?",
            "name": "q3",
            "options": "A) Mathematical function graphs|B) Language syntax illustration|C) Algorithm flowcharting|D) Technical drawing"
        },
        {
            "type": "control_radio",
            "text": "Q4: What grammatical function do non-terminal symbols perform?",
            "name": "q4",
            "options": "A) Concrete language tokens|B) Abstract syntactic categories|C) Numerical digits|D) Alphabetic letters"
        },
        {
            "type": "control_radio",
            "text": "Q5: What linguistic validity does syntax path analysis establish?",
            "name": "q5",
            "options": "A) Problem solution methodology|B) Syntactic construction correctness|C) Program structural design|D) Logical operation sequence"
        },
        {
            "type": "control_radio",
            "text": "Q6: What conceptual framework defines algorithms?",
            "name": "q6",
            "options": "A) Mathematical formalism|B) Systematic problem-solving procedure|C) Computer program implementation|D) Programming language specification"
        },
        {
            "type": "control_radio",
            "text": "Q7: What operational commands characterize the Kangaroo performer?",
            "name": "q7",
            "options": "A) UP, DOWN, RIGHT, LEFT|B) STEP, TURN, JUMP|C) ADD, SUBTRACT, MULTIPLY|D) IF, WHILE, REPEAT"
        },
        {
            "type": "control_radio",
            "text": "Q8: What operational distinction separates control modes?",
            "name": "q8",
            "options": "A) Execution speed differential|B) Individual vs. sequential command execution|C) Task complexity handling|D) Functional equivalence"
        },
        {
            "type": "control_radio",
            "text": "Q9: What executable entity constitutes a program?",
            "name": "q9",
            "options": "A) Natural language algorithm description|B) Automated instruction sequence|C) Mathematical equation system|D) Interactive software application"
        },
        {
            "type": "control_radio",
            "text": "Q10: What descriptive utility do syntax diagrams provide?",
            "name": "q10",
            "options": "A) Algorithm visualization|B) Programming language syntax illustration|C) Data structure representation|D) Program execution demonstration"
        },
        {
            "type": "control_textarea",
            "text": "Q11: Develop a C++ program outputting current date information",
            "name": "q11"
        },
        {
            "type": "control_checkbox",
            "text": "Q12: Recognize compound operator symbols:",
            "name": "q12",
            "options": "A) Less than or equal (<=)|B) Greater than or equal (>=)|C) Assignment operator (=)|D) Addition operator (+)"
        },
        {
            "type": "control_textarea",
            "text": "Q13: Define BNF production for arithmetic signs",
            "name": "q13"
        }
    ]
}

def create_variant_form(variant_name):
    """Create a form for a specific variant"""
    
    # Form properties
    form_data = {
        "properties[title]": f"Programming Fundamentals Exam - {variant_name}",
        "properties[height]": "600"
    }
    
    response = requests.post(f"{BASE_URL}/form", data=form_data, headers=headers)
    
    if response.status_code != 200:
        print(f"Error creating form for {variant_name}: {response.status_code}")
        return None
    
    response_data = response.json()
    if "content" not in response_data or "id" not in response_data["content"]:
        print(f"Unexpected response for {variant_name}")
        return None
    
    form_id = response_data["content"]["id"]
    print(f"\n✓ Created form for {variant_name} - ID: {form_id}")
    
    # Add student name dropdown
    students = VARIANT_STUDENTS[variant_name]
    student_names = "|".join(sorted(students))
    
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
        print(f"  Added student dropdown with {len(students)} students")
    else:
        print(f"  Error adding student dropdown: {response.text}")
        return None
    
    # Add all questions for this variant
    questions = VARIANT_QUESTIONS[variant_name]
    order = 2
    
    for i, q in enumerate(questions, 1):
        question_data = {
            "question[type]": q["type"],
            "question[text]": q["text"],
            "question[order]": str(order),
            "question[name]": q["name"],
            "question[required]": "Yes"
        }
        
        if "options" in q:
            question_data["question[options]"] = q["options"]
        
        response = requests.post(f"{BASE_URL}/form/{form_id}/questions", 
                                data=question_data, headers=headers)
        if response.status_code == 200:
            print(f"  Added Q{i}: {q['name']}")
        else:
            print(f"  Error adding Q{i}: {response.text}")
        
        order += 1
    
    return {
        "variant": variant_name,
        "form_id": form_id,
        "url": f"https://form.jotform.com/{form_id}",
        "edit_url": f"https://form.jotform.com/build/{form_id}",
        "students": students
    }

# Main execution
if __name__ == "__main__":
    print("="*80)
    print("Creating 5 Separate JotForms - One for Each Variant")
    print("="*80)
    
    results = {}
    
    for variant_name in ["Variant 1", "Variant 2", "Variant 3", "Variant 4", "Variant 5"]:
        result = create_variant_form(variant_name)
        if result:
            results[variant_name] = result
    
    # Print summary
    print("\n" + "="*80)
    print("SUMMARY - ALL FORMS CREATED")
    print("="*80)
    
    for variant_name, info in results.items():
        print(f"\n{variant_name}:")
        print(f"  Form ID: {info['form_id']}")
        print(f"  URL: {info['url']}")
        print(f"  Students ({len(info['students'])}):")
        for student in info['students']:
            print(f"    - {student}")
    
    print("\n" + "="*80)
    print("NO CONDITIONAL LOGIC CONFIGURATION NEEDED!")
    print("Each form only shows the questions for its variant.")
    print("Simply share the correct form URL with each group of students.")
    print("="*80)
