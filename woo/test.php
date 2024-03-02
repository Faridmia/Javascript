<?php
// Woocommerce Shop Page

// remove default woo hooks
add_action('init', 'themename_remove_hooks_woocommerce');

function themename_remove_hooks_woocommerce()
{
    remove_action('woocommerce_before_main_content', 'woocommerce_breadcrumb', 20);
    remove_action('woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open', 10);
    remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5);
    remove_action('woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10);
    remove_action('woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10);
    remove_action('woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_add_to_cart', 10);
    remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 10);
    remove_action('woocommerce_after_shop_loop', 'woocommerce_pagination', 10);
    remove_action('woocommerce_sidebar', 'woocommerce_get_sidebar');
    remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart');
    remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10);
    remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5);
}

// remove default woo hooks

add_filter('woocommerce_template_loop_price', '__return_false');
add_filter('woocommerce_show_page_title', '__return_false');

add_filter('woocommerce_template_loop_product_title', '__return_false');
add_action('woocommerce_before_main_content', 'themename_before_main_content', 10);
function themename_before_main_content()
{
    if (!is_home() && !is_front_page()) {
?>

        <!-- Page Banner Section -->
        <section class="page-title">
            <div class="auto-container">
                <div class="content-box">
                    <div class="title-box">
                        <h1><?php woocommerce_page_title(); ?></h1>
                    </div>
                    <div class="bread-crumb clearfix"><?php woocommerce_breadcrumb(); ?></div>
                </div>
            </div>
        </section>

        <!--End Banner Section -->
    <?php
    }
}

add_filter('woocommerce_sale_flash', 'themename_custom_hide_sales_flash');
function themename_custom_hide_sales_flash()
{
    return false;
}



add_action('woocommerce_before_shop_loop', 'themename_before_shop_loop');
function themename_before_shop_loop()
{
    ?>
    <section class="shop-page-section sec-pad">
        <div class="auto-container">

            <div class="row clearfix">
                <?php if (is_active_sidebar('woo_shop_sideber')) { ?>
                    <div class="col-lg-3 col-md-4 col-sm-12 sidebar-side">
                        <div class="sidebar shop-sidebar">
                            <?php
                            dynamic_sidebar('woo_shop_sideber');
                            ?>
                        </div>
                    </div>
                <?php } ?>
                <?php if (is_active_sidebar('woo_shop_sideber')) { ?>
                    <div class="col-lg-9 col-md-8 col-sm-12 content-side">
                        <div class="our-shop">
                        <?php } else { ?>
                            <div class="col-lg-12">
                                <div class="our-shop">
                                <?php } ?>


                            <?php
                        }

                        add_action('woocommerce_after_shop_loop', 'themename_after_shop_loop');
                        function themename_after_shop_loop()
                        {
                            ?>

                                <?php
                                $pagination_blog = get_the_posts_pagination();
                                if ($pagination_blog) :
                                ?>
                                    <div class="pagination-wrapper centred">
                                        <div class="pagination clearfix">
                                            <?php
                                            the_posts_pagination(
                                                array(
                                                    'type'      => 'list',
                                                    'mid_size'  => 4,
                                                    'prev_text' => '<i class="fa fa-angle-left"></i>',
                                                    'next_text' => '<i class="fa fa-angle-right"></i>',
                                                )
                                            );
                                            ?>
                                        </div>
                                    </div>
                                <?php endif; ?>

                                </div>
                            </div>
                        </div>
                    </div>
    </section>
<?php
                        }

                        get_template_part('woo-other');

                        add_action('woocommerce_before_shop_loop_item', 'themename_before_shop_loop_item');

                        function themename_before_shop_loop_item()
                        {
?>

    <div class="inner-box">

    <?php
                        }
                        add_action('woocommerce_after_shop_loop_item', 'themename_after_shop_loop_item', 1);
                        function themename_after_shop_loop_item()
                        {
    ?>
    </div>

<?php
                        }



                        add_action('woocommerce_before_shop_loop_item_title', 'themename_before_shop_loop_item_title_new');

                        function themename_before_shop_loop_item_title_new()
                        {
                            global $product;

                            if (method_exists($product, 'get_id')) {
                                $product_id = $product->get_id();
                            } else {
                                $product_id = $product->id;
                            }

                            $link = get_permalink($product_id);
?>
    <figure class="image-box">
        <?php
                            global $product;
                            $attachment_ids[0] = get_post_thumbnail_id($product->get_id());
                            $image             = wp_get_attachment_image($attachment_ids[0], 'themename-product-grid');

        ?>
        <?php
                            if (wp_http_validate_url($image)) {
        ?>
            <img src="<?php echo esc_url($image); ?>" alt="<?php esc_html__('Alt', 'themename'); ?>">
        <?php
                            } else {
                                echo wp_kses($image, 'author_avatar');
                            }
        ?>
        <ul class="list clearfix">
            <li><a href="<?php echo esc_url($link); ?>"><i class="flaticon-cart"></i></a></li>
            <li><a href="<?php echo esc_url($link); ?>"><?php esc_html_e('add to cart', 'themename'); ?></a></li>
        </ul>

    </figure>

<?php
                        }




                        add_action('woocommerce_shop_loop_item_title', 'themename_shop_loop_item_title', 4);

                        function themename_shop_loop_item_title()
                        {
                            global $product;
                            $link  = apply_filters('woocommerce_loop_product_link', get_the_permalink(), $product);
                            $title = apply_filters('woocommerce_loop_product_title', get_the_title(), $product);
?>
    <div class="lower-content">
        <div class="inner">
            <h6><a href="<?php echo esc_url($link); ?>"><?php echo esc_html($title); ?></a></h6>
            <?php if ($average = $product->get_average_rating()) : ?>
                <div class="rating clearfix">
                    <?php echo wc_get_rating_html($product->get_average_rating()); ?>
                </div>
            <?php endif; ?>
            <span class="price"><?php echo wp_kses($product->get_price_html(), 'code_context'); ?></span>
        </div>
    </div>
<?php
                        }









                        // Woocommerce Single Page


                        remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_title', 5);
                        remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10);
                        remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_price', 10);
                        remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20);
                        remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30);
                        remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40);
                        remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_sharing', 50);
                        remove_action('woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10);
                        remove_action('woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20);


                        function themename_quantity_input_max_callback($max, $product)
                        {
                            $max = 1000;
                            return $max;
                        }


                        add_filter('woocommerce_quantity_input_max', 'themename_quantity_input_max_callback', 10, 2);

                        add_action('woocommerce_before_single_product', 'themename_woocommerce_before_single_product', 20);

                        function themename_woocommerce_before_single_product()
                        {
?>
    <section class="shop-details sec-pad">
        <div class="auto-container">
        <?php
                        }

                        add_action('woocommerce_before_single_product_summary', 'themename_before_single_product_summery', 10);

                        function themename_before_single_product_summery()
                        {
        ?>

            <div class="product-details-content">
                <div class="row align-items-center clearfix">

                <?php
                        }


                        add_action('woocommerce_after_single_product_summary', 'themename_after_single_product_summery', 10);

                        function themename_after_single_product_summery()
                        {
                ?>

                </div>
            </div>

            <div class="product-discription">
                <div class="tabs-box">

                    <?php
                            woocommerce_output_product_data_tabs();
                    ?>
                </div>
            </div>

        <?php
                        }



                        add_action('woocommerce_single_product_summary', 'themename_template_single_title', 5);

                        function themename_template_single_title()
                        {
                            global $product;
                            $id = $product->get_id();
        ?>
            <h2><?php the_title(); ?></h2>
            <div class="rating-box clearfix">
                <?php woocommerce_template_single_rating(); ?>
            </div>
            <div class="item-price">
                <h3><?php echo wp_kses($product->get_price_html(), 'code_context'); ?></h3>
            </div>

            <div class="text"><?php the_excerpt(); ?></div>

            <?php
                            woocommerce_template_single_meta();
            ?>

            <?php woocommerce_template_single_add_to_cart(); ?>
        </div>

    <?php

                        }




                        add_action('woocommerce_after_single_product_summary', 'themename_related_after_single_product_summary', 10);

                        function themename_related_after_single_product_summary()
                        {
    ?>
        <?php
                            global $product;
                            $related = wc_get_related_products($product->get_id());
        ?>
        <?php
                            if (count($related) > 0) {
        ?>
            <div class="related-product">
                <div class="sec-title style-two centred">
                    <h4><?php esc_html_e('Related Products', 'themename'); ?></h4>
                </div>
                <div class="row clearfix">
                    <?php themename_output_related_products(); ?>
                </div>
            </div>
        <?php } ?>

    <?php
                        }

                        add_filter('woocommerce_output_related_products', 'themename_output_related_products', 10, 1);

                        function themename_output_related_products()
                        {
                            global $product;

                            $related_products = array_filter(array_map('wc_get_product', wc_get_related_products($product->get_id(), 4, $product->get_upsell_ids())), 'wc_products_array_filter_visible');
    ?>
        <?php foreach ($related_products as $related_product) : ?>
            <div class="col-lg-3 col-md-6 col-sm-12 product-block">
                <?php
                                $post_object = get_post($related_product->get_id());

                                setup_postdata($GLOBALS['post'] = &$post_object);

                                wc_get_template_part('content', 'relproduct');
                ?>
            </div>
        <?php endforeach; ?>

    <?php
                        }





                        add_action('woocommerce_after_single_product', 'themename_woocommerce_after_single_product', 20);

                        function themename_woocommerce_after_single_product()
                        {
    ?>
        </div>
    </section>
    <?php
                        }



                        if (!function_exists('themename_product_comments')) {

                            function themename_product_comments($comment, $args, $depth)
                            {
                                extract($args, EXTR_SKIP);
                                $args['reply_text'] = esc_html__('Reply', 'themename');
                                $class              = '';
                                if ($depth > 1) {
                                    $class = '';
                                }
                                if ($depth == 1) {
                                    $child_html_el     = '<ul><li>';
                                    $child_html_end_el = '</li></ul>';
                                }

                                if ($depth >= 2) {
                                    $child_html_el     = '<li>';
                                    $child_html_end_el = '</li>';
                                }

                                global $comment;
                                $rating = intval(get_comment_meta($comment->comment_ID, 'rating', true));

    ?>

        <div class="comment" id="comment-<?php comment_ID(); ?>">

            <figure class="customer-thumb">
                <?php print get_avatar($comment, 115, null, null, array('class' => array())); ?>
            </figure>
            <div class="info clearfix">
                <h4><?php echo get_comment_author_link(); ?>,</h4>
                <span><?php echo get_comment_date(); ?></span>
            </div>
            <div class="rating clearfix">
                <?php
                                if ($rating && wc_review_ratings_enabled()) {
                                    echo wc_get_rating_html($rating); // WPCS: XSS ok.
                                }
                ?>
            </div>
            <p><?php comment_text(); ?></p>

        </div>

<?php
                            }
                        }
