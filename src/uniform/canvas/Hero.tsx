import {
	type ComponentProps,
	UniformText,
} from "@uniformdev/canvas-next-rsc/component";

type HeroProps = ComponentProps<{
	title: string;
	description: string;
}>;

export function Hero({ context, component }: HeroProps) {
	return (
		<>
			<UniformText
				context={context}
				component={component}
				parameterId="title"
				as="h1"
			/>

			<UniformText
				context={context}
				component={component}
				parameterId="description"
				as="h1"
			/>
		</>
	);
}
