import React, { useState } from "react";
import { Star, ThumbsUp, Filter, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// Dữ liệu mẫu cho đánh giá
const sampleReviews = [
  {
    id: 1,
    userName: "Nguyễn Văn A",
    rating: 5,
    date: "2024-03-15",
    content: "Giày rất đẹp và thoải mái, đóng gói cẩn thận, giao hàng nhanh.",
    likes: 12,
    images: ["/api/placeholder/100/100", "/api/placeholder/100/100"],
    size: 40,
    color: "Black",
    isVerifiedPurchase: true,
  },
  {
    id: 2,
    userName: "Trần Thị B",
    rating: 4,
    date: "2024-03-10",
    content:
      "Giày đẹp, nhưng hơi chật một chút so với size bình thường tôi hay đi.",
    likes: 8,
    images: ["/api/placeholder/100/100"],
    size: 40,
    color: "White",
    isVerifiedPurchase: true,
  },
  // Thêm các đánh giá mẫu khác...
];

const ProductReviews = () => {
  const [reviews, setReviews] = useState(sampleReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    content: "",
    images: [],
  });
  const [filterRating, setFilterRating] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Tính toán số lượng đánh giá theo số sao
  const ratingCounts = reviews.reduce((acc, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1;
    return acc;
  }, {});

  const averageRating = (
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  ).toFixed(1);

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Tổng quan đánh giá */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Reviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Điểm đánh giá trung bình */}
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              {averageRating}
            </div>
            <div className="flex justify-center mb-2">
              {renderStars(Math.round(averageRating))}
            </div>
            <p className="text-gray-500">{reviews.length} reviews</p>
          </div>

          {/* Phân bố số sao */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center">
                <div className="w-20 flex items-center">
                  {renderStars(stars)}
                </div>
                <div className="flex-1 h-2 mx-4 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-yellow-400 rounded"
                    style={{
                      width: `${
                        ((ratingCounts[stars] || 0) / reviews.length) * 100
                      }%`,
                    }}
                  />
                </div>
                <div className="w-16 text-sm text-gray-500">
                  {ratingCounts[stars] || 0}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bộ lọc và sắp xếp */}
      <div className="mt-8 flex flex-wrap gap-4 items-center">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5" />
          <span className="text-sm font-medium">Filter:</span>
        </div>

        <Select value={filterRating} onValueChange={setFilterRating}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Số sao" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="5">5 stars</SelectItem>
            <SelectItem value="4">4 stars</SelectItem>
            <SelectItem value="3">3 stars</SelectItem>
            <SelectItem value="2">2 stars</SelectItem>
            <SelectItem value="1">1 star</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Sắp xếp" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="highest">Highest</SelectItem>
            <SelectItem value="lowest">Lowest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Danh sách đánh giá */}
      <div className="mt-6 space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{review.userName}</span>
                  {review.isVerifiedPurchase && (
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      Verified Purchase
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString("vi-VN")}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-700">{review.content}</p>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              <span>Size: {review.size}</span>
              <span className="mx-2">•</span>
              <span>Color: {review.color}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Phân trang */}
      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="flex items-center space-x-2">
          <span>More</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductReviews;
