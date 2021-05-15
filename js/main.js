"use strict";

import { Mortgage } from './mortgage2';

document.getElementById('calcBtn').addEventListener('click', () => {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    let mortgage = new Mortgage(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = mortgage.monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (rate / 12).toFixed(2);
    let html = "";
    mortgage.amortization.forEach((year, index) => html += `
        <tr>
            <td>${index + 1}</td>
            <td class="currency">${Math.round(year.principalY)}</td>
            <td class="stretch">
                <div class="flex">
                    <div class="bar principal"
                         style="flex:${year.principalY};-webkit-flex:${year.principalY}">
                    </div>
                    <div class="bar interest"
                         style="flex:${year.interestY};-webkit-flex:${year.interestY}">
                    </div>
                </div>
            </td>
            <td class="currency left">${Math.round(year.interestY)}</td>
            <td class="currency">${Math.round(year.balance)}</td>
        </tr>
    `);
    //document.getElementById("amortization").innerHTML = html;
    $( "#amortization" ).html(html);
});

// window.getValue = () => {
//     console.log("This function is called!");
// }

// document.getValue = () => {
//     console.log("This function is called!");
// }

let calcSum = () => {
    console.log("calcSum is running, please wait...");
    return new Promise(resolve => {
        setTimeout(() => {
            let a = 11;
            let b = 12;
            let sumR = parseFloat(a) + parseFloat(b);
            console.log("calcSum completed, result: " + sumR + " is returned.");
            resolve(sumR);
        }, 5000);
    });
}

let getValue = async () => {
    console.log("This function is called!");
    const sumResponse = await calcSum();
    console.log("sum received is: " + sumResponse)
    console.log("After calcSum.");
}

$('#labelPrincipal').on('click',function() {
    getValue();
});