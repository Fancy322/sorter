class Sorter {
  constructor() {
    this.array = [];
      this.comparator = (a, b) => (a-b);
    // your implementation
  }

  add(element) {
    this.array.push(element);
    // your implementation
  }

  at(index) {
    return this.array[index];
    // your implementation
  }

  get length() {
    return this.array.length;
    // your implementation
  }

  toArray() {
    return this.array;
    // your implementation
  }

  sort(indices) {
    let subArray = [];
      const sortedIndices = indices.sort(this.comparator);
      
      if (!Array.isArray(indices)) {
          return this.array;
      }
      
      sortedIndices.forEach(value => subArray.push(this.array[value]));
      
      subArray = subArray.sort(this.customComparator || this.comparator);
    
      sortedIndices.forEach((value, index) => this.array[value] = subArray[index] );
  }


  setComparator(compareFunction) {
    this.customComparator = compareFunction;
    // your implementation
  }
}


