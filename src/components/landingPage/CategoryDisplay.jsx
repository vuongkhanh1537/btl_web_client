import { Link } from "react-router-dom";

const categories = [
  {
    name: "Men",
    image:
      "https://gearmoose.com/wp-content/uploads/2017/04/best-all-white-sneakers-for-men.jpg",
  },
  {
    name: "Women",
    image:
      "https://cdn-3.expansion.mx/dims4/default/925ca98/2147483647/strip/true/crop/1000x667+0+0/resize/1800x1201!/quality/90/?url=https:%2F%2Fcdn-3.expansion.mx%2Fea%2Fb3%2F7b2b16004275a97040464d3c0500%2Fsneakers.jpg",
  },
  {
    name: "Kids",
    image:
      "https://firstzone.co.uk/wp-content/uploads/2022/01/Children-Sports-Shoes-Outdoor-Kids-Winter-Sneakers-High-Top-Young-Children-Tennis-Casual-Running-Shoes-Warm-4.jpg",
  },
];

const CategoryCard = ({ category }) => {
  return (
    <div className="w-full">
      <Link>
        <img
          src={category.image}
          alt="Category"
          className="h-80 w-full object-cover rounded-xl shadow-md overflow-hidden"
        />
      </Link>
      <div className="py-4">
        <h3 className="text-lg font-semibold">{category.name}</h3>
      </div>
    </div>
  );
};

const CategoryDisplay = () => {
  return (
    <section className="flex justify-evenly gap-8 py-4 lg:mx-24 lg:my-8">
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </section>
  );
};

export default CategoryDisplay;
