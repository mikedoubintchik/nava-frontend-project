import { render, RenderOptions } from "@testing-library/react";
import React, { FC, ReactElement } from "react";
import { AppContext } from "store";

const customRender = (
  ui: ReactElement,
  mockData?: any,
  options?: Omit<RenderOptions, "wrapper">
) => {
  const Wrapper: FC = ({ children }) => {
    return (
      <AppContext.Provider value={{ state: mockData, dispatch: jest.fn() }}>
        {children}
      </AppContext.Provider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
