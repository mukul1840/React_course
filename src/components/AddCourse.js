// import axios from "axios";
// import React, { useEffect, useState} from "react";
// import { Button, Container, Form, FormGroup } from "reactstrap";
// import baseUrl from "../api/bootApi";
// import { toast } from "react-toastify";
// const AddCourse = () => {

//        useEffect(()=>{
//            document.title="Add-Courses"
//          },[]);

//       const [course,setCourse]=useState({});

//       const handleForm = (e)=>{
//          postDataToServer(course);
//         e.preventDefault();
//       }

//    const postDataToServer=(data)=>{
//     axios.post(`${baseUrl}/add`,data).then(
// (response)=>{
// toast.success("Course Added",{
//   position:"bottom-left"
// });
// setCourse({})
// },
// (error)=>{
// toast.error("Something went wrong")
// }


//     )
//    }

//   return (
//     <div className="text-center p-3">
//       <h1 className="my-3">Fill Course Details</h1>
//       <Form className="w-100" style={{ maxWidth: "500px", margin: "0 auto" }} onSubmit={handleForm}>
//         <FormGroup>
//           <label htmlFor="userId">Course Id</label>
//           <input
//             type="text"
//             placeholder="Enter here"
//             name="userId"
//             id="userId"
//             className="form-control"
//             onChange={(e)=>{
//               setCourse({...course,id:e.target.value});
//             }}
//           />
//         </FormGroup>
//         <FormGroup>
//           <label htmlFor="title">Course title</label>
//           <input
//             type="text"
//             placeholder="Enter Title"
//             id="title"
//             className="form-control"
//             onChange={(e)=>{
//               setCourse({...course,title:e.target.value});
//             }}
//           />
//         </FormGroup>
//         <FormGroup>
//           <label htmlFor="description">Description</label>
//           <textarea
//             placeholder="Enter Description"
//             id="description"
//             className="form-control"
//             style={{ height: "100px" }}
//             onChange={(e)=>{
//               setCourse({...course,description:e.target.value});
//             }}
//           />
//         </FormGroup>
//         <Container className="text-center">
//           <Button color="success" type="submit">Add course</Button>
//           <Button color="warning" className="ms-3"
//           type="reset" onClick={
//             ()=>{
//               setCourse({})
//             }
//           }>
//             Clear
//           </Button>
//         </Container>
//       </Form>
//     </div>
//   );
// };

// export default AddCourse;
import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Progress, Modal, ModalHeader, ModalBody } from "reactstrap";
import axios from "axios";
import baseUrl from "../api/bootApi";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add-Courses";
  }, []);

  const [course, setCourse] = useState({});
  const [progress, setProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleForm = (e) => {
    e.preventDefault();
    postDataToServer(course);
  };

  const postDataToServer = (data) => {
    setIsSubmitting(true);
    setModalOpen(true);

    // Simulate slow progress for testing
    let simulatedProgress = 0;

    const simulateProgress = setInterval(() => {
      simulatedProgress += 10; // Increase progress by 10% every 500ms
      setProgress(simulatedProgress);

      if (simulatedProgress >= 100) {
        clearInterval(simulateProgress); // Stop simulation when progress reaches 100%
        setTimeout(() => {
          setProgress(0);
          setIsSubmitting(false);
          setModalOpen(false);
          setCourse({});
        }, 500);
      }
    }, 500);

    // Real API call
    axios
      .post(`${baseUrl}/add`, data)
      .then(
        (response) => {
          console.log("Response:", response);
        },
        (error) => {
          clearInterval(simulateProgress); // Stop simulation on error
          setIsSubmitting(false);
          setModalOpen(false);
        }
      );
  };

  // Function to determine the message based on progress
  const getProgressMessage = (progress) => {
    if (progress === 0) return "Initializing... Please wait.";
    if (progress === 25) return "25% progress - Course is being added!";
    if (progress === 50) return "50% progress - Almost there!";
    if (progress === 75) return "75% progress - Finalizing course addition!";
    if (progress === 100) return "100% progress - Course added successfully!";
    return `${progress}% progress...`;
  };

  return (
    <div className="text-center p-3">
      <h1 className="my-3">Fill Course Details</h1>

      <Form
        className="w-100"
        style={{ maxWidth: "500px", margin: "0 auto" }}
        onSubmit={handleForm}
      >
        <FormGroup>
          <label htmlFor="userId">Course Id</label>
          <input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            className="form-control"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="title">Course title</label>
          <input
            type="text"
            placeholder="Enter Title"
            id="title"
            className="form-control"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Description</label>
          <textarea
            placeholder="Enter Description"
            id="description"
            className="form-control"
            style={{ height: "100px" }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button color="success" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add Course"}
          </Button>
          <Button
            color="warning"
            className="ms-3"
            type="reset"
            onClick={() => {
              setCourse({});
            }}
          >
            Clear
          </Button>
        </Container>
      </Form>

      {/* Progress Modal */}
      <Modal isOpen={modalOpen} toggle={toggleModal} centered>
        <ModalHeader toggle={toggleModal}>Adding Course</ModalHeader>
        <ModalBody>
          <div className="text-center">
            <Progress value={progress}>{progress}%</Progress>
            <p className="mt-2">{getProgressMessage(progress)}</p>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddCourse;
