import { useEffect, useRef, useState } from "react";
import Loading from "./Loading";
import { useUserStore } from "../store/useUserStore";

interface LoginProps {
  loginModal: boolean;
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
  buttonRef: React.RefObject<SVGSVGElement | null>;
}

const Login = ({ loginModal, setLoginModal, buttonRef }: LoginProps) => {
  const [islogin, setIslogin] = useState(true);
  const modalRef = useRef<HTMLFormElement>(null);
  const login = useUserStore((state) => state.login);
  const user = useUserStore((state) => state.user);

  console.log(user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setLoginModal(false);
    setIslogin(true);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node) &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        closeModal();
      }
    };

    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [buttonRef, setLoginModal]);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = islogin ? "login" : "register";
    const body = islogin ? { email, password } : { email, password, name };
    if (!email || !password) {
      return alert("Missing fields");
    }
    if (!islogin && (!name || !confirmPassword)) {
      return alert("Missing fields");
    }
    if (!islogin && password !== confirmPassword) {
      return alert("password is not matching");
    }
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:3000/auth/${url}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errorData = await res.json();
        return alert(errorData.message);
      }
      const data = await res.json();

      login({
        name: data.user.name,
        email: data.user.email,
        token: data.token,
      });

      closeModal();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={submitForm}
      ref={modalRef}
      style={{ display: loginModal ? "flex" : "none" }}
      className="absolute right-0 top-17 z-10 bg-white p-4 rounded-[10px]  flex-col items-center w-80 [&>input]:outline-none
  [&>input]:border [&>input]:border-zinc-300 [&>input]:rounded-lg [&>input]:mt-3 [&>input]:p-2 [&>input]:w-full shadow-lg"
    >
      <h1 className="text-[20px] select-none ">
        {islogin ? "Login" : "Register"}
      </h1>
      {!islogin && (
        <input
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <input
        value={email}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={password}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {!islogin && (
        <input
          value={confirmPassword}
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      )}
      <button
        className="border p-2 w-full mt-3 bg-amber-950/80 text-white cursor-pointer
       hover:bg-amber-800/70 transition-all duration-200 rounded-lg flex justify-center items-center"
      >
        {loading ? <Loading /> : "Confirm"}
      </button>
      <div className="text-[15px] mt-5">
        {islogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span
          className="text-amber-700 cursor-pointer hover:text-amber-600"
          onClick={() => setIslogin((prev) => !prev)}
        >
          {islogin ? "Register" : "Login"}
        </span>
      </div>
    </form>
  );
};

export default Login;
