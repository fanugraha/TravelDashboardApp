import React, { Component } from 'react';

import { axiosConfig } from '../../axios-config';

import { Button, Flex, Card, Image, Text, Badge, Group, Box, Container, Rating, Title, Grid, GridCol, Paper, Center  } from '@mantine/core';
import { Link } from 'react-router-dom';
import Sidebar from '../side-bar/SideBar';
import Swal from 'sweetalert2';

class CategoryDetail extends Component 
{

    constructor(props) {
        super(props);

        this.state = {
            data : []
        }
    }

    async componentDidMount(){
        let url = window.location.pathname;
        let id = url.substring(url.lastIndexOf('/') + 1);
        await axiosConfig.get(`/api/v1/activity/${id}`)
        .then(res => {
            console.log('di')
            console.log(res.data.data['category'].name);
            this.setState({data : res.data.data});
        })
        .catch(err => {
            console.log(err);
        })
    }


    delete(){
        let url = window.location.pathname;
        let idUrl = url.substring(url.lastIndexOf('/') + 1);
        console.log("id " + idUrl);
        axiosConfig
        .delete(`/api/v1/delete-activity/${idUrl}`)
        .then((res) => {
            console.log(res.data);    
            Swal.fire(res.data.message);
            window.location.href = "/";
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        const {  data } = this.state;
        const categoryName = data?.category?.name;
        return (
            <Container fluid>
                <Grid>
                    <Flex justify="center">
                    <GridCol span={{span : "4", md: "4", lg:"4", sm: "4" }} >
                        <Sidebar />
                    </GridCol>
                    <GridCol span={{span : "6", md: "6", lg:"6", sm: "6" }} >
                        
                    <Card
                key={data.id}
                shadow="md" padding="md" radius="md" withBorder
                css={{
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                      }
                }}
                style={{ marginTop: '20px', marginRight: '20px' }}
            >
                <Card.Section>
                    <Image
                    src={data.imageUrls}
                    alt={data.title}
                    radius="md"
                    h="100%"
                    w="100%"
                    fit="contain"
                    // style={{marginRight: '80px'}}
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Title size="h3">{data.title}</Title>
                    
                    <Badge color="pink" variant="light">
                        {data.city}
                    </Badge>
                </Group>

                <Group justify="flex-start" mt="md" mb="xs">
                    
                    <Badge color="blue" variant="light">
                        {data.total_reviews} reviews
                    </Badge>
                    
                    <Badge color="pink" variant="light">
                         {categoryName}
                    </Badge>
                </Group>

                <Rating
                        value={data.rating}
                        readOnly
                        color="yellow" 
                    />

                
                    <Text size="sm" c="dimmed">
                       {data.description}
                    </Text>

                    
                
     
                    <Flex justify="flex-end">
                    
                      
                        <Button variant="filled" justify="flex-end" size="sm" style={{marginRight : "15px"}}>
                            <Link to={`/activity-update/${data.id}`} style={{textDecoration: "none", color: "white"}}>
                                Edit
                            </Link>
                        </Button>

                        <Button variant="default" justify="flex-end" size="sm" onClick={this.delete} >
                            Delete
                        </Button>

                       
              
                    </Flex>
       
                
                
                </Card>
                    </GridCol>
                    </Flex>
                </Grid>
                
            </Container>

        )
    }
}


export default CategoryDetail;