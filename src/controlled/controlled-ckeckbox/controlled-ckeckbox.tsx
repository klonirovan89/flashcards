import { Checkbox, PropsType } from "../../components/ui/checkbox";
import React from "react";
import { useController } from "react-hook-form";
import { UseControllerProps } from "react-hook-form/dist/types";

type Props = Omit<UseControllerProps<any>, "disabled" | "rules" | "defaultValue"> & Omit<PropsType, 'checked' | 'onValueChange'>
export const ControlledCheckbox = ({ name, control, shouldUnregister, ...rest }: Props) => {
  const {
    field: { value, onChange, onBlur}
  } = useController({
    name: rest.label,
    control,
    shouldUnregister,
    disabled: rest.disabled,
  });


  return <Checkbox {...rest} checked={value} onChange={onChange} />;
};

