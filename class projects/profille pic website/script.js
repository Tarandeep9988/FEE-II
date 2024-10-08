const imgBox = document.getElementById('img-box');
const nameBox = document.getElementById('name-box');
const bioBox = document.getElementById('bio-box');

const nameInput = document.getElementById('name-input');
const bioInput = document.getElementById('bio-input');
const urlInput = document.getElementById('url-input');

const btn = document.getElementById('btn');

btn.onclick = function () {
    const name = nameInput.value.trim();
    const bio = bioInput.value.trim();
    const url = urlInput.value.trim();
    if (name) {
        nameBox.innerHTML = name;
    }
    if (bio) {
        bioBox.innerHTML = bio;
    }
    if (url) {
        imgBox.src = url;
    }
};