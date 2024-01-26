import { CheckboxControl, CheckboxProps } from "../checkbox/checkbox";
import React from "react";
import { useController } from "react-hook-form";
import { UseControllerProps } from "react-hook-form/dist/types";

type Props = Omit<UseControllerProps<any>, "disabled" | "rules" | "defaultValue"> & Omit<CheckboxProps, 'checked' | 'onValueChange'>
export const ControlledCheckbox = ({ name, control, shouldUnregister, ...rest }: Props) => {
  const {
    field: { value, onChange, onBlur}
  } = useController({
    name: rest.label,
    control,
    shouldUnregister,
    disabled: rest.disabled,
  });


  return <CheckboxControl {...rest} checked={value} onValueChange={onChange} />;
};
