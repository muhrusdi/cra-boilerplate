import React from "react";
import { render, fireEvent, waitForElement } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Button from "../index"

test("Login", () => {
  const { getByText } = render(<Button/>)
  fireEvent.click(getByText("login"))

  // console.log(getByText("login"))

  expect(getByText("login")).toHaveAttribute("type", "submit")
})