import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = (props) => {
    const { attributes } = props;
    const { author, location, company } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <RichText.Content tagName="p" className="author" value={author} />
            <RichText.Content tagName="p" className="location" value={location} />
            <RichText.Content tagName="p" className="company" value={company} />
        </div>
    );
};

export default Save;
