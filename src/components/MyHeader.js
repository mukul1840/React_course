import React from "react";
import { Card, CardBody } from "reactstrap";


function MyHeader(){
    return (
        <div>
           <Card className="my-2 bg-primary">
            <CardBody>
            <h1 className="text-center my-3">Welcome to my Courses Application</h1>
            </CardBody>
           </Card>
        </div>
    );
}

export default MyHeader;
