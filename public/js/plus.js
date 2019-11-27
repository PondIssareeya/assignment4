var total = 0;
var vat;
var costFilght = 0;
var costInj = 0;
var costBag = 0;
var costNoti = 0;
var costSms = 0;
var sale = 0;

function flightp() {
    // alert(document.getElementById("para").innerHTML.substring(1));
    var para = parseInt(document.getElementById("para").innerHTML.substring(1));
    var b = parseInt(document.getElementById("p-flight").innerHTML);
    // b.innerHTML =  b + para;
    total = para * 30;
    document.getElementById("p-flight").innerHTML = para * 30 + " บาท";
    // vat();
    costFilght = (para) * 30;
    tax();
}

function discount() {
    var checkInj = document.getElementById("ckinj");
    var checkBag = document.getElementById("ckbag");
    var discount = document.getElementById("sale");
    if (checkInj.checked == true && checkBag.checked == true) {
        discount.innerHTML = "165 บาท";
        sale = 165;
    } else {
        discount.innerHTML = "0 บาท";
        sale = 0;
    }
}

function injAnsure() {
    discount();
    var checkInj = document.getElementById("ckinj");
    // var a = document.getElementById("p-en");
    var traServ = document.getElementById("traserv");
    var totalServ = document.getElementById("p-serv");
    if (checkInj.checked == true) {
        totalServ.innerHTML = parseInt(totalServ.innerHTML) + 1300 + " บาท";
        // a.innerHTML = parseInt(totalServ.innerHTML) + 1300 + " บาท";
        traServ.innerHTML = "- Travel Insurance  1300 บาท";
        costInj = 1300;
        total += 1300;
        tax();
    } else {
        totalServ.innerHTML = parseInt(totalServ.innerHTML) - 1300 + " บาท";
        // a.innerHTML = parseInt(totalServ.innerHTML) - 1300 + " บาท";
        traServ.innerHTML = "- Travel Insurance  0 บาท";
        costInj = 0;
        total -= 1300;
        tax();
    }
}

function bagAnsure() {
    discount();

    var checkBag = document.getElementById("ckbag");
    // var a = document.getElementById("p-en");
    var bagServ = document.getElementById("bagserv");
    var totalServ = document.getElementById("p-serv");
    if (checkBag.checked == true) {
        totalServ.innerHTML = parseInt(totalServ.innerHTML) + 350 + " บาท";
        // a.innerHTML = parseInt(totalServ.innerHTML) + 350 + " บาท";
        bagServ.innerHTML = "- Baggage Insurance 350 บาท";
        costBag = 350;
        total += 350;
        tax();
    } else {
        totalServ.innerHTML = parseInt(totalServ.innerHTML) - 350 + " บาท";
        // a.innerHTML = parseInt(totalServ.innerHTML) - 350 + " บาท";
        bagServ.innerHTML = "- Baggage Insurance 0 บาท";
        costBag = 0;
        total -= 350;
        tax();
    }
}

function noti() {

    var checkNoti = document.getElementById("cknoti");
    var totalServ = document.getElementById("p-serv");
    var notiServ = document.getElementById("notiserv");
    if (checkNoti.checked == true) {
        totalServ.innerHTML = parseInt(totalServ.innerHTML) + 150 + " บาท";
        costNoti = 150;
        total += 150;
        notiServ.innerHTML = "- Notification 150 บาท";
        tax();
    } else {
        totalServ.innerHTML = parseInt(totalServ.innerHTML) - 150 + " บาท";
        costNoti = 0;
        total -= 150;
        notiServ.innerHTML = "-> Notification 0 บาท";
        tax();
    }
}

function SMS() {

    var checkSms = document.getElementById("cksms");
    var smsServ = document.getElementById("smsserv");
    var totalServ = document.getElementById("p-serv");
    if (checkSms.checked == true) {
        totalServ.innerHTML = parseInt(totalServ.innerHTML) + 300 + " บาท";
        costSms = 300;
        total += 300;
        smsServ.innerHTML = "- SMS 300 บาท";
        tax();
    } else {
        totalServ.innerHTML = parseInt(totalServ.innerHTML) - 300 + " บาท";
        costSms = 0;
        total -= 300;
        smsServ.innerHTML = "- SMS 0 บาท";
        tax();
    }
}

function tax() {
    // alert("vat");
    var sum = (total - sale)* 0.03;
    vat = parseFloat(sum.toFixed(2));
    var a = document.getElementById("p-tax");
    a.innerHTML = vat + " บาท";
    bath();
}

function bath() {
    var a = document.getElementById("p-total");
    a.innerHTML = total + vat - sale;
}

function confirm() {
    document.getElementById("p-flightPopup").innerHTML = costFilght;
    document.getElementById("p-enPopup").innerHTML = costInj + costBag;
    document.getElementById("p-servPopup").innerHTML = costNoti + costSms;
    document.getElementById("p-taxPopup").innerHTML = vat;
    document.getElementById("p-totalPopup").innerHTML = total + vat - sale;
}