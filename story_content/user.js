function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nIOlFmi7oT":
        Script1();
        break;
      case "5kgN4uThazi":
        Script2();
        break;
      case "6nlG02UWuzL":
        Script3();
        break;
      case "5qHAhO1QqoD":
        Script4();
        break;
      case "64XFMm4dWOW":
        Script5();
        break;
      case "6MzHpKjMPva":
        Script6();
        break;
      case "5qSK1jtBvwd":
        Script7();
        break;
      case "620s3Bsyxre":
        Script8();
        break;
      case "62znmSw57kp":
        Script9();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var today = new Date();

var formattedDate =
today.getDate().toString().padStart(2,'0') + "/" +
(today.getMonth()+1).toString().padStart(2,'0') + "/" +
today.getFullYear();

player.SetVar("date", formattedDate);
}

function Script2()
{
  var player = GetPlayer();

player.SetVar(
    "CourseName",
    "Safety"   // Replace with actual course name
);
}

function Script3()
{
  window.print();
}

function Script4()
{
  var player = GetPlayer();

var today = new Date();

var formattedDate =
today.getDate().toString().padStart(2,'0') + "/" +
(today.getMonth()+1).toString().padStart(2,'0') + "/" +
today.getFullYear();

player.SetVar("date", formattedDate);
}

function Script5()
{
  var player = GetPlayer();

player.SetVar(
    "CourseName",
    "Safety"   // Replace with actual course name
);
}

function Script6()
{
  window.print();
}

function Script7()
{
  var player = GetPlayer();

var today = new Date();

var formattedDate =
today.getDate().toString().padStart(2,'0') + "/" +
(today.getMonth()+1).toString().padStart(2,'0') + "/" +
today.getFullYear();

player.SetVar("date", formattedDate);
}

function Script8()
{
  var player = GetPlayer();

player.SetVar(
    "CourseName",
    "Safety"   // Replace with actual course name
);
}

function Script9()
{
  window.print();
}

