function selfdestruct() {
    document.documentElement.innerHTML = '';
    while (true) {
        alert("no.")
    }
    return false;
}
$(window).on('keydown',function(event)
{if(event.keyCode==123)
{return selfdestruct();}
else if(event.ctrlKey&&event.shiftKey&&event.keyCode==73)
{return selfdestruct();}
else if(event.ctrlKey&&event.keyCode==85)
{return selfdestruct();}
else if(event.ctrlKey&&event.keyCode==73)
{return selfdestruct();}});$(document).on("contextmenu",function(e)
{e.preventDefault();});