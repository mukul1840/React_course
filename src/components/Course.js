import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";
import baseUrl from "../api/bootApi";

const Course = ({ course }) => {
  
  const deleteCourse = (id) => {
    id=103;
    if (!id) {
      toast.error("Cannot delete course: ID is undefined", {
        position: "bottom-center"
      });
      return;
    }
    
    axios.delete(`${baseUrl}/delete/${id}`).then(
      (response) => {
        toast.success("Course has been deleted successfully", {
          position: "bottom-center"
        });
      },
      (error) => {
        toast.error("Something went wrong while deleting the course", {
          position: "bottom-center"
        });
      }
    );
  };

  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="fw-bold">{course?.title || "No Title Available"}</CardSubtitle>
        <CardText>{course?.description || "No Description Available"}</CardText>
        <Container className="text-center">
          <Button
            color="danger"
            key={course?.id} 
            onClick={() => {
              deleteCourse(course?.id); 
            }}
          >
            Delete
          </Button>
          <Button color="warning" className="ms-3">
            Update
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
