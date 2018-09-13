var data= []
$( document ).ready(function() {
    console.log( "-- ready --> ", render_data );
    data = render_data[0][window.location.search.substr(1)]
    console.log("--> loc: ", window.location.search.substr(1))
    console.log("-- data --> ", data)
    render(data);
});
function render(product_data){
    $("#p_title").text(product_data.title)
    $("#p_img").attr("src", product_data.image)
    $("#p_desc").text(product_data.desc)
    $("#p_price").html("₹" + product_data.price + " <span> ₹" + product_data.cprice + " </span>")
    $("#p_abt_ttle").text("More About " + product_data.title)
    $.each(product_data.specs, function(i, v){
        $("#p_specs").append('<li><i class="fa fa-check" aria-hidden="true"></i><a>'+ v +'</a></li>')
    })
}


/*
     "basmati": {
        "title": "basmati",
        "image": "images/76.png",
        "desc": "Basmati is a variety of long, slender-grained aromatic rice which is traditionally from the Indian subcontinent. These long and slender grains are known for their distinct aroma and are native to the Indian subcontinent. It is commonly used for making royal biryanis but there's a lot more that you can do with Basmati rice. If you haven't experimented with it yet, here are our 10 best Basmati rice recipes to try.",
        "price": "1500",
        "cprice": "1800",
        "specs": ["SUITABLE FOR BIRYANI",
                    "HIGH CALORIFIC VALUE",
                    "CARBOHYDRATES AND PROTIENS",
                    "LOWER IN FAT AND GLUTEN",
                    "RICH SOURCE OF VITAMINS",
                    "IRON IS ANOTHER IMPORTANT NUTRIENT THAT BASMATI RICE ADDS TO ONE’S DIET"
                ]
    }
*/