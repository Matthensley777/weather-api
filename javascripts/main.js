$(document).ready(function() {

    const apiKey = "88cd9c0ec1b4ccbc7c4b2601c4e257ac";
    let zipCode = "";


    $("#button").on("click", (e) => {
        const type = $("#input").val();
        loadWeather(type).then((data) => {
            console.log(data);
            let myData = data;
            writeDom(results);
        }).catch((error) => {
            console.log(error);
        });
    });

    const loadWeather = (zipCode) => {
        return new Promise((resolve, reject) => {
            $.ajax(`https://www.api.openweathermap.org/data/2.5/forecast/daily?cnt=16&zip=${zipCode}&APPID=${apiKey}`)
                .done((data) => resolve(data))
                .fail((error) => reject(error));
            
        });
    };

    const writeDom = (results) => {
        let outPutString = "";
        for (let = i; i < results.length; i++) {
        	outPutString += `<div class="col-sm-4".`;
            outPutString += `<p id="${results[i].name}"></p>`;
            outPutString += `<p id="${results[i].temp}"></p>`;
            outPutString += `<p id="${results[i].main}"></p>`;
            outPutString += `<p id="${results[i].description}"></p>`;
            outPutString += `<p id="${results[i].speed}"></p>`;
        }
        $("#container").apend(outPutString);

    };





});


































