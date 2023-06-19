let test: string = "saeed"

const matricObt = document.querySelector("#matric-obt") as HTMLInputElement;
const matricTot = document.querySelector("#matric-tot") as HTMLInputElement;
const matricWei = document.querySelector("#matric-wei") as HTMLInputElement;
const interObt = document.querySelector("#inter-obt") as HTMLInputElement;
const interTot = document.querySelector("#inter-tot") as HTMLInputElement;
const interWei = document.querySelector("#inter-wei") as HTMLInputElement;
const testObt = document.querySelector("#test-obt") as HTMLInputElement;
const testTot = document.querySelector("#test-tot") as HTMLInputElement;
const testWei = document.querySelector("#test-wei") as HTMLInputElement;
const calculateBtn = document.querySelector(".calculate") as HTMLButtonElement
const result = document.querySelector(".result") as HTMLOutputElement

let matricObtMarks: number, interObtMarks: number, testObtMarks: number;
let matricTotMarks: number, interTotMarks: number, testTotMarks: number
let matricWeiPerc: number, interWeiPerc: number, testWeiPerc: number = 0

let aggregatePerc: string
function calculate(){
    matricObtMarks = parseFloat(matricObt.value)
    matricTotMarks = parseFloat(matricTot.value)
    matricWeiPerc = parseFloat(matricWei.value)
    interObtMarks = parseFloat(interObt.value)
    interTotMarks = parseFloat(interTot.value)
    interWeiPerc = parseFloat(interWei.value)
    testObtMarks = parseFloat(testObt.value)
    testTotMarks = parseFloat(testTot.value)
    testWeiPerc = parseFloat(testWei.value)

    aggregatePerc = ((matricWeiPerc/100) * ((matricObtMarks/matricTotMarks)* 100) + (interWeiPerc/100) * ((interObtMarks/interTotMarks)* 100) + (testWeiPerc/100) * ((testObtMarks/testTotMarks)* 100)).toFixed(2)
    result.textContent = aggregatePerc.toString()
}
calculateBtn?.addEventListener("click", calculate)