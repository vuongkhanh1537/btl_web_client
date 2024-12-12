import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/landingPage/ProductCard';
import { useParams } from 'react-router-dom';
import { useHome } from '@/providers/HomeProvider';

const ProductListPage = () => {
  // Sample product data
  const { products } = useHome();
  const { category } = useParams();  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  const categories = ['all', 'unisex', 'men', 'women'];

  // Filtered products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  // Pagination calculations
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Pagination change handlers
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleProductsPerPageChange = (e) => {
    setProductsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  // Pagination component
  const Pagination = () => {
    // Function to generate page numbers
    const getPageNumbers = () => {
      // If total pages is 7 or fewer, show all pages
      if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }
  
      const pageNumbers = [];
  
      // Always include first page
      pageNumbers.push(1);
  
      // Handle different scenarios based on current page position
      if (currentPage <= 3) {
        // If current page is near the beginning
        pageNumbers.push(2, 3, 4, '...');
        pageNumbers.push(totalPages - 1, totalPages);
      } else if (currentPage >= totalPages - 2) {
        // If current page is near the end
        pageNumbers.push('...');
        pageNumbers.push(totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        // Current page is in the middle
        pageNumbers.push('...');
        pageNumbers.push(
          currentPage - 1, 
          currentPage, 
          currentPage + 1,
          '...'
        );
        pageNumbers.push(totalPages);
      }
  
      return pageNumbers;
    };
  
    const pageNumbers = getPageNumbers();
  
    return (
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0">
        {/* Products per page selector */}
        <div className="flex items-center space-x-2">
          <label className="text-gray-700">Show</label>
          <select 
            value={productsPerPage} 
            onChange={handleProductsPerPageChange}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {[10, 20, 30, 50].map(number => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
          <span className="text-gray-700">products per page</span>
        </div>
  
        {/* Pagination controls */}
        <div className="flex items-center space-x-2">
          {/* Previous button */}
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
  
          {/* Page numbers */}
          {pageNumbers.map((number, index) => (
            <React.Fragment key={index}>
              {number === '...' ? (
                <span className="px-2 text-gray-500">...</span>
              ) : (
                <button
                  onClick={() => handlePageChange(number)}
                  className={`w-10 h-10 border rounded-lg ${
                    currentPage === number 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {number}
                </button>
              )}
            </React.Fragment>
          ))}
  
          {/* Next button */}
          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Our Collection</h1>
        <p className="text-gray-600">Discover our latest shoes collection</p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search Bar */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page when searching
            }}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-4">
          <SlidersHorizontal className="text-gray-600 w-5 h-5" />
          <select
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1); // Reset to first page when changing category
            }}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {currentProducts.map(product => (
            <div key={product.productId} className="w-full flex justify-center">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria</p>
        </div>
      )}

      {/* Pagination */}
      {filteredProducts.length > 0 && <Pagination />}
    </div>
  );
};

export default ProductListPage;