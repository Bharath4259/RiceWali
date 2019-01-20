function render_product(data){
    $('#products_pane').append(
        `
        <div class="col-md-3 w3ls_w3l_banner_left">
            <div class="hover14 column">
                <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    <div class="agile_top_brand_left_grid1">
                        <figure>
                            <div class="snipcart-item block">
                                <div class="snipcart-thumb">
                                    <a href="single.html"><img src="static/assets/images/products/${data.prod_img}" alt=" " class="img-responsive" /></a>
                                    <p>${data.prod_name} (100 gm)</p>
                                    <h4>₹${data.prod_price} <span>₹ ${data.offer_price}</span></h4>
                                </div>
                                <div class="snipcart-details">
                                    <form action="#" method="post">
                                        <fieldset>
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="add" value="1" />
                                            <input type="hidden" name="business" value=" " />
                                            <input type="hidden" name="item_name" value="knorr instant soup" />
                                            <input type="hidden" name="amount" value="3.00" />
                                            <input type="hidden" name="discount_amount" value="1.00" />
                                            <input type="hidden" name="currency_code" value="USD" />
                                            <input type="hidden" name="return" value=" " />
                                            <input type="hidden" name="cancel_return" value=" " />
                                            <input type="submit" name="submit" value="Add to cart" class="button" />
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>`
    )
}