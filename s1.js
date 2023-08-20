


//Add element 
document.querySelector(".add").addEventListener("click",function(){

    //get The list class which is added to ul tag
    let List=document.querySelector(".list")
    //Get the text form input 
    let task=document.getElementById("input").value
    //get the length of the existing li (list) which is use full for assign ID for button and for the list   
    let length=document.querySelectorAll("li").length

    // this condition is optional added only for initial color based on odd and even number background color we can do the changes on that
    if(length % 2==0){
        //here we appending the  list under the  ul list and assigning the ID  to the li and also to the button 
        List.innerHTML+=`<li class="event1" id="color-${length}" onClick="Addstyle('color-${length}')">${task}<button class="icon" id="item-${length}" onClick="Delete('item-${length}')"><i class="fa-solid fa-x fa-2xs"></i></button></li>`
    }else{
        List.innerHTML+=`<li class="event2"id="color-${length}" onClick="Addstyle('color-${length}')">${task}<button class="icon" id="item-${length}" onClick="Delete('item-${length}')"><i class="fa-solid fa-x fa-2xs"></i></button></li>`
    } 
})

//Add Style 
function Addstyle(item){

    // this function get the list ID as a parameter 
    let listforstyle=document.getElementById(item)
 
    //this condition to check the  listforstyle and background class added to the list or not 
    if(listforstyle && listforstyle.classList.contains("background")){

        // if the class is added then remove background and slash class 
        listforstyle.classList.remove(`background`)
        listforstyle.classList.remove(`slash`)
    }else{
        //this if condition to avoid error 
        if(listforstyle){
            // if the class is not added then add background and slash class 
            listforstyle.classList.add(`background`)
            listforstyle.classList.add(`slash`)
        }
       
    } 
}

//Delete item
function Delete(item){

    let list=document.getElementById(item)
    //remove the parent element  here the parent element of this delete button is list soo list get deleted 
    list.parentElement.remove()
}
localStorage.setitem(Array,value){

}










