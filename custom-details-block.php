<?php
/**
 * Plugin Name: Custom Details Block
 * Description: A Gutenberg block to display custom details like Author, Location, and Company.
 * Version: 1.1.0
 * Author: Sony Merlin
 * Text Domain: custom-details-block
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function custom_details_block_register_block() {
    // Register block editor script
    wp_register_script(
        'custom-details-block-editor',
        plugins_url( 'block/build/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'block/build/index.js' )
    );

    // Register block editor styles
    wp_register_style(
        'custom-details-block-editor-style',
        plugins_url( 'block/build/index.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'block/build/index.css' )
    );

    // Register block front-end styles
    wp_register_style(
        'custom-details-block-style',
        plugins_url( 'block/build/style-index.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'block/build/style-index.css' )
    );

    // Register the block
    register_block_type( 'custom-details-block/main', array(
        'editor_script' => 'custom-details-block-editor',
        'editor_style' => 'custom-details-block-editor-style',
        'style' => 'custom-details-block-style',
    ) );
}
add_action( 'init', 'custom_details_block_register_block' );
