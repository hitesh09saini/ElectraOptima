// Initialize i as a global variable
let i = 0;

// Function to write text one character at a time
function write(id, str) {
    if (i < str.length) {
        try {
            document.getElementById(id).innerHTML += str.charAt(i);
            i++;
            setTimeout(function () {
                write(id, str);
            }, 100);
        } catch (error) {
            console.error("An error occurred in the 'write' function:", error);
        }
    } else {
        i = 0;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    try {
        write('wel', 'Welcome to Residential Energy Auditor.');
    } catch (error) {
        console.error("An error occurred during initialization:", error);
    }
});


// Function to navigate to unit converter page
function unitconvert() {
    try {
        location.href = "unitConvertor.html";
    } catch (error) {
        console.error("An error occurred in the 'unitconvert' function:", error);
    }
}

// Function to navigate to calculator page
function calci() {
    try {
        location.href = "calci.html";
    } catch (error) {
        console.error("An error occurred in the 'calci' function:", error);
    }
}

// Function to display Q1
function letStart() {
    try {
        document.getElementById('Q1').style.display = 'block';
        scrollToBottom();
    } catch (error) {
        console.error("An error occurred in the 'letStart' function:", error);
    }
}

// Function to scroll to the bottom of a container
function scrollToBottom() {
    try {
        const container = document.getElementById('demo');
        container.scrollTop = container.scrollHeight;
    } catch (error) {
        console.error("An error occurred in the 'scrollToBottom' function:", error);
    }
}

// Functions to display Q2, Q3, Q4, ..., Q9
function showQuestion(questionId) {
    try {
        document.getElementById(questionId).style.display = 'block';
        scrollToBottom();
    } catch (error) {
        console.error("An error occurred in the 'showQuestion' function:", error);
    }
}



// Function to hide elements and display a message
function sub() {
    try {
        document.getElementById('cont').style.display = 'none';
        document.getElementById('upload').style.display = 'none';
        document.getElementById('gen').style.display = 'flex';
        write('report', 'The Auditing process is completed.');
        setTimeout(openFeedback, 5000);
    } catch (error) {
        console.error("An error occurred in the 'sub' function:", error);
    }
}

// Function to open feedback form
function openFeedback() {
    try {
        document.getElementById('form').style.display = 'flex';
    } catch (error) {
        console.error("An error occurred in the 'openFeedback' function:", error);
    }
}

// Function to close feedback form
function closeFeedback() {
    try {
        document.getElementById('form').style.display = 'none';
    } catch (error) {
        console.error("An error occurred in the 'closeFeedback' function:", error);
    }
}

// Function to submit feedback
function submitFeedback() {
    try {
        // Add code to handle feedback submission here
        console.log("Feedback submitted");
        closeFeedback();
    } catch (error) {
        console.error("An error occurred in the 'submitFeedback' function:", error);
    }
}

// Function to navigate to the PDF report
function pdf() {
    try {
        location.href = 'report.html';
    } catch (error) {
        console.error("An error occurred in the 'pdf' function:", error);
    }
}

// Function to calculate bulb statistics
function calculateBulbStatistics(wattage, totalHours, numBulbs) {
    try {
        var totalEnergyConsumption = (wattage * totalHours * numBulbs) / 1000;
        var averageOperatingTimePerBulb = totalHours / numBulbs;
        return {
            totalEnergyConsumption: totalEnergyConsumption,
            averageOperatingTimePerBulb: averageOperatingTimePerBulb
        };
    } catch (error) {
        console.error("An error occurred in the 'calculateBulbStatistics' function:", error);
        return null; // or handle the error as needed
    }
}

// Event listeners for opening and closing a popup
document.addEventListener('DOMContentLoaded', function () {
    const openPopupButton = document.getElementById('open-popup');
    const closePopupButton = document.getElementById('close-popup');
    const popupContainer = document.getElementById('popup-container');

    openPopupButton.addEventListener('click', function () {
        try {
            popupContainer.style.display = 'flex';
        } catch (error) {
            console.error("An error occurred while opening the popup:", error);
        }
    });

    closePopupButton.addEventListener('click', function () {
        try {
            popupContainer.style.display = 'none';
        } catch (error) {
            console.error("An error occurred while closing the popup:", error);
        }
    });
});


// Function to submit and show progress
function submit() {

    try { 
        reportGeneration();
        document.getElementById('upload').style.display = 'flex';
        setTimeout(sub, 3000);
    } catch (error) {
        console.error("An error occurred in the 'submit' function:", error);
    }
}



// q1
let averageKwh = document.getElementById('averageKwh');

// q2
let homeTypes = document.getElementById('homeTypes');
let homeNuFloors = document.getElementById('homeNuFloors');

// q3
let heatingTypes = document.getElementById('heatingTypes');
let coolingTypes = document.getElementById('coolingTypes');
let heatingAge = document.getElementById('heatingAge');
let coolingAge = document.getElementById('coolingAge');
let heatingServiceFrequency = document.getElementById('heatingServiceFrequency');
let coolingServiceFrequency = document.getElementById('coolingServiceFrequency');

// q4
let waterHeaterType = document.getElementById('waterHeaterType');
let waterHeaterAge = document.getElementById('waterHeaterAge');
let energySavingChoice = document.getElementById('energySavingChoice');
let leakCheckChoice = document.getElementById('leakCheckChoice');

// q5
let incandescentWattage = document.getElementById('incandescentWattage');
let cflWattage = document.getElementById('cflWattage');
let ledWattage = document.getElementById('ledWattage');
let halogenWattage = document.getElementById('halogenWattage');
let fluorescentWattage = document.getElementById('fluorescentWattage');
let smartWattage = document.getElementById('smartWattage');
let colorChangingWattage = document.getElementById('colorChangingWattage');
let edisonWattage = document.getElementById('edisonWattage');
let spotlightWattage = document.getElementById('spotlightWattage');
let floodlightWattage = document.getElementById('floodlightWattage');

let incandescentQuantity = document.getElementById('incandescentQuantity');
let cflQuantity = document.getElementById('cflQuantity');
let ledQuantity = document.getElementById('ledQuantity');
let halogenQuantity = document.getElementById('halogenQuantity');
let fluorescentQuantity = document.getElementById('fluorescentQuantity');
let smartQuantity = document.getElementById('smartQuantity');
let colorChangingQuantity = document.getElementById('colorChangingQuantity');
let edisonQuantity = document.getElementById('edisonQuantity');
let spotlightQuantity = document.getElementById('spotlightQuantity');
let floodlightQuantity = document.getElementById('floodlightQuantity');

let averageDailyHours = document.getElementById('averageDailyHours');
let dimmerSwitches = document.getElementById('dimmerSwitches');
let SensorsSwitches = document.getElementById('SensorsSwitches');

// q6


// Function to add an appliance to the table


function handleFormSubmit(applianceTable) {

    console.log(applianceTable);
    const checkboxes = document.querySelectorAll('input[name="appliance"]');
    const tableBody = document.querySelector(`#${applianceTable} tbody`);
    // Remove all existing rows in the table body
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
    // Get all the checkboxes with name="appliance"
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const applianceName = checkbox.value;

            // Create a new row for the appliance
            const newRow = tableBody.insertRow();

            // Create cells for each column
            const applianceCell = newRow.insertCell(0);
            applianceCell.textContent = applianceName;

            // Create input fields for the other columns
            const numColumns = document.querySelectorAll(`#${applianceTable} thead th`).length;
            for (let i = 1; i < numColumns; i++) {
                const cell = newRow.insertCell(i);
                cell.innerHTML = `<input type="number">`;
            }
        }
    });
}


function applianceCheckedTable() {
    const tableBody = document.querySelector(`#applianceTable2 tbody`);
    const checkboxes = document.querySelectorAll('input[name="appliance"]');
    // Remove all existing rows in the table body
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }


    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const applianceName = checkbox.value;

            // Create a new row for the appliance
            const newRow = tableBody.insertRow();


            newRow.innerHTML = ` <td>${applianceName}</td>
                                 <td><input type="checkbox"></td>
                                <td><input type="checkbox"></td>
                                 <td><input type="number"></td>
                                   `;
        }
    });

}



// q7
let homeTemp = document.getElementById('homeTemp');
let awayTemp = document.getElementById('awayTemp');
let progThermostat = document.getElementById('progThermostat');

// q8
let dailyRoutinesYes = document.getElementById('dailyRoutinesYes');
let dailyRoutinesNo = document.getElementById('dailyRoutinesNo');

// q9
let noticedDraftsYes = document.getElementById('noticedDraftsYes');
let noticedDraftsNo = document.getElementById('noticedDraftsNo');
let gapsAroundDoorsYes = document.getElementById('gapsAroundDoorsYes');
let gapsAroundDoorsNo = document.getElementById('gapsAroundDoorsNo');

// q10
let wallInsulationYes = document.getElementById('wallInsulationYes');
let wallInsulationNo = document.getElementById('wallInsulationNo');
let wallInsulationType = document.getElementById('wallInsulationType');
let wallInsulationThickness = document.getElementById('wallInsulationThickness');
let atticInsulationYes = document.getElementById('atticInsulationYes');
let atticInsulationNo = document.getElementById('atticInsulationNo');
let atticInsulationType = document.getElementById('atticInsulationType');
let atticInsulationThickness = document.getElementById('atticInsulationThickness');
let exteriorGapsYes = document.getElementById('exteriorGapsYes');
let exteriorGapsNo = document.getElementById('exteriorGapsNo');

// q11
let singlePane = document.getElementById('singlePane');
let doublePane = document.getElementById('doublePane');
let windowWeatherstrippingYes = document.getElementById('windowWeatherstrippingYes');
let windowWeatherstrippingNo = document.getElementById('windowWeatherstrippingNo');
let doorSealingProper = document.getElementById('doorSealingProper');
let doorSealingGaps = document.getElementById('doorSealingGaps');
let energyEfficientYes = document.getElementById('energyEfficientYes');
let energyEfficientNo = document.getElementById('energyEfficientNo');

// q12
let noisesOdorsYes = document.getElementById('noisesOdorsYes');
let noisesOdorsNo = document.getElementById('noisesOdorsNo');
let airEscapeYes = document.getElementById('airEscapeYes');
let airEscapeNo = document.getElementById('airEscapeNo');
let heatersFunctioning = document.getElementById('heatersFunctioning');
let heatersLeaks = document.getElementById('heatersLeaks');

// q13
let ventilationYes = document.getElementById('ventilationYes');
let ventilationNo = document.getElementById('ventilationNo');
let fansWorking = document.getElementById('fansWorking');
let fansNotWorking = document.getElementById('fansNotWorking');

// q14
let fireplaceUsed = document.getElementById('fireplaceUsed');
let fireplaceNotUsed = document.getElementById('fireplaceNotUsed');
let chimneySealedFlueGood = document.getElementById('chimneySealedFlueGood');
let chimneyNotSealedFlueCondition = document.getElementById('chimneyNotSealedFlueCondition');

// q15
let shadingYes = document.getElementById('shadingYes');
let shadingNo = document.getElementById('shadingNo');
let roofGood = document.getElementById('roofGood');
let roofNotGood = document.getElementById('roofNotGood');



// Report generation 

function reportGeneration(){



}