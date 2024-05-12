import Link from "next/link";
import { TbLogout } from "react-icons/tb"
import { useRouter } from "next/navigation";
import { COOKIE_NAME } from "@/app/constants";
import axios from "axios";

const NavBar = () => {
    const router = useRouter()
    
    const logout = async()=>{
        try {
            
            await axios.get("/api/auth/logout", {});
            localStorage.removeItem('user');
            router.push('/login');
        } catch (error) {
            
            console.error("Logout failed:", error);
            
        }
    }
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-10 w-15" src="logo.png" alt="Logo" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-grow">
                        <div className="flex items-center space-x-4">
                            <Link href="/dashboard">
                                <>
                                <a className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                    Home
                                </a>
                                </>
                            </Link>
                            <Link href="/favourite">
                                <>
                                <a className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                    Favourites
                                </a>
                                </>
                            </Link>
                        </div>
                    </div>
                    {/* Logout icon on the right */}
                    <div className="hidden md:block">
                        <div className="h-10 w-15 ml-4 flex items-center md:ml-6">
                        <TbLogout style={{ width: '30px', height: '30px',marginTop:'10px' }} onClick={logout}/>
                            {/* <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium">
                                Logout
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
