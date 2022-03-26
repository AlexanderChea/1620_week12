//Part Two
let var1 = document.querySelector("#side-nav")
console.log("#side-nav")

//Part three

let students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]

function getavg_grade(){
  let studentsScholarship = []
    for (let student_list of students){
      average_grade = student_list["grades"].reduce((a,b)=>a+b/student_list["grades"].length,0)
      student_list["grades"] = average_grade
    
      student_list["gradeAvg"] = student_list["grades"] 
      delete student_list["grades"]
    
      if (average_grade >= 80){
        studentsScholarship.push(student_list)
    }
  }
  return studentsScholarship
}

let average = getavg_grade()

console.log(average)


//Part four

function darktheme(){
  let dark = document.querySelector(".container light-theme")
  divOne.classList.add(".dark-theme")
}