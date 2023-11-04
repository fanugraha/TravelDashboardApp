/* eslint-disable no-unused-vars */
import  { Component } from 'react';
import { Card, Paper, TextInput, Button, Container, Select, Grid } from '@mantine/core';
import { axiosConfig } from '../../axios-config';
import { Navigate, Outlet } from "react-router";
import { redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

class UserRole extends Component 
{

    constructor(props) {
        super(props);

        console.log(this.props)
    
        this.state = {
          inputValue: '',
          submittedValue: '',
          selectedOption : '',
          succes: false
        };
      }

      handleSelectChange = (value) => {
        this.setState({ selectedOption: value });
      }
      handleSubmit = () => {
        let url = window.location.href;
        let urlSplit = url.split("/");
        console.log(this.state.selectedOption)
        axiosConfig
        .post("/api/v1/update-user-role/" +urlSplit[4], {role: this.state.selectedOption})
        .then((res) => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User was successfully updated',
                showConfirmButton: false,
                timer: 1500
              })
            window.location.href = '/';
        })
        .catch(err => {
            console.log(err);
        });

        // this.setState({ submittedValue: this.state.inputValue });
      };

    render() {
        
        let url = window.location.href;
        let urlSplit = url.split("/");

    

        return (
            <Container>
                
                <Card shadow="lg" padding="lg">
                    <h3>Edit User Role</h3>
                    
                    <Select
                     mt={8}
                     id="role"
                     label="User Role"
                     placeholder="Role"
                     data={[
                         { label: "User", value: "user" },
                         { label: "Admin", value: "admin" }
                     ]}
                     onChange={this.handleSelectChange}
                     value={this.state.selectedOption}
                    />

                    {/* <Button variant="outline" onClick={this.handleSubmit} size="md">
                    Kirim
                    </Button>
                    <Button variant="outline" onClick={this.handleSubmit} fw>
                    Cancel
                    </Button> */}
                    <Grid style={{marginTop: "35px"}}>
                        <Grid.Col span={6}>
                            <Button justify="center" fullWidth  variant="filled" color="indigo" onClick={this.handleSubmit}>
                                Update
                            </Button>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Button justify="center" fullWidth  variant="default">
                                Cancel
                            </Button>
                        </Grid.Col>
                    </Grid>
                    
                    {this.state.submittedValue && (
                        <Paper padding="sm" className="mt-4">
                        <p>Nilai yang Anda masukkan: {this.state.inputValue}</p>
                        </Paper>
                    )}
                </Card>
            </Container>
        )
    }
}

export default UserRole;