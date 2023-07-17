import { useState, useRef } from 'react'
import { Container, Row, Col} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formInitialDetails = {
        name: "",
        email: "",
        phone: "",
        message:""
    }
    const form = useRef();
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const[buttonText, setButtonText] = useState('send');
    const[status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        emailjs.sendForm('service_3bdt8o6', 'template_q8hltp6', form.current, 'DGXrPD21NCl-QMFuI')
        .then((result) => {
            console.log(result.text);
            setButtonText("Send");
            setFormDetails(formInitialDetails);
            setStatus({ success: true, message: 'Message sent sccessfully' });
        }, (error) => {
            console.log(error.text);
            setStatus({ success: false, message: 'Something went wrong, please try again later.' })
            setFormDetails(formInitialDetails);
        });

        // setButtonText('Sending...');
        // let response = await fetch("http://localhost:5000/contact", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "Application/json;charset=utf-8",
        //     },
        //     body: JSON.stringify(formDetails),
        // });
        // setButtonText("Send");
        // let result = response.json();
        // setFormDetails(formInitialDetails);
        // if (result.code === 200) {
        //     setStatus({ success: true, message: 'Message sent sccessfully' });
        // } else {
        //     setStatus({ success: false, message: 'Something went wrong, please try again later.' })
        // }
    };

  return (
    <section className='contact' id='connect'>
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt="Contact Us" />
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form ref={form} onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type='text' name='to_name' value={formDetails.name} placeholder='FullName' onChange={(e) => onFormUpdate('name', e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type='email' name='from_email' value={formDetails.email} placeholder='Email Address' onChange={(e) => onFormUpdate('email', e.target.value)} />
                            </Col>
                            {/* <Col sm={6} className="px-1">
                                <input type='tell' value={formDetails.phone} placeholder='Phone No' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                            </Col> */}
                            <Col>
                                <textarea row="6" name='message' value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                <button type='submit'><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message && 
                                <div>
                                    <p className={status.success === false ? "danger" : "success"} id='message'>{status.message}</p>
                                </div>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact