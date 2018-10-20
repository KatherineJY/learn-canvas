(function(){
    let script = new document.createTextNode("script");
    script.type="text/javascript";  
    script.src="https://code.jquery.com/jquery-3.3.1.min.js";  
    document.getElementsByTagName('head')[0].appendChild(script);  

    //search
    (function () {
        $.ajax({
            method: "GET",
            url: "http://10.220.139.108:7777/test_post/aa",
            //contentType: "application/json",
            dataType: "jsonp",
            jsonp:"callback",
            jsonpCallback:"successCallback",
            success: function (result) {
                console.log(result);
            }
        });
    
    })();

    //add
    (function(){
        let sendData = {
            name: "111",
            gender: "222",
        }
        $.ajax({
            method: "POST",
            url: "http://10.220.138.138:5000/json",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(sendData),
            success: function (result) {
                console.log(result);
            }
        });
    })();
})();