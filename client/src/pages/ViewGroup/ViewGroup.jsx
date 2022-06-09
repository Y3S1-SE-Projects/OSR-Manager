import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import {SERVER_URL} from "../../utils/config";
import {Container} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Notification from "../../utils/Notification";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function preventDefault(event) {
    event.preventDefault();
}
const theme = createTheme();

export default function ViewGroup() {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [id, setId] = React.useState();
    const handleClose = () => {
        setOpen(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const handleToggle2 = (id) => {
        setId(id);
        setOpen2(!open2);
    };

    const [count, setCount] = React.useState("");
    const [groups, setGroups] = React.useState([]);
    const [group, setGroup] = React.useState({});

    const getData = () =>{
        axios.get(`${SERVER_URL}/group`).then(res =>{
            setGroups(res.data);
            setCount(res.data.length);
        })
    }
    React.useEffect(()=>{getData()},[0])


    const deleteGroup = (id) =>{

        axios.delete(`${SERVER_URL}/group/${id}`).then(res=>{
            console.log(res.data)
            handleClose2();
            Notification('warning',"Student group is deleted",6000);
        }).catch((error)=>{
            Notification('error',"Student group is not deleted",6000);
            handleClose2();
            console.log(error.message)
        })
    }
    const ViewAGroup = (name) =>{

        axios.get(`${SERVER_URL}/group/${name}`).then(res=>{
            console.log(res.data);
            setGroup(res.data);
            handleToggle();
        }).catch((error)=>{
            console.log(error.message)
        })
    }

    return (
        <ThemeProvider theme={theme} >
            <Container maxWidth='xl'   sx={{ bgcolor: '#cfe8fc',
                backgroundImage: `url(https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 1920,
                backgroundPosition: 'center',
                justifyContent:'center',
                align: 'center',
                mt:10,
                mb:15
            }}>

                <Paper sx={{ p: 10,m:10, display: 'flex', flexDirection: 'column',maxWidth:950}}>

                    <h2 align={'center'}>Student Group Details</h2>
                    <h3 align="right">Student Group Count: {count}</h3>
                    <br/>
                    <Table size="small" sx={{ maxWidth: 950 }}  component={Paper} elevation={7}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Group name</TableCell>
                                <TableCell>Leader name</TableCell>
                                <TableCell>Supervisor name</TableCell>
                                <TableCell>Co-supervisor name</TableCell>
                                <TableCell align={"center"}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {groups.map((group) => (
                                <TableRow key={group._id}>
                                    <TableCell>{group.name}</TableCell>
                                    <TableCell>{group.leader}</TableCell>
                                    <TableCell>{group.supervisor}</TableCell>
                                    <TableCell>{group.co_supervisor}</TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={1} align="right">

                                            <IconButton color="info" aria-label="add to shopping cart" onClick={()=>{ViewAGroup(group.name)}}>
                                                <VisibilityIcon />
                                            </IconButton>
                                            <Button type={"button"} variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={()=>{handleToggle2(group._id)}}>
                                                Delete
                                            </Button>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                            <div>
                                <Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                    open={open}
                                    onClick={handleClose}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                               Group Name: {group.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.primary">
                                                Group Leader: {group.leader}
                                            </Typography>

                                            <Typography variant="body2" color="text.primary">
                                                Group Supervisor: {group.supervisor}
                                            </Typography>
                                            <Typography variant="body2" color="text.primary">
                                                Group Co-Supervisor: {group.co_supervisor}
                                            </Typography>

                                            <Typography variant="body2" color="text.primary">
                                                Group members: {group.member2}, {group.member3} and {group.member4}
                                            </Typography>
                                        </CardContent>
                                        {/*<CardActions>*/}
                                        {/*    <Button size="small">Share</Button>*/}
                                        {/*    <Button size="small">Learn More</Button>*/}
                                        {/*</CardActions>*/}
                                    </Card>
                                </Backdrop>

                                <Dialog
                                    open={open2}
                                    onClose={handleClose2}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                        {"Warning!"}
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Do you want to delete this group?
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose2}>Disagree</Button>
                                        <Button onClick={()=>{deleteGroup(id)}} autoFocus>
                                            Agree
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        </TableBody>
                    </Table>
                </Paper>
            </Container>

        </ThemeProvider>
    );
}