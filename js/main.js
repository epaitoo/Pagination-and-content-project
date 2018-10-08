const studentList = Array.from(document.querySelectorAll('.student-item')); //Selects student list
// Random number I chose to have students show per page.
const numberPerPage = 3;

// The querySelectorAll get a node list, so I used the Array.from to make it into an array.
// .forEach just does a for loop, but without all the extra stuff.
Array.from(document.querySelectorAll('div li a'))
  .forEach(page => page.addEventListener('click', (e) => {
    // I added the event listener to all the links so when they are clicked this funciton runs.
    showPage(e.srcElement.textContent, studentList);
  }));

function showPage(pageNum, studentList) {
  studentList.forEach((student, i) => {
    // Get the first index that should display and the last index to display
    const start = pageNum * numberPerPage - numberPerPage;
    const end = pageNum * numberPerPage - 1;

    // Check that the index we are looping over is one that we care about.
    if (start <= i && i <= end) {
      studentList[i].style.display = 'block'; //hide these students in the list
    } else {
      studentList[i].style.display = 'none'; //display these students in the list
    }
  });
}


