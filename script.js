/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = arr.filter(dlist=> dlist.profession === developer);
  developers.forEach(dlist => {
      console.log(`${arr.name}`);
  });

}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(dlist => {
          if (dlist.profession === developer) {
              console.log(`${dlist.name}`);
          }
      });
}

function addData() {
  //Write your code here, just console.log
  const newArr = {id:4,name:"susan",age:"20",profession:"intern"};
      arr.push(newArr);
      console.log("Updated Array of Employee:", arr);
}

function removeAdmin() {
  //Write your code here, just console.log
   const admins = arr.filter(ad => ad.profession === admin);
  console.log("Updated Array of employees (After removing admins):", admins);
}

function concatenateArray() {
  //Write your code here, just console.log
  const additionalEmp = [
          { id: 1, name: "john", age: "18", profession: "developer" },
          { id: 2, name: "jack", age: "20", profession: "developer" },
          { id: 3, name: "karen", age: "19", profession: "admin" }
      ];
      const allemp = arr.concat(additionalEmp);
      console.log("Combined Array of employee:", allemp);
}
