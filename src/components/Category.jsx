const Category = ({ data }) => {
  const brunches = data.categories.find(
    (category) => category.name === "Brunchs"
  );

  const breakfast = data.categories.find(
    (category) => category.name === "Petit déjeuner"
  );

  return (
    <>
      <div className="menu">
        <div className="main-brunch">
          <h2>Brunchs</h2>

          {brunches.meals.map((meal) => (
            <div key={meal.id}>
              <h3>{meal.title}</h3>
              <p>{meal.description}</p>
              <p>{meal.price} €</p>
              <img src={meal.picture} alt={meal.title} />
            </div>
          ))}
        </div>

        <div className="main-breakfast">
          <h2>Petit déjeuner</h2>

          {breakfast.meals.map((breakmeal) => (
            <div key={breakmeal.id}>
              <h3>{breakmeal.title}</h3>
              <p>{breakmeal.description}</p>
              <p>{breakmeal.price}</p>

              {breakmeal.picture && <img src={breakmeal.picture} alt="" />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
