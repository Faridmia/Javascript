<?php
/**
 * Single Product tabs
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/tabs/tabs.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.8.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Filter tabs and allow third parties to add their own.
 *
 * Each tab is an array containing title, callback and priority.
 *
 * @see woocommerce_default_product_tabs()
 */
$product_tabs = apply_filters( 'woocommerce_product_tabs', array() );

if ( ! empty( $product_tabs ) ) : ?>

	<div class="woocommerce-tabs wc-tabs-wrapper product-tab">
		<div class=" tab-btn-box centred">
		<ul class="tabs wc-tabs tab-btns tab-buttons clearfix" role="tablist">
			<?php
			$i = 0;
			foreach ( $product_tabs as $key => $product_tab ) : 
			$i++;
			?>
				<li class="tab-btn <?php echo esc_attr( $key ); ?>_tab <?php if($i == 1){ echo 'active-btn';}?>" data-tab="#tab-<?php echo esc_attr($i);?>" >
					
						<?php echo wp_kses_post( apply_filters( 'woocommerce_product_' . $key . '_tab_title', $product_tab['title'], $key ) ); ?>
					
				</li>
			<?php endforeach; ?>
		</ul>
		</div>
		<div class="tabs-content">
		<?php 
		$i = 0;
		foreach ( $product_tabs as $key => $product_tab ) : 
		$i++;
		?>
			
				<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--<?php echo esc_attr( $key ); ?> panel entry-content tab clearfix <?php if($i == 1){ echo 'active-tab';}?>"  id="tab-<?php echo esc_attr($i);?>">
					<div class="text">
						<?php
						if ( isset( $product_tab['callback'] ) ) {
							call_user_func( $product_tab['callback'], $key, $product_tab );
						}
						?>
					</div>	
				</div>
				
		<?php endforeach; ?>
		</div>
		<?php do_action( 'woocommerce_product_after_tabs' ); ?>
	</div>

<?php endif; ?>
