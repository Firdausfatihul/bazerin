import { useRouter } from "next/router";
import { deflate } from "zlib";

export default function Dashboard() {
    const router = useRouter();

    return(
        <div>
            <div>
                <h1>
                    Dashboard
                </h1>
                <p>
                    Hello, Welcome to Dashboard
                </p>
                <button 
                    onClick={() => router.push("/login")}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}