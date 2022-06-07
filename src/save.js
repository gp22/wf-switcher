import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save ({ attributes }) {
	const { limit, space, threshold } = attributes;
	const styleProps = {
		'--gap': space,
		'--threshold': threshold
	};

	const css = `.switcher > :nth-last-child(n+${limit}), .switcher > :nth-last-child(n+${limit}) ~ * { flex-basis: 100%; }`;

	return (
		<>
			<style>{css}</style>
			<div
				className={'switcher'}
				style={{ ...styleProps }}
			>
				<InnerBlocks.Content/>
			</div>
		</>
	);
}
