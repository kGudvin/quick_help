import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import CustomInput from '../UI/Input/Input';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { getAllCategories } from '../../redux/actions/allCategoriesAC';
import { updateUser } from '../../redux/actions/userAC';

export default function Verification() {

  const dispatch = useDispatch();
  const categories = useSelector( state => state.allCategories);
  const [inputs, setInputs] = useState({name:'', secondname:'', patronymic:'', age:18, about:'', categories:1});
  
  
  const inputHandler = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
};

  useEffect(() => {
    dispatch(getAllCategories())
}, []);

console.log(inputs);

const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs);
    dispatch(updateUser(inputs))
    setInputs({name:'', secondname:'', patronymic:'', age:18, about:'', categories:1})
}
  return(
    <Row>
            <Col xs={{size:4, offset:4}}>
                <Row>
                    <Col style={{textAlign:'center', fontSize:'2em', marginTop:'20px'}}>
                        <span> Sign Up</span>
                    </Col>
                </Row>
                <Form onSubmit={submitHandler}>
                    <FormGroup>
                        <Label for='name'>Имя</Label>
                        <Input
                            id='name'
                            type='text'
                            name='name'
                            onChange={inputHandler}
                            value={inputs.name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='name'>Фамилия</Label>
                        <Input
                            id='secondname'
                            type='text'
                            name='secondname'
                            onChange={inputHandler}
                            value={inputs.secondname}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='name'>Отчество</Label>
                        <Input
                            id='patronymic'
                            type='text'
                            name='patronymic'
                            onChange={inputHandler}
                            value={inputs.patronymic}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='name'>Возраст</Label>
                        <Input
                            placeholder="Введите число полных лет"
                            id='age'
                            type='number'
                            name='age'
                            onChange={inputHandler}
                            value={inputs.age}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='name'>О себе</Label>
                        <Input
                        placeholder='Расскажите побольше о себе'
                            id='about'
                            type='textarea'
                            name='about'
                            onChange={inputHandler}
                            value={inputs.about}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='roles'>Выберите интересующие Вас категории работ</Label>
                        <Input
                            id='categories'
                            type='select'
                            name='categories'
                            onChange={inputHandler}
                            value={inputs.categories}

                            multiple
                        >
                            {categories.map(el => 
                            <option key={el.id} value={el.id}>{el.title}</option>
                            )}
                            
                        </Input>
                    </FormGroup>
                    <Button >
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
  ) 
}
