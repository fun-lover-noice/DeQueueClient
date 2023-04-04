import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Book } from "./components/book/book";
import { Home } from "./components/home/home";
import { Ticket } from "./components/ticket";
import { Scan } from "./components/scan/scan";
import { NavigationBar } from "./components/UI/navigationBar";
import { NoMatch } from "./components/noMatch";
import { LocateMe } from "./components/locateMe";

function App() {
  return (
    <>
      <NavigationBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locate-me" element={<LocateMe />} />
          <Route path=":siteId/book" element={<Book />} />
          <Route path="scan" element={<Scan />} />
          <Route path="ticket/:ticketId" element={<Ticket />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
