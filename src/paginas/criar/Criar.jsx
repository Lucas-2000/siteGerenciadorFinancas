import { Button, Card, CardActions, CardContent, CardHeader, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

const useStyles = makeStyles({
    container: {
        marginTop: '150px'
    },
    grid: {
        marginLeft: 'auto'
    },
    card: {
        minWidth: '800px',
    },
    textfield: {
        marginBottom: '15px',
        display: 'block'
    },
    select: {
        width: '250px',
        marginTop: '15px'
    },
    button: {
        width: '100px',
        marginRight: '20px',
        marginBottom: '20px'
    }

})

const Criar = () => {
    const classes = useStyles()
    const history = useHistory()

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState('')
    const [nomeError, setNomeError] = useState(false)
    const [descricaoError, setDescricaoError] = useState(false)
    const [valorError, setValorError] = useState(false)
    const [tipo, setTipo] = useState('Receita')
    const [motivo, setMotivo] = useState('Lazer')

    const handleSubmit = (e) => {
        e.preventDefault()
        setNomeError(false)
        setDescricaoError(false)
        setValorError(false)

        if (nome == '') {
            setNomeError(true)
        }
        if (descricao == '') {
            setDescricaoError(true)
        }
        if (valor == '') {
            setValorError(true)
        }


        if (nome && descricao && valor) {
            fetch('http://localhost:8000/gerenciador', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ nome, descricao, valor, tipo, motivo })
            }).then(() => history.push('/'))
        }
    }

    const [clear, setClear] = useState('')

    const handleClear = () => {
        setClear('')
    }

    const handleTextFieldClear = (event) => {
        setClear(event.target.clear)
    }

    return (
        <Container className={classes.container}>
            <Grid container justifyContent="center">
                <Card className={classes.card}>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <CardHeader
                            title="Criar"
                            subheader="Crie um novo registro">
                        </CardHeader>
                        <CardContent>
                            <Grid>
                                <TextField
                                    variant="outlined"
                                    label="Nome"
                                    onChange={(e) => setNome(e.target.value)}
                                    placeholder="Insira o nome do gasto/receita"
                                    color="secondary"
                                    fullWidth
                                    className={classes.textfield}
                                    required
                                    error={nomeError} />
                            </Grid>
                            <Grid>
                                <TextField
                                    variant="outlined"
                                    label="Descrição"
                                    onChange={(e) => setDescricao(e.target.value)}
                                    placeholder="Insira a descrição do gasto/receita"
                                    color="secondary"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    className={classes.textfield}
                                    required
                                    error={descricaoError} />
                            </Grid>
                            <Grid>
                                <TextField
                                    variant="outlined"
                                    label="Valor"
                                    onChange={(e) => setValor(e.target.value)}
                                    placeholder="Insira o valor do gasto/receita"
                                    color="secondary"
                                    fullWidth
                                    className={classes.textfield}
                                    type="number"
                                    required
                                    error={valorError} />
                            </Grid>
                            <Grid>
                                <FormControl>
                                    <InputLabel>
                                        Motivo
                                    </InputLabel>
                                    <Select
                                        variant="outlined"
                                        color="secondary"
                                        className={classes.select}
                                        value={motivo}
                                        onChange={(e) => setMotivo(e.target.value)}>
                                        <MenuItem value={'Lazer'}>Lazer</MenuItem>
                                        <MenuItem value={'Contas'}>Contas</MenuItem>
                                        <MenuItem value={'Mensalidades'}>Mensalidades</MenuItem>
                                        <MenuItem value={'Compras'}>Compras</MenuItem>
                                        <MenuItem value={'Emergências'}>Emergências</MenuItem>
                                        <MenuItem value={'Receita'}>Receita</MenuItem>
                                        <MenuItem value={'Outros'}>Outros</MenuItem>
                                    </Select>
                                </FormControl>
                                <Grid>
                                    <FormControl>
                                        <InputLabel>
                                            Tipo
                                        </InputLabel>
                                        <Select
                                            color="textSecondary"
                                            variant="outlined"
                                            className={classes.select}
                                            value={tipo}
                                            onChange={(e) => setTipo(e.target.value)}>
                                            <MenuItem value={'Receita'}>Receita</MenuItem>
                                            <MenuItem value={'Despesa'}>Despesa</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Grid className={classes.grid}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    type="submit">
                                    Salvar
                                </Button>
                            </Grid>
                        </CardActions>
                    </form>
                </Card>
            </Grid>
        </Container>
    )
}

export default Criar
