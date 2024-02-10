import iconSprite from '@/assets/icons/icons-sprite.svg'

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width} height={props.height}>
            <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
        </svg>
    );
};

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
}

