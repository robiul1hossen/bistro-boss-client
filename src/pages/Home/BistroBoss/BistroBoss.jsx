import bistroService from "../../../assets/home/chef-service.jpg";
import "./BistroBoss.css";

const BistroBoss = () => {
  return (
    <div className="relative flex justify-center items-center my-24">
      <div className="flex items-center justify-center">
        <img src={bistroService} alt="" />
      </div>
      <div className="flex items-center justify-center flex-col bg-white w-3/4 mx-auto py-20 absolute top-0 mt-16 ">
        <h3 className="text-[#151515] text-5xl bistro">Bistro Boss</h3>
        <p className="text-[#151515] w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum
          deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil
          iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
