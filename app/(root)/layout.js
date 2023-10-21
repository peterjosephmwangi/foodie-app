import MainLayout from "../layouts/MainLayout";

export const metadata = {
  title: "Foodie App",
  description: "Generated by peterjosep",
};

export default function RootLayout({ children }) {
  return (
    <MainLayout>
      <div>{children}</div>
    </MainLayout>
  );
}
