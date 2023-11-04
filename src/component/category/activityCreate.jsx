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
    Select,
    TextInput,
    NumberInput,
    Flex
 } from '@mantine/core';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

class ActivityCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
          title: '',
          description: '',
          imageUrls: '',
          price: 0,
          price_discount: 0,
          rating: 0,
          total_reviews:0,
          facilities:'',
          address:'',
          province:'',
          city:'',
          location_maps:'',

          category: [],
          categorySelected: ''
        };
      }
    
      handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log("name" +name)
        this.setState({ [name]: value });
      };


      categorySelect = (event) => {
        // console.log("event " + event)
        this.setState({categorySelected : event});
        
      }



      componentDidMount(){
        axiosConfig
        .get("/api/v1/categories")
        .then((res) => {
            // console.log(res.data);
            this.setState({category : res.data?.data});
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
            categoryId: this.state.categorySelected,
            title: this.state.title,
            description: this.state.description,
            imageUrls: [this.state.imageUrls],
            price: this.state.price,
            price_discount: this.state.price_discount,
            rating: this.state.rating,
            total_reviews:this.state.total_reviews,
            facilities:this.state.facilities,
            address:this.state.address,
            province:this.state.province,
            city:this.state.city,
            location_maps:this.state.location_maps,
          };

          console.log(payload)
        
        axiosConfig
        .post("/api/v1/create-activity", payload)
        .then((res) => {
            console.log(res.data)
            Swal.fire({
                position: 'center',
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
            marginTop: '30px', // Ganti dengan tinggi margin yang Anda inginkan
        };


        const buttonStyle = {
            marginTop: '30px'
        };


        const { category } = this.state;
        // console.log("category " + category.length)
        // console.log(category);

        if (!category) {
            return <div></div>; // Show loading message while data is being fetched
        }


        const transformedData = category.map(item => ({
            label: item.name,
            value: item.id
          }));

        return (
            
            <Container>
                <Center><Title size="h1" >Create Activity</Title></Center>
                <Card shadow="xs" padding="md" spacing="md">

                <Select
                     mt={8}
                     id="role"
                     label="Kategori"
                     placeholder="Kategori"
                     data={transformedData}
                     onChange={this.categorySelect}
                     value={this.state.categorySelected}
                     name="categorySelected"
                    />
                <TextInput
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    placeholder="Input title"
                    name="title"
                    label="title"
                    style={inputStyle}
                />

                 <TextInput
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    placeholder="Description"
                    style={inputStyle}
                    name="description"
                    label="description"
                />

                <TextInput
                    value={this.state.imageUrls}
                    onChange={this.handleInputChange}
                    placeholder="ImageUrl"
                    style={inputStyle}
                    name="imageUrls"
                    label="imageUrl"
                />


                <NumberInput
                    type="number"
                    value={this.state.price}
                    onChange={(value) => {
                        this.setState({ price: parseInt(value) })
                    }}
                    placeholder="price"
                    style={inputStyle}
                    name="price"
                    label="price"
                />

                 <NumberInput
                    type="number"
                    value={this.state.price_discount}
                    onChange={(value) => {
                        this.setState({ price_discount: parseInt( value) })
                    }}
                    placeholder="harga diskon"
                    style={inputStyle}
                    name="price_discount"
                    label="harga diskon"
                />

                <NumberInput
                    type="number"
                    value={this.state.rating}
                    onChange={(value) => {
                        this.setState({ rating: parseInt(value) })
                    }}
                    placeholder="rating"
                    style={inputStyle}
                    name="rating"
                    label="rating"
                />

                


                <NumberInput
                    type="number"
                    value={this.state.total_reviews}
                    onChange={(a) => {
                        this.setState({ total_reviews: parseInt(a) })
                    }}
                    placeholder="Minimum Claim Price"
                    style={inputStyle}
                    
                    name="minimum_claim_price"
                    label="minimum claim price"
                />


                <TextInput
                    value={this.state.facilities}
                    onChange={this.handleInputChange}
                    placeholder="fasilitas"
                    style={inputStyle}
                    name="facilities"
                    label="fasilitas"
                />

                <TextInput
                    value={this.state.address}
                    onChange={this.handleInputChange}
                    placeholder="address"
                    style={inputStyle}
                    name="address"
                    label="address"
                />

                <TextInput
                    value={this.state.province}
                    onChange={this.handleInputChange}
                    placeholder="provinsi"
                    style={inputStyle}
                    name="province"
                    label="provinsi"
                />

                <TextInput
                    value={this.state.city}
                    onChange={this.handleInputChange}
                    placeholder="kota"
                    style={inputStyle}
                    name="city"
                    label="kota"
                />


                <TextInput
                    value={this.state.location_maps}
                    onChange={this.handleInputChange}
                    placeholder="lokasi"
                    style={inputStyle}
                    name="location_maps"
                    label="lokasi"
                />



                <Grid style={buttonStyle}>
                <GridCol span="12">
                    <Flex justify="flex-end" >
                        <Button 
                            onClick={this.handleSaveClick} style={{marginRight: "25px"}} >
                                Save
                        </Button>
                        <Button 
                            onClick={this.handleCancelClick} 
                            variant="default" >
                           <Link to="/" style={{textDecoration: 'none', color: "black"}}>Cancel</Link>
                        </Button>

                        
                    </Flex>
                    </GridCol>
                </Grid>
                
                </Card>
            </Container>
        )
    }


}

export default ActivityCreate;