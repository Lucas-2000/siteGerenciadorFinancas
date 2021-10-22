import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'
import CardGastos from '../../componentes/card/CardGastos'

const useStyles = makeStyles({
    container: {
        marginTop: '100px'
    },
})

const Gastos = () => {
    const classes = useStyles()

    const [gerenciar, setGerenciar] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/gerenciador')
            .then(res => res.json())
            .then(data => setGerenciar(data))
    }, [])

    const handleDelete = async (id) => {
        await fetch('http://localhost:8000/gerenciador/' + id, {
            method: 'DELETE'
        })
        const newGerenciar = gerenciar.filter(gerenciar => gerenciar.id != id)
        setGerenciar(newGerenciar)
    }

    return (
        <Container className={classes.container}>
            <Grid container justifyContent="center">
                <Typography variant="h4" color="textPrimary">
                    Gerenciamento de gastos e receitas
                </Typography>
            </Grid>
            <Grid>
                {gerenciar.map(gerenciar => (
                    <div key={gerenciar.id}>
                        <CardGastos gerenciar={gerenciar} handleDelete={handleDelete} />
                    </div>
                ))}
            </Grid>
        </Container>
    )
}

export default Gastos
