function AddData(){
    alert('working');

   var myInfo = document.getElementById("StudentInfo").value;
   console.log(myInfo, "myInfo");

   var myInfoFromLS = JSON.parse(localStorage.getItem("myInfoFromLS")) || [];
   myInfoFromLS.push(myInfo);
   localStorage.setItem("myInfoFromLS", JSON.stringify(myInfoFromLS));
   console.log(myInfoFromLS, "myInfoFromLS");
   displayTodo()


}

function displayTodo(){

    var myInfoFromLS = JSON.parse(localStorage.getItem("myInfoFromLS"));
    console.log(myInfoFromLS,"myInfoFromLS" );

    var studentInfo = document.getElementById("displayStudentInfo");
    console.log(studentInfo, "studentInfo");

    var student =[`<div id="row"><p>Task</p><p>Completed</p></div>`];

    for (let i= 0; i < myInfoFromLS.length; i++) {

      student += `<div id="content"><p>${myInfoFromLS[i]}</p></div>`
        
    }
     console.log(student, "student");
     studentInfo.innerHTML = student;
   }
displayTodo()

