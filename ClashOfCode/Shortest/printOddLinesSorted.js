/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
function myF(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        if( i != parseInt(arr[i]) )
        {
            print(i);
            break;
        }
    }
}
var n = parseInt(readline());
for (var i = 0; i < n; i++) {
    var line = readline();
    var arr = line.split("").sort();
    myF(arr);
}

