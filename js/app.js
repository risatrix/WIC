//build notes and index from existing text, then attach to toggles

const notes = document.querySelectorAll('.note p');

const toggles = document.querySelectorAll('.fn')

notes.forEach((element, index) =>  {
	element.setAttribute('data-index', index);
	element.classList.add('internote');
});


toggles.forEach((element, index) => {
	element.setAttribute('data-index', index);
	var graf = element.parentElement;
	graf.after(notes[index]);
	element.addEventListener("click", toggleNote)
});


function toggleNote(e) {
	e.preventDefault();
	index = Number(e.target.text)-1;
	notes[index].classList.toggle('active');
	notes[index].classList.toggle('visible');
}