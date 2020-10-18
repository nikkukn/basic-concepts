/*
Simple polling snippet
*/

(function poll() {
    setTimeout(() => {
        $.ajax({
            url: 'https://api.example.com/endpoint',
            success: function (data) {
                // Do something with `data`
                // ...

                //Setup the next poll recursively
                poll();
            },
            dataType: 'json'
        });
    }, 10000)
})();