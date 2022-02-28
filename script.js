function loadSettings(){
    fetch('./assets/settings/settings.json')
        .then(resp => resp.json())
        .then(createSet)
        .catch(err => console.log(err));
}

function createSet(data) {
    console.log(data.footerLinks[0].url);
}