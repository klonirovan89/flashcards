import iconSprite from '@/assets/icons/icons-sprite.svg'

export const Icon = (props: IconPropsType) => {
    const {iconId, width, height, onClick} = props;

    return (
        <svg width={width || '16px'} height={height || '16px'} onClick={onClick}>
            <use xlinkHref={`${iconSprite}#${iconId}`}/>
        </svg>
    );
};

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    disabled?: boolean
    onClick?: () => void
}

