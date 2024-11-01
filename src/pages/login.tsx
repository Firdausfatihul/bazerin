import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/dashboard");
        if (username && password){
            console.log("Login successful");
            
        }
    };

    return(
        <div>
            <div>
                <h1>Login</h1>
                <form 
                    onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button 
                        type="submit"
                    >
                        Login   
                    </button>
                </form>
            </div>
        </div>
    );
    
}