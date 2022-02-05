import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { getRoles } from '../../redux/actions/rolesAC';
import { getUser } from '../../redux/actions/userAC';
import CustomInput from '../UI/Input/Input'
import CustomButton from '../UI/Buttons/ButtonCircle'
import { useNavigate } from "react-router-dom"


const Signupform = () => {
    const [inputs, setInputs] = useState({name:'', email:'', password:'', role_id:1});

    const dispatch = useDispatch();
    const roles = useSelector( state => state.roles);
    const user = useSelector(state=> state.users)
    const navigate = useNavigate()

    const inputHandler = (e) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    };

    useEffect(() => {
        dispatch(getRoles())
        // navigate("/")
    }, []);
console.log(inputs);
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(inputs);
        dispatch(getUser(inputs))
        setInputs({name:'', email:'', password:'', role_id:1})
    }
    // console.log(CustomInput);
    return (
        <Row>
            <Col xs={{size:4, offset:4}}>
                <Row>
                    <Col style={{textAlign:'center', fontSize:'2em', marginTop:'20px'}}>
                        <span> Sign Up</span>
                    </Col>
                </Row>
                <Form onSubmit={submitHandler}>
                    <FormGroup>
                        <Label for='name'>Name</Label><br/>
                        <CustomInput
                            id='name'
                            type='text'
                            name='name'
                            onChange={inputHandler}
                            value={inputs.name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='email'>Email</Label><br/>
                        <CustomInput
                            id='email'
                            type='text'
                            name='email'
                            onChange={inputHandler}
                            value={inputs.email}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>password</Label><br/>
                        <CustomInput
                            id='password'
                            type='password'
                            name='password'
                            onChange={inputHandler}
                            value={inputs.password}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='roles'>choose role</Label><br/>
                        <Input
                            id='roles'
                            type='select'
                            name='role_id'
                            onChange={inputHandler}
                            value={inputs.role}
                        >
                            {roles.map(el => 
                            <option key={el.id} value={el.id}>{el.role}</option>
                            )}
                            
                        </Input>
                        {/* <input type={'select'}/> */}
                    </FormGroup><br/>
                    <CustomButton >
                        Зарегестрироваться 
                    </CustomButton>
                </Form>
            </Col>
        </Row>
    );
}

export default Signupform;
