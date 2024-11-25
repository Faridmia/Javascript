/**
 * Function to perform setup after importing data.
 * This function assigns the front page and the posts page (blog page) based on the imported demo.
 * @param array $selected_import The selected import data.
 * @link https://www.codeixer.com/addressing-the-issue-of-one-click-demo-import-not-add-elementor-global-options/
 */
function cdx_after_import_setup( $selected_import ) {
	
	// Import Elementor kit data.
	$cdx_kit_zip = get_parent_theme_file_path() . '/demo-content/elementor-kit.zip';
	$import_export_module        = \Elementor\Plugin::$instance->app->get_component( 'import-export' );
	$import_settings['referrer'] = 'remote';
	$import_export_module->import_kit( $cdx_kit_zip, $import_settings );

}
add_action( 'ocdi/after_import', 'cdx_after_import_setup' );