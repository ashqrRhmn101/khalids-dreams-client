export default function AddProduct() {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 my-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Add New Product
      </h2>

      <form className="space-y-4">

        {/* Image */}
        <div>
          <label className="font-medium">Product Image URL</label>
          <input
            type="text"
            placeholder="https://example.com/product.jpg"
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Title */}
        <div>
          <label className="font-medium">Product Title</label>
          <input
            type="text"
            placeholder="Enter product title"
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="font-medium">Short Description</label>
          <textarea
            placeholder="Short description about product"
            className="w-full border p-2 rounded-md"
            rows="2"
          ></textarea>
        </div>

        {/* Long Description */}
        <div>
          <label className="font-medium">Long Description</label>
          <textarea
            placeholder="Detailed product description"
            className="w-full border p-2 rounded-md"
            rows="4"
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="font-medium">Category</label>
          <select className="w-full border p-2 rounded-md">
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
              placeholder="Price"
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="font-medium">Discount Price (Optional)</label>
            <input
              type="number"
              placeholder="Discount price"
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
              placeholder="How many in stock?"
              className="w-full border p-2 rounded-md"
            />
          </div>

          <div>
            <label className="font-medium">Weight / Size</label>
            <input
              type="text"
              placeholder="e.g. 500g, 1kg"
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="font-medium">Tags</label>
          <input
            type="text"
            placeholder="honey, healthy, natural"
            className="w-full border p-2 rounded-md"
          />
        </div>

        {/* Status */}
        <div>
          <label className="font-medium">Product Status</label>
          <select className="w-full border p-2 rounded-md">
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
