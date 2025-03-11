import React from 'react';
import { Container, Grid, Paper, Typography, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { FaVideo, FaFileAlt, FaShoppingCart } from 'react-icons/fa';
import { useAdvisor } from '../context/AdvisorContext';
import './AdvisorDashboard.css'; // Import the CSS file for styling

const AdvisorDashboard = () => {
  const { advisor, messages, services, progress, addMessage, addService, addProgress } = useAdvisor();

  const handlePurchaseService = (service) => {
    console.log(`Purchased service: ${service}`);
    addService(service);
  };

  return (
    <Container className="advisor-dashboard">
      <Typography variant="h4" gutterBottom>Your Advisor: {advisor}</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className="section">
            <Typography variant="h6">Communication</Typography>
            <Button startIcon={<FaVideo />} variant="contained" color="primary">Schedule Video Call</Button>
            <Button startIcon={<FaFileAlt />} variant="contained" color="secondary">Share Document</Button>
            <List>
              {messages.map((message, index) => (
                <ListItem key={index}>
                  <ListItemText primary={message} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="section">
            <Typography variant="h6">Service Catalog</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Personalized Coaching Session" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={() => handlePurchaseService('Personalized Coaching Session')}>
                    <FaShoppingCart />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary="Relationship Advice Package" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={() => handlePurchaseService('Relationship Advice Package')}>
                    <FaShoppingCart />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary="Monthly Check-ins" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={() => handlePurchaseService('Monthly Check-ins')}>
                    <FaShoppingCart />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className="section">
            <Typography variant="h6">Progress Tracker</Typography>
            <List>
              {progress.map((milestone, index) => (
                <ListItem key={index}>
                  <ListItemText primary={milestone} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdvisorDashboard;
