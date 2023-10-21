"use client";

import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useCart } from "../../context/cart";
import { useRouter } from "next/navigation";
import useAuthModal from "../../hooks/useAuthModal";
import { useUser } from "../../hooks/useUser";
import ClientOnly from "@/components/ClientOnly";
import Image from "next/image";

export default function TopMenu() {
  const authModal = useAuthModal();
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();
  const cart = useCart();
  const [isMenu, setIsMenu] = useState(false);
  // console.log(`I am the user${user?.email}`);
  useEffect(() => {
    cart.cartCount();
  }, [cart]);

  const isLoggedIn = () => {
    if (user && user?.email) {
      return (
        <button
          onClick={() => (!isMenu ? setIsMenu(true) : setIsMenu(false))}
          className="flex items-center gap-2 hover:underline cursor-pointer"
        >
          <div>Hi, {user?.email}</div>
          <BsChevronDown />
        </button>
      );
    }

    return (
      <Link
        onClick={authModal.onOpen}
        href="#"
        className="flex items-center gap-2 hover:underline cursor-pointer"
      >
        <div>Login</div>
        <BsChevronDown />
      </Link>
    );
  };
  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    setIsMenu(false);
    router.push("/");

    if (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div id="TopMenu" className="border-b  h-[40px] flex items-center">
        <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
          <ul
            id="TopMenuLeft"
            className="flex items-center text-[11px] text-[#333333] px-2 h-8"
          >
            <li className="relative px-3">
              {isLoggedIn()}
              {isMenu && (
                <div
                  id="AuthDropdown"
                  className={`
                                    absolute bg-white w-[150px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg
                                   
                                `}
                >
                  <div>
                    <div className="flex items-center justify-start gap-1 p-3">
                      <div className="font-bold text-[13px]">
                        {user?.name}
                        {/* My Name */}
                      </div>
                    </div>
                  </div>

                  {/* <div className="border-b" /> */}

                  <ul className="bg-white">
                    <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                      <Link href="/orders">My orders</Link>
                    </li>
                    <li
                      onClick={handleLogout}
                      className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer"
                    >
                      Sign out
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="px-3 hover:underline cursor-pointer">Daily Deals</li>
            <li className="px-3 hover:underline cursor-pointer">
              Help & Contact
            </li>
          </ul>

          <ul
            id="TopMenuRight"
            className="flex items-center text-[11px] text-[#333333] px-2 h-8"
          >
            {/* <li
              // onClick={() => router.push("/address")}
              className="flex items-center gap-2 px-3 hover:underline cursor-pointer"
            >
              <img width={32} src="/images/uk.png" />
              Ship to
            </li> */}
            <ClientOnly>
              <li className="px-3 hover:underline cursor-pointer">
                <div onClick={() => router.push("/cart")} className="relative">
                  <AiOutlineShoppingCart size={22} />
                  {cart.cartCount() > 0 ? (
                    <div className="absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white">
                      <div className=" flex items-center justify-center -mt-[1px]">
                        {cart.cartCount()}
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </li>
            </ClientOnly>
          </ul>
        </div>
      </div>
    </>
  );
}
