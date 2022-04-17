import {Form, Button} from 'react-bootstrap'

import { useState } from 'react'
import { API } from '../api/api'
import { useMutation } from 'react-query'


export default function Add(){

    let api = API()
    const [form, setForm] = useState({
        title: "",
        image: ""
      });
    
      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
        })
      }
    
      const handleSubmit = useMutation(async (e) => {
        try {
          e.preventDefault();
    
          const formData = new FormData()
          formData.set("title", form.title)
          formData.set("image", form?.image[0], form?.image[0]?.name)

    
          // Configuration Content-type
          const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: formData,
          };
    
          // Insert data user to database
          const response = await api.post("/add-template", config);
    
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      })
    return (
        <>
            <Form onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Group className="mb-3">
                <Form.Label>title</Form.Label>
                <Form.Control onChange={handleChange} name="title" type="text" placeholder="title" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control onChange={handleChange} name="image" type="file" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </>
    )
}