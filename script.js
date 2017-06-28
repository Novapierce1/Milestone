
document.addEventListener('DOMContentLoaded', function(){
//objective 1
    var button = document.createElement("button");
    button.innerHTML = '1';
    button.style.width = '50px';
    button.style.height = '50px';
    document.body.appendChild(button);
    button.addEventListener('click', function(){
    alert('Nice!');
    });

//objective 2
   var button2 = document.createElement("button");
   button2.innerHTML = '2';
   button2.style.width = '50px';
   button2.style.height = '50px';
   document.body.appendChild(button2);
   button2.addEventListener('click', function(){
       var a = document.getElementById('textarea').value;
       alert(a);
    });
//objective 3
    document.getElementById('colorswitch').addEventListener("mouseover", mouseOver)
    document.getElementById('colorswitch').addEventListener("mouseout", mouseOut)
        function mouseOver() {
            document.getElementById('colorswitch').style.backgroundColor = "red";
        }
        function mouseOut() {
            document.getElementById('colorswitch').style.backgroundColor= "blue";
        }
//objective 4
    document.getElementById('colortext').addEventListener("color", function(){
            document.getElementById('colortext').style.color=randomColor();
                function randomColor() {
                var randomRed = Math.floor(Math.random() * 350);
                var randomGreen = Math.floor(Math.random() * 350);
                var randomBlue = Math.floor(Math.random() * 350);
                var randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";
                return randomColor;
                };
            });
    });

