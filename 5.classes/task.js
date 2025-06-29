class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(newState) {
		if (newState <= 0) {
			this._state = 0;
		} else if (newState >= 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.author = author;
		this.type = 'book';
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = 'detective';
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				let foundBook = this.books[i];
				this.books.splice(i, 1);
				return foundBook;
			}
		}
		return null;
	}
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = { subjectName: [] };
	}
}

function addMark(mark, subjectName) {
	if (mark >= 2 && mark <= 5) {
		this.marks.subjectName.push(mark);
	} else {
		return;
	}

	if (!this.marks.subjectName) {
		this.marks.subjectName = [];
	}
}

function getAverageBySubject(subjectName) {
	if (!this.marks.subjectName) {
		return null;
	}

	return Number((this.marks.subjectName.reduce((accumulator, item) => accumulator + item, 0) / this.marks.subjectName.length).toFixed(2))
}

function getAverage() {
	Object.keys(this.marks.subjectName);
	this.sum = 0;
	for (let i = 0; i < this.marks.subjectName.length; i++) {
		this.sum += getAverageBySubject(subjectName);
	}

	return this.sum / this.marks.subjectName.length;
}