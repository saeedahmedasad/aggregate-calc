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
const resultDiv = document.querySelector(".result-div") as HTMLDialogElement
const closeBtn = document.querySelector(".close-div ") as HTMLButtonElement

let aggregatePerc: string
function calculate(){
    let matricObtMarks: number = parseFloat(matricObt.value)
    let matricTotMarks: number = parseFloat(matricTot.value)
    let matricWeiPerc: number = parseFloat(matricWei.value)
    let interObtMarks: number = parseFloat(interObt.value)
    let interTotMarks: number = parseFloat(interTot.value)
    let interWeiPerc: number = parseFloat(interWei.value)
    let testObtMarks: number = parseFloat(testObt.value)
    let testTotMarks: number = parseFloat(testTot.value)
    let testWeiPerc: number = parseFloat(testWei.value)

    aggregatePerc = ((matricWeiPerc/100) * ((matricObtMarks/matricTotMarks)* 100) + (interWeiPerc/100) * ((interObtMarks/interTotMarks)* 100) + (testWeiPerc/100) * ((testObtMarks/testTotMarks)* 100)).toFixed(2)
    resultDiv.style.display = "block"
    result.textContent =`Your Aggregate: ${ aggregatePerc.toString()}%`
}
function closeDialogBox(){
    resultDiv.style.display = "none"
    console.log("testing");
}
calculateBtn?.addEventListener("click", calculate)
closeBtn.addEventListener("click", closeDialogBox)