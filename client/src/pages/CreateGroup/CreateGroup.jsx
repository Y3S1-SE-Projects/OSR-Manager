import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/Y3S1-SE-Projects/">
                Y3S1 Projects
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();


export default function SignInSide() {

    const [name, setName] = React.useState("");
    const handleChange = (event) => {
        setName(event.target.value);
        if(name.length<5){

        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                {/*<Grid*/}
                {/*    item*/}
                {/*    xs={false}*/}
                {/*    sm={4}*/}
                {/*    md={7}*/}
                {/*    sx={{*/}
                {/*        backgroundImage: 'url(https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',*/}
                {/*        backgroundRepeat: 'no-repeat',*/}
                {/*        backgroundColor: (t) =>*/}
                {/*            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],*/}
                {/*        backgroundSize: 'cover',*/}
                {/*        backgroundPosition: 'center',*/}
                {/*    }}*/}
                {/*/>*/}
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <GroupAddIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Research Group Registration
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                value={name}
                                onChange={handleChange}
                                error={name===""}
                                helperText={name === "" ? "Empty!" : ""}
                                id="group_name"
                                label="Group name"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Leader's name"
                                id="password"
                                autoComplete="current-password"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Group member"
                                id="password"
                                autoComplete="current-password"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Group member"
                                id="password"
                                autoComplete="current-password"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Group member"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Box textAlign="center">
                                <Button
                                    type="submit"
                                    style={{width:"50%",justifyContent:"center"}}
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    create group
                                </Button>
                            </Box>


                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}