import React, { Component } from 'react';

import { axiosConfig } from '../../axios-config';

import { Button, Flex, Card, Image, Text, Badge, Group, Box, Container, Rating, Title, Grid,  GridCol  } from '@mantine/core';
import { Link } from 'react-router-dom';

class Category extends Component 
{

    constructor(props) {
        super(props);
    
        // Initialize component state if needed
        this.state = {
          data: [],
          activity: [],
          activityId : '40454f69-cc57-4272-b85a-e4d2c1db5aa6'
        };
    }


    filterCategory = (data) => {
        const filterKeywords = ['Beach', 'Park', 'Kuliner', 'Education', 'Nature'];

        // Lakukan filter pada array
        const filteredData = data.filter(item => filterKeywords.includes(item.name));

        return filteredData;
    }

    handlerButtonCat = (e) => {
        

        console.log(e)
        console.log(e.target.getAttribute("data-name"));
    }

    componentDidMount (){
        axiosConfig
        .get("/api/v1/categories")
        .then((res) => {
            console.log(res.data.data)
            this.setState({data: res.data.data});
        })
        .catch(err => {
            console.log(err);
        });

        axiosConfig
        .get(`/api/v1/activities-by-category/${this.state.activityId}`)
        .then((res) => {
            this.setState({activity: res.data.data});
        })
        .catch(err => {
            console.log(err);
        });
        
    }

    handleButtonClick = (event) => {
        let dataId = event.target.getAttribute("data-id");
        
        // console.log(event.currentTarget);
        // console.log(event);
        // console.log(event.target);

        this.setState({activityId: dataId});
        axiosConfig
        .get(`/api/v1/activities-by-category/${dataId}`)
        .then((res) => {
            console.log(res.data.data);    
            this.setState({activity: res.data.data});
        })
        .catch(err => {
            console.log(err);
        });
      };


    render(){
        const {data, activity} = this.state;
        return (
        <Container fluid fw="100" >
        {/* <Container size="md"> */}

        <Grid>
            
                    {data.map(item => (
                        <GridCol  span={{span : "12", md: "3", lg:"3", sm: "4" }} key={item.id}>
                        <div >                            
                                <Button variant="filled" data-id={item.id}
                                    onClick={this.handleButtonClick}>{item.name} </Button>
                        </div>
                        </GridCol>
                    ))} 
           
        </Grid>


        <Grid >
            <GridCol  span={{span : "12", md: "12", lg:"12", sm: "12" }} style={{display: "flex", justifyContent: "flex-end", marginTop: "35px"}}>
                    <Link to="/activity-create" style={{textDecoration : "none"}}>
                        <Button leftSection="+" variant="filled">Create</Button>
                    </Link>
            </GridCol>
        </Grid>

        <div>

        <Container fluid>
            <Grid>
            <Flex style={{width: "100%"}} justify="flex-start" wrap="wrap">
            {activity.map(item => (
                <GridCol key={item.id} span={{span : "6", md: "6", lg:"6", sm: "6" }}>
                    <Card
                    key={item.id}
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
                    <Card.Section >
                        <Image
                        src={item.imageUrls}
                        alt="Norway"
                        radius="md"
                        fit="contain"
                        />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                        <Title size="h3">{item.title}</Title>
                        
                        <Badge color="pink" variant="light">
                            {item.city}
                        </Badge>
                    </Group>

                    <Rating
                            value={item.rating}
                            readOnly
                            color="yellow" 
                        />

                    <Box  style={{marginTop : "15px", height: "150px"}}>
                        <Text size="sm" c="dimmed" lineClamp={5}>
                        {item.description}
                        </Text>
                    </Box>
                    
                    <Flex justify="flex-end">
                        
                    <Button variant="filled" justify="flex-end" size="sm">
                        <Link to={`/activity-detail/${item.id}`} style={{textDecoration: "none", color: "white"}}>
                            Detail
                        </Link>
                    </Button>
                
                        </Flex>
                </Card>
                </GridCol>
                
                
                ))}
            </Flex>
          </Grid>
        </Container>
            
        </div>
        {/* </Container> */}
        </Container>
        )
    }
}


export default Category;