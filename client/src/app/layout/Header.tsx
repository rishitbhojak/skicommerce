import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

export default function Header(){
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Skicommerce
                </Typography>
                <Switch />
            </Toolbar>
        </AppBar>
    )
}