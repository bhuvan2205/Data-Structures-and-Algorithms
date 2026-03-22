class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0);
      total = (total * PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const index = this._hash(key);

    const isValidSpace = !this.keyMap[index];
    if (isValidSpace) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);

    const itemExists = this.keyMap[index];
    if (!itemExists) {
      return undefined;
    }

    return itemExists.find((item) => item[0] === key)?.[1];
  }

  key() {
    let result = [];

    for (const item of this.keyMap) {
      if (item) {
        for (const childItem of item) {
          if (!result.includes(childItem[0])) {
            result.push(childItem[0]);
          }
        }
      }
    }

    return result;
  }

  values() {
    let result = [];

    for (const item of this.keyMap) {
      if (item) {
        for (const childItem of item) {
          if (!result.includes(childItem[1])) {
            result.push(childItem[1]);
          }
        }
      }
    }

    return result;
  }
}

const table = new HashTable(53);

table.set("Red", "#ff0000");
table.set("Blue", "#0000ff");
table.set("Green", "#00ff00");
table.set("Melissa", "#afe170");
table.set("Strong Blue", "#0f01f0");
table.set("Dear Darling", "#a20017");
table.set("Retro Pink Pop", "#ff0170");
table.set("Triforce Yellow", "#f0f10f");
table.set("Delightful Green", "#00f102");
table.set("Seafoam Splashes", "#aff1d0");

console.log(table.get("Blue"));
console.log(table.key());
console.log(table.values());
