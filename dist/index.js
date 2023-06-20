"use strict";
let test = "saeed";
const matricObt = document.querySelector("#matric-obt");
const matricTot = document.querySelector("#matric-tot");
const matricWei = document.querySelector("#matric-wei");
const interObt = document.querySelector("#inter-obt");
const interTot = document.querySelector("#inter-tot");
const interWei = document.querySelector("#inter-wei");
const testObt = document.querySelector("#test-obt");
const testTot = document.querySelector("#test-tot");
const testWei = document.querySelector("#test-wei");
const calculateBtn = document.querySelector(".calculate");
const result = document.querySelector(".result");
const resultDiv = document.querySelector(".result-div");
const closeBtn = document.querySelector(".close-div ");
let aggregatePerc;
function calculate() {
    let matricObtMarks = parseFloat(matricObt.value);
    let matricTotMarks = parseFloat(matricTot.value);
    let matricWeiPerc = parseFloat(matricWei.value);
    let interObtMarks = parseFloat(interObt.value);
    let interTotMarks = parseFloat(interTot.value);
    let interWeiPerc = parseFloat(interWei.value);
    let testObtMarks = parseFloat(testObt.value);
    let testTotMarks = parseFloat(testTot.value);
    let testWeiPerc = parseFloat(testWei.value);
    if (matricTot.value || matricObt.value || matricWei.value || interObt.value || interTot.value || interWei.value || testObt.value || testTot.value || testWei.value != "") {
        aggregatePerc = ((matricWeiPerc / 100) * ((matricObtMarks / matricTotMarks) * 100) + (interWeiPerc / 100) * ((interObtMarks / interTotMarks) * 100) + (testWeiPerc / 100) * ((testObtMarks / testTotMarks) * 100)).toFixed(2);
        resultDiv.style.display = "block";
        result.textContent = `Your Aggregate: ${aggregatePerc.toString()}%`;
    }
    else {
        alert("Please fill out all the fields :)");
    }
}
function closeDialogBox() {
    resultDiv.style.display = "none";
}
calculateBtn === null || calculateBtn === void 0 ? void 0 : calculateBtn.addEventListener("click", calculate);
closeBtn.addEventListener("click", closeDialogBox);
