const spacebar = document.getElementById('spacebarButton');
document.addEventListener("keyup", function (event) {
    if ((event.key === ' ')) {
        fetchCatFact()
        fetchCat();
    }
});
spacebar.addEventListener('click', function () {
    fetchCatFact()
    fetchCat();
});
function fetchCat() {
    fetch('https://cataas.com/cat?type=medium&json=true')
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                  throw new Error('Data not found');
                } else if (response.status === 500) {
                  throw new Error('Server error');
                } else {
                  throw new Error('Network response was not ok');
                }
              }
            return response.json();
        })
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
function fetchCatFact() {
    fetch('https://meowfacts.herokuapp.com/')
    .then(response => {
        if (!response.ok) {
            if (response.status === 404) {
              throw new Error('Data not found');
            } else if (response.status === 500) {
              throw new Error('Server error');
            } else {
              throw new Error('Network response was not ok');
            }
          }
        return response.json();
    })
    .then(data => renderCatFact(data))
    .catch(error => console.error(error));
}
function renderCatFact(data) {
    const fact = document.getElementById('catFact');
    fact.innerHTML = data.data;
}