document.addEventListener("DOMContentLoaded", () => {
    
    function beginGame()
    {
        console.log("Redirecting to index.html")
        window.location.href = "../game/index.html"
    }
    // Add event listener for begin button on the homepage
    const beginButton = document.querySelector('#beginButton');
    if (beginButton) {
        beginButton.addEventListener('click', beginGame);
    }
});
