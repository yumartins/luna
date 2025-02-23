import { createAuthClient } from "better-auth/react";

export const auth = createAuthClient({
	baseURL: `${import.meta.env.VITE_API_URL}`,
});
