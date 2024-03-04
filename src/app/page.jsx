import Link from "next/link";
import Header from "./Header";
import ProjectArea from "./ProjectArea";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import connect from "./_lib/bookNoteDB";

export default function Home() {
  return (
    <div>
      <Header />
      <ProjectArea />
      <Footer />
    </div>
  );
}
