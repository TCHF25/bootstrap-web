card_section = document.getElementById('card_section')

window.onload=(loaded) => {
    $(document).ready(function() {

        $.getJSON("http://localhost/bootstrap-web/backend/news.php", function(data) {
        console.log(data);

        $.each(data, function(i, field){
            $(card_section).append(field.new);
        });

          });



    });
};