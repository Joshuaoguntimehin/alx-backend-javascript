class HolbertonCourse {
	constructor(name, length, student) {
		if(typeof name !== 'string'){
			throw new TypeError('Name must be a string');
		}
		if (typeof length !== 'number'){
			throw new TypeError('Name must be a string');
		}
		if(!Array.isArray(student) || !students.every(student => typeof student === 'string')){
			throw new TypeError('Name must be a string');
		}
			this._name = name;
			this._length = length;
			this._students = students;
		}
	get name() {
		return this._name;
	}
	get length() {
        	return this._length;
    	}

    	get students() {
        	return this._students;
	}
}
