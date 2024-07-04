const spacebar = document.getElementById('spacebarButton');
document.addEventListener("keyup", function (event) {
    if ((event.key === ' ')) {
        fetchCat();
    }
});
spacebar.addEventListener('click', function () {
    fetchCat();
});
function fetchCat() {
    fetch('https://cataas.com/cat?type=medium&json=true')
        .then(response => response.json())
        .then(data => renderImage(data))
        .catch(error => console.error(error));
}
function renderImage(data) {
    {
        const imageUrl = data._id;
        const image = document.getElementById('cat');
        image.src = `https://cataas.com/cat/${imageUrl}`;
        console.log(imageUrl);
    }
}