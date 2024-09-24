// TodoRepository (Storage / Persistence)

//     Handles data persistence. It saves the todos to a persistent storage (like localStorage, a database, or an API) and loads them when needed. It abstracts the details of how data is saved and retrieved, ensuring the business logic is decoupled from storage mechanisms.

export class TodoRepository {
  static localStorageSave(arrayIndex, ArrayOfData) {
    let stringifyArrayOfData = JSON.stringify(ArrayOfData);
    localStorage.setItem(arrayIndex, stringifyArrayOfData);
  }

  static getLocalStorageData(arrayIndex) {
    let arrayOfItems = localStorage.getItem(arrayIndex);
    arrayOfItems = JSON.parse(arrayOfItems);
    return arrayOfItems;
  }

  static localStorageDelete(arrayIndex) {
    localStorage.removeItem(arrayIndex);
  }
}
