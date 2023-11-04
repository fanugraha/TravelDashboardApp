import  { Component } from 'react';
// import "./PromoStyle.css";
import "./PromoStyle.css";
import { axiosConfig } from '../../axios-config';
import { Container, Card, Group, 
    Text, Title, Rating,
    Box, Badge, Flex, 
    Image, 
    Grid,
    GridCol, Button} from '@mantine/core';

import { Link } from 'react-router-dom';
import Sidebar from '../side-bar/SideBar';
import Swal from 'sweetalert2';


class PromoDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [], // Data will be fetched from the API
          id: ''
        };
    }
    
    componentDidMount() {
    console.log('promo detail')
    let url = window.location.pathname;
    let idUrl = url.substring(url.lastIndexOf('/') + 1);





    // Fetch data from the API
    axiosConfig
        .get(`/api/v1/promo/${idUrl}`)
        .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data.data });
        })
        .catch((error) => {
        console.error('Error fetching data:', error);
        });
    }

    deletePromo(){
        let url = window.location.pathname;
        let idUrl = url.substring(url.lastIndexOf('/') + 1);
        console.log("id " + idUrl);
        axiosConfig
        .delete(`/api/v1/delete-promo/${idUrl}`)
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
        // const { data } = this.state;

        const { data } = this.state;

        if (!data) {
            return <div></div>; // Show loading message while data is being fetched
        }

        console.log(data.size == 0 );
        return  (
            <div>
             <Grid>
                <Flex justify="center">
                <GridCol span={{span : "4", md: "4", lg:"4", sm: "4" }} >
                    <Sidebar/>
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
                src={data.imageUrl}
                alt="Norway"
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
                    Code : {data.promo_code}
                </Badge>
            </Group>

            <Group justify="flex-start" mt="md" mb="xs">
                
                <Badge color="blue" variant="light">
                    Promo : {data.promo_discount_price} 
                </Badge>
                
                <Badge color="pink" variant="light">
                     Minimum Claim : {data.minimum_claim_price}
                </Badge>
            </Group>

            

            
                <Text   variant="text">
                   {data.description}
                </Text>

                <Text variant="text" style={{marginTop: '20px'}}>
                    Term Condition : 
                        {data.terms_condition}
                </Text>

                
            
 
                <Flex justify="flex-end" style={{marginTop : "20px"}}>

                    <Button variant="filled" justify="flex-end" size="sm" style={{marginRight : "15px"}}>
                        <Link to={`/promo-update/${data.id}`} style={{textDecoration: "none", color: "white"}}>
                            Edit
                        </Link>
                    </Button>
                
                    <Button variant="default" justify="flex-end" size="sm" onClick={this.deletePromo} >
                        Delete
                    </Button>
                </Flex>
   
            
            
            </Card>
                </GridCol>
                </Flex>
            </Grid> 
        
            </div>
        )
    }

}

export default PromoDetail;