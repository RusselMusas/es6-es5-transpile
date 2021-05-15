import * as service from './rate-service-mock';
import 'es6-promise/auto';

service.findAll()
    .then(rates => {
        let html = '';
        console.log("rates found: ", rates);
        rates.forEach(rate => html += `<tr><td>${rate.name}</td><td>${rate.years}</td><td>${rate.rate}%</td></tr>`);
        //document.getElementById("rates").innerHTML = html;
        $("#rates").html(html);
    })
    .catch(e => console.log(e));
