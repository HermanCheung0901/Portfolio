import "../../../public/styles/book-note/global.css";
import { Poppins } from "next/font/google";
import { Container } from "react-bootstrap";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Book Note",
};

export default function RootLayout({
  children,
}) {
  return <div className={poppins.className}>
      <Container fluid="md" className="main">
          {children}
        </Container>
    </div>;
}
