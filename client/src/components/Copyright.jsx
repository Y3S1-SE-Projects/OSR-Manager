import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright(props) {
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