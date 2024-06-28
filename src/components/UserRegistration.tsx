// src/components/Registration.tsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField } from '@mui/material';

const UserRegistration: React.FC = () => {
  const formik = useFormik({
    initialValues: { name: '', email: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required')
    }),
    onSubmit: (values) => {
      // Handle registration
    }
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Register
      </Button>
    </Box>
  );
};


export default UserRegistration;