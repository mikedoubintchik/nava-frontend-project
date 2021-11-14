import householdMembers from "mock-data/householdMembers";
import { createContext, Dispatch, Reducer, useContext } from "react";

export const ACTION = {
  RESET: "RESET",
  UPDATE_ADD_HOUSEHOLD_MEMBER_FORM: "UPDATE_ADD_HOUSEHOLD_MEMBER_FORM",
  ADD_HOUSEHOLD_MEMBER: "ADD_HOUSEHOLD_MEMBER",
} as const;

export type HouseholdMemberType = {
  name: string;
  description: string;
  fruit: string;
};

type Error = {
  code: number | null;
  message: string | null;
} | null;

export type InitialStateType = {
  householdMembers: HouseholdMemberType[] | [];
  error: Error | null;
};

export const initialState: InitialStateType = {
  householdMembers: householdMembers,
  error: null,
};

export interface IReducer {
  type: string;
  householdMember: HouseholdMemberType;
  error?: Error;
}

export const reducer: Reducer<InitialStateType, IReducer> = (
  state,
  action
): InitialStateType => {
  const { type, householdMember } = action;

  switch (type) {
    case ACTION.RESET:
      return initialState;

    case ACTION.ADD_HOUSEHOLD_MEMBER:
      if (!householdMember) return state;

      return {
        ...state,
        householdMembers: [...state.householdMembers, householdMember],
      };

    default: {
      return state;
    }
  }
};

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const useStore = (): {
  state: InitialStateType;
  dispatch: Dispatch<any>;
} => useContext(AppContext);
