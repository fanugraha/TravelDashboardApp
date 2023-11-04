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
import Sidebar from '../side-bar/SideBar';
import { Link } from 'react-router-dom';


class Promo extends Component {

    constructor(props) {
        super(props);
    
        // Initialize component state if needed
        this.state = {
          data: []
        };
    }



    componentDidMount (){
        axiosConfig
        .get("/api/v1/promos")
        .then((res) => {
           
            this.setState({data: res.data.data});
           
            this.setState({data: res.data.data});
        })
        .catch(err => {
            console.log(err);
        });
    
    }


    render() {
        const {data} = this.state;
        return  (
              <Grid>
                <GridCol span={{span : "12", md: "12", lg:"12", sm: "6" }}>
                    <Flex justify="flex-end">
                        <Button
                            variant="filled"
                            leftSection={"+"}
                            >
                                <Link to={`/promo-create`} style={{color: "white", textDecoration: "none"}}>
                                Create
                                </Link>
                                
                        </Button>
                    </Flex>
                </GridCol>
                
                
                

                {data.map(item => (
                       
                <GridCol key={item.id} span={{span : "4", md: "4", lg:"4", sm: "6" }}>
                    
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
                <Card.Section>
                    <Image
                    src={item.imageUrl}
                    alt={item.title}
                    radius="md"
                    
                    fit="contain"
                    
                    />
                </Card.Section>
                <Box style={{marginTop : "15px", height: "150px"}}>
                    <Text size="sm" c="dimmed" lineClamp={5}>
                       {item.description}
                    </Text>
                </Box>

                <Flex justify="flex-end">
                    
                <Button variant="filled" justify="flex-end" size="sm">
                    <Link to={`/promo-detail/${item.id}`} style={{textDecoration: "none", color: "white"}}>
                        Detail
                    </Link>
                </Button>
              
                    </Flex>

                        </Card>
                </GridCol>
                        
                        ))}
              </Grid>
        )
    }

}

export default Promo;