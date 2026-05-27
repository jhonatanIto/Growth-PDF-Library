import { useNavigate } from "react-router-dom";

const Products = () => {
  const nav = useNavigate();

  return (
    <div className="flex justify-between">
      <div className="text-2xl">Products</div>
      <div>
        <button
          className="bg-gray-700 text-white p-1 px-4 cursor-pointer rounded-2xl"
          onClick={() => {
            nav("/admin/products/new");
          }}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Products;
