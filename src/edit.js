import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	__experimentalUnitControl as UnitControl,
	__experimentalNumberControl as NumberControl
} from '@wordpress/components';
import namespace from './namespace';
import setClassName from './setClassName';

export default function Edit ({ attributes, setAttributes }) {
	const { limit, space, threshold } = attributes;
	let className = setClassName(attributes);

	const styleProps = {
		"--gap": space,
		"--threshold": threshold
	}

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<UnitControl
						onChange={(value) => setAttributes({ space: value })}
						label={ __( "Block gap", namespace ) }
						isUnitSelectTabbable
						value={space}/>
				</PanelBody>
				<PanelBody>
					<UnitControl
						onChange={(value) => setAttributes({ threshold: value })}
						label={ __( "Container breakpoint", namespace ) }
						isUnitSelectTabbable
						value={threshold}/>
				</PanelBody>
				<PanelBody>
					<NumberControl
						onChange={(value) => setAttributes({ limit: value })}
						label={ __( "Max horizontal items", namespace ) }
						isDragEnabled
						isShiftStepEnabled
						shiftStep={10}
						step={1}
						value={limit}
					/>
				</PanelBody>
			</InspectorControls>
			<div className={"switcher"} style={ { ...styleProps } }>
				<InnerBlocks />
			</div>
		</>
	);
}
