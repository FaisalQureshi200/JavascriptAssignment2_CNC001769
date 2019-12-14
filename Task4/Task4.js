var Grade1='A-one'; Grade2='A';Grade3='B';Grade4='C';
var Remark1='Excellent';Remark2='Good';Remark3='You need to Improve';Remark4='Failed'
var subject1=Number(prompt("Enter Subject marks"))
var subject2=Number(prompt("Enter Subject marks"))
var subject3=Number(prompt("Enter Subject marks"))
var totalmarks=300;

var obtinedmark=subject1+subject2+subject3

document.write('<h3>Total Marks: '+totalmarks +'</h3>')
document.write('<h3>Obtined Marks: '+obtinedmark +'</h3>')
var percentage=obtinedmark*100/totalmarks
document.write('<h3>Percentage: '+percentage+'%' +'</h3>')
if(percentage>80 || percentage==80 ){
  
document.write('<h3>Grade:'+Grade1+'</h3>');
document.write('<h3>Remarks:'+Remark1+'</h3>');

}
 else if(percentage>70 || percentage == 70){
    document.write('<h3>Grade:'+Grade2+'</h3>')
    document.write('<h3>Remarks:'+Remark2+'</h3>')
    
    }
   else if(percentage>60 || percentage == 60){
        document.write('<h3>Grade:'+Grade3+'</h3>')
        document.write('<h3>Remarks:'+Remark3+'</h3>')
        
        }
    else if(percentage<60){
            document.write('<h3>Grade:'+Grade4+'</h3>')
            document.write('<h3>Remarks:'+Remark4+'</h3>')
            
            }
            
        
