"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleProductsSubmit = async (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are going to add a new product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submit",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.post(
            "https://khalids-dreams-server.vercel.app/products",
            data
          );

          Swal.fire({
            title: "Success!",
            text: "Product added successfully.",
            icon: "success",
          });

          reset();
        } catch (error) {
          console.error(error);

          Swal.fire({
            title: "Error!",
            text: "Something went wrong.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 my-12 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Add New Product
      </h2>

      <form
        onSubmit={handleSubmit(handleProductsSubmit)}
        className="space-y-5"
      >
        {/* Product Image */}
        <div>
          <label className="font-semibold text-gray-700">Product Image URL</label>
          <input
            type="text"
            {...register("productUrl", { required: "Image URL is required" })}
            className="w-full border p-3 rounded-md focus:ring focus:ring-green-300"
            placeholder="https://example.com/image.jpg"
          />
          {errors.productUrl && (
            <p className="text-red-600 text-sm">{errors.productUrl.message}</p>
          )}
        </div>

        {/* Title */}
        <div>
          <label className="font-semibold text-gray-700">Product Title</label>
          <input
            type="text"
            {...register("productTitle", { required: "Title is required" })}
            className="w-full border p-3 rounded-md focus:ring focus:ring-green-300"
            placeholder="Product Name"
          />
          {errors.productTitle && (
            <p className="text-red-600 text-sm">{errors.productTitle.message}</p>
          )}
        </div>

        {/* Short Description */}
        <div>
          <label className="font-semibold text-gray-700">Short Description</label>
          <textarea
            {...register("shortDescription")}
            className="w-full border p-3 rounded-md"
            rows="2"
            placeholder="Short product details..."
          />
        </div>

        {/* Long Description */}
        <div>
          <label className="font-semibold text-gray-700">Long Description</label>
          <textarea
            {...register("longDescription")}
            className="w-full border p-3 rounded-md"
            rows="4"
            placeholder="Detailed product information..."
          />
        </div>

        {/* Email & Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="font-semibold text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full border p-3 rounded-md"
              placeholder="example@mail.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="font-semibold text-gray-700">Category</label>
            <select
              {...register("category")}
              className="w-full border p-3 rounded-md"
            >
              <option>মধু</option>
              <option>ঘি</option>
              <option>ছাতু এবং শস্য</option>
              <option>চাল ও গুড়</option>
              <option>স্ন্যাকস ও ছোট খাদ্য</option>
            </select>
          </div>
        </div>

        {/* Price & Discount */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="font-semibold text-gray-700">Price (৳)</label>
            <input
              type="number"
              {...register("price", { required: "Price is required" })}
              className="w-full border p-3 rounded-md"
              placeholder="590"
            />
            {errors.price && (
              <p className="text-red-600 text-sm">{errors.price.message}</p>
            )}
          </div>

          <div>
            <label className="font-semibold text-gray-700">Discount Price (%)</label>
            <input
              type="number"
              {...register("discountPrice")}
              className="w-full border p-3 rounded-md"
              placeholder="10"
            />
          </div>
        </div>

        {/* Stock & Weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="font-semibold text-gray-700">Available Stock</label>
            <input
              type="number"
              {...register("stock")}
              className="w-full border p-3 rounded-md"
              placeholder="10"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Weight / Size</label>
            <input
              type="text"
              {...register("weight")}
              className="w-full border p-3 rounded-md"
              placeholder="1kg / 500g"
            />
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="font-semibold text-gray-700">Tags</label>
          <input
            type="text"
            {...register("tags")}
            className="w-full border p-3 rounded-md"
            placeholder="Food, Organic, Healthy..."
          />
        </div>

        {/* Status */}
        <div>
          <label className="font-semibold text-gray-700">Product Status</label>
          <select
            {...register("status")}
            className="w-full border p-3 rounded-md"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-md text-lg font-bold"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
