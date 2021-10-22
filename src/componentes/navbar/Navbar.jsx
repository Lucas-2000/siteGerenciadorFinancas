import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    appbar: {
        display: 'flex'
    },
    grid: {
        marginLeft: 'auto'
    },
    button: {
        color: 'white'
    }
})

const Navbar = () => {
    const classes = useStyles()

    return (
        <AppBar position="fixed" color="secondary" className={classes.appbar}>
            <Toolbar>
                <Grid>
                    <Typography variant="h5">
                        Financeiro
                    </Typography>
                </Grid>
                <Grid className={classes.grid}>
                    <Button className={classes.button} component={Link} to="/">
                        Gerenciar
                    </Button>
                    <Button className={classes.button} component={Link} to="/criar">
                        Criar
                    </Button>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
