document.getElementById("inputBtn").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value
    const toDoItem = document.createElement("li")
    const itemWrap = document.getElementById("toDoList")
    const removeBtn = document.createElement("button")
    const toDoText = document.createElement("p")
    toDoText.textContent = inputText
    removeBtn.textContent = "削除"

    // ///ボタンが押されたあとのinputText
    document.getElementById("inputText").value = ""

    //編集ボタン
    const editBtn = document.createElement("button")
    editBtn.textContent = "編集"
    editBtn.addEventListener("click", function () {
        const editItem = document.createElement("input")
        editItem.type = "text"
        toDoText.remove()
        editItem.type = "text"
        toDoItem.insertBefore(editItem, editBtn)
        this.remove()

        //更新ボタン
        const updateBtn = document.createElement("button")
        updateBtn.textContent = "更新"
        toDoItem.insertBefore(updateBtn, removeBtn)
        updateBtn.addEventListener("click", function () {
            toDoText.textContent = editItem.value
            editItem.remove()
            toDoItem.insertBefore(toDoText, updateBtn)
            this.remove()
            toDoItem.insertBefore(editBtn, removeBtn)
        })
    })

    ///削除ボタン
    removeBtn.addEventListener("click", function () {
        toDoItem.remove()
    })

    // itemWrap.insertAdjacentHTML("beforeend", toDoItem)
    itemWrap.appendChild(toDoItem)
    toDoItem.appendChild(toDoText)
    toDoItem.appendChild(editBtn)
    toDoItem.appendChild(removeBtn)
})