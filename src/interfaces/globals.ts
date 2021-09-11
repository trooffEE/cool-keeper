// children as a functional component
interface RenderProp<TChildrenProps, TElement = any> {
  (props: TChildrenProps): React.ReactElement<TElement>;
}

