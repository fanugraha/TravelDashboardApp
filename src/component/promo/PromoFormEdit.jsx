import  { Component } from 'react';
import { axiosConfig } from '../../axios-config';
import { Container, 
    Card, 
    Input, 
    Button,
    Grid,
    GridCol,
    Text,
    Title,
    Center,
    NumberInput
 } from '@mantine/core';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

class PromoFormEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
          title: '',
          description: '',
          imageUrl: '',
          terms_condition: '',
          promo_code: '',
          promo_discount_price: 0,
          minimum_claim_price:0
        };
      }
    
      handleInputChange = (e) => {
        this.setState({ title: e.target.value });
      }

      handleDescription = (e) => {
        this.setState({description : e.target.value});
      }

      handleImage = (e) => {
        this.setState({imageUrl : e.target.value});
      }

      handleTerm = (e) => {
        this.setState({terms_condition : e.target.value});
      } 

      handlePromoCode = (e) => {
        this.setState({promo_code : e.target.value});
      } 

      handlePromoDisc = (e) => {
        this.setState({promo_discount_price : parseInt(e.target.value)});
      } 

      handleMinClaim = (e) => {
        this.setState({minimum_claim_price : parseInt(e.target.value)});
      } 



      componentDidMount(){
        let url = window.location.href;
        let urlSplit = url.split("/");
        axiosConfig
        .get(`/api/v1/promo/${urlSplit[4]}`)
        .then((res) => {
            const response = res.data.data;
            this.setState({
                title: response.title || '',
                description: response.description || '',
                imageUrl: response.imageUrl || '',
                terms_condition: response.terms_condition || '',
                promo_code: response.promo_code || '',
                promo_discount_price: response.promo_discount_price || 0,
                minimum_claim_price: response.minimum_claim_price || 0
              });
            // Swal.fire({
            //     position: 'center-start',
            //     icon: 'success',
            //     title: 'Promo was successfully created!',
            //     showConfirmButton: false,
            //     timer: 1500
            //   });
            // window.location.href = "/";
        })
        .catch(err => {
            console.log(err);
        });
      }
      

      handleSaveClick = () => {
        // Lakukan permintaan API dengan menggunakan Axios
        // const { inputValue } = this.state;
      
          // Buat objek payload dengan data yang akan dikirimkan
          const payload = {
            "title": this.state.title,
            "description": this.state.description,
            "imageUrl": this.state.imageUrl,
            "terms_condition": this.state.terms_condition,
            "promo_code":this.state.promo_code,
            "promo_discount_price": this.state.promo_discount_price,
            "minimum_claim_price": this.state.minimum_claim_price
          };
        
        axiosConfig
        .post("/api/v1/update-promo/13e88f97-352a-4357-8c5b-7564e626fcb4", payload)
        .then((res) => {
            console.log(res.data)
            Swal.fire({
                position: 'center-start',
                icon: 'success',
                title: 'Promo was successfully created!',
                showConfirmButton: false,
                timer: 1500
              });
            window.location.href = "/";
        })
        .catch(err => {
            console.log(err);
        });
      }

    render(){
        const inputStyle = {
            marginTop: '25px', // Ganti dengan tinggi margin yang Anda inginkan
        };


        const buttonStyle = {
            marginTop: '30px'
        };


        return (
            <Container>
                <Center><Title size="h1" >Create Promo</Title></Center>
                <Card shadow="xs" padding="md" spacing="md">
                <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    placeholder="title"
                />

                <Input
                    value={this.state.description}
                    onChange={this.handleDescription}
                    placeholder="Description"
                    style={inputStyle}
                />

                <Input
                    value={this.state.imageUrl}
                    onChange={this.handleImage}
                    placeholder="ImageUrl"
                    style={inputStyle}
                />

                <Input
                    value={this.state.terms_condition}
                    onChange={this.handleTerm}
                    placeholder="term condition"
                    style={inputStyle}
                />

                <Input
                    value={this.state.promo_code}
                    onChange={this.handlePromoCode}
                    placeholder="promo code"
                    style={inputStyle}
                />

                <Input
                    type="number"
                    value={this.state.promo_discount_price}
                    onChange={this.handlePromoDisc}
                    placeholder="promo code"
                    style={inputStyle}
                />

                


                <Input
                    type="number"
                    value={this.state.minimum_claim_price}
                    onChange={this.handleMinClaim}
                    placeholder="Minimum Claim Price"
                    style={inputStyle}

                />


                <Grid style={buttonStyle}>
                    <GridCol span="6">
                        <Center>
                        <Button 
                            onClick={this.handleSaveClick} >
                                Update
                                </Button>
                         </Center>
                    </GridCol>
                    <GridCol span="6">
                          <Link to={`/`} style={{textDecoration: "none", color: "white"}}>
                            <Button 
                              onClick={this.handleCancelClick} 
                              variant="default" >
                                  Cancel</Button>
                            </Link>
                        
                    </GridCol>
                </Grid>
               
                
                </Card>
            </Container>
        )
    }


}

export default PromoFormEdit;