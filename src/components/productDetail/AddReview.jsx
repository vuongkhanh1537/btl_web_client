const { useState } = require("react");

const AddReview = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    content: "",
    images: [],
  });

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const review = {
      id: reviews.length + 1,
      userName: "Người dùng", // Thường sẽ lấy từ thông tin đăng nhập
      rating: newReview.rating,
      date: new Date().toISOString().split("T")[0],
      content: newReview.content,
      likes: 0,
      images: newReview.images,
      isVerifiedPurchase: true,
    };
    setReviews([review, ...reviews]);
    setShowReviewForm(false);
    setNewReview({ rating: 5, content: "", images: [] });
  };

  const handleImageUpload = (e) => {
    // Xử lý upload ảnh thực tế sẽ cần API backend
    const files = Array.from(e.target.files);
    setNewReview((prev) => ({
      ...prev,
      images: [...prev.images, ...files.map(() => "/api/placeholder/100/100")],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        {/* Nút viết đánh giá */}
        <div className="flex flex-col justify-center items-center">
          <Button
            className="w-full mb-4"
            onClick={() => setShowReviewForm(true)}
          >
            Viết đánh giá
          </Button>
        </div>
      </div>
      {/* Form viết đánh giá */}
      {showReviewForm && (
        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Viết đánh giá của bạn</h3>
          <form onSubmit={handleSubmitReview}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Đánh giá của bạn
              </label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() =>
                      setNewReview((prev) => ({ ...prev, rating: star }))
                    }
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= newReview.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Nhận xét của bạn
              </label>
              <Textarea
                value={newReview.content}
                onChange={(e) =>
                  setNewReview((prev) => ({ ...prev, content: e.target.value }))
                }
                rows={4}
                placeholder="Chia sẻ trải nghiệm của bạn với sản phẩm..."
                className="w-full"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Thêm hình ảnh (tùy chọn)
              </label>
              <div className="flex gap-2 mb-2">
                {newReview.images.map((img, index) => (
                  <div key={index} className="relative w-24 h-24">
                    <img
                      src={img}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-gray-50 file:text-gray-700
                  hover:file:bg-gray-100"
              />
            </div>

            <div className="flex space-x-4">
              <Button type="submit">Gửi đánh giá</Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowReviewForm(false)}
              >
                Hủy
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
