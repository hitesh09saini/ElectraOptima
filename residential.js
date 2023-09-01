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

document.addEventListener("DOMContentLoaded", function() {
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

// Function to submit and show progress
function submit() {
    try {
        document.getElementById('upload').style.display = 'flex';
        setTimeout(sub, 2000);
    } catch (error) {
        console.error("An error occurred in the 'submit' function:", error);
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

