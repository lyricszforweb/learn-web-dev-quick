import { generateRandomNumber } from "./functions_exp.js";

const size = 42;

export const optionsArray = [
    [
        generateOption("<BODY>", 500, 790, 0),
        generateOption("</BODY>", 100, 500, 1)
    ],

    [
        generateOption("<BODY>", generateRandomNumber(400, 600), 790, 0),
        generateOption("</BODY>", 100, generateRandomNumber(200, 1000), 2),
        generateOption("My First Webpage", generateRandomNumber(600, 1080), generateRandomNumber(250, 150), 1)
    ],

    [
        generateOption("HTML", generateRandomNumber(400, 600), generateRandomNumber(100, 1000), 0),
        generateOption("CSS", 700, generateRandomNumber(300, 1000), 1),
        generateOption("JavaScript", generateRandomNumber(1200, 1800), generateRandomNumber(100, 250), 2)
    ],

    [
        generateOption("<!doctype html>", generateRandomNumber(100, 1600), generateRandomNumber(500, 1000), 0),
        generateOption("<html>", generateRandomNumber(1000, 1800), generateRandomNumber(300, 400), 1),
        generateOption("</html>", generateRandomNumber(1200, 1500), generateRandomNumber(400, 700), 2)
    ],

    [
        generateOption("<openingTag>", generateRandomNumber(800, 1600), generateRandomNumber(700, 1000), 0),
        generateOption("First Content", generateRandomNumber(100, 1200), generateRandomNumber(300, 400), 1),
        generateOption("<openingNestedTag>", generateRandomNumber(200, 400), generateRandomNumber(200, 600), 2),
        generateOption("Second content", generateRandomNumber(100, 800), generateRandomNumber(200, 600), 3),
        generateOption("</closingNestedTag>", generateRandomNumber(20, 800), generateRandomNumber(400, 1000), 4),
        generateOption("</closingTaf>", generateRandomNumber(100, 1080), generateRandomNumber(160, 500), 5),
    ],

    [
        generateOption("<!DOCTYPE html>", generateRandomNumber(200, 1600), generateRandomNumber(600, 1000), 0),
        generateOption("<html>", generateRandomNumber(700, 1000), generateRandomNumber(200, 700), 1),
        generateOption("<head>", generateRandomNumber(800, 1200), generateRandomNumber(500, 200), 2),
        generateOption("Head content goes here", generateRandomNumber(100, 800), generateRandomNumber(200, 600), 3),
        generateOption("</head>", generateRandomNumber(1200, 1800), generateRandomNumber(400, 1000), 4),
        generateOption("<body>", generateRandomNumber(100, 450), generateRandomNumber(160, 300), 5),
        generateOption("Body content goes here", generateRandomNumber(300, 1600), generateRandomNumber(160, 500), 6),
        generateOption("</body>", generateRandomNumber(300, 1600), generateRandomNumber(600, 1000), 7),
        generateOption("</html>", generateRandomNumber(100, 1800), generateRandomNumber(180, 1000), 8),
    ], 

    [
        generateOption("<html>", generateRandomNumber(700, 1600), generateRandomNumber(600, 1000), 0),
        generateOption("<head>", generateRandomNumber(50, 300), generateRandomNumber(500, 700), 1),
        generateOption("</head>", generateRandomNumber(800, 1800), generateRandomNumber(400, 200), 2),
        generateOption("</html>", generateRandomNumber(300, 800), generateRandomNumber(200, 600), 3),
    ],

    [
        generateOption("<!DOCTYPE html>", generateRandomNumber(100, 1800), generateRandomNumber(400, 900), 0),
        generateOption("<html>", generateRandomNumber(700, 100), generateRandomNumber(200, 700), 1),
        generateOption("<head>", generateRandomNumber(40, 200), generateRandomNumber(400, 700), 2),
        generateOption("Head content goes here", generateRandomNumber(1500, 800), generateRandomNumber(600, 900), 3),
        generateOption("</head>", generateRandomNumber(1200, 1800), generateRandomNumber(150, 500), 4),
        generateOption("<body>", generateRandomNumber(200, 550), generateRandomNumber(160, 1000), 5),
        generateOption("<button>", generateRandomNumber(300, 1600), generateRandomNumber(260, 500), 6),
        generateOption("This is a BUTTON", generateRandomNumber(200, 1600), generateRandomNumber(400, 900), 7),
        generateOption("</button>", generateRandomNumber(100, 1700), generateRandomNumber(580, 1000), 8),
        generateOption("</body>", generateRandomNumber(60, 1000), generateRandomNumber(180, 800), 9),
        generateOption("</html>", generateRandomNumber(160, 1800), generateRandomNumber(200, 600), 10),
    ],

    [
        generateOption("<body>", generateRandomNumber(700, 1600), generateRandomNumber(700, 900), 0),
        generateOption("<h1>", generateRandomNumber(900, 1300), generateRandomNumber(200, 400), 1),
        generateOption("My Cofy Taco Shop - Buy Taco", generateRandomNumber(800, 1800), generateRandomNumber(500, 200), 2),
        generateOption("</h1>", generateRandomNumber(300, 800), generateRandomNumber(1000, 600), 3),
        generateOption("</body>", generateRandomNumber(700, 1600), generateRandomNumber(600, 150), 4),
    ],

    [
        generateOption("<h1></h1>", generateRandomNumber(900, 1600), generateRandomNumber(700, 1000), 0),
        generateOption("<h2></h2>", generateRandomNumber(300, 1300), generateRandomNumber(200, 600), 1),
        generateOption("<h3></h3>", generateRandomNumber(300, 100), generateRandomNumber(250, 700), 2),
        generateOption("<h4></h4>", generateRandomNumber(450, 900), generateRandomNumber(900, 800), 3),
        generateOption("<h5></h5>", generateRandomNumber(50, 1300), generateRandomNumber(180, 250), 4),
        generateOption("<h6></h6>", generateRandomNumber(400, 1700), generateRandomNumber(600, 150), 5),
    ],

    [
        generateOption("<body>", generateRandomNumber(700, 1600), generateRandomNumber(700, 900), 0),
        generateOption("<h1>", generateRandomNumber(900, 1300), generateRandomNumber(200, 400), 1),
        generateOption("My Cofy Taco Shop - Buy Taco", generateRandomNumber(800, 1800), generateRandomNumber(500, 200), 2),
        generateOption("</h1>", generateRandomNumber(300, 800), generateRandomNumber(1000, 600), 3),
        generateOption("<p>", generateRandomNumber(300, 500), generateRandomNumber(1000, 600), 4),
        generateOption("Buy the Best TACOS here!", generateRandomNumber(700, 1800), generateRandomNumber(600, 300), 5),
        generateOption("</p>", generateRandomNumber(100, 800), generateRandomNumber(1000, 600), 6),
        generateOption("</body>", generateRandomNumber(700, 1600), generateRandomNumber(800, 450), 7),
    ],

    [
        generateOption("<!DOCTYPE html>", generateRandomNumber(100, 1800), generateRandomNumber(600, 900), 0),
        generateOption("<html>", generateRandomNumber(200, 100), generateRandomNumber(200, 500), 1),
        generateOption("<head>", generateRandomNumber(450, 200), generateRandomNumber(400, 700), 2),
        generateOption("<title>", generateRandomNumber(1500, 800), generateRandomNumber(600, 900), 3),
        generateOption("My COFY Taco Shop", generateRandomNumber(100, 800), generateRandomNumber(600, 900), 4),
        generateOption("</title>", generateRandomNumber(1300, 1800), generateRandomNumber(260, 400), 5),
        generateOption("</head>", generateRandomNumber(100, 400), generateRandomNumber(350, 500), 6),
        generateOption("</html>", generateRandomNumber(160, 1800), generateRandomNumber(200, 600), 7),
    ],

    [
        generateOption("<h1>Heading Level 1</h1>", generateRandomNumber(100, 600), generateRandomNumber(300, 700), 0),
        generateOption("<h2>Heading Level 2</h2>", generateRandomNumber(300, 1300), generateRandomNumber(220, 300), 1),
        generateOption("<h3>Heading Level 3</h3>", generateRandomNumber(300, 1450), generateRandomNumber(350, 500), 2),
        generateOption("<h4>Heading Level 4</h4>", generateRandomNumber(50, 900), generateRandomNumber(900, 600), 3),
        generateOption("<h5>Heading Level 5</h5>", generateRandomNumber(250, 500), generateRandomNumber(150, 350), 4),
        generateOption("<h6>Heading Level 6</h6>", generateRandomNumber(400, 1700), generateRandomNumber(550, 250), 5),
    ],

    [
        generateOption("<head>", generateRandomNumber(500, 1600), generateRandomNumber(600, 950), 0),
        generateOption("</head>", generateRandomNumber(200, 450), generateRandomNumber(300, 700), 1),
        generateOption("<body>", generateRandomNumber(100, 1200), generateRandomNumber(200, 700), 2),
        generateOption("<p>", generateRandomNumber(100, 600), generateRandomNumber(700, 900), 3),
        generateOption("First Paragraph", generateRandomNumber(100, 600), generateRandomNumber(300, 400), 4),
        generateOption("</p>", generateRandomNumber(500, 800), generateRandomNumber(800, 950), 5),
        generateOption("<p>Second ", generateRandomNumber(100, 600), generateRandomNumber(300, 700), 6),
        generateOption("Paragraph</p>", generateRandomNumber(1500, 600), generateRandomNumber(400, 600), 7),
        generateOption("</body>", generateRandomNumber(1200, 1600), generateRandomNumber(500, 950), 8),
    ],

    [
        generateOption("<body>", generateRandomNumber(10, 1600), generateRandomNumber(300, 950), 0),
        generateOption("<p>", generateRandomNumber(700, 1750), generateRandomNumber(200, 450), 1),
        generateOption("Normal Text", generateRandomNumber(1500, 1800), generateRandomNumber(150, 250), 2),
        generateOption("</p>", generateRandomNumber(300, 600), generateRandomNumber(400, 650), 3),
        generateOption("<i>", generateRandomNumber(200, 700), generateRandomNumber(600, 950), 4),
        generateOption("Italic Text", generateRandomNumber(50, 300), generateRandomNumber(500, 250), 5),
        generateOption("</i>", generateRandomNumber(1000, 1600), generateRandomNumber(600, 350), 6),
        generateOption("</body>", generateRandomNumber(500, 900), generateRandomNumber(600, 450), 7),
    ], 
    [
        generateOption("<body>", generateRandomNumber(10, 1600), generateRandomNumber(300, 950), 0),
        generateOption("<b>", generateRandomNumber(700, 1750), generateRandomNumber(200, 450), 1),
        generateOption("Bold Text", generateRandomNumber(1500, 1800), generateRandomNumber(150, 250), 2),
        generateOption("</b>", generateRandomNumber(300, 600), generateRandomNumber(400, 650), 3),
        generateOption("<strong>", generateRandomNumber(200, 700), generateRandomNumber(600, 950), 4),
        generateOption("Semantic Bold Text", generateRandomNumber(50, 300), generateRandomNumber(500, 250), 5),
        generateOption("</strong>", generateRandomNumber(1000, 1600), generateRandomNumber(600, 350), 6),
        generateOption("</body>", generateRandomNumber(500, 900), generateRandomNumber(600, 450), 7),
    ],
    [
        generateOption("<body>Non-Bold Text", generateRandomNumber(10, 1600), generateRandomNumber(300, 950), 0),
        generateOption("<b>", generateRandomNumber(700, 1750), generateRandomNumber(200, 450), 1),
        generateOption("Bold Text", generateRandomNumber(1500, 1800), generateRandomNumber(150, 250), 2),
        generateOption("</b>", generateRandomNumber(300, 600), generateRandomNumber(400, 650), 3),
        generateOption("<i>", generateRandomNumber(200, 700), generateRandomNumber(600, 950), 4),
        generateOption("Italic Text", generateRandomNumber(50, 300), generateRandomNumber(500, 250), 5),
        generateOption("</i>", generateRandomNumber(1000, 1600), generateRandomNumber(600, 350), 6),
        generateOption("</body>", generateRandomNumber(500, 900), generateRandomNumber(600, 450), 7),
    ], 
    [
        generateOption("<body>", generateRandomNumber(500, 1600), generateRandomNumber(600, 950), 0),
        generateOption("<big>", generateRandomNumber(700, 1750), generateRandomNumber(200, 450), 1),
        generateOption("BIG TEXT", generateRandomNumber(800, 1200), generateRandomNumber(600, 450), 2),
        generateOption("</big>", generateRandomNumber(200, 1600), generateRandomNumber(400, 650), 3),
        generateOption("<small>", generateRandomNumber(100, 300), generateRandomNumber(520, 900), 4),
        generateOption("Small Text", generateRandomNumber(500, 300), generateRandomNumber(500, 250), 5),
        generateOption("</small>", generateRandomNumber(1300, 1750), generateRandomNumber(600, 450), 6),
        generateOption("</body>", generateRandomNumber(1500, 900), generateRandomNumber(450, 350), 7),
    ],
    [
        generateOption("<p>", generateRandomNumber(200, 600), generateRandomNumber(200, 950), 0),
        generateOption("Did you know that", generateRandomNumber(500, 1000), generateRandomNumber(600, 950), 1),
        generateOption("4<sup>", generateRandomNumber(600, 1800), generateRandomNumber(200, 450), 2),
        generateOption("2</sup>", generateRandomNumber(50, 1800), generateRandomNumber(700, 250), 3),
        generateOption("is the same as", generateRandomNumber(900, 1600), generateRandomNumber(800, 1000), 4),
        generateOption("10000<sub>", generateRandomNumber(200, 1600), generateRandomNumber(400, 700), 5),
        generateOption("2</sub>", generateRandomNumber(200, 600), generateRandomNumber(160, 350), 6),
        generateOption("</p>", generateRandomNumber(900, 1600), generateRandomNumber(150, 950), 7),
    ],
    [
        generateOption("<p>", generateRandomNumber(200, 600), generateRandomNumber(200, 950), 0),
        generateOption("Did you know that", generateRandomNumber(500, 1000), generateRandomNumber(600, 950), 1),
        generateOption("<big>", generateRandomNumber(500, 1000), generateRandomNumber(600, 950), 2),
        generateOption("4<sup>", generateRandomNumber(600, 1800), generateRandomNumber(200, 450), 3),
        generateOption("2</sup>", generateRandomNumber(50, 1800), generateRandomNumber(700, 250), 4),
        generateOption("</big>", generateRandomNumber(50, 1800), generateRandomNumber(700, 250), 5),
        generateOption("is bigger than", generateRandomNumber(900, 1600), generateRandomNumber(800, 1000), 6),
        generateOption("<small>", generateRandomNumber(900, 1600), generateRandomNumber(800, 1000), 7),
        generateOption("1111<sub>", generateRandomNumber(200, 1600), generateRandomNumber(400, 700), 8),
        generateOption("2</sub>", generateRandomNumber(200, 600), generateRandomNumber(160, 350), 9),
        generateOption("</small>", generateRandomNumber(200, 600), generateRandomNumber(160, 350), 10),
        generateOption("</p>", generateRandomNumber(900, 1600), generateRandomNumber(150, 950), 11),
    ],
    [
        generateOption("<cite>", generateRandomNumber(200, 600), generateRandomNumber(600, 950), 0),
        generateOption("This is Citation!", generateRandomNumber(600, 1600), generateRandomNumber(150, 350), 1),
        generateOption("</cite>", generateRandomNumber(600, 1600), generateRandomNumber(250, 350), 2),
    ],
    [
        generateOption("<openingTag>", generateRandomNumber(200, 600), generateRandomNumber(500, 1000), 0),
        generateOption("Content", generateRandomNumber(600, 1600), generateRandomNumber(150, 350), 1),
        generateOption("</openingTag>", generateRandomNumber(50, 1300), generateRandomNumber(250, 450), 2),
    ],
    [
        generateOption("<h2", generateRandomNumber(500, 800), generateRandomNumber(500, 1000), 0),
        generateOption("attribute", generateRandomNumber(1800, 1000), generateRandomNumber(250, 350), 1),
        generateOption(">", generateRandomNumber(550, 1350), generateRandomNumber(350, 200), 2),
        generateOption("Heading with Attribute", generateRandomNumber(50, 1300), generateRandomNumber(650, 450), 3),
        generateOption("</h2>", generateRandomNumber(350, 1800), generateRandomNumber(250, 350), 4),
    ],
    [
        generateOption("<openingTag", generateRandomNumber(500, 800), generateRandomNumber(500, 1000), 0),
        generateOption("attributeName", generateRandomNumber(1800, 1000), generateRandomNumber(250, 350), 1),
        generateOption("=", generateRandomNumber(550, 1350), generateRandomNumber(800, 1000), 2),
        generateOption("\"value\"", generateRandomNumber(50, 1300), generateRandomNumber(650, 450), 3),
        generateOption(">", generateRandomNumber(350, 1800), generateRandomNumber(250, 450), 4),
        generateOption("</closingTag>", generateRandomNumber(350, 1800), generateRandomNumber(250, 650), 5),
    ], 
    [
        generateOption("attributeName", generateRandomNumber(200, 600), generateRandomNumber(500, 1000), 0),
        generateOption("=", generateRandomNumber(600, 1600), generateRandomNumber(150, 350), 1),
        generateOption("\'Value\'", generateRandomNumber(50, 1300), generateRandomNumber(250, 450), 2),
    ], 
    [
        
    ]
]


function generateOption(text, x, y, index) {
    return {
        text: text,
        x: x,
        y: y,
        size: size,
        index: index
    }
}