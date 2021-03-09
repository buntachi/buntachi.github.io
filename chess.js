var squareB = ["<div id =\"square", "\" class=\"squareB\"></div>"];
var squareW = ["<div id =\"square", "\" class=\"squareW\"></div>"];
var sq = ["square",""];
var img = ["<img draggable=\"false\" src = \"" ,".png\">"];
var selectedSQ = "";
var selected = "";
var availableMoves = [];
var counter = 1;

buildBoard();
placePieces();

function buildBoard() 
{
    for (i = 0; i < 4; i++)
    {
        for (i2 = 0; i2 < 4; i2++)
        {
            board.innerHTML += squareW.join(counter);
            counter++;
            board.innerHTML += squareB.join(counter);
            counter++;
        }
        for (i2 = 0; i2 < 4; i2++)
        {
            board.innerHTML += squareB.join(counter);
            counter++;
            board.innerHTML += squareW.join(counter);
            counter++;
        }
    }
    for (i = 0; i < 64; i++)
    {
        document.getElementById(sq.join(i + 1)).addEventListener("click", movePiece);
    }
}
function placePieces()
{
    clearBoard();
    normalStart = [ "BRook","BKnight","BBishop","BQueen", "BKing", "BBishop", "BKnight", "BRook",
                    "BPawn","BPawn","BPawn","BPawn","BPawn","BPawn","BPawn","BPawn",
                    "","","","","","","","",
                    "","","","","","","","",
                    "","","","","","","","",
                    "","","","","","","","",        
                    "WPawn","WPawn","WPawn","WPawn","WPawn","WPawn","WPawn","WPawn",
                    "WRook","WKnight","WBishop","WQueen", "WKing", "WBishop", "WKnight", "WRook",];
    for (i = 0; i < 64; i++)
    {
        if (normalStart[i] !== "") {
            spawnPiece(i + 1, normalStart[i]);
        }
    }
}
function clearBoard()
{
    for(i = 0; i < 64; i++)
    {
        document.getElementById(sq.join(i +1)).innerHTML = ""
    }
}

function spawnPieceXY(x, y, piece) 
{
    pos = (8-y) * 8 + x ;
    document.getElementById(sq.join(pos)).innerHTML = img.join(piece);
}

function spawnPiece(pos, piece) 
{
    document.getElementById(sq.join(pos)).innerHTML = img.join(piece);
}
function movePiece() 
{
    if (selectedSQ == this.id) //Deselect
    {
        document.getElementById(selectedSQ).classList.remove("current");
        selected = "";
        selectedSQ = "";
    }
    else if (this.innerHTML !== "" && selected == "") //Select
    {
        selected = this.innerHTML;
        selectedSQ = this.id;
        document.getElementById(selectedSQ).classList.add("current");
        console.log(selectedSQ);
    } 
    else if(selected !== "") //Move
    {
        this.innerHTML = selected;
        document.getElementById(selectedSQ).innerHTML = "";
        document.getElementById(selectedSQ).classList.remove("current");
        selected = "";
        selectedSQ = "";
    }
}
function setPieceMoves(inpSquare, pieceInp) 
{
    
}
console.log(parseFloat("square12"));
