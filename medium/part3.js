
document.getElementById('list-container').addEventListener("click", ( event ) => {
    if( event.target && event.target.matches('button.list-item')) {
        alert(`you clicked: ${event.target.textContent}`);
    } 
});

// function to dynamically add new item

document.getElementById('add-item').addEventListener("click", () => {
    const newItem = document.createElement('button');
    newItem.className = 'list-item';
    newItem.textContent = `Items ${document.querySelectorAll('.list-item').length + 1}`;

    document.getElementById('list-container').appendChild(newItem);
})
