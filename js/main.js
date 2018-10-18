const studentList = Array.from(document.querySelectorAll('.student-item')); //Selects student list
// Random number I chose to have students show per page.
const numberPerPage = 10;
const page = document.querySelector('.page'); //selects the whole page

// The querySelectorAll get a node list, so I used the Array.from to make it into an array.
// .forEach just does a for loop, but without all the extra stuff.
// Array.from(document.querySelectorAll('div li a'))
//   .forEach(page => page.addEventListener('click', (e) => {
//     // I added the event listener to all the links so when they are clicked this funciton runs.
//     showPage(e.srcElement.textContent, studentList);
//   }));

function showPage(pageNum, studentList) {
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


// This function creates all the page links based on a list of students
function appendPageLinks(studentList) {
  // determine how many pages for this student list
  let pages = Math.ceil(studentList.length / numberPerPage); //returns 6

  //creating pagination
  const paginationDiv = document.createElement('div'); 
  paginationDiv.className = 'pagination';
  page.appendChild(paginationDiv);

  const pageUl = document.createElement('ul'); //create ul 
  paginationDiv.appendChild(pageUl);
  
  // create a page link section and page link to the page link section
  for (let i = 1; i <= pages; i++) {
    const pageList = document.createElement('li');
    const pageLink = document.createElement('a');
    pageLink.textContent = i;
    pageLink.setAttribute('href', '#');
    pageUl.appendChild(pageList);
    pageList.appendChild(pageLink);
  }  

  const paginationLinks = document.querySelectorAll('.pagination a'); 

  paginationLinks[0].className = 'active'; 
  
  for (let i =0; i < paginationLinks.length; i++) {
    paginationLinks[i].addEventListener('click', () => {
      // remove active class from all the links
		for (let i=0; i < paginationLinks.length; i++) {
			paginationLinks[i].className='';
		}
		
		// store the clicked number in a variable named clickedPageNumber
		let clickedPageNumber = paginationLinks[i].textContent;
		
		// use the showPage function to display the page for the link clicked
		showPage(clickedPageNumber, studentList);
		
		// mark that link as “active”
paginationLinks[i].className = 'active';

    });
  }
}



showPage(1, studentList); //Display the first 10 students on load

appendPageLinks(studentList);
