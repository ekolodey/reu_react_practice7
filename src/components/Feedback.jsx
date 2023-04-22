import { Alert, Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

function ValidationError(props){
    if (props.error === undefined)
        return;

    let message;

    switch (props.error.type) {
        case "required":
            message = "Обязательно для заполнения";
            break;

        case "maxLength":
            message = "Превышена максимально допустимая длинна"
            break;

        case "pattern":
            message = "Не соответствует шаблону"
            break;

        default:
            message = "Заполненно некорректно"
            break;
    }

    return <Alert variant="danger">{message}</Alert>
}

export default function Feedback(){
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container className="py-3">
            <Form validated={isValid} className="row" onSubmit={handleSubmit(onSubmit)}>
                <Form.Control 
                    className="mb-3" 
                    placeholder="Фамилия" 
                    {...register(
                        'lastName',
                        {
                            required: true,
                            maxLength: 80,
                            pattern: /^[А-я][а-я]+$/,
                        }
                    )}
                />
                <ValidationError error={errors.lastName}/>
                <Form.Control 
                    className="mb-3" 
                    placeholder="Имя" 
                    {...register('firstName',
                        {
                            required: true,
                            maxLength: 80,
                            pattern: /^[А-я][а-я]+$/,
                        }
                    )}
                />
                <ValidationError error={errors.firstName}/>
                <Form.Control 
                    className="mb-3" 
                    placeholder="Отчество" 
                    {...register(
                        'middleName',
                        {
                            required: true,
                            maxLength: 80,
                            pattern: /^[А-я][а-я]+$/,
                        }
                    )}
                />
                <ValidationError error={errors.middleName}/>
                <Form.Control 
                    className="mb-3" 
                    placeholder="Email" 
                    {...register(
                        'email',
                        {
                            required: true,
                            maxLength: 200,
                            pattern: /^.+@.+\..+$/,
                        }
                    )}
                />
                <ValidationError error={errors.email}/>
                <Button type="submit" className="btn w-auto" variant="outline-primary">Отправить</Button>
            </Form>
        </Container>
    )
}