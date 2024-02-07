import activeStar from "./icons/ActiveStar.svg";
import star from "./icons/Star.svg";

export const Rating = (props: PropsType) => {

    const {defaultValue, starsList} = props;


    return (
        <div>
            {starsList.map(el => (
                el <= defaultValue ?
                    <img src={activeStar} alt="activeStar" width={16} height={16} key={el}/>
                    :
                    <img src={star} alt="star" width={16} height={16} key={el}/>
            ))}
        </div>
    );
};

type PropsType = {
    defaultValue: number
    starsList: number[]
}