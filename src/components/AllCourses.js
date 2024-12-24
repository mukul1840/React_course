import React, { useState,useEffect } from "react";
import Course from "./Course";
import axios from "axios";
import baseUrl from "../api/bootApi";
import { toast } from "react-toastify";

const AllCourse=()=>{

    useEffect(()=>{
        document.title="All-Courses";
        getAllCoursesFromServer();
      },[]);

    const [courses,setCourse] =useState([]);
    
    const getAllCoursesFromServer = () => {
        axios.get(`${baseUrl}/getAll`).then(
          (response) => {
            if (courses.length === 0) {  // Ensure it's the first load
              toast.success("Courses have been loaded successfully", {
                position: "bottom-center",
              });
            }
            setCourse(response.data);
          },
          (error) => {
            toast.error("Something went wrong", {
              position: "bottom-center",
            });
          }
        );
      };
      
    return(
           <div className="text-center">
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>
            {
                courses.length>0
                 ? courses.map((item)=> <Course key={item.id} course={item}/>)
                 :"No Courses"
            }
           </div>

    );
}

export default AllCourse;