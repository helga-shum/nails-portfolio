import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { fetchClient } from '../../redux/slices/clientSlice';
import { useAppDispatch } from '../../redux/store';
import styles from './Contact.module.scss';
const Contact: React.FC = () => {
  const dispatch = useAppDispatch();
  const onSubmit = async (values: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => {
    await dispatch(fetchClient(values));
  };
  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: 'Helga Neimer',
      email: 'helga.neimer@gmail.com',
      phone: '+48787499194',
      message: 'Can I come at 14 pm',
    },
    mode: 'onChange',
  });
  return (
    <div className={styles.root}>
      <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
      <section className={styles.contact} id="contact">
        <div className={styles.text}>
          <h2>Contact Me</h2>
          <h4>Let's Work Together</h4>
          <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry</p>
          <div className={styles.list}>
            <li>
              <a href="#">Ukraine, Dnipro region, Vasylkivka</a>
            </li>
            <li>
              <a href="#">maria.saltykova@gmail.com</a>
            </li>
            <li>
              <a href="#">+380688780194</a>
            </li>
          </div>
          <div className={styles.icons}>
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-tiktok"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#">
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a href="#">
              <i className="bx bxl-telegram"></i>
            </a>
          </div>
        </div>

        <div className={styles.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              error={Boolean(errors.name?.message)}
              helperText={errors.name?.message}
              {...register('name', { required: 'Write your fullname' })}
              className={styles.field}
              label="Full name"
              fullWidth
            />
            <TextField
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
              {...register('email', { required: 'Write your email' })}
              className={styles.field}
              label="email"
              fullWidth
            />
            <TextField
              error={Boolean(errors.phone?.message)}
              helperText={errors.phone?.message}
              {...register('phone', { required: 'Write your phone' })}
              className={styles.field}
              label="phone"
              fullWidth
            />
            <TextField
              error={Boolean(errors.message?.message)}
              helperText={errors.message?.message}
              {...register('message', { required: 'Write your message' })}
              className={styles.field}
              label="message"
              fullWidth
            />
            <Button
              disabled={!isValid}
              className={styles.send}
              type="submit"
              size="large"
              variant="contained"
              fullWidth>
              submit
            </Button>
          </form>
        </div>
      </section>

      {/* <!---custom js link---> */}
      <script type="text/javascript" src="./script.js"></script>
    </div>
  );
};

export default Contact;
