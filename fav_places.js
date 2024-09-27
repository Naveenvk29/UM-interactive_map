const places = [
  {
    type: "Feature",
    properties: {
      name: "Ladakh",
      description:
        "Ladakh is a region administered by India as a union territory and constitutes a part of the larger Kashmir region. Known for its dramatic landscapes, it is home to Buddhist monasteries and adventure tourism.",
      image:
        "https://cdn.britannica.com/78/132078-004-87AF867F/Thiksey-Monastery-Leh-Ladakh-India-state-Jammu.jpg",
      address: "Ladakh, India",
    },
    geometry: {
      type: "Point",
      coordinates: [78.0322, 34.1526],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Manali",
      description:
        "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination.",
      image: "./images/Manali_City.jpg",
      address: "Manali, Himachal Pradesh 175131, India",
    },
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Mount Everest",
      description:
        "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point.",
      image: "./images/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg",
      address: "Mahalangur Himal sub-range of the Himalayas, Nepal/China",
    },
    geometry: {
      type: "Point",
      coordinates: [86.925, 27.9881],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Gulmarg",
      description:
        "Gulmarg is a town, a hill station, and a popular skiing destination in the Baramulla district of Jammu and Kashmir, India. It is situated in the Pir Panjal range in the western Himalayas.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Gulmarg_Kashmir.jpg/1200px-Gulmarg_Kashmir.jpg",
      address: "Gulmarg, Jammu and Kashmir 193403, India",
    },
    geometry: {
      type: "Point",
      coordinates: [74.3794, 34.0465],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Rishikesh",
      description:
        "Rishikesh is a city in India’s northern state of Uttarakhand, in the Himalayan foothills beside the Ganges River. The river is considered holy, and the city is renowned as a center for studying yoga and meditation.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rishikesh_India.jpg/1200px-Rishikesh_India.jpg",
      address: "Rishikesh, Uttarakhand 249201, India",
    },
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Darjeeling",
      description:
        "Darjeeling is a town in India’s West Bengal state, in the Himalayan foothills. Once a summer resort for the British Raj elite, it remains the terminus of the narrow-gauge Darjeeling Himalayan Railway, or “Toy Train,” completed in 1881.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Darjeeling_Hills_from_Lebong_Tea_Estate.jpg/1200px-Darjeeling_Hills_from_Lebong_Tea_Estate.jpg",
      address: "Darjeeling, West Bengal 734101, India",
    },
    geometry: {
      type: "Point",
      coordinates: [88.2627, 27.041],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Shillong",
      description:
        "Shillong is the capital of Meghalaya, a state in northeast India. It’s known for the manicured gardens at Lady Hydari Park. Nearby Ward’s Lake is surrounded by walking trails.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Shillong-India.jpg/1200px-Shillong-India.jpg",
      address: "Shillong, Meghalaya 793001, India",
    },
    geometry: {
      type: "Point",
      coordinates: [91.8838, 25.5788],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Andaman and Nicobar Islands",
      description:
        "The Andaman and Nicobar Islands are a group of islands at the juncture of the Bay of Bengal and the Andaman Sea, known for their palm-lined, white-sand beaches, mangroves, and tropical rainforests.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Radhanagar_beach.jpg/1200px-Radhanagar_beach.jpg",
      address: "Andaman and Nicobar Islands, India",
    },
    geometry: {
      type: "Point",
      coordinates: [92.6586, 11.7401],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Coorg",
      description:
        "Coorg, also known as Kodagu, is a rural district in the southwest Indian state of Karnataka. It’s known for its coffee plantations, lush forests, and beautiful hills.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Coorg_Scenery.jpg/1200px-Coorg_Scenery.jpg",
      address: "Coorg, Karnataka 571201, India",
    },
    geometry: {
      type: "Point",
      coordinates: [75.7403, 12.3375],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Spiti Valley",
      description:
        "Spiti Valley is a cold desert mountain valley located high in the Himalayas in the north-eastern part of the Indian state of Himachal Pradesh.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Spiti_Valley%2C_Himachal_Pradesh%2C_India.jpg/1200px-Spiti_Valley%2C_Himachal_Pradesh%2C_India.jpg",
      address: "Spiti Valley, Himachal Pradesh, India",
    },
    geometry: {
      type: "Point",
      coordinates: [78.1232, 32.2468],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Ajanta Caves",
      description:
        "The Ajanta Caves are approximately 30 rock-cut Buddhist cave monuments dating from the 2nd century BCE to about 480 CE in Maharashtra, India.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ajanta_Caves_panoramic_view.jpg/1200px-Ajanta_Caves_panoramic_view.jpg",
      address: "Ajanta Caves Road, Aurangabad, Maharashtra 431117, India",
    },
    geometry: {
      type: "Point",
      coordinates: [75.7033, 20.5514],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Ellora Caves",
      description:
        "The Ellora Caves are a UNESCO World Heritage Site located in the Aurangabad district of Maharashtra, India. The site features over 100 caves excavated from the basalt cliffs in the Charanandri Hills.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Ellora_cave16_01.jpg/1200px-Ellora_cave16_01.jpg",
      address: "Ellora, Maharashtra 431102, India",
    },
    geometry: {
      type: "Point",
      coordinates: [75.1816, 20.0269],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Konark Sun Temple",
      description:
        "The Konark Sun Temple is a 13th-century CE sun temple at Konark about 35 km northeast from Puri on the coastline of Odisha, India.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Konark_Sun_Temple%2C_Odisha%2C_India.jpg/1200px-Konark_Sun_Temple%2C_Odisha%2C_India.jpg",
      address: "Konark, Odisha 752111, India",
    },
    geometry: {
      type: "Point",
      coordinates: [86.0945, 19.8876],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Jaisalmer Fort",
      description:
        "Jaisalmer Fort is a massive sandcastle rising from the sandy plains of Rajasthan, known as one of the largest fully preserved fortified cities in the world.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Jaisalmer_fortification.jpg/1200px-Jaisalmer_fortification.jpg",
      address: "Fort Road, Jaisalmer, Rajasthan 345001, India",
    },
    geometry: {
      type: "Point",
      coordinates: [70.9128, 26.9124],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Ranthambore National Park",
      description:
        "Ranthambore National Park is one of the largest national parks in northern India, covering 1,334 sq km. It is a former royal hunting ground and home to tigers, leopards, and marsh crocodiles.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tigress_at_Ranthambore.jpg/1200px-Tigress_at_Ranthambore.jpg",
      address: "Sawai Madhopur, Rajasthan 322001, India",
    },
    geometry: {
      type: "Point",
      coordinates: [76.5026, 26.0173],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Bandipur National Park",
      description:
        "Bandipur National Park is a national park covering 874 sq km, located in the Indian state of Karnataka. It is part of the Nilgiri Biosphere Reserve and known for its wildlife and various biomes.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bandipur_tiger.jpg/1200px-Bandipur_tiger.jpg",
      address: "Bandipur, Karnataka 571126, India",
    },
    geometry: {
      type: "Point",
      coordinates: [76.4656, 11.6544],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Khajuraho Group of Monuments",
      description:
        "The Khajuraho Group of Monuments is a group of Hindu and Jain temples in Madhya Pradesh, India, known for their Nagara-style architectural symbolism and their erotic sculptures.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kandariya_Mahadeva_Temple%2C_Khajuraho_04.jpg/1200px-Kandariya_Mahadeva_Temple%2C_Khajuraho_04.jpg",
      address: "Khajuraho, Madhya Pradesh 471606, India",
    },
    geometry: {
      type: "Point",
      coordinates: [79.922, 24.8318],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Hampi",
      description:
        "Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire, particularly the 7th-century Virupaksha Temple.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Hampi_virupaksha_temple.jpg/1200px-Hampi_virupaksha_temple.jpg",
      address: "Hampi, Karnataka 583239, India",
    },
    geometry: {
      type: "Point",
      coordinates: [76.4607, 15.335],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Mehrangarh Fort",
      description:
        "Mehrangarh Fort, located in Jodhpur, Rajasthan, is one of the largest forts in India. Built around 1459 by Rao Jodha, the fort is situated 410 feet above the city and enclosed by imposing thick walls.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Mehrangarh_Fort.jpg/1200px-Mehrangarh_Fort.jpg",
      address: "Fort Road, Jodhpur, Rajasthan 342001, India",
    },
    geometry: {
      type: "Point",
      coordinates: [73.8398, 26.2976],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "City Palace, Udaipur",
      description:
        "City Palace, Udaipur, is a palace complex situated in the city of Udaipur, Rajasthan. It was built over a period of nearly 400 years, with contributions from several rulers of the Mewar dynasty.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Udaipur_City_Palace_2012.jpg/1200px-Udaipur_City_Palace_2012.jpg",
      address: "Old City, Udaipur, Rajasthan 313001, India",
    },
    geometry: {
      type: "Point",
      coordinates: [73.6833, 24.576],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Taj Mahal",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Taj_Mahal-1.jpg/1200px-Taj_Mahal-1.jpg",
      address:
        "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India",
    },
    geometry: {
      type: "Point",
      coordinates: [78.0421, 27.1751],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "India Gate",
      description:
        "The India Gate is a war memorial located astride the Rajpath, on the eastern edge of the 'ceremonial axis' of New Delhi.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/India_Gate_in_New_Delhi_03-2016.jpg/1200px-India_Gate_in_New_Delhi_03-2016.jpg",
      address: "Rajpath, India Gate, New Delhi, Delhi 110001, India",
    },
    geometry: {
      type: "Point",
      coordinates: [77.2295, 28.6129],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Gateway of India",
      description:
        "The Gateway of India is an arch-monument built in the early twentieth century in the city of Mumbai.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/The_Gateway_of_India_%28Mumbai%2C_India%29.jpg/1200px-The_Gateway_of_India_%28Mumbai%2C_India%29.jpg",
      address: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001, India",
    },
    geometry: {
      type: "Point",
      coordinates: [72.8347, 18.922],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Charminar",
      description:
        "The Charminar is a monument and mosque located in Hyderabad, Telangana, India. The landmark has become known globally as a symbol of Hyderabad.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Hyderabad_Charminar_04-2016_img3.jpg/1200px-Hyderabad_Charminar_04-2016_img3.jpg",
      address: "Charminar, Hyderabad, Telangana 500002, India",
    },
    geometry: {
      type: "Point",
      coordinates: [78.4747, 17.3616],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Mysore Palace",
      description:
        "Mysore Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence at Mysore in the southern Karnataka state of India.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Mysore_Palace_illuminated.jpg/1200px-Mysore_Palace_illuminated.jpg",
      address: "Sayyaji Rao Road, Mysuru, Karnataka 570001, India",
    },
    geometry: {
      type: "Point",
      coordinates: [76.6552, 12.3052],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Red Fort",
      description:
        "The Red Fort is a historic fort in the city of Delhi in India that served as the main residence of the Mughal Emperors.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Red_Fort_%28Lal_Quila%29.JPG/1200px-Red_Fort_%28Lal_Quila%29.JPG",
      address:
        "Netaji Subhash Marg, Chandni Chowk, New Delhi, Delhi 110006, India",
    },
    geometry: {
      type: "Point",
      coordinates: [77.241, 28.6562],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Qutub Minar",
      description:
        "The Qutub Minar is a minaret that forms part of the Qutb complex, a UNESCO World Heritage Site in the Mehrauli area of New Delhi, India.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Qutb_Minar%2C_Delhi_%28IMG_9192-01%29.jpg/1200px-Qutb_Minar%2C_Delhi_%28IMG_9192-01%29.jpg",
      address: "Mehrauli, New Delhi, Delhi 110030, India",
    },
    geometry: {
      type: "Point",
      coordinates: [77.1855, 28.5244],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Hawa Mahal",
      description:
        "The Hawa Mahal is a palace in the city of Jaipur, India. It is constructed of red and pink sandstone.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Hawa_Mahal_2011.jpg/1200px-Hawa_Mahal_2011.jpg",
      address: "Hawa Mahal Rd, Pink City, Jaipur, Rajasthan 302002, India",
    },
    geometry: {
      type: "Point",
      coordinates: [75.8267, 26.9239],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Golden Temple",
      description:
        "The Golden Temple, also known as Harmandir Sahib, is a gurdwara located in the city of Amritsar, Punjab, India.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Golden_Temple%2C_Amritsar%2C_India.jpg/1200px-Golden_Temple%2C_Amritsar%2C_India.jpg",
      address: "Golden Temple Rd, Amritsar, Punjab 143006, India",
    },
    geometry: {
      type: "Point",
      coordinates: [74.8765, 31.62],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Meenakshi Temple",
      description:
        "Meenakshi Temple is a historic Hindu temple located on the southern bank of the Vaigai River in the temple city of Madurai, Tamil Nadu, India.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Meenakshi_Amman_temple_gopuram.jpg/1200px-Meenakshi_Amman_temple_gopuram.jpg",
      address: "Madurai Main, Madurai, Tamil Nadu 625001, India",
    },
    geometry: {
      type: "Point",
      coordinates: [78.1198, 9.9195],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Victoria Memorial",
      description:
        "The Victoria Memorial is a large marble building in Kolkata, West Bengal, India, which was built between 1906 and 1921. It is dedicated to the memory of Queen Victoria.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Victoria_Memorial_Kolkata.jpg/1200px-Victoria_Memorial_Kolkata.jpg",
      address: "1, Queens Way, Kolkata, West Bengal 700071, India",
    },
    geometry: {
      type: "Point",
      coordinates: [88.3426, 22.5448],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Humayun's Tomb",
      description:
        "Humayun's tomb is the tomb of the Mughal Emperor Humayun in Delhi, India. The tomb was commissioned by Humayun's first wife and chief consort, Empress Bega Begum.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Humayun%27s_Tomb_10.jpg/1200px-Humayun%27s_Tomb_10.jpg",
      address: "Nizamuddin East, New Delhi, Delhi 110013, India",
    },
    geometry: {
      type: "Point",
      coordinates: [77.2507, 28.5933],
    },
  },
  {
    type: "Feature",
    properties: {
      name: "Lotus Temple",
      description:
        "The Lotus Temple, located in Delhi, India, is a Baháʼí House of Worship that was dedicated in December 1986. Notable for its flowerlike shape, it has become a prominent attraction in the city.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Lotus_Temple.jpg/1200px-Lotus_Temple.jpg",
      address: "Bahapur, Lotus Temple Road, New Delhi, Delhi 110044, India",
    },
    geometry: {
      type: "Point",
      coordinates: [77.2585, 28.5535],
    },
  },
];
