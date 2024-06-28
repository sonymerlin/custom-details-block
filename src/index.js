import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import edit from './edit';
import save from './save';
import './style.scss';

registerBlockType('custom-details-block/main', {
    title: 'Custom Details',
    icon: 'admin-users',
    category: 'widgets',
    attributes: {
        author: {
            type: 'string',
            source: 'text',
            selector: '.author',
        },
        location: {
            type: 'string',
            source: 'text',
            selector: '.location',
        },
        company: {
            type: 'string',
            source: 'text',
            selector: '.company',
        },
    },
    edit,
    save,
});
