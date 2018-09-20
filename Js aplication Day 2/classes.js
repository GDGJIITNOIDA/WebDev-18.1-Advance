/**
 * Created by Tarun1 on 6/23/2017.
 */
function Person (name = "NAME", address = "ADDR") {
    this.name = name;
    this.address = address;
}

let p = new Person("Arnav", "Janakpuri");
let p2 = new Person("Shyam", "Rohini");
let p3 = new Person();

console.log(p);