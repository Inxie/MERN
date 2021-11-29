import React, { useReducer } from 'react';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input
                        name="firstName"
                        value={state.firstName}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Last Name:</span>{' '}
                    <input
                        name="lastName"
                        value={state.lastName}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Password:</span>{' '}
                    <input
                        name="password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Confirm Password:</span>{' '}
                    <input
                        name="confirmPassword"
                        value={state.confirmPassword}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    );
}

export default UseReducer