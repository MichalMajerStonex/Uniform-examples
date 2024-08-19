import { resolveComponent } from '@/lib/uniform/componentResolver'
import { UniformPlayground, UniformPlaygroundProps } from '@uniformdev/canvas-next-rsc';


export default function PlaygroundPage(props: { searchParams: UniformPlaygroundProps['searchParams'] }) {
  return <UniformPlayground {...props} resolveComponent={resolveComponent} />;
}
