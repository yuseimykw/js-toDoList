document.getElementById("inputBtn").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value
    const toDoItem = document.createElement("li")
    const itemWrap = document.getElementById("toDoList")
    const removeBtn = document.createElement("button")
    const toDoText = document.createElement("p")
    toDoText.textContent = inputText
    removeBtn.textContent = "削除"


    ///ボタンが押されたあとのinputText
    document.getElementById("inputText").value = ""

    const editBtn = document.createElement("button")
    editBtn.textContent = "編集"
    //編集ボタン
    editBtn.addEventListener("click", function () {
        const editItem = document.createElement("input")
        const hinanText = toDoText.previousSibling
        editItem.type = "text"
        toDoText.remove()
        editItem.type = "text"
        editItem.value = hinanText
        toDoItem.insertBefore(editItem, editBtn)
        this.remove()

    })
    // itemWrap.insertAdjacentHTML("beforeend", toDoItem)
    itemWrap.appendChild(toDoItem)
    toDoItem.appendChild(toDoText)
    toDoItem.appendChild(editBtn)
    toDoItem.appendChild(removeBtn)
})