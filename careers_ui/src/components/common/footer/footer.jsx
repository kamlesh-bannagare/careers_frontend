import React from 'react';
import { Box, Container, Grid, Link, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#3B71CA', color: 'white', py: 5 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    {/* Company Info */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#f1c40f' }}>
                                Contact Us
                            </Typography>
                            <Typography variant="body2" paragraph>
                                India.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                Email: <Link href="mailto:kamleshbannagare1@gmail.com" color="inherit" underline="hover">kamleshbannagare1@gmail.com</Link>
                            </Typography>
                            <Typography variant="body2" paragraph>
                                Phone: <Link href="tel:+917066884596" color="inherit" underline="hover">+91-7066884596</Link>
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Social Media Icons */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#f1c40f' }}>
                                Follow Us
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <IconButton href="#" color="inherit" sx={{ '&:hover': { color: '#f1c40f' } }}>
                                    <Facebook />
                                </IconButton>
                                <IconButton href="#" color="inherit" sx={{ '&:hover': { color: '#f1c40f' } }}>
                                    <Twitter />
                                </IconButton>
                                <IconButton href="#" color="inherit" sx={{ '&:hover': { color: '#f1c40f' } }}>
                                    <LinkedIn />
                                </IconButton>
                                <IconButton href="#" color="inherit" sx={{ '&:hover': { color: '#f1c40f' } }}>
                                    <Instagram />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* Copyright */}
                <Box sx={{ textAlign: 'center', mt: 5 }}>
                    <Typography variant="body2">
                        &copy; {new Date().getFullYear()} The Careers World. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
