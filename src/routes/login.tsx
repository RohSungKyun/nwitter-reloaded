
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Error, Input, Switcher, Title, Wrapper, Form } from "../components/auth-components";




export default function Login(){
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {target: {name, value}} = e;
        if (name === "email") {
            setEmail(value)
        } else if(name === "password"){
            setPassword(value)
        }
    }
    const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 새로고침되지 않게 해줌
        setError("");
        if (isLoading || email === "" || password === "") return;
        try{
          setLoading(true);
          await signInWithEmailAndPassword(auth, email, password);
          navigate("/"); // next page
        }catch(e) {
          if(e instanceof FirebaseError){
            setError(e.message);
          }
        } finally {
            setLoading(false)
        }
        
        console.log(name, email, password);
    }
    return <Wrapper>
        <Title>Log into ✖️</Title>
        <Form onSubmit={onSubmit}>
            <Input onChange={onChange} name="email" value= {email} placeholder="email" type="email" required/>
            <Input onChange={onChange} name="password" value= {password} placeholder="Password" type="password" required/>
            <Input type="submit" value={isLoading ? "Loading..." : "Log in"}/>
        </Form>
        {error !== "" ? <Error>{error}</Error> : null}
        <Switcher>계정이 없으신가요? <Link to="/create-account">create one &rarr;</Link></Switcher>
    </Wrapper>
}