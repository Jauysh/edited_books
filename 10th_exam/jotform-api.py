import requests

# Replace with your JotForm API key
API_KEY = "4366db80e87682be5c2726806bb19167"
API_URL = "https://api.jotform.com/form"

# Define all 5 examination variants
variants = [
    # ---------------- Variant 1 ----------------
    {
        "title": "Programming Fundamentals Examination - Variant 1",
        "questions": [
            {"text": "Which definition best describes an algorithm?", "type": "control_radio",
             "options": ["A) A sequence of mathematical calculations",
                         "B) A finite set of precise instructions for solving a problem",
                         "C) A computer program written in C++",
                         "D) A system of computer hardware commands"]},
            {"text": "What are the primary commands available to the Kangaroo performer?", "type": "control_radio",
             "options": ["A) UP, DOWN, RIGHT, LEFT",
                         "B) STEP, TURN, JUMP",
                         "C) ADD, SUBTRACT, DIVIDE",
                         "D) IF, THEN, ELSE"]},
            {"text": "What distinguishes manual control mode from automatic control mode?", "type": "control_radio",
             "options": ["A) Manual mode typically requires more execution time",
                         "B) Manual executes commands individually, automatic executes sequences",
                         "C) Automatic mode requires prior programming knowledge",
                         "D) Both modes operate identically"]},
            {"text": "What constitutes a computer program?", "type": "control_radio",
             "options": ["A) An algorithm expressed in natural language",
                         "B) A sequence of instructions for automated execution",
                         "C) A mathematical expression or formula",
                         "D) A software application package"]},
            {"text": "What is the primary purpose of syntax diagrams?", "type": "control_radio",
             "options": ["A) To create visual representations of algorithms",
                         "B) To provide graphical syntax descriptions for programming languages",
                         "C) To illustrate data structure organization",
                         "D) To demonstrate program execution flow"]},
            {"text": "What process does compilation represent?", "type": "control_radio",
             "options": ["A) Program creation and development",
                         "B) Translation from high-level to machine language",
                         "C) Error detection and correction",
                         "D) Program testing and validation"]},
            {"text": "Which languages are classified as high-level programming languages?", "type": "control_radio",
             "options": ["A) Machine code and assembly language",
                         "B) C++, Pascal, and Java",
                         "C) Binary numerical representations",
                         "D) Hardware-specific instruction sets"]},
            {"text": "What defines an identifier in programming?", "type": "control_radio",
             "options": ["A) A punctuation or operator symbol",
                         "B) A name assigned to variables, functions, or constants",
                         "C) A numerical value or literal",
                         "D) A language-reserved keyword"]},
            {"text": "Which operator handles standard output in C++?", "type": "control_radio",
             "options": ["A) cin (console input)",
                         "B) cout (console output)",
                         "C) printf (formatted print)",
                         "D) display (screen output)"]},
            {"text": "What semantic meaning does the ::= symbol carry in BNF notation?", "type": "control_radio",
             "options": ["A) Mathematical equality",
                         "B) Definition or 'is defined as'",
                         "C) Variable assignment operation",
                         "D) Comparative relationship"]},
            # Practical tasks
            {"text": "Implement a C++ program that outputs 'Hello, world!'", "type": "control_textarea"},
            {"text": "Identify valid C++ identifiers from the following: A) myVariable B) 1variable C) variable-1 D) variable1", "type": "control_textarea"},
            {"text": "Construct a BNF production rule for decimal digits (0-9)", "type": "control_textarea"}
        ]
    },

    # ---------------- Variant 2 ----------------
    {
        "title": "Programming Fundamentals Examination - Variant 2",
        "questions": [
            {"text": "In computer science, what characterizes a performer?", "type": "control_radio",
             "options": ["A) A human programmer developing software",
                         "B) An entity capable of executing predefined commands",
                         "C) A malicious software program",
                         "D) A programming language specification"]},
            {"text": "What command repertoire does the Ant performer possess?", "type": "control_radio",
             "options": ["A) STEP, TURN, JUMP",
                         "B) UP, DOWN, RIGHT, LEFT",
                         "C) ADD, SUBTRACT, DIVIDE",
                         "D) IF, THEN, ELSE"]},
            {"text": "What fundamental process does compilation involve?", "type": "control_radio",
             "options": ["A) Source code creation and editing",
                         "B) Translation to executable machine code",
                         "C) Syntax and semantic error resolution",
                         "D) Program execution and testing"]},
            {"text": "What principal advantage do high-level languages provide?", "type": "control_radio",
             "options": ["A) Enhanced execution speed performance",
                         "B) Simplified software development process",
                         "C) Reduced memory consumption",
                         "D) Natural language comprehension"]},
            {"text": "How are terminal symbols depicted in syntax diagrams?", "type": "control_radio",
             "options": ["A) Rectangular boxes",
                         "B) Circular or oval shapes",
                         "C) Triangular forms",
                         "D) Square outlines"]},
            {"text": "What does algorithmization encompass?", "type": "control_radio",
             "options": ["A) Software implementation and coding",
                         "B) Systematic algorithm development",
                         "C) Computer hardware study",
                         "D) Database management operations"]},
            {"text": "What constitutes a performer's command system?", "type": "control_radio",
             "options": ["A) A collection of software programs",
                         "B) The complete set of executable commands",
                         "C) Operating system components",
                         "D) Programming language elements"]},
            {"text": "Which operator manages standard input in C++?", "type": "control_radio",
             "options": ["A) cout (console output)",
                         "B) cin (console input)",
                         "C) input (data acquisition)",
                         "D) read (data retrieval"]},
            {"text": "What defines terminal symbols in BNF grammar?", "type": "control_radio",
             "options": ["A) Fundamental program constituents",
                         "B) Abstract grammatical categories",
                         "C) Language-reserved words",
                         "D) Explanatory annotations"]},
            {"text": "What information does each syntax diagram path convey?", "type": "control_radio",
             "options": ["A) Problem-solving methodology",
                         "B) Valid syntactic constructions",
                         "C) Program architectural design",
                         "D) Logical operation sequences"]},
            # Practical tasks
            {"text": "Develop a C++ program displaying your personal name", "type": "control_textarea"},
            {"text": "Recognize special operator symbols in C++: A) Addition (+) B) Subtraction (-) C) Multiplication (*) D) Division (/)", "type": "control_textarea"},
            {"text": "Formulate a BNF rule for Latin alphabet characters", "type": "control_textarea"}
        ]
    },

    # ---------------- Variant 3 ----------------
    {
        "title": "Programming Fundamentals Examination - Variant 3",
        "questions": [
            {"text": "What conceptual process does algorithmization represent?", "type": "control_radio",
             "options": ["A) Program implementation and testing",
                         "B) Structured algorithm creation",
                         "C) Computational theory study",
                         "D) Information system design"]},
            {"text": "What comprises a performer's command repertoire?", "type": "control_radio",
             "options": ["A) Software application collection",
                         "B) Available instruction set",
                         "C) System software components",
                         "D) Programming language syntax"]},
            {"text": "Which languages demonstrate high-level programming characteristics?", "type": "control_radio",
             "options": ["A) Machine-level instruction sets",
                         "B) C++, Pascal, Java platforms",
                         "C) Binary encoding systems",
                         "D) Assembly language dialects"]},
            {"text": "What essential activity defines programming?", "type": "control_radio",
             "options": ["A) Computer architecture analysis",
                         "B) Software development process",
                         "C) Network communication",
                         "D) Web application creation"]},
            {"text": "How are non-terminal symbols represented syntactically?", "type": "control_radio",
             "options": ["A) Circular or oval containers",
                         "B) Rectangular enclosures",
                         "C) Triangular markers",
                         "D) Diamond shapes"]},
            {"text": "What characterizes machine language?", "type": "control_radio",
             "options": ["A) Human-readable text format",
                         "B) Binary instruction sequences",
                         "C) Natural language expressions",
                         "D) Symbolic communication"]},
            {"text": "What sequential stages comprise computer problem-solving?", "type": "control_radio",
             "options": ["A) Exclusive program implementation",
                         "B) Algorithm design, implementation, compilation, debugging",
                         "C) Compilation process only",
                         "D) Program execution exclusively"]},
            {"text": "What functional purpose does BNF metalanguage serve?", "type": "control_radio",
             "options": ["A) Software development",
                         "B) Formal syntax specification",
                         "C) Database management",
                         "D) Web technology"]},
            {"text": "What distinguishes terminal symbols in formal grammar?", "type": "control_radio",
             "options": ["A) Basic lexical elements",
                         "B) Abstract syntactic categories",
                         "C) Reserved vocabulary",
                         "D) Documentation elements"]},
            {"text": "What representational method applies to BNF syntax diagrams?", "type": "control_radio",
             "options": ["A) Flowchart methodology",
                         "B) Graphical plotting",
                         "C) Geometric shape combinations",
                         "D) Tabular arrangements"]},
            # Practical tasks
            {"text": "Create a C++ program outputting numerical sequence 1-3", "type": "control_textarea"},
            {"text": "Determine letter-initial sequences: A) variable B) 1var C) _temp D) myName", "type": "control_textarea"},
            {"text": "Define BNF production for signed integer notation", "type": "control_textarea"}
        ]
    },

    # ---------------- Variant 4 ----------------
    {
        "title": "Programming Fundamentals Examination - Variant 4",
        "questions": [
            {"text": "What fundamental nature defines machine language?", "type": "control_radio",
             "options": ["A) Natural language communication",
                         "B) Binary instruction encoding",
                         "C) Human language expression",
                         "D) Gestural communication"]},
            {"text": "What systematic approach solves computational problems?", "type": "control_radio",
             "options": ["A) Program writing exclusively",
                         "B) Algorithm specification, implementation, translation, verification",
                         "C) Translation process only",
                         "D) Execution phase solely"]},
            {"text": "What analytical function does BNF metalanguage perform?", "type": "control_radio",
             "options": ["A) Program composition",
                         "B) Syntax formalization",
                         "C) Data organization",
                         "D) Web development"]},
            {"text": "What constitutes terminal symbols in formal definition?", "type": "control_radio",
             "options": ["A) Elementary language tokens",
                         "B) Grammatical categories",
                         "C) Keyword elements",
                         "D) Commentary text"]},
            {"text": "What visualization technique represents BNF formally?", "type": "control_radio",
             "options": ["A) Process flow depiction",
                         "B) Mathematical graphing",
                         "C) Geometric symbol arrangement",
                         "D) Data tabulation"]},
            {"text": "What integrated functionality defines development environments?", "type": "control_radio",
             "options": ["A) Text editing capability",
                         "B) Comprehensive programming tools",
                         "C) Compilation services",
                         "D) Operating system functions"]},
            {"text": "What operational capabilities do IDEs provide?", "type": "control_radio",
             "options": ["A) Translation services only",
                         "B) Editing, compilation, debugging integration",
                         "C) Execution functionality",
                         "D) File management"]},
            {"text": "What descriptive purpose do syntax diagrams serve?", "type": "control_radio",
             "options": ["A) Mathematical function plotting",
                         "B) Language syntax visualization",
                         "C) Algorithm representation",
                         "D) Hardware schematic design"]},
            {"text": "What abstract role do non-terminal symbols fulfill?", "type": "control_radio",
             "options": ["A) Concrete language elements",
                         "B) Grammatical constructs",
                         "C) Numerical representations",
                         "D) Alphabetic characters"]},
            {"text": "What linguistic information does syntax diagram traversal provide?", "type": "control_radio",
             "options": ["A) Problem-solving strategy",
                         "B) Grammatically valid constructs",
                         "C) Program organization",
                         "D) Logical procedure"]},
            # Practical tasks
            {"text": "Implement a C++ program displaying academic subject preference", "type": "control_textarea"},
            {"text": "Identify C++ reserved keywords: A) int B) main C) variable D) number", "type": "control_textarea"},
            {"text": "Specify BNF grammar for identifier construction", "type": "control_textarea"}
        ]
    },

    # ---------------- Variant 5 ----------------
    {
        "title": "Programming Fundamentals Examination - Variant 5",
        "questions": [
            {"text": "What comprehensive toolset defines development environments?", "type": "control_radio",
             "options": ["A) Text processing applications",
                         "B) Integrated programming utilities",
                         "C) Translation programs",
                         "D) System software"]},
            {"text": "What functional integration characterizes modern IDEs?", "type": "control_radio",
             "options": ["A) Compilation capability",
                         "B) Code editing, translation, debugging",
                         "C) Program execution",
                         "D) Data storage"]},
            {"text": "What representational method describes syntax diagrams?", "type": "control_radio",
             "options": ["A) Mathematical function graphs",
                         "B) Language syntax illustration",
                         "C) Algorithm flowcharting",
                         "D) Technical drawing"]},
            {"text": "What grammatical function do non-terminal symbols perform?", "type": "control_radio",
             "options": ["A) Concrete language tokens",
                         "B) Abstract syntactic categories",
                         "C) Numerical digits",
                         "D) Alphabetic letters"]},
            {"text": "What linguistic validity does syntax path analysis establish?", "type": "control_radio",
             "options": ["A) Problem solution methodology",
                         "B) Syntactic construction correctness",
                         "C) Program structural design",
                         "D) Logical operation sequence"]},
            {"text": "What conceptual framework defines algorithms?", "type": "control_radio",
             "options": ["A) Mathematical formalism",
                         "B) Systematic problem-solving procedure",
                         "C) Computer program implementation",
                         "D) Programming language specification"]},
            {"text": "What operational commands characterize the Kangaroo performer?", "type": "control_radio",
             "options": ["A) UP, DOWN, RIGHT, LEFT",
                         "B) STEP, TURN, JUMP",
                         "C) ADD, SUBTRACT, MULTIPLY",
                         "D) IF, WHILE, REPEAT"]},
            {"text": "What operational distinction separates control modes?", "type": "control_radio",
             "options": ["A) Execution speed differential",
                         "B) Individual vs. sequential command execution",
                         "C) Task complexity handling",
                         "D) Functional equivalence"]},
            {"text": "What executable entity constitutes a program?", "type": "control_radio",
             "options": ["A) Natural language algorithm description",
                         "B) Automated instruction sequence",
                         "C) Mathematical equation system",
                         "D) Interactive software application"]},
            {"text": "What descriptive utility do syntax diagrams provide?", "type": "control_radio",
             "options": ["A) Algorithm visualization",
                         "B) Programming language syntax illustration",
                         "C) Data structure representation",
                         "D) Program execution demonstration"]},
            # Practical tasks
            {"text": "Develop a C++ program outputting current date information", "type": "control_textarea"},
            {"text": "Recognize compound operator symbols: A) <= B) >= C) = D) +", "type": "control_textarea"},
            {"text": "Define BNF production for arithmetic signs", "type": "control_textarea"}
        ]
    }
]

# Function to create a form via API
def create_form(variant):
    form_data = {
        "apiKey": API_KEY,
        "properties[title]": variant["title"]
    }

    # Add questions
    for idx, q in enumerate(variant["questions"]):
        key_type = f"questions[{idx}][type]"
        key_text = f"questions[{idx}][text]"
        form_data[key_type] = q["type"]
        form_data[key_text] = q["text"]
        if "options" in q:
            form_data[f"questions[{idx}][options]"] = "\n".join(q["options"])

    # Send POST request to create form
    response = requests.post(API_URL, data=form_data)
    if response.status_code == 200:
        print(f"Form created: {variant['title']}")
    else:
        print(f"Failed to create form: {variant['title']}")
        print(response.json())

# Loop through all variants
for v in variants:
    create_form(v)
