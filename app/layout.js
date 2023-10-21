import "./globals.css";

import BackTop from "@/components/BackTop";
// import UserProvider from "./context/user";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartProvider from "./context/cart";
import SupabaseProvider from "../app/providers/SupabaseProvider";
import UserProvider from "../app/providers/UserProvider";
import ModalProvider from "../app/providers/ModalProvider";
export const metadata = {
  title: "Foodie Restaurant",
  description: "Best food in town!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="top">
        <div>
          <ToastContainer />
          {/* <UserProvider> */}
          <SupabaseProvider>
            <UserProvider>
              <ModalProvider />
              <CartProvider>{children}</CartProvider>
            </UserProvider>
          </SupabaseProvider>
          {/* </UserProvider> */}

          <BackTop />
        </div>
      </body>
    </html>
  );
}
