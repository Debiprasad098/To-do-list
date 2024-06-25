let input_box = document.querySelector("#input_box");
let task_container = document.querySelector("#task_container");
// let btn=document.querySelector("#btn")
function task() {
    console.log("hello")

    if (input_box.value == '') {
        alert("your task should not be empty");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        task_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input_box.value = '';
    savedata();
}
task_container.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
})
function savedata()
{
    localStorage.setItem("data",task_container.innerHTML);
}
function showlist()
{
    task_container.innerHTML=localStorage.getItem("data");
}
showlist();