function removeItem(event) {

    // ParentNode -> div -> div -> div
    const existingList = event.target.parentNode.parentNode.parentNode
    console.log(existingList);

    // remove
    existingList.remove()
}