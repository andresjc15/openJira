import React, { ChangeEvent, useState } from 'react'
import { Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import Box from '@mui/material/Box';
import { AddCircleOutlineOutlined, TextFields } from '@mui/icons-material';

export const NewEntry = () => {

    const [isAdding, setIsAdding] = useState(false);

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onTextFieldChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
        setInputValue( event.target.value );
    }

    const onSave = () => {
        if ( inputValue.length === 0 ) return;

        console.log({ inputValue });
    }

    
  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>

        {
            isAdding ? (
                <>
                    <TextField
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1 }}
                        placeholder='Nueva entrada'
                        autoFocus
                        multiline
                        label='Nueva entrada'
                        helperText={ inputValue.length <= 0 && touched && 'Ingrese un valor' }
                        error={ inputValue.length <= 0 && touched }
                        value={ inputValue }
                        onChange={ onTextFieldChanged }
                        onBlur={ () => setTouched(true) }
                    />
                    <Box display='flex' justifyContent='space-between'>
                        <Button
                            variant='text'
                            onClick={ () => setIsAdding( false )}
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant='outlined'
                            color='secondary'
                            endIcon={ <SaveOutlinedIcon /> }
                            onClick={ onSave }
                        >
                            Guardar
                        </Button>
                    </Box>
                </>
            )
                :
            (
                <>
                    <Button
                        startIcon={ <AddCircleOutlineOutlined /> }
                        fullWidth
                        variant='outlined'
                        onClick={ () => setIsAdding( true )}
                    >
                        Agregar tarea
                    </Button>
                </>
            )
        }
    </Box>
  )
}
