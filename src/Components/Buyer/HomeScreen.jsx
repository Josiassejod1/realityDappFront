import { Box, Text, Flex, Image, Center } from '@chakra-ui/react';
import { SearchBar } from '../../stories/Components/SearchBar';
import './HomeScreen.css';
import { RentalList } from '../../stories/Components/RentalList';
import { IconList } from '../../stories/Components/IconList';

function HomeScreen() {
  const data = [
    {
      id: 0,
      currency: 'ETH',
      amount: 1.4,
      type: 'Home',
      address1: '34 White Lily Ct',
      listing_id: 1,
      city: 'Sacramento',
      state: 'CA',
      zipcode: '95833',
      price: '625000',
      beds: '3',
      baths: '4',
      src: 'https://bafkreidao7wigddtsp7gwxuvxcheelt5rh2uo5talgbbcvyqq6bgkk43by.ipfs.dweb.link/',
      sqft: '3444',
      description:
        'Welcome to the newest neighborhood within the Twelve Bridges master-planned community in Lincoln, CA. Envision exquisite architecture paired with flexible floorplans – designed for energetic families.',
      coordinates: [38.61039, -121.5386],
    },
    {
      id: 1,
      currency: 'ETH',
      amount: 1.4,
      address1: '2419 Linden St',
      listing_id: 5,
      type: 'Town House',
      city: 'Oakland',
      state: 'CA',
      zipcode: '94607',
      price: '650000',
      beds: '2',
      baths: '3',
      sqft: '2000',
      src: 'https://bafkreigfrphsofaldcuhajes7ujhc3t2clu5ucqu6eu5pco3eked4ymhsa.ipfs.dweb.link/',
      description:
        'Discover a new home experience tucked away within the Solaire master-planned community in Roseville, CA. Offering single & two-story homes with unique spaces to work & play.',
      coordinates: [37.81716, -122.28139],
    },
    {
      id: 2,
      currency: 'ETH',
      amount: 1.4,
      address1: '9435 Tensil Town',
      type: 'Apartment',
      city: 'San Jose',
      state: 'CA',
      zipcode: '95624',
      price: '773000',
      beds: '2',
      listing_id: 6,
      baths: '4',
      sqft: '2200',
      src: 'https://bafybeiekwpovqccbj7hgy3hbgcnrt7gjwhgrz42477ykqmkn5yrhjj62aq.ipfs.dweb.link/',
      description:
        'Discover a new home experience tucked away within the In SF',
      coordinates: [37.3382, 121.8863],
    },
    {
      id: 3,
      currency: 'ETH',
      amount: 1.4,
      type: 'Apartment',
      address1: 'Sutter address1 Way',
      city: 'San  Francisco',
      state: 'CA',
      zipcode: '94129',
      price: '773000',
      beds: '2',
      listing_id: 7,
      baths: '4',
      sqft: '2200',
      src: 'https://bafkreifz4ovfmblqh7wbyapufkp4pva6vf6iuwdt7r5bf567pxg3hx6emq.ipfs.dweb.link/',
      description: 'Discover the beautiful sites',
      coordinates: [37.7749, 122.4194],
    },
  ];
  return (
    <Box className="container">
        <Box id="abstract_figure_1"></Box>
        <Box id="abstract_figure_2"></Box>
        <Box id="abstract_figure_3"></Box>
      <Flex>
        <Flex id="slogan_div">
          <Box>
            <Text className="screen_text" id="slogan">
              Making renting easy using crypto
            </Text>
            <Text className="screen_text" id="description">
              Your renting process is as easy as 1,2,3 with our all in one
              platform.
            </Text>
            <SearchBar />
          </Box>

          <Image src="moving.png" />
        </Flex>
      </Flex>
      <Box>
        <ListingSection title="Rentals Near You" data={data}/>
      </Box>
      <Box>
          <Center>
            <Text className="screen_text" id="category_header">All in one platform</Text>
          </Center>
          <Center>
          <Text className='screen_text' id='icon_div_description'>Eu, molestie commodo, enim pellentesque turpis integer sagittis</Text>
          </Center>
          <Center>
              <IconList/>
          </Center>
      </Box>
    </Box>
  );

  
}

function ListingSection(props) {
    const data =  props.data;
    const title =  props.title;
    return(
        <Box>
        <Text className="screen_text" id="category_header">{title}</Text>
        <RentalList data={data} />
      </Box>
    );
}

export default HomeScreen;
