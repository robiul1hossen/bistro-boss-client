import "./MenuItem.css";

const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex space-x-3">
      <img className="w-[100px] menu-img" src={image} alt="" />
      <div>
        <h3 className="uppercase menu-heading">{name} --------------</h3>
        <p className="">{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItem;
