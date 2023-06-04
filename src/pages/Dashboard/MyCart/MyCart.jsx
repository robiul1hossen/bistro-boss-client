import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (id) => {
    {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/carts/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                refetch();
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
            });
        }
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold flex justify-between  items-center mb-6">
        <h2 style={{ fontFamily: "Cinzel " }} className=" text-2xl">
          Total Items : {cart.length}
        </h2>
        <h2 style={{ fontFamily: "Cinzel " }} className=" text-2xl">
          Total Price : ${total}
        </h2>
        <Link to="/dashboard/payment">
          {" "}
          <button className="btn btn-sm border-0 bg-[#D1A054]">Buy</button>
        </Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead style={{ backgroundColor: "#D1A054 !important" }}>
            <tr>
              <th>#</th>
              <th>Food </th>
              <th>Item Name</th>
              <th>Price </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((row, index) => (
              <tr key={row._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={row.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{row.name}</td>
                <td className="justify-end">${row.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(row._id)}
                    className="btn btn-ghost btn-md bg-[#B91C1C] text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
