const buttons = document.querySelectorAll(".img");
let random = Math.floor(Math.random() * buttons.length + 1);
const winlost = document.querySelector(".Win-Lost")
const randomImg = document.querySelector(".random-Container");

const arrImg = [
   {  src : "https://www.pngitem.com/pimgs/m/266-2667795_rock-paper-scissors-png-transparent-png.png" , name: "paper" },
     {src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_R5a6Jt8jR_t-HTac-Zc0tQmIL6ZRtNnxuK0osQ9EBf7V6bO-mRO58db2YYx8DRw1mwY&usqp=CAU" , name:"stone"},
    {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KAZtQUpeqelxjO89TJxMfAFtWsX1SCIwCXNaY3HNhfKSy5WTZKEF4K5nWX7upL5NvKo&usqp=CAU" , name:"Siccor"}
]

function randomImgFun(){
    random = generateRandomIndex()
    const name = arrImg[random]
    const img = arrImg[random].src
    const CreateElm = document.createElement("img")
    CreateElm.setAttribute("src" , img)
    randomImg.innerHTML = ""
    randomImg.appendChild(CreateElm)
 }




buttons.forEach((eachBtn) => {
    eachBtn.addEventListener("click", (elem) => {
       
        randomImgFun()

        if (arrImg[random].name === eachBtn.id ) {
            winlost.innerHTML = "Tie 😒"
            setTimeout(() => {
                location.reload()
            }, 4000);
        } else if((eachBtn.id === "paper" && arrImg[random].name === "stone" ) || (eachBtn.id === "stone" && arrImg[random].name === "siccor" ) || (eachBtn.id === "siccor" && arrImg[random].name === "paper" ) ){
            winlost.innerHTML = "You Win 🤩 !"
            setTimeout(() => {
                location.reload()
            }, 4000);
        }else{
            winlost.innerHTML = "You Lost 😂 !"
            setTimeout(() => {
                location.reload()
            }, 4000);
        }
    })
});

function generateRandomIndex() {
    return Math.floor(Math.random() * arrImg.length);
}

