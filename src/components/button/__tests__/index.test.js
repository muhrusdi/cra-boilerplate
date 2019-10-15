import React from "react";
import { render, fireEvent, waitForElement } from '@testing-library/react';
import Button from "../index"

test("Login harus terklik", () => {
  const { getByText, getByRole } = render(<Button/>)
  fireEvent.click(getByText("login"))

  // console.log(getByText("login"))

  expect(getByRole("button")).toHaveTextContent("clickedd")
})