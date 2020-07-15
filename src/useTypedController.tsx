import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { formatName } from './logic/formatName';
import {
  DeepPath,
  UnpackNestedValue,
  FieldValuesFromControl,
  Options,
  ControllerProps,
} from './types';

export const useTypedController = <
  TFieldValues extends UnpackNestedValue<FieldValuesFromControl<TControl>>,
  TControl extends Control = Control
>({
  control,
}: Options<TControl>) => {
  const controlRef = React.useRef(control);
  controlRef.current = control;

  const TypedController = React.useCallback(
    <
      UFieldValues extends TFieldValues,
      TFieldName extends DeepPath<UFieldValues, TFieldName>,
      TAs extends 'input' | 'select' | 'textarea'
    >({
      name,
      ...rest
    }: ControllerProps<UFieldValues, TFieldName, TAs>) => {
      const formattedName = formatName(name as any);
      return (
        <Controller
          name={formattedName as any}
          control={controlRef.current}
          {...rest}
        />
      );
    },
    [],
  );

  return TypedController;
};
