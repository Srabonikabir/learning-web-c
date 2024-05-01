import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useLoaderData } from 'react-router-dom';


const Subject = () => {
    const news = useLoaderData();
    const {title, details, image_url, category_id }= news;

    return (
        <Card className='m-8'>
        <Card.Img variant="top" src={image_url}/>
        <Card.Body className='m-8'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {details}
          </Card.Text>

          <Link to= {`/catagory/${category_id}`}>
          <Button variant="primary">All news in this Category</Button>
          </Link>
         
        </Card.Body>
      </Card>
    );
};

export default Subject;