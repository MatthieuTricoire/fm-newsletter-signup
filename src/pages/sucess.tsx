import { Container } from "../ui/components/container/container";
import { Link, useLocation } from "react-router-dom";

import iconSuccess from "../assets/images/icon-success.svg";
import Button from "../ui/components/container/button";

export const Success = () => {
  const location = useLocation();
  const { email } = location.state;
  return (
    <main className="flex h-screen items-center">
      <Container className="flex h-screen w-full flex-col justify-between space-y-7 px-8 pb-16 pt-32 text-primary-500 sm:h-fit sm:max-w-md sm:rounded-3xl sm:p-12">
        <div className="space-y-7">
          <img src={iconSuccess} width={64} height={64} alt="" />
          <h1 className="text-5xl font-bold">Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span>. Please open it and click
            the button inside to confirm your subscription.
          </p>
        </div>
        <Button type="button" baseUrl="/">
          Dismiss message
        </Button>
      </Container>
    </main>
  );
};
