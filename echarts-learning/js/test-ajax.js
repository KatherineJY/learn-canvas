(function(){
    let script = new document.createElement("script");
    script.type="text/javascript";  
    script.src="https://code.jquery.com/jquery-3.3.1.min.js";  
    document.getElementsByTagName('head')[0].appendChild(script);  

    //search
    (function () {
        $.ajax({
            method: "GET",
            url: "api/user/top10",
            contentType: "application/json",
            dataType: "json",
            success: function (result) {
                console.log(result);
            }
        });
    
    })();

    //add
    (function(){
        let sendData = {
            :,
            :,
        }
        $.ajax({
            method: "GET",
            url: "api/user/top10",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(sendData),
            success: function (result) {
                console.log(result);
            }
        });
    })
})();