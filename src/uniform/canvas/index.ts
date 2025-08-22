import {
    type ComponentProps,
    DefaultNotImplementedComponent,
    type ResolveComponentFunction,
} from "@uniformdev/canvas-next-rsc/component";
import { Container } from "@/uniform/canvas/Container";
import { Hero } from "@/uniform/canvas/Hero";

export const resolveComponent: ResolveComponentFunction = ({ component }) => {
    // biome-ignore lint/suspicious/noExplicitAny: It really is any here
    let componentType: React.ComponentType<ComponentProps<any>> | null =
        DefaultNotImplementedComponent;

    // add page component resolution
    if (component.type === "page") {
        componentType = Container;
    }
    // add hero component resolution
    if (component.type === "hero") {
        componentType = Hero;
    }

    return {
        component: componentType,
    };
};
