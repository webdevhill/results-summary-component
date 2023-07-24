let icons = document.querySelectorAll('img');
let category = document.querySelectorAll('.category');
let resultScore = document.querySelectorAll('.num-bold');
let finalScore = document.querySelector('.num-large');
let scoresArray = [];


fetch('./data.json').then(response => {
    let data = response.json();
    return data;
})
.then((data) => {
    data.forEach((e, i) => {
        console.log(e.icon, i)
        console.log(e.category, i);
        console.log(e.score, i);
        
        icons[i].src = e.icon;
        category[i].innerHTML = e.category;
        resultScore[i].innerHTML = e.score;

        scoresArray.push(e.score);
        console.log(scoresArray)

        let scoreAverage = scoresArray.reduce((x, y) =>  x + y)/scoresArray.length;
        console.log(scoreAverage.toFixed());
        finalScore.innerHTML = scoreAverage.toFixed();
    })
})


    // console.log(data[0].category);
    // console.log(data[0].score);
    // console.log(data[0].icon);
    // icons.forEach((each, index) => {
        // console.log(each, index);
    //     each.src = data[index].icon;
    // })
    // category.forEach((each, index) => {
        // console.log(each, index);
    //     each.innerHTML = data[index].category;
    // })
    // resultScore.forEach((each, index) => {
        // console.log(each, index);
    //     each.innerHTML = data[index].score;
    // })

