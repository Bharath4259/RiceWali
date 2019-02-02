var data= []
var product_category = window.location.search.substr(1)
$( document ).ready(function() {
    console.log( "-- ready --> ", render_data );
    data = render_data[0][product_category]
    console.log("--> loc: ", product_category)
    console.log("-- data --> ", data)
    render(data);

    $(".dropdown").hover(
        function () {
            $('.dropdown-menu', this).stop(true, true).slideDown("fast");
            $(this).toggleClass('open');
        },
        function () {
            $('.dropdown-menu', this).stop(true, true).slideUp("fast");
            $(this).toggleClass('open');
        }
    );
    // here starts scrolling icon
	$().UItoTop({ easingType: 'easeOutQuart' });
});

$(document).ready(function () {
    d3.csv("static/assets/products_data.csv", function(data){
        console.log("d3data > ", data);
        // if(data.length == 0)
        $.map(data, function(item){
            if(item.prod_category === product_category)
                render_product(item)
        })
    });
});

function render(product_data){
    $("#p_title").text(product_data.title)
    $("#p_img").attr("src", product_data.image)
    $("#p_desc").text(product_data.desc)
    $("#p_price").html("Price on our site &nbsp; ₹" + product_data.price )
    $("#p_mprice").html("Avg price in Market &nbsp;&nbsp;&nbsp; ₹" + product_data.mprice )
    $("#p_abt_ttle").text("More About " + product_data.title)
    $.each(product_data.specs, function(i, v){
        $("#p_specs").append('<li><i class="fa fa-check" aria-hidden="true"></i><a>'+ v +'</a></li>')
    })
}

