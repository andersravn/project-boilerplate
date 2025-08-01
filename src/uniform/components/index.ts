    import { 
      type ResolveComponentFunction, 
      type ComponentProps, 
      DefaultNotImplementedComponent 
    } from '@uniformdev/canvas-next-rsc/component';
import { Container } from '@/uniform/components/Container';
import { Hero } from '@/uniform/components/Hero';

    export const resolveComponent: ResolveComponentFunction = ({
      component
    }) => {
      let componentType: React.ComponentType<ComponentProps<any>> | null = DefaultNotImplementedComponent;

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
      }
    }
