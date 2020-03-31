import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box
} from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import { Button } from '@project-nx/shared/ui';
import useLogin from '../hooks/useLogin';

const LoginForm = () => {
  const { register: loginForm, handleSubmit, errors } = useForm();
  const login = useLogin();
  const onSubmit = data => {
    login(data.code);
  };

  return (
    <Box maxWidth={500} p={4} margin="100px auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.code}>
          <FormLabel htmlFor="code">Your code</FormLabel>
          <Input
            placeholder="Your code"
            name="code"
            id="code"
            autoComplete="off"
            ref={loginForm({ required: true })}
          />
          {errors.code && (
            <FormErrorMessage>This field is required</FormErrorMessage>
          )}
        </FormControl>
        <Button type="submit" mt={4}>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
