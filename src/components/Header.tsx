import React, { FC, ReactElement } from "react";
import Container from "react-bootstrap/Container";

interface IHeader {
  title: string;
}
const Header: FC<IHeader> = ({ title }): ReactElement => (
  <header className="bg-primary p-4">
    <Container>
      <h1 className="text-white">{title}</h1>
    </Container>
  </header>
);

export default Header;
