var app = angular.module('flightApp', []);

app.controller('searchCtrl', function($scope, $http, $window) { //service ใช้แลกเปลี่ยนข้อมูลระหว่าง controller ด้วยกัน

    $scope.submit = function() { //url fake
        $window.location.href = "result.html";
    };

});

app.controller('resultCtrl', function($scope, $http, $window) {
    var obj = [{
            "type": "ONE_WAY",
            "outbound": {
                "airline": "AeroFlot",
                "direction": "OUTBOUND",
                "price": 636.0,
                "takeOffFrom": "Suvanabhumi, Terminal",
                "takeOffTime": { "year": 2017, "month": 10, "dayOfMonth": 28, "hourOfDay": 10, "minute": 40, "second": 0 },
                "landingTo": "Paris-Charles-de-Gaulle, Terminal2C",
                "landingTime": { "year": 2017, "month": 10, "dayOfMonth": 29, "hourOfDay": 22, "minute": 30, "second": 0 },
                "transists": [{
                        "fromAirport": "Suvanabhumi, Terminal",
                        "toAirport": "Sheremetyevo, Terminal F",
                        "order": 1,
                        "flightNO": "SU271",
                        "aircraftType": "Airbus333",
                        "airline": "Aeroflot",
                        "seatClass": "ECONOMY",
                        "remainingSeats": 4
                    },
                    {
                        "fromAirport": "Sheremetyevo, Terminal F",
                        "toAirport": "Paris-Charles-De-Gaulle, Terminal2C",
                        "order": 2,
                        "flightNO": "SU2460",
                        "aircraftType": "Airbus320",
                        "airline": "Aeroflot",
                        "seatClass": "ECONOMY",
                        "remainingSeats": 10
                    }
                ]
            }
        },
        {
            "type": "ONE_WAY",
            "outbound": {
                "airline": "Thai Airways",
                "direction": "OUTBOUND",
                "price": 930.0,
                "takeOffFrom": "Suvanabhumi, Terminal",
                "takeOffTime": {
                    "year": 2017,
                    "month": 10,
                    "dayOfMonth": 28,
                    "hourOfDay": 23,
                    "minute": 40,
                    "second": 0
                },
                "landingTo": "Paris-Charles-de-Gaulle, Terminal1A",
                "landingTime": {
                    "year": 2017,
                    "month": 10,
                    "dayOfMonth": 29,
                    "hourOfDay": 8,
                    "minute": 30,
                    "second": 0
                },
                "transists": [{
                        "fromAirport": "Suvanabhumi, Terminal",
                        "toAirport": "Brisbane Airport, Terminal D",
                        "order": 1,
                        "flightNO": "TG930",
                        "aircraftType": "Airbus320",
                        "airline": "Thai Airways",
                        "seatClass": "FIRST_CLASS",
                        "remainingSeats": 10
                    },
                    {
                        "fromAirport": "Brisbane Airport, Terminal D",
                        "toAirport": "Paris-Charles-De-Gaulle, Terminal1A",
                        "order": 2,
                        "flightNO": "TG933",
                        "aircraftType": "Airbus320",
                        "airline": "Thai Airways",
                        "seatClass": "BUSINESS",
                        "remainingSeats": 10
                    }
                ]
            }
        }
    ];

    //1
    // $.getJSON("https://api.myjson.com/bins/1ebseq", function(json) {
    //     // ตัวแปร json เป็น object อยู่แล้ว จะใช้ค่าอะไรก็เรียกมาใช้แบบ object ได้เลย เช่น ต้องการดึงค่า "thing" ที่อยู่ใน "with" ออกมาใช้
    //     var thing, i;
    //     // var myJSON = JSON.stringify(json);
    //     for (i in json) {
    //         $scope.data = json;
    //     }
    //     alert($scope.data);
    //     // แสดงค่า thing ใน <span>

    // });

    //2
    // $(document).ready(function() {
    //     $.ajax({
    //         url: 'https://api.myjson.com/bins/1ebseq',
    //         type: 'get',
    //         dataType: 'JSON',
    //         success: function(response) {
    //             // var len = response.length;
    //             var txt = "";
    //             for (var i in response) {
    //                 $scope.data = JSON.stringify(response[i]);
    //             }
    //             alert($scope.data.type);
    //         }

    //     });
    // });

    //3
    var i;
    for (i in obj) {
        $scope.data = obj;
    }
    $scope.home = function() { //url fake
        $window.location.href = "homeflight.html";
    };
});