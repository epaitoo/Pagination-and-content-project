const listUl = document.querySelector('.student-list'); //Selects Ul element containing the studentList
const studentList = document.getElementsByClassName('student-item cf'); //Selects student list
const page = document.querySelector('.page'); //selects the whole page


function showpage(pageNum, studentList) {
   for (let i = 0; i < studentList.length; i++) {
    // Get the first index that should display and the last index to display
    const firstItem = pageNum * numberPerPage - numberPerPage;
    const lastItem = pageNum * numberPerPage - 1;
    if (i >= firstItem && i <= lastItem) {
      studentList[i].style.display = 'block';
    } else {
      studentList[i].style.display = 'none';
    }
   }
}

