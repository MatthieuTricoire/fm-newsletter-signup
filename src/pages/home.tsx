import { useNavigate } from "react-router-dom";
import { Container } from "../ui/components/container/container";
import { useState } from "react";
import imageFullScreen from "../assets/images/illustration-sign-up-desktop.svg";
import imageSmallScreen from "../assets/images/illustration-sign-up-mobile.svg";
import iconList from "../assets/images/icon-list.svg";
import Button from "../ui/components/container/button";

export const Home = () => {
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();

  interface ItemProps {
    text: string;
  }
  const Item = ({ text }: ItemProps) => {
    return (
      <li className="flex items-start gap-4">
        <img src={iconList} />
        {text}
      </li>
    );
  };

  const checkEmail = (email: string) => {
    const regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

    if (!email) {
      setError("Merci de renseigner un email");
      return false;
    }

    if (!regexEmail.test(email)) {
      setError("Le format de l'email n'est pas valide");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setError("");
    e.preventDefault();
    if (checkEmail(email)) navigate("/success", { state: { email } });
  };

  return (
    <main className="h-screen sm:flex sm:items-center sm:justify-center">
      <Container className="flex h-screen flex-col sm:h-fit sm:w-full sm:max-w-4xl sm:flex-row sm:rounded-3xl">
        <div className="order-2 flex flex-1 flex-col justify-center space-y-7 px-8 text-primary-500 sm:order-1">
          <h2 className="text-4xl font-bold sm:text-6xl">Stay updated !</h2>

          <p className="max-w-sm">
            Join 60,000+ product managers receiving monthly updates on :
          </p>

          <ul className="space-y-1">
            <Item
              text="Product discovery and building
              what matters"
            />
            <Item text="Measuring to ensure updates are a success" />
            <Item text="And much more!" />
          </ul>

          <form className="space-y-7" onSubmit={handleSubmit}>
            <div className="w-full max-w-sm space-y-2">
              <div className="flex items-start justify-between text-xs font-bold text-primary-500">
                <label
                  htmlFor="email"
                  className="text-xs font-bold text-primary-500"
                >
                  Email address
                </label>

                <span className="text-secondary-500">{error}</span>
              </div>

              <input
                type="text"
                id="email"
                name="email"
                placeholder="email@company.com"
                className=" w-full rounded-md border border-grey px-7 py-4 outline-none hover:cursor-pointer hover:border-primary-500 focus:border-primary-500"
                onChange={(e) => {
                  setError("");
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>

            <Button type="submit">Subscribe to monthly newsletter</Button>
          </form>
        </div>
        <div className="w-full sm:order-2 sm:w-fit">
          <img src={imageSmallScreen} alt="" className="w-full sm:hidden " />
          <img src={imageFullScreen} alt="" className="hidden  sm:block" />
        </div>
      </Container>
    </main>
  );
};
