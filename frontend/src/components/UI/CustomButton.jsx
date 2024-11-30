import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({
    children,
    ...rest
}) => {
    return (
        <>
            <Button {...rest}>
                {children}
            </Button>
        </>
    )
}

export default CustomButton