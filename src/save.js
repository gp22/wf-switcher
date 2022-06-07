import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import setClassName from './setClassName';

export default function save ({ attributes }) {
	const className = setClassName(attributes);
	const { limit, space, threshold } = attributes;
	const styleProps = {
		"--gap": space,
		"--threshold": threshold
	}

	return (
		<div
			className={"switcher"}
			style={ { ...styleProps } }
		>
			<InnerBlocks.Content/>
		</div>
	);
}
