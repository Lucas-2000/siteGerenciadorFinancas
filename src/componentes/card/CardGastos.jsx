import { Button, Card, CardActions, CardContent, CardHeader, Container, Grid, IconButton, Typography } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'

const useStyles = makeStyles({
    grid: {
        marginLeft: 'auto'
    },
    button: {
        width: '100px',
        marginRight: '20px',
        marginBottom: '20px'
    },
    card: {
        marginTop: '30px',
        minWidth: '800px'
    }

})


const Cardgerenciars = ({ gerenciar, handleDelete }) => {
    const classes = useStyles()

    const [status, setStatus] = useState('pendente');

    const handleChange = (
        event: MouseEvent<HTMLElement>,
        newStatus: string | null,
    ) => {
        if (newStatus !== null) {
            setStatus(newStatus);
        }
    };


    return (
        <Container>
            <Grid container justifyContent="center">
                <Card className={classes.card}>
                    <CardHeader
                        action={
                            <IconButton>
                                <Delete 
                                onClick={() => handleDelete(gerenciar.id)} />
                            </IconButton>
                        }
                        title={gerenciar.nome}
                        subheader={gerenciar.motivo} />
                    <CardContent>
                        <Typography variant="h6" color="textPrimary">
                            {gerenciar.descricao}
                        </Typography>
                        <Typography variant="h6" color="textPrimary">
                            Valor: R$ {gerenciar.valor}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                           {gerenciar.tipo}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>>
        </Container>
    )
}

export default Cardgerenciars
