import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	__experimentalUnitControl as UnitControl,
	__experimentalNumberControl as NumberControl
} from '@wordpress/components';
import namespace from './namespace';

export default function Edit ({ attributes, setAttributes }) {
	const { limit, space, threshold } = attributes;
	const styleProps = {
		'--gap': space,
		'--threshold': threshold
	};

	const css = `.switcher > :nth-last-child(n+${limit}), .switcher > :nth-last-child(n+${limit}) ~ * { flex-basis: 100%; }`;

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<UnitControl
						onChange={(value) => setAttributes({ space: value })}
						label={__('Block gap', namespace)}
						isUnitSelectTabbable
						value={space}/>
				</PanelBody>
				<PanelBody>
					<UnitControl
						onChange={(value) => setAttributes({ threshold: value })}
						label={__('Container breakpoint', namespace)}
						isUnitSelectTabbable
						value={threshold}/>
				</PanelBody>
				<PanelBody>
					<NumberControl
						onChange={(value) => setAttributes({ limit: value })}
						label={__('Max horizontal items', namespace)}
						isDragEnabled
						isShiftStepEnabled
						shiftStep={10}
						step={1}
						value={limit}
					/>
				</PanelBody>
			</InspectorControls>
			<style>{css}</style>
			<div className={'switcher'} style={{ ...styleProps }}>
				<InnerBlocks/>
			</div>
		</>
	);
}
