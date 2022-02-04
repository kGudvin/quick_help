import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Col, Form, FormGroup, Label, Row } from 'reactstrap';
import style from './style.module.css';
import { signInUser } from '../../redux/actions/userAC';
import Input from '../Input/Input'
import CustomButton from '../UI/Buttons/MainButton'


const Signinform = () => {
    const [inputs, setInputs] = useState({email:'', password:''});

    const dispatch = useDispatch();

    const inputsHandler = (e) => {
        setInputs( prev => ({...prev, [e.target.name]: e.target.value}))
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(signInUser(inputs))
    };

    return (
        <Row>
            <Col xs={{size:4, offset:4}} className={style.wrapper}>
                <Row>
                    <Col style={{textAlign:'center', fontSize:'2em', marginTop:'20px'}}>
                        <span>Sign In</span>
                    </Col>
                </Row>
                <Form onSubmit={submitHandler}>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input
                            id='email'
                            type='text'
                            name='email'
                            value={inputs.name}
                            onChange={inputsHandler}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>password</Label>
                        <Input
                            id='password'
                            type='password'
                            name='password'
                            value={inputs.password}
                            onChange={inputsHandler}
                        />
                    </FormGroup>
                    <CustomButton >
                        Submit
                    </CustomButton>
                </Form>
                <Row>
                    <Col style={{textAlign:'center',  marginTop:'20px'}}>
                        <span>Авторизуйтесь или <Link to='/signup'>зарегистрируйтесь</Link></span>
                    </Col>
                </Row>
                
            </Col>
        </Row>
    );
}

export default Signinform;
