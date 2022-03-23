import React, { Component } from "react";
import withRouter from '../utils/withRouter';

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
  };

  render() {
    const { router } = this.props;

    console.log(this.props)

    return (
      <div>
        <h1>Product Details - {router.params.id} </h1>
          <button onClick={() => router.navigate('/products')}>Back</button>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default withRouter(ProductDetails);
