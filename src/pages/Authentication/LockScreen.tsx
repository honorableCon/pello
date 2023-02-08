import React from "react";
import { Row, Col, Form, Button } from "reactstrap";

// router
import { Link } from "react-router-dom";

// validations
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

// hooks
// import { useProfile } from "../../hooks";

// components
import NonAuthLayoutWrapper from "../../components/NonAutnLayoutWrapper";
import AuthHeader from "../../components/AuthHeader";
import FormInput from "../../components/FormInput";

// images
import avatar1 from "../../assets/images/users/avatar-1.jpg";

interface LockScreenProps {}
const LockScreen = (props: LockScreenProps) => {
  const resolver = yupResolver(
    yup.object().shape({
      password: yup.string().required("Please Enter Password."),
    })
  );

  const defaultValues: any = {};

  const methods = useForm({ defaultValues, resolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  const onSubmitForm = (values: object) => {
    console.log(values);
  };

  // const { userProfile, loading } = useProfile();

  return (
    <NonAuthLayoutWrapper>
      <Row className=" justify-content-center my-auto">
        <Col sm={8} lg={6} xl={5} className="col-xxl-4">
          <div className="py-md-5 py-4">
            <AuthHeader
              title="Lock screen"
              subtitle="Enter your password to unlock the screen!"
            />
            <div className="user-thumb text-center mb-4">
              <img
                src={avatar1}
                className="rounded-circle img-thumbnail avatar-lg"
                alt="thumbnail"
              />
              <h5 className="font-size-15 mt-3">Kathryn Swarey</h5>
            </div>

            <Form
              onSubmit={handleSubmit(onSubmitForm)}
              className="position-relative"
            >
              <div className="mb-3">
                <FormInput
                  label="Password"
                  type="password"
                  name="password"
                  register={register}
                  errors={errors}
                  control={control}
                  labelClassName="form-label"
                  placeholder="Enter Password"
                  className="form-control"
                  withoutLabel={true}
                  hidePasswordButton={true}
                />
              </div>
              <div className="text-center mt-4">
                <Button color="primary" className="w-100" type="submit">
                  Unlock
                </Button>
              </div>
            </Form>
            <div className="mt-5 text-center text-muted">
              <p>
                Not you ? return{" "}
                <Link
                  to="/auth-login"
                  className="fw-medium text-decoration-underline"
                >
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </NonAuthLayoutWrapper>
  );
};

export default LockScreen;
