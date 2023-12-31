import icons from "./icons";
const CheckStars = ({number, size}) => {
    const {AiOutlineStar, AiFillStar} = icons;
    var arr = [];
    for (var i = 0; i < number; i++) {
        arr[i] = true;
    }
    for (var i = number; i <= 4; i++) {
        arr[i] = false;
    }
    return (
        <div className="flex">
            {arr.map((el, index) => (
                <div key={index}>
                    {el ? (
                        <AiFillStar className="text-yellow-500" size={size}/>
                    ) : (
                        <AiOutlineStar size={size}/>
                    )}
                </div>
            ))}
        </div>
    );
};
export default CheckStars;
