document.getElementById('noButton').addEventListener('mouseover', function(event) {
    const noButton = event.target;
    const cursorX = event.clientX;
    const cursorY = event.clientY;
    const buttonRect = noButton.getBoundingClientRect();
    let newX, newY;

    // Move the button in the opposite direction of the cursor
    if (cursorX < buttonRect.left + buttonRect.width / 2) {
        newX = buttonRect.right + 10;
    } else {
        newX = buttonRect.left - buttonRect.width - 10;
    }

    if (cursorY < buttonRect.top + buttonRect.height / 2) {
        newY = buttonRect.bottom + 10;
    } else {
        newY = buttonRect.top - buttonRect.height - 10;
    }

    // Keep the button within the webpage boundaries
    newX = Math.max(0, Math.min(newX, window.innerWidth - buttonRect.width));
    newY = Math.max(0, Math.min(newY, window.innerHeight - buttonRect.height));

    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('invitation').style.display = 'none';
    document.getElementById('thankYou').style.display = 'block';
});
