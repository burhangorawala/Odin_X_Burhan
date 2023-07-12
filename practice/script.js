const textbox = document.querySelector("#textbox");
const output = document.querySelector("#output");

textbox.addEventListener("keydown",(event)=>{
    output.textContent = `You have pressed "${event.key}".`;
});
// textbox.addEventListener("keydown", (event) => {
//     output.textContent = `You pressed "${event.key}".`;
//   });