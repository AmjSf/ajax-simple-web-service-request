(() => {
    // function hmm(){
    //     const arr=fetch("https://thatsthespir.it/api").then(value => {
    //         value.json().then(values => {
    //             document.getElementById('qte').textContent = values.quote
    //             document.getElementById('author').textContent = values.author
    //             document.getElementById('image').src =values.photo
    //         });
    //     });

    // }
    // hmm()
    const reqListener = response => {
        let temp =JSON.parse(response.currentTarget.response) ;
        
        document.getElementById('qte').innerHTML = temp.quote
        document.getElementById('author').textContent = temp.author
        document.getElementById('image').src =temp.photo
        
      };
    const loadData = () => {
        const req = new XMLHttpRequest();
        req.onload = reqListener;
        req.open("get", "https://thatsthespir.it/api", true);
        req.send();
    };
    window.onload = () => {
        const loadButton = document.getElementById("load");
        loadButton.onclick = loadData;
    };
    loadData()
})();