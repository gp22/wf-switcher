import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup, PanelBody, ToolbarGroup
} from '@wordpress/components';
import namespace from './namespace';
import setClassName from './setClassName';

export default function Edit ({ attributes, setAttributes }) {
	const { size } = attributes;
	let className = setClassName(attributes);

	return (
		<div
			{...useBlockProps({ className })}
		>
			<BlockControls>
				<ToolbarGroup>
					<RadioGroup
						id="size-radiogroup"
						label={__('Gap size', namespace)}
						checked={size}
						onChange={(value) => setAttributes({ size: value })}
					>
						<Radio value="small">Small</Radio>
						<Radio value="default">Normal</Radio>
						<Radio value="large">Large</Radio>
					</RadioGroup>
				</ToolbarGroup>
			</BlockControls>

			<InspectorControls>
				<PanelBody>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks/>
		</div>
	);
}
