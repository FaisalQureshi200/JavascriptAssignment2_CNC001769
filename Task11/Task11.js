var time=Number(prompt('Enter Time'))
if(time>=00 && time<12 ){
    alert('Good Morning')
}
else if(time>=12 && time<17 ){
    alert('Good Afternoon')
}
else if(time>=17 && time<21 ){
    alert('Good Evening')
}
else if(time>=21 && time<23 ){
    alert('Good Night')
}
else {
    alert('Enter Wrong time')
}