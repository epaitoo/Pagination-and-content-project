const listUl = document.querySelector('.student-list'); //Selects Ul element containing the studentList
const studentList = document.getElementsByClassName('student-item cf'); //Selects student list
let pageNum = Math.ceil(studentList.length / 10); //returns 6

function showPage(pageNum, studentList) {
    listUl.style.display = 'none'; //hide students in the list
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i] > 10) { 
            studentList[i].style.display = 'none'; //hide students in the list
           }  else {
               studentList[i].style.display = 'block'; //display students in the list
           }
       }
   }


