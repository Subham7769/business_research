import { useSelector } from 'react-redux';

const WithProductCheck = (WrappedComponent, OverlayComponent) => {
  return function WithProductCheck(props) {
    const products  = useSelector(state=>state.ProductSlice.products);

    // Check if products array is empty
    if (products.length > 0) {
      // Render original component if products array is not empty
      return <WrappedComponent {...props} />;
    } else {
      // Render overlay component if products array is empty
      return <OverlayComponent />;
    }
  };
};

export default WithProductCheck;
