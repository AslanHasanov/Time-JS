var duration=new Date().getHours()
if(duration>6 && duration<12){
    alert("Good Morning)")
    document.body.style.background="bisque"
}
else if(duration>12 && duration<18){
    alert("Good Afternoon")
    document.body.style.background="#78A7DA"
}
else if(duration>18 && duration<00){
    alert("Good Evening")
    document.body.style.background="#3D3D3D"
}
else if(duration>00 && duration<6){
    alert("Good Night")
    document.body.style.background="black"
}