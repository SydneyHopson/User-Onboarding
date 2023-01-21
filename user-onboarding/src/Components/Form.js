import React from 'react';

const Form =(props) => {
    // console.log(props.values.password)
    const { change, submit, errors } = props;
    const { username, email, password, tos } = props.values;

   const onChange = (e) => {
        const { name, value, checked, type} = e.target;
        const newVal = type === 'checkbox' ? checked : value;
         change(name, newVal);
    }

   const onSubmit = (e) => {
      e.preventDefult(); 
      submit(); 
    }


    return (
        <div>
        <h1>This is the Form</h1>
        <p>{errors.username}</p>
        <p>{errors.password}</p>
        <p>{errors.email}</p>
        <p>{errors.tos}</p>

            <Form onSubmit={onSubmit}>
                <label>Name:
                    <input
                    type="text"
                    name="name"
                    value={username}
                    onChange={onChange}
                    />

                </label>
                <label>Email:
                    <input
                       type="email"
                       name="email"
                       value={email}
                       onChange={onChange}
                       />


                </label>
                <label>Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        />

                </label>
                <label>Terms of Service
                    <input
                        type="checkbox"
                        name="tos"
                        checked={tos}
                        onChange={onChange}
                        />

                </label>
                <input type="submit" value="Create a Friend" />
            </Form>


        </div>
    )
}

export default Form; 