// function validateForm() {
//     var input1 = document.forms["Form"]["fromCity"].value;
//     var input2 = document.forms["Form"]["toCity"].value;
//     if (input1 == "" && input2 == "") {
//         alert("Please input Flying from and Flying to");
//         return false;
//     } else if (input1 == "") {
//         alert("Please input Flying from");
//         return false;
//     } else if (input2 == "") {
//         alert("Please input Flying to");
//         return false;
//     } else
//         return true;
// }

function showOption(placeID, SelectID) {
    enableSearch();
    document.getElementById(SelectID).removeAttribute("disabled");
    var de1 = document.forms["Form"][placeID].value;
    var s2 = document.getElementById(SelectID);
    if (de1 == "Bangkok" || de1 == "bangkok") {
        while (s2.firstChild) {
            s2.removeChild(s2.firstChild);
        }

        var nodeBKK = document.createElement("OPTION");
        var nodeDMK = document.createElement("OPTION");
        var textNodeBKK = document.createTextNode("Suvarnaphumi (BKK)");
        var textNodeDMK = document.createTextNode("Donmueng (DMK)");
        nodeBKK.appendChild(textNodeBKK);
        nodeDMK.appendChild(textNodeDMK);
        nodeDMK.id = "dmk";
        nodeBKK.id = "bkk";
        s2.appendChild(nodeBKK);
        s2.appendChild(nodeDMK);
    } else if (de1 == "Paris" || de1 == "paris") {

        while (s2.firstChild) {
            s2.removeChild(s2.firstChild);
        }

        var nodeCDG = document.createElement("OPTION");
        var textNodeCDG = document.createTextNode("Charles de Gaulle (CDG)");
        nodeCDG.appendChild(textNodeCDG);
        nodeCDG.id = "cdg";
        s2.appendChild(nodeCDG);
    } else {
        while (s2.firstChild) {
            s2.removeChild(s2.firstChild);
        }
        var nodeBKK = document.createElement("OPTION");
        var nodeDMK = document.createElement("OPTION");
        var nodeCDG = document.createElement("OPTION");
        var textNodeBKK = document.createTextNode("Suvarnaphumi (BKK)");
        var textNodeDMK = document.createTextNode("Donmueng (DMK)");
        var textNodeCDG = document.createTextNode("Charles de Gaulle (CDG)");
        nodeBKK.appendChild(textNodeBKK);
        nodeDMK.appendChild(textNodeDMK);
        nodeCDG.appendChild(textNodeCDG);
        nodeDMK.id = "dmk";
        nodeBKK.id = "bkk";
        nodeCDG.id = "cdg";
        s2.appendChild(nodeBKK);
        s2.appendChild(nodeDMK);
        s2.appendChild(nodeCDG);
    }
}

// function validateForm() {
//     var input1 = document.forms["Form"]["fromCity"].value;
//     var input2 = document.forms["Form"]["toCity"].value;
//     if (input1 == "" && input2 == "") {
//         alert("Please input Flying from and Flying to");
//         return false;
//     } else if (input1 == "") {
//         alert("Please input Flying from");
//         return false;
//     } else if (input2 == "") {
//         alert("Please input Flying to");
//         return false;
//     } else
//         return true;
// }

function handleEnter(field, event) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (keyCode == 13) {
        var i;
        for (i = 0; i < field.form.elements.length; i++)
            if (field == field.form.elements[i])
                break;
        i = (i + 1) % field.form.elements.length;
        field.form.elements[i].focus();
        return false;
    } else
        return true;
}

function enableSearch() {
    var input1 = document.forms["Form"]["fromCity"].value;
    var input2 = document.forms["Form"]["toCity"].value;
    if (input1 != "" && input2 != "") {
        document.getElementById("searchButton").removeAttribute("disabled");
    }

}

function enableNext() {
    var fname = document.getElementById('firstname');
    var lname = document.getElementById('lastname');
    var pass = document.getElementById('passport');
    if (fname != "" && lname != "" && pass != "") {
        document.getElementById("nextBtn").removeAttribute("disabled");
    }
}
function enableNext() {
    
    var fname = document.getElementById('firstname');
    var lname = document.getElementById('lastname');
    var pass = document.getElementById('passport');
    if (((pass != "" && lname !="") && (lname != "" && pass !="")) == true) {
        document.getElementById("nextbtn").removeAttribute("disabled");
    }
    
}




