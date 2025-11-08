//build notes and index from existing text, then attach to toggles

const notes = document.querySelectorAll('.note p');
// make a copy of the notes to append to toggles
const internotes = Array.from(notes).map(element => element.cloneNode(true));
const toggles = document.querySelectorAll('.fn')

internotes.forEach((element, index) =>  {
	element.setAttribute('data-index', index);
	element.classList.add('internote');
});


toggles.forEach((element, index) => {
	element.setAttribute('data-index', index);
	var graf = element.parentElement;
	graf.after(internotes[index]);
	element.addEventListener("click", toggleNote)
});

function toggleNote(e) {
	e.preventDefault();
	index = Number(e.target.text)-1;
	internotes[index].classList.toggle('active');
}