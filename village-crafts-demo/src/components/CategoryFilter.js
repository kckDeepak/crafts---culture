const CategoryFilter = ({ categories, onFilter }) => (
    <div className="category-filter">
      <h4>Filter by Category</h4>
      {categories.map((category) => (
        <button key={category} onClick={() => onFilter(category)}>
          {category}
        </button>
      ))}
    </div>
  );
  
  export default CategoryFilter;
  