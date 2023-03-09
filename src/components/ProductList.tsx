import React from "react";
import withUrl from "../hoc/withUrl";

type Product = {
  id: number;
  name: string;
  description: string;
  unitPrice: number;
  quantityPerUnit: string;
  category: string;
  image: string;
};

type ProductListProps = {
  products?: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  const productsJxs = products?.map((p) => (
    <tr key={p.id}>
      <td>{p.name}</td>
      <td>{p.description}</td>
      <td>{p.category}</td>
      <td>{p.unitPrice}</td>
      <td>{p.quantityPerUnit}</td>
    </tr>
  ));
  return (
    <>
      <h3>Product list here</h3>
      <table className="table table-bordered">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Unit price</th>
          <th>Quantity</th>
        </tr>
        <tbody>{productsJxs}</tbody>
      </table>
    </>
  );
};

export default withUrl({
  url: "http://localhost:8800/products",
  prop: "products",
})(ProductList);
