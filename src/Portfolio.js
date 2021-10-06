import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

const Portfolio = ({id,title,paragraph}) => {
  return (
    <>   
        <Card className='acc-item'>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey={id}>
              {title}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse className='acc-item-description'eventKey={id}>
            <Card.Body>{paragraph}</Card.Body>
          </Accordion.Collapse>
        </Card>    
    </>
  )
}

export default Portfolio
