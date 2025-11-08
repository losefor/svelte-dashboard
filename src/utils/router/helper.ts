import { navigationStore } from "../../store/navigation";

export const navigate = (page: string) => {
  navigationStore.set({ page });
};
