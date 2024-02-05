import s from "./rating.module.scss";
import starActive from "./icons/StarActive.svg";
import star from "./icons/Star.svg";

type PropsType = {
    defaultValue: number
}
export const RatingControl = (props: PropsType) => {

    const {defaultValue} = props;
    const listStar = [1, 2, 3, 4, 5];

    return (
        <div className={s.rating}>
            {listStar.map(el => (
                el <= defaultValue ?
                    <img src={starActive} alt="starActive" width={16} height={16} key={el}/>
                    :
                    <img src={star} alt="star" width={16} height={16} key={el}/>
            ))}
        </div>
    );
};
