function render_footer_template() {
    $("#footer_pane").append(
    `
	<!-- newsletter -->
	<div class="newsletter">
		<div class="container">
			<div class="w3agile_newsletter_left">
				<h3> <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp; Request a call back</h3>
			</div>
			<div class="w3agile_newsletter_right">
				<form action="#" method="post">
					<input type="email" name="Email" value="Phone number" onfocus="this.value = '';" required>
					<input type="submit" value="submit">
				</form>
			</div>
			<div class="clearfix"> </div>
		</div>
    </div>

	<!-- footer -->
	<div class="footer">
		<div class="container">
			<div class="col-md-3 w3_footer_grid">
				<h3>information</h3>
				<ul class="w3_footer_grid_list">
					<li><a href="events.html">Best Deals</a></li>
					<li><a href="about.html">About Us</a></li>
					<li><a href="services.html">Services</a></li>
				</ul>
			</div>
			<div class="col-md-3 w3_footer_grid">
				<h3>policy info</h3>
				<ul class="w3_footer_grid_list">
					<li><a href="faqs.html">FAQ</a></li>
					<li><a href="privacy.html">privacy policy</a></li>
					<li><a href="terms-and-conditions.html">terms of use</a></li>
				</ul>
			</div>
			<div class="col-md-3 w3_footer_grid">
				<h3>what we are into</h3>
				<ul class="w3_footer_grid_list">
					<li><a>Rice for hostels</a></li>
					<li><a>Bulk orders</a></li>
					<li><a>Best quality rice for hotels</a></li>
				</ul>
			</div>
			<div class="col-md-3 w3_footer_grid">
				<h3>connect with us</h3>
				<ul class="w3_footer_grid_list">
					<li><a href="#" class="facebook"><i class="fa fa-facebook" aria-hidden="true"></i> ricewali | Facebook.com</a></li>
					<li><a href="#" class="twitter"><i class="fa fa-twitter" aria-hidden="true"></i> ricewali | Twitter</a></li>
					<li><a href="#" class="google"><i class="fa fa-google-plus" aria-hidden="true"></i> ricewali | Google+</a></li>
					<li><a href="#" class="instagram"><i class="fa fa-instagram" aria-hidden="true"></i> ricewali | instagram</a></li>
				</ul>
			</div>
			<div class="clearfix"> </div>
			<div class="agile_footer_grids">
				<div class="col-md-3 w3_footer_grid agile_footer_grids_w3_footer">
					<div class="w3_footer_grid_bottom">
						<h4>100% secure payments</h4>
						<ul class="agileits_social_icons">
							<li><a class="facebook"><i class="fa fa-paypal" aria-hidden="true"></i></a></li>
							<li><a class="twitter"><i class="fa fa-cc-visa" aria-hidden="true"></i></a></li>
							<li><a class="google"><i class="fa fa-google-wallet" aria-hidden="true"></i></a></li>
							<li><a class="instagram"><i class="fa fa-cc-mastercard" aria-hidden="true"></i></a></li>
							<li><a class="dribbble"><i class="fa fa-credit-card" aria-hidden="true"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>`
    )
}