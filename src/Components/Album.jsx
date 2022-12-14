import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {  useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import {Auth} from '../Context/api';
import { useContext } from 'react';
const theme = createTheme();

export default function Album() {
  const [cards,setCards] = useState([]);
  const navigator = useNavigate();
  const {user} = useContext(Auth);
  const handlelogin=()=>{
    navigator('/login')
  }
  const handledata=()=>{
     axios.get('https://openstreetcity.herokuapp.com/city').then(({data})=>{
        console.log(data);
        setCards(data)
     }).catch((e)=>{
        console.log(e.message);
     })
  }
  
  React.useEffect(()=>{
      handledata()
  },[])
  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          {user? (<Grid container spacing={4}>
          {cards.map((card) => (
              <Grid item key={card._id} xs={12} sm={6} md={4}>
                 
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onClick={()=>{navigator("/map/parameter-data", {
                    state: { lat:card.location.lat , lng:card.location.lng ,name:card.name },
                  })}}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>)
            : <h2>User not logged in</h2> }
        </Container>
      </main>
    </ThemeProvider>
  );
}
