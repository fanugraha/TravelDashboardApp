import React, { Component } from 'react';

import { axiosConfig } from '../../axios-config';
import { Card, 
    Text, 
    Avatar,
    Button,
    Flex,
    Modal,
    Container,
    Grid,
    TextInput,
    Select
 } from '@mantine/core';
 import ModalUser from './ModalUser';
 import Sidebar from '../side-bar/SideBar';
import { Link } from 'react-router-dom';

// eslint-disable-next-line no-undef


class UserPage extends Component {


    constructor(props) {
        super(props);
    
        // Initialize component state if needed
        this.state = {
          counter: 0,
          data : [],
          isOpenPup: false
        };
    }



    openModal = () => {
        console.log(!this.state.isOpenPup)
        this.setState({ isOpenPup: !this.state.isOpenPup });
    }

    closeModal = () => {
        this.setState({ isOpenPup: false });
      }

    componentDidMount (){
        axiosConfig
      .get("/api/v1/all-user")
      .then((res) => {
        this.setState({data: res.data.data})
      })
      .catch(err => {
        console.log(err);
      });
    }

    render(){
        const {data} = this.state;
        return (
        
          <Container fluid>
            <Grid>
              <Grid.Col span={3}>
                <Sidebar />
              </Grid.Col>

              <Grid.Col span={9}>

                <Flex direction="column" align="center">
                  <h1 style={{textAlign : 'center'}}>User List</h1>
                
                  {data.map(item => (
                  <Card
                      shadow="sm" padding="lg" radius="md" withBorder
                      key={item.id}
                      style={{ marginBottom: '20px', width: '40%' }}
                      css={{
                          '&:hover': {
                              transform: 'scale(1.05)',
                              boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
                              transition: 'transform 0.3s, box-shadow 0.3s',
                            }
                      }}
                  >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                      
                      <div>
                          <Avatar
                              src={item.profilePictureUrl}
                              alt={`Avatar of ${item.name}`}
                              size="lg"
                              style={{ marginRight: '16px' }}
                          />
                          <Text size="xl">{item.name} - <b>{item.role}</b></Text>
                          <Text size="sm" color="gray">
                          {item.email}
                          </Text>
                      </div>
                      <Flex>
{/*                       
                      <ModalUser
                      opened={this.state.isOpenPup}
                      onClose={this.closeModal}
                      /> */}

                          {/* <Modal
                          title="Modal Title"
                          opened={this.state.isOpenPup}
                          onClose={this.closeModal}
                          transitionProps={{ transition: 'fade', duration: 0 }}
                          transition="none"
                          >
                           <Select 
                            id="user-role"
                            label="User Role"
                            placeholder="Role"
                            data={[
                              {label: "User", value: "user"},
                              {label: "Admin", value: "admin"}
                            ]}
                           >

                           </Select>
                          </Modal>
                          <Button justify='flex-end' onClick={this.openModal}>Click Me</Button> */}

                          <Button justify='flex-end' color="blue">
                            <Link to={`/user-role/${item.id}`} style={{textDecoration: "none", color: "white"}}>
                              Edit
                            </Link>
                          </Button>
                      </Flex>
                      
                      </div>
                  </Card>
                  ))}
                </Flex>

              </Grid.Col>
            </Grid>
         </Container>
          
        //   <ul>
        //   {
        //     // eslint-disable-next-line no-undef
        //     data.map(item => (
        //     <>
        //     <img src={item.profilePictureUrl}></img>
        //     <li key={item.id}>{item.name} - {item.email}</li>
        //     <li>{item.role}</li> <button data-id={item.id} onClick={this.handleClick}>Edit</button>
        //     </>
        //   ))}
        //   </ul>
          )
        
    }

}

export default UserPage;