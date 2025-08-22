import {
	type ComponentProps,
	UniformSlot,
} from "@uniformdev/canvas-next-rsc/component";

type SlotNames = "content";
type ContainerProps = ComponentProps<
	{
		title: string;
	},
	SlotNames
>;

export function Container({
	context,
	component,
	slots,
	title,
}: ContainerProps) {
	return (
		<>
			<div>Page title: {title}</div>
			<div>
				<h2>Components:</h2>
				<UniformSlot
					context={context}
					data={component}
					// this must correspond to the `public id` of the slot created earlier
					slot={slots.content}
				/>
			</div>
		</>
	);
}
