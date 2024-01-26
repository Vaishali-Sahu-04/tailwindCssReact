import { CDN_URL } from "../utils/constant";

const Cart = (props) => {
    
    const {resData} = props;

    const{
      cloudinaryImageId,
      name,
      avgRating,
      costForTwo,
      cuisines,
    } = resData?.info;
    return (
      <div className=" w-60 h-96 mx-1 bg-gray-200 break-words">
        <img className="w-full h-52" src={CDN_URL+cloudinaryImageId} alt="" />
        <div className="content">
        <h2 className=" font-bold text-lg">{name}</h2>
        <p>{cuisines.join(",")}</p>
        <h4>{avgRating}star</h4>
        <h4>{costForTwo}</h4>
        </div>
      </div>
    )
}
export default Cart