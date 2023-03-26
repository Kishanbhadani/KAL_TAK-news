// // console.log("hello")

let Api = fetch("https://inshorts.deta.dev/news?category=science");
Api.then((response) => {
    return response.json()
}).then((content) => {
    let cards = content.data
    console.log(cards)
    ihtml = ""
    for (let item in cards) {
        
        ihtml += `
        <div class="card" style="width: 18rem;">
            <img src="${cards[item].imageUrl}" class="card-img-top" height= "200px" width="200px" alt="...">
            <div class="card-body">
              <h5 class="card-title">${cards[item].title}</h5>
              <p class="card-text">${cards[item].content}</p>
              <p class="card-text">${cards[item].author}</p>
              <a href="${cards[item].readMoreUrl}" class="btn btn-primary">Go to there..</a>
            </div>
        </div>`
     }
     console.log(cards[2].title)
     cardcontain.innerHTML = ihtml;
})
