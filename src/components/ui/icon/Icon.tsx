import iconSprite from '@/assets/icons/icons-sprite.svg'

export const Icon = (props: IconPropsType) => {
    const {iconId, width, height} = props;

    return (
        <svg width={width} height={height}>
            <use xlinkHref={`${iconSprite}#${iconId}`}/>
        </svg>
    );
};

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    disabled?: boolean
}

