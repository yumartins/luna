import { createAuthClient } from "better-auth/react";

export const auth = createAuthClient({
	baseURL: `${process.env.EXPO_PUBLIC_API_URL}/auth`,
});
