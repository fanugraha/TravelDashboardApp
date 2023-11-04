const CategoryCard = ({ children, image }) => {
  return (
    <button className="category-card">
      <img src={image} alt="" />
      {children}
    </button>
  );
};

export default CategoryCard;
