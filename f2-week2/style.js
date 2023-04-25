
const usersList = [
       {    id:1, 
            name:"john", 
            age:"18",
            profession:"developer"
        },

       {     id:2,
             name:"jack",
             age:"20", 
             profession:"developer"
        },

       { 
            id:3, 
            name:"karen",
             age:"19",
             profession:"admin"
        }
    ];

const filterButton=document.getElementById("filter");
const select= document.getElementsByTagName("select")[0];
const container = document.getElementById("cards-container");

filterButton.addEventListener("click",filterUsers);

function filterUsers(){
 const selectedValue=select.value;
   if(!selectedValue){
    alert("please select one option")
    return ;
   }
    //   code to filter from array and append them into users-container

     container.innerHTML="";
     const result=usersList.filter((user,index)=>{
            if(user.profession === selectedValue) return true;
            return false;
     })


//      <div class="user-card">
//      <p>1.</p>
//      <p>Name:<b>John</b></p>
//      <p>Profession:<b>Developer</b></p>
//      <p>Age:<b>18</b></p>
//    </div>

//   create it using DOM 

     result.forEach((user,index)=>{
      
     const div= document.createElement("div");
      div.className="user-card";
      const p1= document.createElement("p");
      p1.innerText=(index + 1)+".";
      const p2= document.createElement("p");
      p2.innerText= "Name:"+ user.name;
      const p3= document.createElement("p");
      p3.innerText="Profession:"+user.profession;
      const p4= document.createElement("p");
       p4.innerText="Age:"+ user.age;

       div.appendChild(p1);
       div.appendChild(p2);
       div.appendChild(p3);
       div.appendChild(p4);

       container.appendChild(div);
     })
}
  
const form= document.getElementById("user-form");
   
 form.addEventListener("submit",addNewUser);

 function addNewUser(e){
  e.preventDefault();
  const user={
     name:e.target["name"].value,
     age:e.target["age"].value,
     profession:e.target["profession"].value,
  }
  usersList.push(user);
 }
   
    

  
         