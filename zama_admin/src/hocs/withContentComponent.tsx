export default function withContentComponent(WrappedComponent) {
  return function WithContentComponent(props) {
    return <WrappedComponent {...props} />;
  };
}
