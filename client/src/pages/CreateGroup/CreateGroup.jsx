import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import {Paper} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Typography from '@mui/material/Typography';
import GroupIcon from '@mui/icons-material/Group';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from "../../components/Copyright";
import axios from "axios";
import {SERVER_URL} from "../../utils/config";
import Notification from "../../utils/Notification"
import {useState} from "react";

const theme = createTheme();

export default function SignInSide() {

    const [name, setGroupname] = useState("");
    const [leader, setLeadername] = useState("");
    const [member2, setMembername2] = useState("");
    const [member3, setMembername3] = useState("");
    const [member4, setMembername4] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(validate()) {

            setLeadername(event.target.value);
            setMembername2(event.target.value);
            setMembername3(event.target.value);
            setMembername4(event.target.value);

            const newGroup = {name, leader, member2, member3, member4}

            await axios.post(`${SERVER_URL}/group`, newGroup).then((res) => {
                setTimeout(() => {
                    Notification("success", `${res.data}`)
                }, 1000);
            }).catch((error) => {
                Notification("error", `${error.response.data}`)
                console.log(error);
            })
        }
    };
    const validate = ()=>{
        let temp = {};
        temp.name = !name?"This field is required":name.length<4?"Group name is too short":"";
        temp.leader = !leader?"This field is required":leader.length<4?"Group name is too short":"";
        temp.member2 = !member2?"This field is required":member2.length<4?"Group name is too short":"";
        temp.member3 = !member3?"This field is required":member3.length<4?"Group name is too short":"";
        temp.member4 = !member4?"This field is required":member4.length<4?"Group name is too short":"";

        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x==="");
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
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
                                onChange={(event)=> {setGroupname(event.target.value)}}
                                error={errors.name}
                                helperText={errors.name ? errors.name : ""}
                                label="Group name"
                                name="name"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                value={leader}
                                onChange={(event)=> {setLeadername(event.target.value)}}
                                error={errors.leader}
                                helperText={errors.leader ? errors.leader : ""}
                                label="Leader's name"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                value={member2}
                                onChange={(event)=> {setMembername2(event.target.value)}}
                                error={errors.member2}
                                helperText={errors.member2 ? errors.member2 : ""}
                                label="Group member"
                                autoComplete="current-password"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                value={member3}
                                onChange={(event)=> {setMembername3(event.target.value)}}
                                error={errors.member3}
                                helperText={errors.member3 ? errors.member3 : ""}
                                label="Group member"
                                autoComplete="current-password"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                value={member4}
                                onChange={(event)=> {setMembername4(event.target.value)}}
                                error={errors.member4}
                                helperText={errors.member4 ? errors.member4 : ""}
                                label="Group member"
                                autoComplete="current-password"
                            />
                            <Box textAlign="center">
                                <Button type="submit" style={{width:"50%",justifyContent:"center"}} variant="contained" sx={{ mt: 3, mb: 2 }}>
                                    create group
                                </Button>
                            </Box>
                        </Box>

                        <Box textAlign="center">
                            <Button variant="outlined" color="secondary" style={{width:"100%",justifyContent:"center"}} sx={{ mt: 3, mb: 2 }} startIcon={<GroupIcon />}>
                                <Link className="link" to="/groups"> View Groups </Link>
                            </Button>
                        </Box>

                        <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}