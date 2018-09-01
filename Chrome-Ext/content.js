


var recos =  [
      {
        garment_type_name:"pants",
       purchase_url:'https://hbx.com/brands/stussy/stock-sp17-cap',
       price:265,
        product_name:'Product Name',
        brand:'Brand',
       product_handle:'sibbertt',
       image_url:'https://i1.wp.com/s3.store.hypebeast.com/media/image/40/39/cap_3_1-71caebf52e837bfec7e430a30c26.jpg?strip=all'
      },
      {
       garment_type_name:"shirt",
       purchase_url:'https://hbx.com/brands/publish/landyn-jacket',
       price:30,
        product_name:'Product Name',
        brand:'Brand',
       product_handle:'the-11-11-11-cap-1',
       image_url:'https://i1.wp.com/s3.store.hypebeast.com/media/image/d9/8b/Jacket_2_1-1c58246beb33cae501da62c42de7.jpg?fit=640,832&amp;strip=all'
      },
      {
       garment_type_name:"hat",
       purchase_url:'https://hbx.com/brands/apc/low-standard-chino-pants',
       price:475,
        product_name:'Product Name',
        brand:'Brand',
       product_handle:'gabardine-m10',
       image_url:'https://i1.wp.com/s3.store.hypebeast.com/media/image/78/ff/PANTS_4_1-824b845e77dbbc8564cdd42d532f.jpg?fit=640,832&amp;strip=all'
      }
    
    
    
    ]


    var productRecs = '<div class="fadrecs-product-outer"><div class="fadrecs-product-stylewith">'+
        'Style With</div>'

    for (var i = 0; i<recos.length;i++){
        productRecs += '<a href="'+recos[i].purchase_url+'"><div class="fadrecs-product-imgdiv"><img src="'+recos[i].image_url+'"></div></a>'
    }

    productRecs += '</div>'    

    $("#social-shares").after(productRecs)





var page = window.location.href
if (page.indexOf("cart") > -1) {

    var placeToAddTd = document.querySelectorAll(".product")[1]
    document.querySelectorAll(".product")[0].style.width = "30%"
    var placeToAddTh = $(".product")

    $(".product").each(function(index){
        var addTo = $(this)
        if (index == 0) {
            var cartRecsTh = '<th class="product hidden-sm fadrecs-cart-style-th">Style With</th>'
            addTo.after(cartRecsTh)
        } else {
            var cartRecTd = '<td class="stylewith hidden-xs hidden-sm"><div class="fadrecs-cart-md">'
            for (var i = 0; i<recos.length;i++){
            cartRecTd += '<a href="'+recos[i].purchase_url+'"><div class="fadrecs-cart-imgdiv"><img src="'+recos[i].image_url+'"></div></a>'
            }
            cartRecTd +=  '</div></td>'
            addTo.after(cartRecTd)

            var cartRecTdSm = '<td class="hidden-md hidden-lg hidden-xl fadrecs-cart-sm-td">'+
            '<div class="fadrecs-cart-sm-stylewith">Style With</div>'
            for (var e = 0; e<recos.length;e++){
            cartRecTdSm += '<a href="'+recos[i].purchase_url+'"><div class="fadrecs-cart-sm-imgdiv"><img src="'+recos[e].image_url+'"></div></a>'
            }
            cartRecTdSm +=  '</td>'
            addTo.after(cartRecTdSm)

        }
    })
    
}





