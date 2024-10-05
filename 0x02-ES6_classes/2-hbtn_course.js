class HolbertonCourse {
    constructor(name, length, students) {
      this._name = null;
      this._length = null;
      this._students = null;
  
      this.name = name;      // Calls the setter
      this.length = length;  // Calls the setter
      this.students = students; // Calls the setter
    }
  
    // Getter for name
    get name() {
      return this._name;
    }
  
    // Setter for name
    set name(value) {
      if (typeof value !== 'string') {
        throw new TypeError('name must be a string');
      }
      this._name = value;
    }
  
    // Getter for length
    get length() {
      return this._length;
    }
  
    // Setter for length
    set length(value) {
      if (typeof value !== 'number') {
        throw new TypeError('length must be a number');
      }
      this._length = value;
    }
  
    // Getter for students
    get students() {
      return this._students;
    }
  
    // Setter for students
    set students(value) {
      if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
        throw new TypeError('students must be a list of strings');
      }
      this._students = value;
    }
  };