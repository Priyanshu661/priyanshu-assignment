import { FormHelperText, InputLabel, OutlinedInput, Stack } from '@mui/material'
import React from 'react'

const CustomInput = ({
    id,
    label,
    type,
    value,
    name,
    handleBlur,
    handleChange,
    endAdornment,
    placeholder,
    touched,
    errors,
    ...rest
}) => {
    return (
        <>
            <Stack spacing={1}>
                {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
                <OutlinedInput
                    id={id}
                    type={type}
                    value={value}
                    name={name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={endAdornment}
                    placeholder={placeholder}
                    {...rest}
                />
            </Stack>
            {touched && errors && (
                <FormHelperText error id={`${id}-helper-text`}>
                    {errors}
                </FormHelperText>
            )}
        </>
    )
}

export default CustomInput