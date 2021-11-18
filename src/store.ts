import axios from "axios";
import { householdMembersAdd, BASE_URL } from "constants/constants";
import householdMembers from "mock-data/householdMembers";
import { createContext, Dispatch, Reducer, useContext } from "react";

export const ACTION = {
  RESET: "RESET",
  UPDATE_ADD_HOUSEHOLD_MEMBER_FORM: "UPDATE_ADD_HOUSEHOLD_MEMBER_FORM",
  ADD_INITIAL_HOUSEHOLD_MEMBERS: "ADD_INITIAL_HOUSEHOLD_MEMBERS",
  ADD_HOUSEHOLD_MEMBER: "ADD_HOUSEHOLD_MEMBER",
} as const;

export type HouseholdMemberType = {
  firstName: string;
  lastName: string;
  description: string;
  favoriteFruit: string;
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
  householdMembers: [],
  error: null,
};

export interface IReducer {
  type: string;
  householdMember: HouseholdMemberType;
  householdMembers: HouseholdMemberType[];
  error?: Error;
}

export const reducer: Reducer<InitialStateType, IReducer> = (
  state,
  action
): InitialStateType => {
  const { type, householdMember, householdMembers } = action;

  switch (type) {
    case ACTION.RESET:
      return initialState;

    case ACTION.ADD_INITIAL_HOUSEHOLD_MEMBERS:
      return {
        ...state,
        householdMembers: householdMembers,
      };

    case ACTION.ADD_HOUSEHOLD_MEMBER:
      if (!householdMember) return state;

      // todo - abstract this and solve CORS issue
      const addUser = async () =>
        await axios.post(BASE_URL + householdMembersAdd, {
          data: householdMember,
        });

      addUser();

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
