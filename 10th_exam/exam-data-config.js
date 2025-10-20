/**
 * Exam Data Configuration
 * Contains all exam questions and answers for all 5 variants
 */

const EXAM_DATA = {
  variants: [
    {
      number: 1,
      theoreticalQuestions: [
        {
          question: "Which definition best describes an algorithm?",
          options: [
            "A) A sequence of mathematical calculations",
            "B) A finite set of precise instructions for solving a problem",
            "C) A computer program written in C++",
            "D) A system of computer hardware commands"
          ],
          correctAnswer: "B"
        },
        {
          question: "What are the primary commands available to the Kangaroo performer?",
          options: [
            "A) UP, DOWN, RIGHT, LEFT",
            "B) STEP, TURN, JUMP",
            "C) ADD, SUBTRACT, DIVIDE",
            "D) IF, THEN, ELSE"
          ],
          correctAnswer: "B"
        },
        {
          question: "What distinguishes manual control mode from automatic control mode?",
          options: [
            "A) Manual mode typically requires more execution time",
            "B) Manual executes commands individually, automatic executes sequences",
            "C) Automatic mode requires prior programming knowledge",
            "D) Both modes operate identically"
          ],
          correctAnswer: "B"
        },
        {
          question: "What constitutes a computer program?",
          options: [
            "A) An algorithm expressed in natural language",
            "B) A sequence of instructions for automated execution",
            "C) A mathematical expression or formula",
            "D) A software application package"
          ],
          correctAnswer: "B"
        },
        {
          question: "What is the primary purpose of syntax diagrams?",
          options: [
            "A) To create visual representations of algorithms",
            "B) To provide graphical syntax descriptions for programming languages",
            "C) To illustrate data structure organization",
            "D) To demonstrate program execution flow"
          ],
          correctAnswer: "B"
        },
        {
          question: "What process does compilation represent?",
          options: [
            "A) Program creation and development",
            "B) Translation from high-level to machine language",
            "C) Error detection and correction",
            "D) Program testing and validation"
          ],
          correctAnswer: "B"
        },
        {
          question: "Which languages are classified as high-level programming languages?",
          options: [
            "A) Machine code and assembly language",
            "B) C++, Pascal, and Java",
            "C) Binary numerical representations",
            "D) Hardware-specific instruction sets"
          ],
          correctAnswer: "B"
        },
        {
          question: "What defines an identifier in programming?",
          options: [
            "A) A punctuation or operator symbol",
            "B) A name assigned to variables, functions, or constants",
            "C) A numerical value or literal",
            "D) A language-reserved keyword"
          ],
          correctAnswer: "B"
        },
        {
          question: "Which operator handles standard output in C++?",
          options: [
            "A) cin (console input)",
            "B) cout (console output)",
            "C) printf (formatted print)",
            "D) display (screen output)"
          ],
          correctAnswer: "B"
        },
        {
          question: "What semantic meaning does the ::= symbol carry in BNF notation?",
          options: [
            "A) Mathematical equality",
            "B) Definition or \"is defined as\"",
            "C) Variable assignment operation",
            "D) Comparative relationship"
          ],
          correctAnswer: "B"
        }
      ],
      practicalTasks: [
        {
          type: "programming",
          description: "Implement a C++ program that outputs \"Hello, world!\" to the console",
          expectedAnswer: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"Hello, world!\" << endl;\n    return 0;\n}"
        },
        {
          type: "identification",
          description: "Identify valid C++ identifiers from the following:",
          options: ["A) myVariable", "B) 1variable", "C) variable-1", "D) variable1"],
          correctAnswers: ["A", "D"]
        },
        {
          type: "bnf",
          description: "Construct a BNF production rule for decimal digits (0-9)",
          expectedAnswer: "<Digit> ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9"
        }
      ]
    },
    {
      number: 2,
      theoreticalQuestions: [
        {
          question: "In computer science, what characterizes a performer?",
          options: [
            "A) A human programmer developing software",
            "B) An entity capable of executing predefined commands",
            "C) A malicious software program",
            "D) A programming language specification"
          ],
          correctAnswer: "B"
        },
        {
          question: "What command repertoire does the Ant performer possess?",
          options: [
            "A) STEP, TURN, JUMP",
            "B) UP, DOWN, RIGHT, LEFT",
            "C) ADD, SUBTRACT, DIVIDE",
            "D) IF, THEN, ELSE"
          ],
          correctAnswer: "B"
        },
        {
          question: "What fundamental process does compilation involve?",
          options: [
            "A) Source code creation and editing",
            "B) Translation to executable machine code",
            "C) Syntax and semantic error resolution",
            "D) Program execution and testing"
          ],
          correctAnswer: "B"
        },
        {
          question: "What principal advantage do high-level languages provide?",
          options: [
            "A) Enhanced execution speed performance",
            "B) Simplified software development process",
            "C) Reduced memory consumption",
            "D) Natural language comprehension"
          ],
          correctAnswer: "B"
        },
        {
          question: "How are terminal symbols depicted in syntax diagrams?",
          options: [
            "A) Rectangular boxes",
            "B) Circular or oval shapes",
            "C) Triangular forms",
            "D) Square outlines"
          ],
          correctAnswer: "B"
        },
        {
          question: "What does algorithmization encompass?",
          options: [
            "A) Software implementation and coding",
            "B) Systematic algorithm development",
            "C) Computer hardware study",
            "D) Database management operations"
          ],
          correctAnswer: "B"
        },
        {
          question: "What constitutes a performer's command system?",
          options: [
            "A) A collection of software programs",
            "B) The complete set of executable commands",
            "C) Operating system components",
            "D) Programming language elements"
          ],
          correctAnswer: "B"
        },
        {
          question: "Which operator manages standard input in C++?",
          options: [
            "A) cout (console output)",
            "B) cin (console input)",
            "C) input (data acquisition)",
            "D) read (data retrieval)"
          ],
          correctAnswer: "B"
        },
        {
          question: "What defines terminal symbols in BNF grammar?",
          options: [
            "A) Fundamental program constituents",
            "B) Abstract grammatical categories",
            "C) Language-reserved words",
            "D) Explanatory annotations"
          ],
          correctAnswer: "A"
        },
        {
          question: "What information does each syntax diagram path convey?",
          options: [
            "A) Problem-solving methodology",
            "B) Valid syntactic constructions",
            "C) Program architectural design",
            "D) Logical operation sequences"
          ],
          correctAnswer: "B"
        }
      ],
      practicalTasks: [
        {
          type: "programming",
          description: "Develop a C++ program displaying your personal name",
          expectedAnswer: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"John\" << endl;\n    return 0;\n}"
        },
        {
          type: "identification",
          description: "Recognize special operator symbols in C++:",
          options: [
            "A) Addition operator (+)",
            "B) Subtraction operator (-)",
            "C) Multiplication operator (*)",
            "D) Division operator (/)"
          ],
          correctAnswers: ["A", "B", "C", "D"]
        },
        {
          type: "bnf",
          description: "Formulate a BNF rule for Latin alphabet characters",
          expectedAnswer: "<Letter> ::= a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z"
        }
      ]
    },
    {
      number: 3,
      theoreticalQuestions: [
        {
          question: "What conceptual process does algorithmization represent?",
          options: [
            "A) Program implementation and testing",
            "B) Structured algorithm creation",
            "C) Computational theory study",
            "D) Information system design"
          ],
          correctAnswer: "B"
        },
        {
          question: "What comprises a performer's command repertoire?",
          options: [
            "A) Software application collection",
            "B) Available instruction set",
            "C) System software components",
            "D) Programming language syntax"
          ],
          correctAnswer: "B"
        },
        {
          question: "Which languages demonstrate high-level programming characteristics?",
          options: [
            "A) Machine-level instruction sets",
            "B) C++, Pascal, Java platforms",
            "C) Binary encoding systems",
            "D) Assembly language dialects"
          ],
          correctAnswer: "B"
        },
        {
          question: "What essential activity defines programming?",
          options: [
            "A) Computer architecture analysis",
            "B) Software development process",
            "C) Network communication",
            "D) Web application creation"
          ],
          correctAnswer: "B"
        },
        {
          question: "How are non-terminal symbols represented syntactically?",
          options: [
            "A) Circular or oval containers",
            "B) Rectangular enclosures",
            "C) Triangular markers",
            "D) Diamond shapes"
          ],
          correctAnswer: "B"
        },
        {
          question: "What characterizes machine language?",
          options: [
            "A) Human-readable text format",
            "B) Binary instruction sequences",
            "C) Natural language expressions",
            "D) Symbolic communication"
          ],
          correctAnswer: "B"
        },
        {
          question: "What sequential stages comprise computer problem-solving?",
          options: [
            "A) Exclusive program implementation",
            "B) Algorithm design, implementation, compilation, debugging",
            "C) Compilation process only",
            "D) Program execution exclusively"
          ],
          correctAnswer: "B"
        },
        {
          question: "What functional purpose does BNF metalanguage serve?",
          options: [
            "A) Software development",
            "B) Formal syntax specification",
            "C) Database management",
            "D) Web technology"
          ],
          correctAnswer: "B"
        },
        {
          question: "What distinguishes terminal symbols in formal grammar?",
          options: [
            "A) Basic lexical elements",
            "B) Abstract syntactic categories",
            "C) Reserved vocabulary",
            "D) Documentation elements"
          ],
          correctAnswer: "A"
        },
        {
          question: "What representational method applies to BNF syntax diagrams?",
          options: [
            "A) Flowchart methodology",
            "B) Graphical plotting",
            "C) Geometric shape combinations",
            "D) Tabular arrangements"
          ],
          correctAnswer: "C"
        }
      ],
      practicalTasks: [
        {
          type: "programming",
          description: "Create a C++ program outputting numerical sequence 1-3",
          expectedAnswer: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"1\" << endl;\n    cout << \"2\" << endl;\n    cout << \"3\" << endl;\n    return 0;\n}"
        },
        {
          type: "identification",
          description: "Determine letter-initial sequences:",
          options: ["A) variable", "B) 1var", "C) _temp", "D) myName"],
          correctAnswers: ["A", "D"]
        },
        {
          type: "bnf",
          description: "Define BNF production for signed integer notation",
          expectedAnswer: "<Integer> ::= [+ | -] <Digit> {<Digit>}"
        }
      ]
    },
    {
      number: 4,
      theoreticalQuestions: [
        {
          question: "What fundamental nature defines machine language?",
          options: [
            "A) Natural language communication",
            "B) Binary instruction encoding",
            "C) Human language expression",
            "D) Gestural communication"
          ],
          correctAnswer: "B"
        },
        {
          question: "What systematic approach solves computational problems?",
          options: [
            "A) Program writing exclusively",
            "B) Algorithm specification, implementation, translation, verification",
            "C) Translation process only",
            "D) Execution phase solely"
          ],
          correctAnswer: "B"
        },
        {
          question: "What analytical function does BNF metalanguage perform?",
          options: [
            "A) Program composition",
            "B) Syntax formalization",
            "C) Data organization",
            "D) Web development"
          ],
          correctAnswer: "B"
        },
        {
          question: "What constitutes terminal symbols in formal definition?",
          options: [
            "A) Elementary language tokens",
            "B) Grammatical categories",
            "C) Keyword elements",
            "D) Commentary text"
          ],
          correctAnswer: "A"
        },
        {
          question: "What visualization technique represents BNF formally?",
          options: [
            "A) Process flow depiction",
            "B) Mathematical graphing",
            "C) Geometric symbol arrangement",
            "D) Data tabulation"
          ],
          correctAnswer: "C"
        },
        {
          question: "What integrated functionality defines development environments?",
          options: [
            "A) Text editing capability",
            "B) Comprehensive programming tools",
            "C) Compilation services",
            "D) Operating system functions"
          ],
          correctAnswer: "B"
        },
        {
          question: "What operational capabilities do IDEs provide?",
          options: [
            "A) Translation services only",
            "B) Editing, compilation, debugging integration",
            "C) Execution functionality",
            "D) File management"
          ],
          correctAnswer: "B"
        },
        {
          question: "What descriptive purpose do syntax diagrams serve?",
          options: [
            "A) Mathematical function plotting",
            "B) Language syntax visualization",
            "C) Algorithm representation",
            "D) Hardware schematic design"
          ],
          correctAnswer: "B"
        },
        {
          question: "What abstract role do non-terminal symbols fulfill?",
          options: [
            "A) Concrete language elements",
            "B) Grammatical constructs",
            "C) Numerical representations",
            "D) Alphabetic characters"
          ],
          correctAnswer: "B"
        },
        {
          question: "What linguistic information does syntax diagram traversal provide?",
          options: [
            "A) Problem-solving strategy",
            "B) Grammatically valid constructs",
            "C) Program organization",
            "D) Logical procedure"
          ],
          correctAnswer: "B"
        }
      ],
      practicalTasks: [
        {
          type: "programming",
          description: "Implement a C++ program displaying academic subject preference",
          expectedAnswer: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"Mathematics\" << endl;\n    return 0;\n}"
        },
        {
          type: "identification",
          description: "Identify C++ reserved keywords:",
          options: ["A) int (integer type)", "B) main (program entry)", "C) variable (user-defined)", "D) number (user-defined)"],
          correctAnswers: ["A", "B"]
        },
        {
          type: "bnf",
          description: "Specify BNF grammar for identifier construction",
          expectedAnswer: "<Identifier> ::= <Letter> {<Letter> | <Digit>}"
        }
      ]
    },
    {
      number: 5,
      theoreticalQuestions: [
        {
          question: "What comprehensive toolset defines development environments?",
          options: [
            "A) Text processing applications",
            "B) Integrated programming utilities",
            "C) Translation programs",
            "D) System software"
          ],
          correctAnswer: "B"
        },
        {
          question: "What functional integration characterizes modern IDEs?",
          options: [
            "A) Compilation capability",
            "B) Code editing, translation, debugging",
            "C) Program execution",
            "D) Data storage"
          ],
          correctAnswer: "B"
        },
        {
          question: "What representational method describes syntax diagrams?",
          options: [
            "A) Mathematical function graphs",
            "B) Language syntax illustration",
            "C) Algorithm flowcharting",
            "D) Technical drawing"
          ],
          correctAnswer: "B"
        },
        {
          question: "What grammatical function do non-terminal symbols perform?",
          options: [
            "A) Concrete language tokens",
            "B) Abstract syntactic categories",
            "C) Numerical digits",
            "D) Alphabetic letters"
          ],
          correctAnswer: "B"
        },
        {
          question: "What linguistic validity does syntax path analysis establish?",
          options: [
            "A) Problem solution methodology",
            "B) Syntactic construction correctness",
            "C) Program structural design",
            "D) Logical operation sequence"
          ],
          correctAnswer: "B"
        },
        {
          question: "What conceptual framework defines algorithms?",
          options: [
            "A) Mathematical formalism",
            "B) Systematic problem-solving procedure",
            "C) Computer program implementation",
            "D) Programming language specification"
          ],
          correctAnswer: "B"
        },
        {
          question: "What operational commands characterize the Kangaroo performer?",
          options: [
            "A) UP, DOWN, RIGHT, LEFT",
            "B) STEP, TURN, JUMP",
            "C) ADD, SUBTRACT, MULTIPLY",
            "D) IF, WHILE, REPEAT"
          ],
          correctAnswer: "B"
        },
        {
          question: "What operational distinction separates control modes?",
          options: [
            "A) Execution speed differential",
            "B) Individual vs. sequential command execution",
            "C) Task complexity handling",
            "D) Functional equivalence"
          ],
          correctAnswer: "B"
        },
        {
          question: "What executable entity constitutes a program?",
          options: [
            "A) Natural language algorithm description",
            "B) Automated instruction sequence",
            "C) Mathematical equation system",
            "D) Interactive software application"
          ],
          correctAnswer: "B"
        },
        {
          question: "What descriptive utility do syntax diagrams provide?",
          options: [
            "A) Algorithm visualization",
            "B) Programming language syntax illustration",
            "C) Data structure representation",
            "D) Program execution demonstration"
          ],
          correctAnswer: "B"
        }
      ],
      practicalTasks: [
        {
          type: "programming",
          description: "Develop a C++ program outputting current date information",
          expectedAnswer: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"October 20, 2025\" << endl;\n    return 0;\n}"
        },
        {
          type: "identification",
          description: "Recognize compound operator symbols:",
          options: [
            "A) Less than or equal (<=)",
            "B) Greater than or equal (>=)",
            "C) Assignment operator (=)",
            "D) Addition operator (+)"
          ],
          correctAnswers: ["A", "B"]
        },
        {
          type: "bnf",
          description: "Define BNF production for arithmetic signs",
          expectedAnswer: "<Sign> ::= + | -"
        }
      ]
    }
  ]
};
