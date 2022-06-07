import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save ({ attributes }) {
	const { limit, space, threshold } = attributes;
	const adjustedLimit = Number(limit) + 1;
	const styleProps = {
		'--gap': space,
		'--threshold': threshold
	};

	const css = `.switcher > :nth-last-child(n+${adjustedLimit}), .switcher > :nth-last-child(n+${adjustedLimit}) ~ * { flex-basis: 100%; }`;

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
