console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImageContainer = document.getElementById("dog-image-container");
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.getElementById("dog-breeds");
    function addBreed(breed) {
        const li = document.createElement("li");
        li.textContent = breed;
        breedList.appendChild(li);
    }


    fetch(imgUrl)
        .then((response) => response.json())
        .then((data) => {
            data.message.forEach((imageUrl) => {
                const img = document.createElement("img");
                img.src = imageUrl;
                dogImageContainer.appendChild(img);
            });
        });

    fetch(breedUrl)
        .then((response) => response.json())
        .then((data) => {
            const breeds = Object.keys(data.message);
            breeds.forEach((breed) => {
                addBreed(breed);
            });
        });

    function changeFontColor(event) {
        const selectedBreed = event.target;
        selectedBreed.style.color = "red";
    }

    const breedListItems = breedList.getElementsByTagName("li");
    for (const item of breedListItems) {
        item.addEventListener("click", changeFontColor);
    }

    const breedDropdown = document.getElementById("breed-dropdown");


    breedDropdown.addEventListener("change", filterBreeds);


    function filterBreeds() {
        const selectedLetter = breedDropdown.value;
        const breedListItems = breedList.getElementsByTagName("li");


        for (const item of breedListItems) {
            const breedName = item.textContent;

         
            if (breedName.charAt(0) === selectedLetter) {
                item.style.display = "block"; 
            } else {
                item.style.display = "none"; 
            }
        }
    }
});
