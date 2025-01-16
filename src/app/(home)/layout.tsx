import { Header } from "@/features/home/components/header";

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="mx-auto h-[1000px] max-w-[1330px] px-4 pt-20">
        {children}
      </main>
    </>
  );
}
