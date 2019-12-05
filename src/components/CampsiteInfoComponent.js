//Nucampsite - Tania

import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { comment } from 'postcss-selector-parser';

class CampsiteInfo extends Component {
    renderCampsite(campsite) {
        return (
            <div className='col-md-5 m-1'>
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        if(comments) {
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>,
                    {comments.map(comments => {
                        return (
                            <div key={comment.id}>
                                <p>{comments.text}</p>
                                <p>{comments.name}</p>
                                <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                            </div>
                        );
                    })}
                </div>
            )
        };
        return <div />
    }

    render() {
        if (this.props.campsite) {
            return ( 
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            );
        }
        return <div />;
    }
}

export default CampsiteInfo;