// TodoRepository (Storage / Persistence)

//     Handles data persistence. It saves the todos to a persistent storage (like localStorage, a database, or an API) and loads them when needed. It abstracts the details of how data is saved and retrieved, ensuring the business logic is decoupled from storage mechanisms.

export class TodoRepository {
  static tempArray = [];

  static localStorageSave(arrayIndex, ArrayOfData) {
    let stringifyArrayOfData = JSON.stringify(ArrayOfData);
    localStorage.setItem(arrayIndex, stringifyArrayOfData);
  }

  static localStorageSaveSingleString(uniqIndex, textString) {
    localStorage.setItem(uniqIndex, textString);
  }

  static getLocalStorageData(arrayIndex) {
    let arrayOfItems = localStorage.getItem(arrayIndex);
    arrayOfItems = JSON.parse(arrayOfItems);
    return arrayOfItems;
  }

  static getAllLocalStorageData() {
    // clean old array
    this.tempArray = [];
    // loop trough all localStorage data
    for (let i = 0; i < localStorage.length; i++) {
      let index = localStorage.key(i);
      let value = localStorage.getItem(index);
      // value = JSON.parse(value);
      // check for empty / wrong data
      if (value != "" && value != "undefined") {
        this.tempArray.push(value);
      }
    }
    return this.tempArray;
  }

  static localStorageDelete(arrayIndex) {
    localStorage.removeItem(arrayIndex);
  }
}
