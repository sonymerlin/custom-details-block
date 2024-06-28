import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

const Edit = (props) => {
    const { attributes, setAttributes } = props;
    const { author, location, company } = attributes;

    const onChangeAuthor = (newAuthor) => {
        setAttributes({ author: newAuthor });
    };

    const onChangeLocation = (newLocation) => {
        setAttributes({ location: newLocation });
    };

    const onChangeCompany = (newCompany) => {
        setAttributes({ company: newCompany });
    };

    return (
        <div {...useBlockProps()}>
            <RichText
                tagName="p"
                className="author"
                value={author}
                onChange={onChangeAuthor}
                placeholder={__('Author', 'custom-details-block')}
            />
            <RichText
                tagName="p"
                className="location"
                value={location}
                onChange={onChangeLocation}
                placeholder={__('Location', 'custom-details-block')}
            />
            <RichText
                tagName="p"
                className="company"
                value={company}
                onChange={onChangeCompany}
                placeholder={__('Company', 'custom-details-block')}
            />
        </div>
    );
};

export default Edit;
