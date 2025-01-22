let editor = document.querySelector(".editor");
let handlerEdit = function (e) {
        if (e.code === 'KeyE' && e.ctrlKey) {
            e.preventDefault();
            let text = editor.innerText;
            let textarea = document.createElement('textarea');
            textarea.style.height = "100%";
            textarea.classList.add("form-control");
            textarea.value = text;
            editor.innerText = "";
            editor.append(textarea);
            document.removeEventListener("keydown", handlerEdit);
            document.addEventListener("keydown", handlerSave);
        }
}

let handlerSave = function (e) {
    if (e.code === "KeyS" && e.ctrlKey) {
        e.preventDefault();
        let textarea = editor.firstChild;
        let text = textarea.value;
        editor.removeChild(textarea);
        editor.innerText = text;
        document.removeEventListener("keydown", handlerSave);
        document.addEventListener("keydown", handlerEdit);
    }
}
document.addEventListener("keydown", handlerEdit);