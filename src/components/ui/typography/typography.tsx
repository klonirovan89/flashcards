import {ComponentPropsWithoutRef, ElementType} from 'react'
import {ButtonProps} from '@/components/ui/button'
import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'span'> = {
  as?: T
  variant:
      | 'body1'
      | 'body2'
      | 'caption'
      | 'h1'
      | 'h2'
      | 'h3'
      | 'h4'
      | 'link1'
      | 'link2'
      | 'overline'
      | 'subtitle1'
      | 'subtitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'span'>(
    props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
    const {as: Component = 'span', variant, ...rest} = props;

    return <Component className={s[variant]} {...rest}/>
};

