export const groupProductsByCollection = (products) => {
    const groupedProducts = products.reduce((acc, product) => {
        const collection = product.collection_id;
        if (!acc[collection]) {
            acc[collection] = [];
        }
        acc[collection].push(product);
        return acc;
    }, {});

    return Array.from(Object.entries(groupedProducts)).map(([_, products]) => {
        return products;
    });
    
}

export function splitImageUrls(urlString) {
    // Regex để match các URL hợp lệ
    const urls = urlString.split(';');
    
    // Loại bỏ các khoảng trắng thừa ở đầu và cuối mỗi URL
    const trimmedUrls = urls.map(url => url.trim());
    
    // Kiểm tra nếu có URL
    return trimmedUrls || [];
}

export const refactorProductData = (products) => {
    return products.map((prd) => {
        return {
            ...prd,
            productId: prd.id,
            images: splitImageUrls(prd.image),
            category: prd.category.toLowerCase(),
        };
    });
}

export const getProductsByCategory = (products, category, length, from = 0) => {
    return products.filter((product) => category === 'all' || product.category === category).slice(from, from + length);
}

export const transformProductData = (productData) => {
    // Create base variant from main product data
    const baseVariant = {
      name: productData.data.name,
      price: productData.data.price,
      color: productData.data.color,
      brand: productData.data.brand,
      description: productData.data.description,
      weight: productData.data.weight,
      category: productData.data.category,
      quantity: productData.data.quantity,
      rating: parseFloat(productData.data.rating) || 5,
      images: productData.data.image.split(';'), // Split image string into array
      size: productData.data.size || 40,
    };
  
    // Transform additional variants
    const additionalVariants = productData.variant.map(variant => ({
      name: variant.name_ || productData.data.name,
      price: variant.price,
      color: variant.color,
      brand: variant.brand,
      description: variant.description_ || productData.data.description,
      weight: variant.weight_ || productData.data.weight,
      category: variant.category,
      quantity: variant.quantity,
      rating: parseFloat(productData.data.rating) || 4.5,
      images: variant.image_path ? variant.image_path.split(';') : [],
      size: variant.size_
    }));
  
    // Combine base variant with additional variants
    return [baseVariant, ...additionalVariants];
  };
