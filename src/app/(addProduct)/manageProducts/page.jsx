"use client";

import React, { useContext, useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { AuthContext } from "@/contexts/authContext";
import { MdOutlinePreview } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

// API BASE LINK
const BASE = "https://khalids-dreams-server.vercel.app";

export default function ManageProducts() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const queryClient = useQueryClient();

  const editModalRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // Fetch products
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["manageProducts", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(`${BASE}/products`, {
        params: { email: user.email },
      });
      return res.data;
    },
    staleTime: 1000 * 60 * 2,
  });

  // DELETE PRODUCT
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await axios.delete(`${BASE}/products/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["manageProducts", user?.email]);
    },
  });

  // UPDATE PRODUCT
  const updateMutation = useMutation({
    mutationFn: async ({ id, payload }) => {
      const res = await axios.patch(`${BASE}/products/${id}`, payload);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["manageProducts", user?.email]);
      closeEdit();
      Swal.fire("Updated!", "Product updated successfully.", "success");
    },
  });

  // VIEW FUNCTION
  const openView = (product) => {
    router.push(`/Products/${product._id}`);
  };

  // EDIT 
  const openEdit = (product) => {
    setSelectedProduct(product);

    reset({
      productTitle: product.productTitle || "",
      shortDescription: product.shortDescription || "",
      longDescription: product.longDescription || "",
      category: product.category || "",
      price: product.price || "",
      discountPrice: product.discountPrice || "",
      stock: product.stock || "",
      weight: product.weight || "",
      tags: product.tags || "",
      status: product.status || "Active",
    });

    editModalRef.current.showModal();
  };

  const closeEdit = () => {
    setSelectedProduct(null);
    reset();
    editModalRef.current.close();
  };

  // DELETE FUNCTION
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This product will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        deleteMutation.mutate(id, {
          onSuccess: () => {
            Swal.fire("Deleted!", "Product removed successfully.", "success");
          },
          onError: () => {
            Swal.fire("Error", "Could not delete the product.", "error");
          },
        });
      }
    });
  };

  // UPDATE SUBMIT
  const onSubmitUpdate = (formData) => {
    if (!selectedProduct?._id) return;

    const payload = { ...formData };

    updateMutation.mutate({ id: selectedProduct._id, payload });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800">আমার পণ্যসমূহ</h2>

      {isLoading && <p className="mt-6">লোড হচ্ছে...</p>}
      {isError && <p className="mt-6 text-red-600">Error: {error?.message}</p>}

      {/* Summary + Table */}
      <div className="mt-6 bg-white shadow rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">সকল পণ্য</p>
            <p className="text-3xl font-bold text-green-700">
              {String(products.length || 0).padStart(2, "0")}
            </p>
          </div>

          <button
            className="px-4 py-2 bg-gray-100 rounded-md"
            onClick={() =>
              queryClient.invalidateQueries(["manageProducts", user?.email])
            }
          >
            Refresh
          </button>
        </div>

        {/* Product Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">SL</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-right">Price</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-gray-500">
                    কোন পণ্য নেই
                  </td>
                </tr>
              ) : (
                products.map((p, i) => (
                  <tr key={p._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{i + 1}</td>
                    <td className="px-4 py-3 font-semibold">
                      {p.productTitle}
                    </td>
                    <td className="px-4 py-3">{p.category}</td>
                    <td className="px-4 py-3 text-right font-bold text-green-700">
                      ৳ {p.price}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          p.status === "Inactive"
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {p.status}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-center">
                      <div className="flex gap-2 justify-center">
                        <button
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md hover:bg-green-500"
                          onClick={() => openView(p)}
                        >
                          <MdOutlinePreview />
                        </button>

                        <button
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md hover:bg-green-500"
                          onClick={() => openEdit(p)}
                        >
                          <FaEdit />
                        </button>

                        <button
                          className="px-3 py-1 bg-red-50 text-red-700 rounded-md hover:bg-red-500"
                          onClick={() => handleDelete(p._id)}
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* EDIT MODAL */}
      <dialog ref={editModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-2xl">
          <h3 className="text-lg font-semibold mb-4">পণ্য আপডেট করুন</h3>

          <form onSubmit={handleSubmit(onSubmitUpdate)} className="space-y-4">
            <div>
              <label>Title</label>
              <input
                {...register("productTitle", { required: true })}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label>Short Description</label>
              <textarea
                {...register("shortDescription")}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label>Long Description</label>
              <textarea
                {...register("longDescription")}
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>Category</label>
                <select
                  {...register("category")}
                  className="w-full border p-2 rounded"
                >
                  <option>মধু</option>
                  <option>ঘি</option>
                  <option>দই</option>
                  <option>ছাতু এবং শস্য</option>
                  <option>চাল ও গুড়</option>
                  <option>স্ন্যাকস ও ছোট খাদ্য</option>
                </select>
              </div>

              <div>
                <label>Price</label>
                <input
                  type="number"
                  {...register("price", { required: true })}
                  className="w-full border p-2 rounded"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>Discount</label>
                <input
                  type="number"
                  {...register("discountPrice")}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label>Stock</label>
                <input
                  type="number"
                  {...register("stock")}
                  className="w-full border p-2 rounded"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>Weight</label>
                <input
                  {...register("weight")}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label>Tags</label>
                <input
                  {...register("tags")}
                  className="w-full border p-2 rounded"
                />
              </div>
            </div>

            <div>
              <label>Status</label>
              <select {...register("status")} className="w-full border p-2 rounded">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Update
              </button>

              <button
                type="button"
                onClick={closeEdit}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
            </div>
          </form>

          <div className="modal-action">
            <button className="btn" onClick={closeEdit}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
