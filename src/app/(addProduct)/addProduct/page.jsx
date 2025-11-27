"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleProductsSubmit = async (data) => {
    Swal.fire({
      title: "Agree with the post?",
      text: `You will submit!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submit!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.post("http://localhost:5000/products", data);
          console.log("Saved product:", res.data);

          Swal.fire({
            title: "Excellent",
            text: "Your Product has been Added.",
            icon: "success",
          });
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong!",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 my-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit(handleProductsSubmit)} className="space-y-4">
        
        {/* Product Image */}
        <div>
          <label className="font-medium">Product Image URL</label>
          <input
            type="text"
            {...register("productUrl", { required: true })}
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Title */}
        <div>
          <label className="font-medium">Product Title</label>
          <input
            type="text"
            {...register("productTitle", { required: true })}
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="font-medium">Short Description</label>
          <textarea
            {...register("shortDescription")}
            className="w-full border p-2 rounded-md"
            rows="2"
          />
        </div>

        {/* Long Description */}
        <div>
          <label className="font-medium">Long Description</label>
          <textarea
            {...register("longDescription")}
            className="w-full border p-2 rounded-md"
            rows="4"
          />
        </div>

        {/* Category */}
        <div>
          <label className="font-medium">Category</label>
          <select
            {...register("category")}
            className="w-full border p-2 rounded-md"
          >
            <option>মধু</option>
            <option>ঘি</option>
            <option>ছাতু এবং শস্য</option>
            <option>চাল ও গুড়</option>
            <option>স্ন্যাকস ও ছোট খাদ্য</option>
          </select>
        </div>

        {/* Price */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Price (৳)</label>
            <input
              type="number"
              {...register("price")}
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="font-medium">Discount Price</label>
            <input
              type="number"
              {...register("discountPrice")}
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        {/* Stock & Weight */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Available Stock</label>
            <input
              type="number"
              {...register("stock")}
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="font-medium">Weight / Size</label>
            <input
              type="text"
              {...register("weight")}
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="font-medium">Tags</label>
          <input
            type="text"
            {...register("tags")}
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Status */}
        <div>
          <label className="font-medium">Product Status</label>
          <select
            {...register("status")}
            className="w-full border p-2 rounded-md"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
