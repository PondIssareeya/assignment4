var isAvailable = false;

var IPromisetoCallu = new Promise(function(resolve, reject) { //promise เป็น obj ถ้าถูก new(สร้าง) จะ run ให้ทันที, 
    if (isAvailable) { //ถูกเรียกเมื่อเงื่อนไขบางอย่างเป็นจริง
        var successResult = 'I will call at 0894760105'; //ผลลัพธ์เป็นอะไรก็ได้ ex.subject, array
        resolve(successResult);
    } else { //ถ้าเงื่อนไขจริง promise ถูก reject
        var error = 'I am pretty busy for my homework!';
        reject(error);
    }
});

//1
IPromisetoCallu.then(function(success) {
    console.log("Promise Resolves:" + success);
});

//2
IPromisetoCallu.then(function(success) { //รับ parameter 1 ตัวเสมอ และจะส่งแต่ที่สำเร็จ ไม่ส่ง reject ก็ได้
        console.log("Promise Resolves:" + success);
    },
    function(error) {
        console.log("Promise Rejected as:" + error);
    });

//3
IPromisetoCallu.catch(function(error) {
    console.log("Promise Reject (catch):" + error);
});

var somePromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Hey, It work!");
        //reject("Unable to fulfill promise")
    }, 2500);
});

somePromise.then(function(msg) {
    console.log("After 2.5 sec: " + msg);
});

var asyncAdd = function(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Argumets must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(2, 3).then(function(result) {
    asyncAdd(result, 5).then(function(result) {
        console.log('Final Result:', result);
    });
}, function(err) {
    console.log('Error:', err);
});