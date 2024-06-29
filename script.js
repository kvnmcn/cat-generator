const spacebar = document.getElementById('spacebarButton');
document.addEventListener("keyup", function(event) {
    if ((event.key === ' ') || event.target === spacebar) {
        // spacebar.click();
        fetch('https://cataas.com/cat?type=medium')
        .then(data => {
            let imageUrl = data.url;
            const image = document.getElementById('cat');
            image.src = imageUrl;
            console.log("Success");
            }) 
            .catch(error => console.error(error));
    }
});