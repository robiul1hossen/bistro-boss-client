import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import moment from "moment";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="  ">
      <div className="featured bg-fixed text-white pt-8 my-24   ">
        <SectionTitle subHeading="Check it out" heading="FROM OUR MENU"></SectionTitle>
        <div className="flex md:justify-center items-center  pb-20 pt-12 px-36">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p>{moment().format("LL")} </p>
            <h3 className="uppercase">WHERE CAN I GET SOME?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, magni accusamus id sunt nostrum
              veniam. Consequuntur voluptas quidem ducimus obcaecati nesciunt iste molestias minima nam
              delectus odit quasi, ut eos dolorem veniam provident tempora velit itaque officiis. Veritatis
              saepe maiores magnam fuga, illum mollitia dolorum molestiae, est, aspernatur vel veniam.
            </p>
            <div className="order-now-btn">
              <button onClick={() => console.log("button click")} className="btn btn-primary ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
