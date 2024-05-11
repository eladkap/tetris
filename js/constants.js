/* COLORS */
const BLACK = 'rgb(0, 0, 0)';
const GRAY1 = 'rgb(50, 50, 50)';
const GRAY2 = 'rgb(100, 100, 100)';
const GRAY3 = 'rgb(200, 200, 200)';
const BLACKLIGHT = 'rgb(100, 100, 100)';
const WHITE = 'rgb(255, 255, 255)';
const RED = 'rgb(200, 0, 0)';
const REDLIGHT = 'rgb(200, 100, 100)';
const YELLOW = 'rgb(255, 190, 0)';
const GREEN = 'rgb(0, 100, 0)';
const GREENLIGHT = 'rgb(50, 200, 50)';
const PINK = 'rgb(255, 120, 255)';
const PURPLE = 'rgb(255, 0, 255)';
const BLUEHEAVY = 'rgb(50, 50, 205)';
const BLUE = 'rgb(50, 50, 255)';
const AQUA = 'rgb(0, 250, 250)';
const BLUELIGHT = 'rgb(100, 100, 255)';
const BROWN = 'rgb(128, 64, 0)';
const BROWNLIGHT = 'rgb(230, 115, 0)';
const TURQUOISE = 'rgb(32, 114, 106)';
const TURQUOISELIGHT = 'rgb(50, 180, 166)';

const FRAME_COLOR = GRAY1;

// Shapes
const SHAPE_LINE = 'line';
const SHAPE_SQUARE = 'square';
const SHAPE_T = 'T';
const SHAPE_L = 'L';
const SHAPE_SKEW = 'skew';

const SHAPE_TYPES = [
    SHAPE_LINE,
    SHAPE_SQUARE,
    SHAPE_T,
    SHAPE_L,
    SHAPE_SKEW
]

// Board
const BOARD_POS_X = window.innerWidth / 3;
const BOARD_POS_Y = 100;
const BOARD_ROWS = 20;
const BOARD_COLS = 10;

const BLOCK_WIDTH = 30;
const SHAPE_SPEED = 1;

const BLOCK_NUMS_TO_COLORS = {
    1: FRAME_COLOR,
    2: BLUE,
    3: AQUA,
    4: RED,
    5: PURPLE,
    6: YELLOW
}
